import React, { Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
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
      if (!product) {
        console.error(
          "generateStaticParams: product is null or undefined",
          index,
          products
        );
        return { id: "-1" };
      }

      return { id: index.toString() };
    });
  } catch (error) {
    console.error("generateStaticParams:", error);
    return [];
  }
}

export default async function SingleProduct({ params }) {
  try {
    const response = await fetchProducts(params.id);
    const products = response?.data || [];
    const product = products[params.id - 1];

    if (!Array.isArray(products) || !product || !product?.attributes) {
      console.error(
        "SingleProduct: ",
        !Array.isArray(products)
          ? "response.data is not an array"
          : !product
          ? "product is null or undefined"
          : "product.attributes is null or undefined",
        response
      );
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
