'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Image, Modal } from 'react-bootstrap'

export default function ProductsCard() {
    const [showContactSend, setShowContactSend] = useState(false);

    const handleCloseContactSend = () => setShowContactSend(false);
    const handleShowContactSend = () => setShowContactSend(true);

    return (
        <>
            <section id="products" className="products__card-section p_relative pt-5 centred sec-pad">
                <Container fluid>
                    <div className="products__card-container productcard__text">
                        <div class="product__card-title wow fadeIn animated" data-wow-delay="01ms" data-wow-duration="1000ms">
                            <h1 className="productcard__title blue text-dark text-center fw-bold">Nuestros Productos</h1>
                            <div className="productcard__bar"></div>
                        </div>
                        <div className="products__card-box d-flex flex-row flex-wrap justify-content-center gap-4  align-items-center">
                            <div class="products__card-maincontent wow fadeInLeft animated" data-wow-delay="01ms" data-wow-duration="1000ms">
                                <div
                                    className="card main__card text-center"
                                    style={{
                                        width: "21rem",
                                        backgroundImage: "url(assets/images/shop/card-backgroun-shape.png)",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "top",
                                        backgroundSize: "22rem"
                                    }}>

                                    <Image src="assets/images/shop/producto-rhenatec.png" className="card-img-top" style={{ width: "13.5rem", marginTop: "40px", marginBottom: "20px" }} alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title fw-bold pb-3">Montero
                                            <br />
                                            Autonivelante</h4>
                                        <div className="card-price fw-bold">$ 16.500</div>
                                        <div class="buttons__card d-flex flex-column gap-4 mb-4">
                                            <Link href="/product-details" className="btn btn-outline-primary">Ver detalle</Link>
                                            <Link href="/contact-page" onClick={handleShowContactSend} className="btn btn-primary">Agregar al carro</Link>
                                            <Modal show={showContactSend} onHide={handleCloseContactSend}>
                                                <Modal.Header closeButton>
                                                    <Modal.Body>
                                                        Hola... Escríbenos por WhatsApp o envíanos un correo que te estaremos respondiendo en la brevedad posible... Gracias 😉
                                                    </Modal.Body>
                                                </Modal.Header>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products__card-maincontent wow fadeInRight animated" data-wow-delay="01ms" data-wow-duration="1000ms">
                                <div
                                    className="card main__card text-center"
                                    style={{
                                        width: "21rem",
                                        backgroundImage: "url(assets/images/shop/card-backgroun-shape.png)",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "top",
                                        backgroundSize: "22rem"
                                    }}>

                                    <Image src="assets/images/shop/producto-mapei.png" className="card-img-top" style={{ width: "13.5rem", marginTop: "40px", marginBottom: "20px" }} alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title fw-bold pb-3">Montero
                                            <br />
                                            Autonivelante</h4>
                                        <div className="card-price fw-bold">$ 22.500</div>
                                        <div class="buttons__card d-flex flex-column gap-4 mb-4">
                                            <Link href="/product-details-2" className="btn btn-outline-primary">Ver detalle</Link>
                                            <Link href="/#contact" className="btn btn-primary">Agregar al carro</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

