import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { getSingleHomeProduct } from "@/src/utils/helpers";
import MainCardDetail from "@/app/products/product/MainCardDetail";

export default async function SingleProduct({ searchParams }) {
  const idString = searchParams?.id;
  if (!idString) {
    return <div>No se encontró el producto</div>;
  }

  const id = parseInt(idString, 10);
  const product = await getSingleHomeProduct(id).catch((error) => {
    console.error(error);
    return null;
  });

  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  const { attributes } = product;
  const { title } = attributes ?? {};

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150 mb_200">
        <Breadcrumb
          items={[
            { name: "Productos", href: "/#products" },
            { name: title, href: `products/${id}` },
          ]}
        />
        <MainCardDetail product={product} />
      </Container>
    </Layout>
  );
}
