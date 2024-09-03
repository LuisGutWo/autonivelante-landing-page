import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import MainCardDetail from "@/src/components/pages/MainCardDetail";
import { fetchHomeProduct } from "@/src/lib/api";

export default async function SingleHomeProduct({ params }) {
  const product = await fetchHomeProduct(params.id).then(({ data }) => data[params.id]);

  if (!product || !product.attributes) {
    return <div>Product not found</div>;
  }

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150 mb_200">
        <Breadcrumb
          items={[
            { name: "Productos", href: "/#products" },
            {
              name: product.attributes.title,
              href: "/#products",
            },
          ]}
        />
        <MainCardDetail product={product} />
      </Container>
    </Layout>
  );
}

