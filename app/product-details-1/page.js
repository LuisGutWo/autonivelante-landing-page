'use client'
import Layout from "@/src/components/layout/Layout"
import Link from "next/link"
import { Container, Image } from "react-bootstrap"
import 'swiper/css/thumbs'

export default function Home() {

    const caracteristicas = [{
        id: 0,
        name: 'Autonivelante',
    }, {
        id: 1,
        name: 'Fácil preparación y colocación',
    },
    {
        id: 2,
        name: 'Alta estabilidad dimensional y durabilidad',
    },
    {
        id: 3,
        name: 'Acabado liso y fino acompañado de alta resistencia final',
    },
    {
        id: 4,
        name: 'Alta trabajabilidad y rendimiento',
    },
    {
        id: 4,
        name: 'No sufre retracciones hasta el espesor máximo indicado',
    },
    {
        id: 4,
        name: 'Uso exclusivo para superficies interiores',
    }
    ];

    const listItems = caracteristicas.map(caracteristica =>
        <li key={caracteristica.id}>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" className="bi bi-circle-fill pe-1" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
            </svg>
            {caracteristica.name}
        </li>
    );

    return (
        <>
            <Layout headerStyle={1} footerStyle={2}>
                <section className="maincard__section">
                    <Container>
                        <div className="detailproducts__card-box">
                            <div className="detailproducts__card-maincontent">
                                <div
                                    className="card detailmain__card"
                                >
                                    <div className="detailcard-body">
                                        <h4 className="detailproductcard-title fw-bold pb-3">Mortero                               Autonivelante</h4>

                                        <p className="fs_11 fw-bold">
                                            Mortero autonivelante altamente fluido, de secado rápido para espesores de 3 a 40 mm con alta resistencia a la compresión (28 MPa). Para nivelación de pisos previo a la instalación de revestimientos.
                                        </p>
                                        <ul className="text-dark">{listItems}</ul>

                                        <div className="detailcard-price fw-bold">$ 22.500</div>
                                        <div className="buttons__card d-flex flex-column">
                                            <Link href="/#contact" className="btn btn-primary d-flex justify-content-center gap-3">Agregar al carro
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                                </svg></Link>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card detailmain__card text-center"
                                    style={{
                                        width: "100%",
                                        backgroundImage: "url(assets/images/shop/card-background-shape-circle.png)",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "right",
                                        backgroundSize: "20rem"
                                    }}>
                                    <Image src="assets/images/shop/producto-rhenatec.png" className="card-img-top" style={{ width: "18rem", marginTop: "3.5rem", marginBottom: "20px" }} alt="..." />
                                    <div className="exit__button-card">
                                        <Link href="/#products">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </Layout>
        </>
    )
}
