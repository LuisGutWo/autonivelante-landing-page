"use client";
import { useState } from "react";
import { Button, Container, Image, Modal } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Link from "next/link";
import "swiper/css/thumbs";
import { productsListPage } from "@/src/config/productsListPage";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import MainCard from "@/app/products/MainCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const caracteristicas = [
  { id: 0, name: "Producto sustentable" },
  { id: 1, name: "No requiere dilución con agua" },
  { id: 2, name: "Aumenta la resistencia mecánica y la adherencia" },
  { id: 3, name: "Reduce tiempos de secado" },
  { id: 4, name: "Mejora la impermeabilidad" },
  { id: 5, name: "Alta capacidad selladora" },
  {
    id: 6,
    name: "Mejora la cohesión interna del mortero",
  },
  {
    id: 7,
    name: "Mayor resistencia a la alcalinidad (evita formación de sales) ",
  },
  { id: 8, name: "Aumenta la docilidad de los morteros frescos" },
];

export default function Home() {
  const [showProductSend, setShowProductSend] = useState(false);

  const handleCloseProductSend = () => setShowProductSend(false);
  const handleShowProductSend = () => setShowProductSend(true);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <section className="maincard__section">
        <Container>
          <Breadcrumb
            items={[
              {
                name: "productos",
                href: "products",
              },
              {
                name: "Rhenatec Top RTU",
                href: "product-details-5",
              },
            ]}
          />
          <div className="detailproducts__card-box">
            <div className="detailproducts__card-maincontent">
              <div
                className="card detailmain__img-box text-center"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "url(assets/images/shop/white_circle_bg.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "30rem",
                }}
              >
                <Image
                  src={productsListPage[1].image}
                  className="card-img-top"
                  style={{
                    width: "80%",
                    height: "60%",
                  }}
                  alt="..."
                />
              </div>
              <div className="card detailmain__card">
                <div className="detailcard-body">
                  <h4 className="fw-bold pb-3">{productsListPage[1].name}</h4>
                  <h5 className="fs_11 fw-bold mb-2">
                    {productsListPage[1].subtitle}
                  </h5>
                  <p className="fs_11">{productsListPage[1].desc}</p>
                  <p className="fs_11 mt-3 mb-3">Caracteristicas :</p>
                  <ul>
                    {caracteristicas.map((caracteristica) => (
                      <li key={caracteristica.id} className="text-dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          fill="currentColor"
                          className="bi bi-circle-fill pe-1 me-2"
                          viewBox="0 0 16 16"
                        >
                          <circle cx="8" cy="8" r="8" />
                        </svg>
                        {caracteristica.name}
                      </li>
                    ))}
                  </ul>
                  <div className="detailcard-price fw-bold">
                    {productsListPage[1].price}
                  </div>
                  <div className="buttons__card d-flex flex-column">
                    <Button
                      onClick={handleShowProductSend}
                      className="btn btn-primary btn-lg d-flex justify-content-center gap-3"
                    >
                      Agregar al carro
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-bag-heart"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                        />
                      </svg>
                    </Button>
                    <Modal
                      show={showProductSend}
                      onHide={handleCloseProductSend}
                    >
                      <Modal.Header closeButton>
                        <Modal.Body style={{ fontSize: "1.5rem" }}>
                          Gracias por visitarnos...
                          <br />
                          <br /> escríbenos al WhatsApp
                          <br /> o envíanos un email para estar en contacto.
                          <br />
                          <br /> Gracias 😉
                        </Modal.Body>
                      </Modal.Header>
                      <Modal.Footer>
                        <Link
                          href="/products"
                          variant="primary"
                          onClick={handleCloseProductSend}
                          className="btn btn-secondary"
                        >
                          Volver
                        </Link>
                        <Link
                          href="/contact-page"
                          variant="primary"
                          onClick={handleCloseProductSend}
                          className="btn btn-primary"
                        >
                          Contáctanos
                        </Link>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <section id="carousel" className="carousel__page">
          <div className="grey__square"></div>
          <div className="carousel__main-section">
            <Container className="carousel__container">
              <Carousel
                responsive={responsive}
                additionalTransfrom={0}
                arrows={true}
                autoPlay={true}
                autoPlaySpeed={9000}
                customTransition="all 5s linear"
                centerMode={false}
                containerClass="container-with-dots"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                draggable
                focusOnSelect={true}
                infinite={true}
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover={true}
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={true}
                renderDotsOutside={true}
                className="swiper"
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={true}
                sliderClass=""
                slidesToSlide
                swipeable={true}
              >
                {productsListPage.map((item, i) => (
                  <MainCard key={i} item={item} />
                ))}
              </Carousel>
            </Container>
          </div>
        </section>
      </section>
    </Layout>
  );
}
