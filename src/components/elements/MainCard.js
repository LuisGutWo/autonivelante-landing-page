"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Image, Modal } from "react-bootstrap";

export default function ProductsCard({ item }) {
  const [showContactSend, setShowContactSend] = useState(false);

  return (
    <section
      className="products__card-maincontent wow fadeIn animated"
      data-wow-delay="05ms"
      data-wow-duration="1000ms"
    >
      <div className="card main__card">
        <div className="main__card-img-container">
          <Image src={item.image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h4 className="card-title fw-bold">{item.name}</h4>
          <div className="card-price fw-bold">{item.price}</div>
        </div>
        <div className="buttons__card">
          <Link href={item.url} className="btn btn-outline-primary btn-lg">
            <b>
              Ver detalle
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-copy ms-4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                />
              </svg>
            </b>
          </Link>

          <Link
            href="/contact-page"
            onClick={() => setShowContactSend(true)}
            className="btn btn-primary btn-lg"
          >
            Agregar al carro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              className="bi bi-bag-heart ms-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
              />
            </svg>
          </Link>
        </div>
      </div>
      <Modal show={showContactSend} onHide={() => setShowContactSend(false)}>
        <Modal.Header closeButton>
          <Modal.Body>
            Hola... Escríbenos por WhatsApp o envíanos un correo que te
            estaremos respondiendo en la brevedad posible... Gracias 😉
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </section>
  );
}