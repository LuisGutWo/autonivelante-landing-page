'use client'
import Link from "next/link"

export default function Banner() {
    return (
        <>
            <section className="banner-style alternat-2 p_relative">
                <div className="banner__container">
                    <div className="container-item p_relative">
                        <div className="content-box wow fadeIn animated" data-wow-delay="03ms" data-wow-duration="2000ms" >
                            <h2>Somos expertos<br />en nivelar superficies<br />industriales y<br />residenciales</h2>
                            <div className="btn-box">
                                <Link href="#contact" className="theme-btn-one">Contáctenos

                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                    </svg>

                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
