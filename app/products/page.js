import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import { waitSeconds } from "@/src/utils/helpers";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import ProductsCardPage from "@/src/components/sections/ProductsCardPage";

export default async function MainProductsPage() {
  await waitSeconds();

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150">
        <Breadcrumb items={[{ name: "Productos", href: "products" }]} />
        <div className="d-flex justify-content-center align-items-center flex-row flex-wrap gap-3">
          <ProductsCardPage />
        </div>
      </Container>
    </Layout>
  );
}
