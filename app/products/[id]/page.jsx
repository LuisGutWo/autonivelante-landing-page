import React, { Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { fetchProducts } from "@/src/lib/api";
import Preloader from "@/src/components/elements/Preloader";

// Usa React.lazy para cargar los componentes de forma diferida
const MainCardDetail = lazy(() =>
  import("@/src/components/elements/cards/MainCardDetail")
);
const CarouselComponent = lazy(() =>
  import("@/src/components/elements/CarouselComponent")
);

export default async function SingleProduct({ params }) {
  try {
    const response = await fetchProducts(params.id);
    const product = response?.data?.[params.id - 1];

    if (!product || !product?.attributes) {
      return <div>Product not found</div>;
    }

    return (
      <Layout headerStyle={4} footerStyle={1}>
        <Container className="mt_150 mb_200">
          <Breadcrumb
            items={[
              { name: "Productos", href: "/products" },
              {
                name: product?.attributes?.title,
                href: `/products/${product?.id}`,
              },
            ]}
          />
          <Suspense fallback={<Preloader />}>
            <MainCardDetail
              product={product}
              key={`main-card-${product?.id}`}
            />
            <CarouselComponent
              product={product}
              key={`carousel-${product?.id}`}
            />
          </Suspense>
        </Container>
      </Layout>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Error fetching product</div>;
  }
}
