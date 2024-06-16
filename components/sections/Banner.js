'use client'
import Link from "next/link"

export default function Banner() {

    return (
        <>
            <section className="banner-style alternat-2 p_relative">
                <video className="banner-video" controls autoPlay width="100%" height="100%" loop muted>
                    <source src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/autonivelante_bg_video.mp4?alt=media&token=82033e63-9eeb-4802-a5d3-2b9bdd19e5fb" type="video/mp4" />
                </video>
                <div className="banner__container">
                    <div className="container-item p_relative">
                        <div className="content-box" data-wow-delay="03ms" data-wow-duration="2000ms" >
                            <h2 className="wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1000ms">Somos expertos<br />en nivelar superficies<br />industriales y<br />residenciales</h2>
                            <div className="btn-box wow fadeInRight animated" data-wow-delay="00ms" data-wow-duration="2000ms">
                                <Link href="#contact" className="theme-btn-one">Contáctenos

                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
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
