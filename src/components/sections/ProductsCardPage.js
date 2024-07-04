"use client";
import { Container } from "react-bootstrap";
import { productsListPage } from "@/src/config/productsListPage";
import MainCard from "@/src/components/elements/MainCard";

export default function ProductsCardPage() {
  return (
    <section
      id="products"
      className="products__card-section p_relative pt-3 centred sec-pad"
    >
      <Container fluid>
        <div className="products__card-container productcard__text">
          <div className="products__card-box d-flex flex-row flex-wrap justify-content-center gap-4  align-items-center">
            {productsListPage.map((item, i) => (
              <MainCard key={i} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
