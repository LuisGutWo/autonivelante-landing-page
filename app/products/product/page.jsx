"use client";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { getSingleProduct } from "@/src/utils/helpers";
import MainCardDetail from "@/src/components/pages/MainCardDetail";
import CarouselComponent from "@/src/components/pages/CarouselComponent";
import NotFoundPage from "@/app/NotFoundPage";

const NotFoundProduct = () => <NotFoundPage />;

export default function SingleProduct({ searchParams }) {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const productId = searchParams?.id ? parseInt(searchParams.id, 10) : null;

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const product = await getSingleProduct(productId);
        if (product === null) {
          throw new Error("Product not found");
        }
        setProductData(product);
      } catch (error) {
        setError(error);
      }
    };
    fetchProductData();
  }, [productId]);

  if (productId === null || isNaN(productId)) return <NotFoundProduct />;

  const { title = "" } = productData?.attributes || {};

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150 mb_200">
        <Breadcrumb
          items={[
            { name: "Productos", href: "/products" },
            { name: title, href: `/products/${productId}` },
          ]}
        />
        <MainCardDetail product={productData} />
        <CarouselComponent />
      </Container>
    </Layout>
  );
}
