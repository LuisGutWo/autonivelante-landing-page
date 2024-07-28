"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { formatPrice } from "./formatPrice";
import { Files } from "lucide-react";
import { ShoppingBag } from "lucide-react";

export default function ProductsCard({ item }) {
  const [showProductSend, setShowProductSend] = useState(false);

  const handleCloseProductSend = () => setShowProductSend(false);
  const handleShowProductSend = () => setShowProductSend(true);

  return (
    <section
      className="products__card-maincontent wow fadeIn animated"
      data-wow-delay="05ms"
      data-wow-duration="1000ms"
    >
      {item.id && (
        <div className="card main__card">
          <Link
            href={{
              pathname: "/products/product",
              query: { id: item?.id },
            }}
            key={item.id}
            className="main__card-img-container"
          >
            {item.attributes.image && (
              <Image
                style={{ width: "100%", height: "100%" }}
                src={item.attributes.image}
                className="card-img-top"
                alt="..."
              />
            )}
          </Link>
          <div className="card-body">
            {item.attributes?.title && (
              <h3 className="card-title fw_bold pb-3">
                {item.attributes.title}
              </h3>
            )}
            <div className="card-price fw-bold">
              {item.attributes.price ? formatPrice(item.attributes.price) : "-"}
            </div>
          </div>
          <div className="buttons__card">
            {item.id && (
              <Link
                href={{
                  pathname: "/products/product",
                  query: { id: item?.id },
                }}
                key={item.id}
                className="btn btn-outline-primary btn-lg d-flex justify-content-evenly align-content-center gap-4 ps-4"
              >
                <b className="fs-5">Ver detalle</b>
                <Files />
              </Link>
            )}

            <Link
              href="/cart"
              className="btn btn-primary btn-lg w-100 d-flex justify-content-evenly align-content-center"
            >
              <b>Agregar al carro</b>
              <ShoppingBag />
            </Link>
            <Modal show={showProductSend} onHide={handleCloseProductSend}>
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
                {item.id && (
                  <Link
                    href="/contact-page"
                    variant="primary"
                    onClick={handleCloseProductSend}
                    className="btn btn-primary"
                  >
                    Contáctanos
                  </Link>
                )}
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      )}
    </section>
  );
}
