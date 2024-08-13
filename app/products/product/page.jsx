import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { getSingleProduct } from "@/src/utils/helpers";
import MainCardDetail from "@/app/products/product/MainCardDetail";
import CarouselComponent from "@/src/components/sections/CarouselComponent";

export default async function SingleProduct({ searchParams }) {
  const idString = searchParams?.id;
  if (!idString) {
    return <div>No se encontró el producto</div>;
  }

  const id = Number(idString);

  try {
    const product = await getSingleProduct(id);
    if (!product) {
      throw new Error("No se encontró el producto");
    }

    return (
      <Layout headerStyle={4} footerStyle={1}>
        <Container className="mt_150 mb_200">
          <Breadcrumb
            items={[
              { name: "Productos", href: "/products" },
              { name: `${product?.attributes?.title}`, href: `products/${id}` },
            ]}
          />
          <MainCardDetail product={product} />
        </Container>
        <CarouselComponent />
      </Layout>
    );
  } catch (error) {
    const product = await getSingleProduct(id).catch((error) => {
      console.error(error);
      return <div>No se encontró el producto</div>;
    });

    if (!product) {
      return <div>No se encontró el producto</div>;
    }
  }
}
