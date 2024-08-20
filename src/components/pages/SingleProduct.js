import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import { getSingleProduct } from "@/src/utils/helpers";
import MainCardDetail from "@/src/components/pages/MainCardDetail";
import CarouselComponent from "@/src/components/pages/CarouselComponent";
import NotFoundPage from "@/app/NotFoundPage";

const NotFoundProduct = () => <NotFoundPage />;

export default function SingleProduct({ product }) {
  if (!product) return <NotFoundProduct />;

  const { attributes } = product;
  const { title } = attributes ?? {};

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150 mb_200">
        <Breadcrumb
          items={[
            { name: "Productos", href: "/products" },
            { name: title, href: `products/${id}` },
          ]}
        />
        <MainCardDetail product={product} />
        <CarouselComponent />
      </Container>
    </Layout>
  );
}
export const getServerSideProps = async ({ searchParams }) => {
  const { id: idString } = searchParams;
  const id = parseInt(idString, 10);

  if (Number.isNaN(id) || typeof idString !== "string") {
    return { notFound: true };
  }

  try {
    const product = await getSingleProduct(id);
    return { props: { product } };
  } catch {
    return { notFound: true };
  }
};
