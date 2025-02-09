import React, { Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import { notFound } from "next/navigation";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import Preloader from "@/src/components/elements/Preloader";
import { fetchProducts } from "@/src/lib/api";

// Usa React.lazy para cargar los componentes de forma diferida
const MainCardDetail = lazy(() =>
  import("@/src/components/elements/cards/MainCardDetail")
);
const CarouselComponent = lazy(() =>
  import("@/src/components/elements/CarouselComponent")
);

export async function generateStaticParams() {
  try {
    const response = await fetchProducts();
    const products = response?.data || [];
    if (!Array.isArray(products)) {
      console.error(
        "generateStaticParams: response.data is not an array",
        response
      );
      return [];
    }

    return products.map((product, index) => {
      if (!product || !product.id) {
        console.error(
          "generateStaticParams: product or product.id is null or undefined",
          index,
          products
        );
        return { id: "-1" };
      }

      return { id: (index - 1).toString() };
    });
  } catch (error) {
    console.error("generateStaticParams: error fetching products", error);
    return [];
  }
}

export default async function SingleProduct({ params }) {
  try {
    const response = await fetchProducts(params.id);
    const products = response?.data || [];

    if (!Array.isArray(products)) {
      console.error("SingleProduct: response.data is not an array", response);
      return notFound();
    }

    const productIndex = Number(params.id) - 1;
    const product = products[productIndex];

    if (!product || !product?.attributes) {
      console.error(
        "SingleProduct: product or product.attributes is null or undefined",
        response
      );
      return notFound();
    }

    const { id, attributes } = product;

    if (!attributes) {
      console.error(
        "SingleProduct: product.attributes is null or undefined",
        product
      );
      return notFound();
    }

    const { title } = attributes;

    if (!title) {
      console.error(
        "SingleProduct: product.attributes.title is null or undefined",
        product
      );
      return <div>Product not found</div>;
    }

    return (
      <Layout headerStyle={4} footerStyle={1}>
        <Container className="mt_150 mb_200">
          <Breadcrumb
            items={[
              { name: "Productos", href: "/products" },
              { name: title, href: `/products/${id}` },
            ]}
          />
          <Suspense fallback={<Preloader />}>
            <MainCardDetail product={product} key={`main-card-${id}`} />
            <CarouselComponent product={product} key={`carousel-${id}`} />
          </Suspense>
        </Container>
      </Layout>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Error fetching product</div>;
  }
}
