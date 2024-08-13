import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { getSingleProduct } from "@/src/utils/helpers";
import MainCardDetail from "@/app/products/product/MainCardDetail";
import CarouselComponent from "@/src/components/sections/CarouselComponent";

const NotFoundProduct = () => <div>No se encontró el producto</div>;

export default async function SingleProduct({ searchParams }) {
  const idString = searchParams?.id;
  if (!idString) return <NotFoundProduct />;

  const id = Number(idString);

  const product = await getSingleProduct(id).catch(() => null);

  if (!product) return <NotFoundProduct />;

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
        <CarouselComponent />
      </Container>
    </Layout>
  );
}
