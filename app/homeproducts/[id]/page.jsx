"use client";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { getSingleHomeProduct } from "@/src/utils/helpers";
import MainCardDetail from "@/src/components/pages/MainCardDetail";
import NotFoundPage from "@/app/NotFoundPage";
import Preloader from "@/src/components/elements/Preloader";

const NotFoundProduct = () => <NotFoundPage />;

export default function SingleHomeProduct({ searchParams }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const productId = searchParams?.id ? parseInt(searchParams.id, 10) : null;

  if (productId === null || isNaN(productId) || productId < 0) {
    return <NotFoundProduct />;
  }

  const fetchProduct = async () => {
    try {
      const data = await getSingleHomeProduct(productId);
      if (data === null) {
        throw new Error("Product not found");
      }
      setProduct(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const productAttributes = product?.attributes;
  const title = productAttributes === null ? "" : productAttributes?.title;

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150 mb_200">
        <Breadcrumb
          items={[
            { name: "Productos", href: "/#products" },
            { name: title, href: `/homeproducts/${productId}` },
          ]}
        />
        {product === null ? (
          <p>
            Cargando...
            <Preloader />
          </p>
        ) : (
          <MainCardDetail product={product} />
        )}
      </Container>
    </Layout>
  );
}
