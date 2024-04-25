import Link from 'next/link'
import React from 'react'
import { Container, Image } from 'react-bootstrap'

export default function ProductsCard() {

    return (
        <>
            <section id="products" className="products__card-section p_relative pt-5 centred sec-pad">
                <Container fluid>
                    <div className="products__card-container productcard__text">
                        <div class="product__card-title">
                            <h1 className="productcard__title blue text-dark text-center fw-bold">Nuestros Productos</h1>
                            <div className="productcard__bar"></div>
                        </div>
                        <div className="products__card-box d-flex flex-row flex-wrap justify-content-center gap-4  align-items-center">
                            <div class="products__card-maincontent">
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
                                            <Link href="#" className="btn btn-outline-primary">Ver detalle</Link>
                                            <Link href="#" className="btn btn-primary">Agregar al carro</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products__card-maincontent">
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
                                            <Link href="#" className="btn btn-outline-primary">Ver detalle</Link>
                                            <Link href="#" className="btn btn-primary">Agregar al carro</Link>
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

