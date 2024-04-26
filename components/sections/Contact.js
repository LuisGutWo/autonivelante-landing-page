import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"
import { Button, Image } from "react-bootstrap"
export default function Contact() {
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
