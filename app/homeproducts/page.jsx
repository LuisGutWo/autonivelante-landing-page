import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import MainHomeCard from "@/src/components/elements/cards/MainHomeCard";

async function getHomeProducts() {
  const response = await fetch(process.env.NEXT_STRAPI_HOME_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch home products");
  }

  return response.json();
}

export default async function HomeProducts() {
  const homeProducts = await getHomeProducts();
  const products = homeProducts.data;  

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150">
        <Breadcrumb items={[{ name: "Productos", href: "products" }]} />
        <div className="d-flex justify-content-center align-items-center">
          <section
            id="products"
            className="products__card-section p_relative pt-3 centred"
          >
            <div className="products__card-container productcard__text">
              <div className="products__card-box d-flex flex-row flex-wrap justify-content-center gap-4 align-items-center">
                {products.map((product) => (
                  <MainHomeCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  );
}
