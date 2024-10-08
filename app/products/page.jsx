import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import MainCard from "@/src/components/elements/cards/MainCard";
import { fetchProducts } from "@/src/lib/api";

export default async function Home() {
  const mainProducts = await fetchProducts();
  const products = mainProducts.data;  

  if (!products) {
    return null;
  }

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150 px-4">
        <Breadcrumb items={[{ name: "Productos", href: "/products" }]} />
        <div className="d-flex justify-content-center align-items-center">
          <section
            id="products"
            className="products__card-section p_relative pt-3 centred sec-pad"
          >
            <Container fluid>
              <div className="products__card-container productcard__text">
                <div className="outer-container d-flex flex-row flex-wrap justify-content-center gap-4 align-items-center">
                  {products.map((product, index) => (
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
