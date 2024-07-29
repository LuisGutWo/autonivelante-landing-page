import { Container } from "react-bootstrap";
import MainHomeCard from "@/app/homeproducts/MainHomeCard";
import { getData } from "@/src/lib/getData";

export default async function ProductsCard() {
  const products = (await getData(process.env.NEXT_STRAPI_HOME_URL)) ?? [];

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
            {products.data.map((product, i) => (
              <MainHomeCard key={i} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
