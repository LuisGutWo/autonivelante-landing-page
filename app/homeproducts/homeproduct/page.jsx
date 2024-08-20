import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { getSingleHomeProduct } from "@/src/utils/helpers";
import MainCardDetail from "@/src/components/pages/MainCardDetail";
import NotFoundPage from "@/app/NotFoundPage";

const NotFoundProduct = () => <NotFoundPage />;

export default async function SingleProduct({ searchParams }) {
  const productId = searchParams?.id ? parseInt(searchParams.id, 10) : null;

  if (!productId) return <NotFoundProduct />;

  const product = await getSingleHomeProduct(productId).catch(() => null);

  if (!product) return <NotFoundProduct />;

  const { title } = product.attributes || {};

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150 mb_200">
        <Breadcrumb
          items={[
            { name: "Productos", href: "/#products" },
            { name: title, href: `products/${productId}` },
          ]}
        />
        <MainCardDetail product={product} />
      </Container>
    </Layout>
  );
}
