import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import MainCard from "@/src/components/elements/cards/MainCard";

async function getProductsData() {
  const response = await fetch(process.env.NEXT_STRAPI_URL);

  if (!response.ok) {
    throw new Error("Fallo en la carga de datos");
  }

  return response.json();
}

export default async function Home() {
  const products = await getProductsData();

  if (!products) {
    return null;
  }

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150">
        <Breadcrumb items={[{ name: "Productos", href: "/products" }]} />
        <div className="d-flex justify-content-center align-items-center">
          <section
            id="products"
            className="products__card-section p_relative pt-3 centred sec-pad"
          >
            <Container fluid>
              <div className="products__card-container productcard__text">
                <div className="d-flex flex-row flex-wrap justify-content-center gap-4 align-items-center">
                  {products.data.map((product, index) => (
                    <MainCard key={index} product={product} />
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
