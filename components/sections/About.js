import Link from "next/link"
import { Button, Image } from "react-bootstrap"
export default function About() {
    return (
        <>
            <section className="about-section p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-13 image-column ml_0 about__main-column">
                            <div className="image_block_one">
                                <div className="image-box p_relative">
                                    <div className="aboutcard__text bg-light">
                                        <div class="aboutcard__text-inner">
                                            <h1 className="postcard__title blue text-dark text-start fs-3 fw-bold">¿Qué es el autonivelante?</h1>
                                            <div className="aboutcard__bar"></div>
                                            <div className="aboutcard__preview-txt">EL autonivelante generalmente se usa para crear una superficie plana y lisa con una resistencia a la compresión similar o superior a la del concreto tradicional antes de instalar revestimientos de pisos interiores.
                                                <br />
                                                <br />
                                                Se puede utilizar en exterior e interior. Su uso esta muy extendido en suelos industriales, pistas polideportivas exteriores y para zonas de tráfico rodado, como garajes o aparcamientos.
                                            </div>
                                        </div>
                                        <section class="aboutcard__buttons">
                                            <div class="aboutcard__buttons-btn-video">
                                                <Button variant="outline-light" style={{ width: "10rem", height: "2.8rem" }}>Ver video
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ marginLeft: "12px" }} fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                                                    </svg>
                                                </Button>{' '}
                                            </div>
                                            <div class="aboutcard__buttons-btn-contact">
                                                <Link href="#contact">
                                                    <Button variant="outline-dark" style={{ width: "10rem", height: "2.8rem" }}>Contáctenos
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                                        </svg>
                                                    </Button>{' '}
                                                </Link>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
