"use client";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { getSingleProduct } from "@/src/utils/helpers";
import MainCardDetail from "@/src/components/pages/MainCardDetail";
import CarouselComponent from "@/src/components/pages/CarouselComponent";
import NotFoundPage from "@/app/NotFoundPage";
import { useEffect, useState } from "react";
import Preloader from "@/src/components/elements/Preloader";

const NotFoundProduct = () => <NotFoundPage />;

export default function SingleProduct({ searchParams }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const productId = searchParams?.id ? parseInt(searchParams.id, 10) : null;

  if (productId === null || isNaN(productId) || productId < 0) {
    return <NotFoundProduct />;
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getSingleProduct(productId);
        if (data === null) {
          throw new Error("Product not found");
        }
        setProduct(data);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };

    fetchProduct();
  }, [productId]);

  const productAttributes = product?.attributes;
  if (!productAttributes) {
    return <NotFoundProduct />;
  }

  const title = productAttributes?.title || "";
  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150 mb_200">
        <Breadcrumb
          items={[
            { name: "Productos", href: "/products" },
            { name: title, href: `/products/${productId}` },
          ]}
        />
        {product === null ? (
          <p>
            Cargando... <Preloader />
          </p>
        ) : (
          <MainCardDetail product={product} />
        )}
        <CarouselComponent />
      </Container>
    </Layout>
  );
}

