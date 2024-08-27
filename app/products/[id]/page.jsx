"use client";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import MainCardDetail from "@/src/components/pages/MainCardDetail";
import CarouselComponent from "@/src/components/pages/CarouselComponent";
import { getSingleProduct } from "@/src/utils/helpers";
import { useEffect, useState } from "react";
import NotFoundPage from "@/app/NotFoundPage";
import Preloader from "@/src/components/elements/Preloader";

const NotFoundProduct = () => <NotFoundPage />;

export default async function SingleProduct({ params }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const productId = params?.id ? parseInt(params.id, 10) : null;

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

    if (productId !== null && !isNaN(productId) && productId >= 0) {
      fetchProduct();
    } else {
      setError(new Error("ID del producto es invalido"));
    }
  }, [productId]);

  if (error) {
    return <NotFoundProduct />;
  }

  if (!product) {
    return (
      <p>
        Cargando... <Preloader />
      </p>
    );
  }

  const productAttributes = product.attributes;
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
        <MainCardDetail product={product} />
        <CarouselComponent />
      </Container>
    </Layout>
  );
}
