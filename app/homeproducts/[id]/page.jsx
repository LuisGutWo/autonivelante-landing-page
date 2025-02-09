import React, { Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { notFound } from "next/navigation";
import Preloader from "@/src/components/elements/Preloader";
import { fetchHomeProducts } from "@/src/lib/api";

// Usa React.lazy para cargar los componentes de forma diferida
const MainCardDetail = lazy(() =>
  import("@/src/components/elements/cards/MainCardDetail")
);

export async function generateStaticParams() {
  try {
    const response = await fetchHomeProducts();
    const products = response?.data || [];
    if (!Array.isArray(products)) {
      console.error(
        "generateStaticParams: response.data is not an array",
        response
      );
      return [];
    }

    return products.map((product, index) => {
      if (!product) {
        console.error(
          "generateStaticParams: product is null or undefined",
          index,
          products
        );
        return { id: "-1" };
      }

      return { id: (index - 1).toString() };
    });
  } catch (error) {
    console.error("generateStaticParams:", error);
    return [];
  }
}

export default async function SingleHomeProduct({ params }) {
  try {
    const response = await fetchHomeProducts(params.id);
    const products = response?.data || [];

    if (!Array.isArray(products)) {
      console.error("SingleHomeProduct: response.data is not an array", response);
      return notFound();
    }

    const productIndex = Number(params.id) - 1;
    const product = products[productIndex];

    if (!product || !product.attributes) {
      console.error("SingleHomeProduct: product or product.attributes is null or undefined", params.id, products);
      return notFound();
    }

    return (
      <Layout headerStyle={4} footerStyle={1}>
        <Container className="mt_150 mb_200">
          <Breadcrumb
            items={[
              { name: "Productos", href: "/#products" },
              { name: product.attributes.title, href: "/#products" },
            ]}
          />
          <Suspense fallback={<Preloader />}>
            <MainCardDetail product={product} key={product.id} />
          </Suspense>
        </Container>
      </Layout>
    );
  } catch (error) {
    console.error("SingleHomeProduct: Error fetching home product", error);
    return notFound();
  }
}
