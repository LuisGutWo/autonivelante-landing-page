import { Container } from "react-bootstrap";
import MainHomeCard from "@/app/homeproducts/MainHomeCard";
import { waitSeconds } from "@/src/utils/helpers";

export default async function ProductsCard() {
  const apiUrl = process.env.NEXT_STRAPI_HOME_URL;
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
    <section
      id="products"
      className="products__card-section p_relative pt-3 centred sec-pad"
    >
      <Container fluid>
        <div className="products__card-container productcard__text">
          <div
            className="product__card-title wow fadeIn animated"
            data-wow-delay="01ms"
            data-wow-duration="1000ms"
          >
            <h2 className="productcard__title blue text-dark text-center fw-bold">
              Nuestros Productos
            </h2>
            <div className="productcard__bar"></div>
          </div>

          <div className="products__card-box d-flex flex-row flex-wrap justify-content-center gap-4  align-items-center">
            {products.map((item, i) => (
              <MainHomeCard key={i} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
