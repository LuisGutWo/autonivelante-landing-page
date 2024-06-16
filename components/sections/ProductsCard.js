'use client'
import Link from "next/link"
import React, { useState } from "react"
import { Container, Image, Modal } from "react-bootstrap"

export default function ProductsCard() {
    const [showContactSend, setShowContactSend] = useState(false);

    const handleCloseContactSend = () => setShowContactSend(false);
    const handleShowContactSend = () => setShowContactSend(true);

    return (
        <>
            <section id="products" className="products__card-section p_relative pt-5 centred sec-pad">
                <Container fluid>
                    <div className="products__card-container productcard__text">
                        <div className="product__card-title wow fadeIn animated" data-wow-delay="01ms" data-wow-duration="1000ms">
                            <h1 className="productcard__title blue text-dark text-center fw-bold">Nuestros Productos</h1>
                            <div className="productcard__bar"></div>
                        </div>
                        <div className="products__card-box d-flex flex-row flex-wrap justify-content-center gap-4  align-items-center">
                            <div className="products__card-maincontent wow fadeInLeft animated" data-wow-delay="01ms" data-wow-duration="1000ms">
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
                                        <div className="buttons__card d-flex flex-column gap-4 mb-4">
                                            <Link href="/product-details" className="btn btn-outline-primary btn-lg"><b>Ver detalle
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-copy ms-3" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                                </svg>
                                            </b>
                                            </Link>
                                            <Link href="/contact-page" onClick={handleShowContactSend} className="btn btn-primary btn-lg">Agregar al carro<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-bag-heart ms-3" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                            </svg></Link>
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
                            <div className="products__card-maincontent wow fadeInUp animated" data-wow-delay="01ms" data-wow-duration="1000ms">
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
                                        <div className="buttons__card d-flex flex-column gap-4 mb-4">
                                            <Link href="/product-details-2" className="btn btn-outline-primary btn-lg"><b>Ver detalle
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-copy ms-3" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                                </svg>
                                            </b></Link>
                                            <Link href="/#contact" className="btn btn-primary btn-lg">Agregar al carro<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-bag-heart ms-3" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                            </svg></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products__card-maincontent wow fadeInRight animated" data-wow-delay="01ms" data-wow-duration="1000ms">
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
                                        <div className="buttons__card d-flex flex-column gap-4 mb-4">
                                            <Link href="/product-details-2" className="btn btn-outline-primary btn-lg"><b>Ver detalle
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-copy ms-3" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                                </svg>
                                            </b></Link>
                                            <Link href="/#contact" className="btn btn-primary btn-lg">Agregar al carro<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-bag-heart ms-3" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                            </svg></Link>
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

