import React, { Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { notFound } from "next/navigation";
import Preloader from "@/src/components/elements/Preloader";
import { fetchHomeProduct } from "@/src/lib/api";

// Usa React.lazy para cargar los componentes de forma diferida
const MainCardDetail = lazy(() =>
  import("@/src/components/elements/cards/MainCardDetail")
);

export default async function SingleHomeProduct({ params }) {
  try {
    const response = await fetchHomeProduct(params.id);
    const product = response?.data?.[params.id - 1];

    if (!product || !product?.attributes) {
      return <div>Product not found</div>;
    }

    return (
      <Layout headerStyle={4} footerStyle={1}>
        <Container className="mt_150 mb_200">
          <Breadcrumb
            items={[
              { name: "Productos", href: "/#products" },
              {
                name: product.attributes.title,
                href: "/#products",
              },
            ]}
          />
          <Suspense fallback={<Preloader />}>
            <MainCardDetail
              product={product}
              key={product.id}
            />
          </Suspense>
        </Container>
      </Layout>
    );
  } catch (error) {
    console.error("SingleHomeProduct:", error);
    notFound();
  }
}
