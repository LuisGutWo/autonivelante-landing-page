import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import MainCard from "@/app/MainCard";
import { getData } from "@/src/lib/getData";

export default async function Home() {
  const products = (await getData(process.env.NEXT_STRAPI_URL)) ?? [];
  console.log(products);

  if (!products || !products.data) {
    return (
      <div>
        <h1>No se encontró el proyecto</h1>
      </div>
    );
  }

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
                  {products.data.map((product, i) => (
                    <MainCard key={i} product={product} />
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
