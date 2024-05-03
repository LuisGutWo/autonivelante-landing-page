'use client'
import React, { useRef, useState } from "react";
import Link from "next/link"
import { Button, Col, Container, Image, Row, Modal, Form } from "react-bootstrap"
import emailjs from "@emailjs/browser";


export default function Contact() {
    const [showEmailSend, setShowEmailSend] = useState(false);
    const form = useRef();

    const handleCloseEmailSend = () => setShowEmailSend(false);
    const handleShowEmailSend = () => setShowEmailSend(true);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_SERVICE_EMAILJS,
                process.env.NEXT_TEMPLATE_EMAILJS,
                form.current,
                process.env.NEXT_FORM_CURRENT
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };



    return (
        <>
            <section id="contact" className="contact__section p_relative">
                <Container>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-13 image-column ml_0 contact__main-column">
                            <div className="contact_block_one d-flex justify-content-center align-items-center wow fadeIn animated" data-wow-delay="01ms" data-wow-duration="1000ms">
                                <div className="contactcard image-box p_relative d-flex flex-wrap flex-row">
                                    <div className="contactcard__text">
                                        <div class="contactcard__text-inner">


                                            <div className="logo-box">
                                                <figure className="logo">
                                                    <Link href="/">
                                                        <Image src="assets/images/banner/autonivelante_logo_contact.png" alt="" />
                                                    </Link>
                                                </figure>
                                            </div>



                                            <Container fluid className="mb-5 text-start">
                                                <Row>
                                                    <Col>
                                                        <div className="contactcard__content">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                                            </svg><p className="text-light">
                                                                <b>Numero de contacto</b>
                                                                <br />
                                                                +56 9 945 280 836
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <div class="contactcard__content">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                                            </svg> <p className="text-light">
                                                                <b>Dirección</b>
                                                                <br />
                                                                Las Tranqueras 117, oficina 303, Las Condes.
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <div class="contactcard__content-tree">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" spacing="10" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                                            </svg> <p class="text-light">
                                                                <b>Horario</b>
                                                                <br />
                                                                Lunes a Domingo: 24/7
                                                            </p>
                                                        </div>
                                                    </Col>

                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                    <div className="contactcard__text-two">


                                        {/* Contact Form Section */}
                                        <section className="contact-style">
                                            <div className="auto-container">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                                        <div className="form__contact content-box mr_70">
                                                            <div className="sec-title mb_35 ms-1">
                                                                <h1 className="postcard__title blue text-dark text-start fw-bold fs-2">Contáctanos</h1>
                                                                <div className="contactcard__bar"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                                                        <div className="form-inner">
                                                            <Form ref={form} onSubmit={sendEmail} id="contact-form" className="default-form">
                                                                <div className="row clearfix">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                        <input type="text" name="username" placeholder="Nombre y Apellido" required />
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                        <input type="text" name="phone" required placeholder="Teléfono" />
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-2 col-sm-12 form-group">
                                                                        <input type="email" name="email" placeholder="Correo Electrónico" required />
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                        <textarea name="message" placeholder="Mensaje"></textarea>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                                        <Button onClick={handleShowEmailSend} className="theme-btn theme-btn-one" style={{ width: "100%", marginTop: "4rem" }} value="Send" type="submit" name="submit-form">Enviar mensaje
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short" style={{ marginLeft: "1rem" }} viewBox="0 0 16 16">
                                                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                                                            </svg></Button>
                                                                        <Modal show={showEmailSend} onHide={handleCloseEmailSend}>
                                                                            <Modal.Header closeButton>
                                                                                <Modal.Body>
                                                                                    Correo Enviado! 🛸 <br /> Te responderemos de inmediato.
                                                                                    Gracias
                                                                                </Modal.Body>
                                                                            </Modal.Header>
                                                                        </Modal>
                                                                    </div>
                                                                </div>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        {/* Contact Form Section End */}
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
