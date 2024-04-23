'use client'
import Link from "next/link"
import { Button, Col, Container, Row } from "react-bootstrap"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';


export default function Services() {
    return (
        <>
            <section id="services-section" className="service-section p_relative centred bg-color-1 sec-pad pt-0 pb-0">
                <div className="container py-4">
                    <article className="postcard">
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination, Keyboard]}
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            className="mySwiper"
                            keyboard={true}
                        >
                            <SwiperSlide className="postcard__img" style={{ backgroundImage: "url(assets/images/banner/services-banner-image.jpg)" }}></SwiperSlide>
                            <SwiperSlide className="postcard__img" style={{ backgroundImage: "url(assets/images/banner/patio-foster-banner.jpg)" }}></SwiperSlide>
                        </Swiper>


                        <div className="postcard__text">
                            <h1 className="postcard__title blue text-light text-start"><Link href="#">somos Autonivelante
                                <br />by Instafloor </Link></h1>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">Somos expertos en superficies en autonivelantes cementicios, autonivelacion, reparación de superficies, sobrelosas, afinado de lozas, retape y reparación de fisuras.
                                <br />
                                Especialistas en instalación y reparación en toda la gama de pisos vinilicos en rollos y en palmetas.
                            </div>

                            <Container fluid className="mb-5 text-center">
                                <Row>
                                    <Col>
                                        <div className="postcard__content">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg> <p className="text-light">Autonivelantes Cementicios</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div class="postcard__content">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg> <p className="text-light">Autonivelacion</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div class="postcard__content">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg> <p className="text-light">Preparación de Superficies</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div class="postcard__content">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg> <p class="text-light">Sobrelosas</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div class="postcard__content">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg> <p class="text-light">Afinado de Losas</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div class="postcard__content">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg> <p class="text-light">Retape</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div class="postcard__content">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg> <p class="text-light">Reparación de Fisuras</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>




                            <Button variant="outline-light" style={{ width: "12rem", height: "4rem" }}>Contáctenos
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                </svg>
                            </Button>{' '}
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}
