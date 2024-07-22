"use client";
import { useState } from "react";
import { Button, Container, Image, Modal } from "react-bootstrap";
import Link from "next/link";
import "swiper/css/thumbs";
import "react-multi-carousel/lib/styles.css";
import { formatPrice } from "@/src/utils/formatPrice";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { List } from "react-content-loader";

export default function Home({ product }) {
  const [showProductSend, setShowProductSend] = useState(false);

  const handleCloseProductSend = () => setShowProductSend(false);
  const handleShowProductSend = () => setShowProductSend(true);

  if (!product) {
    return null;
  }

  return (
    <section className="detailproducts__card-box">
      <Container fluid className="detailproducts__card-maincontent">
        <div
          className="card detailmain__img-box text-center"
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/white_circle_bg.png?alt=media&token=6434adda-bb60-43ba-a345-f92d4aac073b)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "29rem",
          }}
        >
          <Image
            src={product?.attributes?.image}
            className="card-img-top"
            alt="..."
            onError={(event) => {
              event.target.src =
                "/assets/images/shop/default-product-image.png";
            }}
          />
        </div>
        <div className="card detailmain__card">
          <div className="detailcard-body">
            <h2 className="fw-bold pb-3">
              {product?.attributes?.title ?? "Product Title"}
            </h2>
            <h5 className="fw-bold mb_25">
              {product?.attributes?.subtitle ?? ""}
            </h5>
            <p className="fs_15">
              {product?.attributes?.desc ?? "Product Description"}
            </p>
            <p className="fs_15 mt-3 mb-3">Caracteristicas :</p>

            <div className="text-dark">
              <BlocksRenderer
                content={product?.attributes?.characteristics}
              />
            </div>

            <div className="detailcard-price fw-bold">
              {product?.attributes?.price
                ? formatPrice(product?.attributes?.price)
                : "Sin precio"}
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
              <Modal show={showProductSend} onHide={handleCloseProductSend}>
                <Modal.Header closeButton>
                  <Modal.Body style={{ fontSize: "1.5rem" }}>
                    Gracias por visitarnos...
                    <br />
                    <br /> escríbenos al WhatsApp
                    <br /> o envíanos un email para estar en contacto.
                    <br />
                    <br /> Gracias{" "}
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
      </Container>
    </section>
  );
}