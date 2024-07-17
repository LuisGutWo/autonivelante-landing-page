import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import { waitSeconds } from "@/src/utils/helpers";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import MainCard from "@/app/products/MainCard";

export default async function MainProductsPage() {
  const apiUrl = process.env.NEXT_STRAPI_URL;
  await waitSeconds(1000); // wait for 1 second
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data) {
    return (
      <div className="text-center">
        <p>No products found.</p>
      </div>
    );
  }

  const products = data.data;

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150">
        <Breadcrumb items={[{ name: "Productos", href: "products" }]} />
        <div className="d-flex justify-content-center align-items-center">
          <section
            id="products"
            className="products__card-section p_relative pt-3 centred sec-pad"
          >
            <Container fluid>
              <div className="products__card-container productcard__text">
                <div className="products__card-box d-flex flex-row flex-wrap justify-content-center gap-4 align-items-center">
                  {products.map((item, i) => (
                    <MainCard key={i} item={item} />
                  ))}
                </div>
              </div>
            </Container>
          </section>
        </div>
      </Container>
    </Layout>
  );
}
