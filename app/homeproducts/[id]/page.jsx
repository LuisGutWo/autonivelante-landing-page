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

export default function SingleHomeProduct({ params }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const productId = params?.id ? parseInt(params.id, 10) : null;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getSingleHomeProduct(productId);
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
            { name: "Productos", href: "/#products" },
            { name: title, href: `/homeproducts/${productId}` },
          ]}
        />
        <MainCardDetail product={product} />
      </Container>
    </Layout>
  );
}
