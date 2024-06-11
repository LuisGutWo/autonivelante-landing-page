
'use client'
import Link from "next/link"
import { Image } from "react-bootstrap"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
            <section className="banner-style alternat-2 p_relative">
                {/* <video width="100%" height="100%" loop autoPlay controls preload="none" playsInline>
                    <source src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/autonivelante_bg_video.mp4?alt=media&token=82033e63-9eeb-4802-a5d3-2b9bdd19e5fb" type="video/mp4" />
                    <track
                        src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/autonivelante_bg_video.mp4?alt=media&token=82033e63-9eeb-4802-a5d3-2b9bdd19e5fb"
                    />
                </video> */}
                <Swiper {...swiperOptions} className="banner-carousel">
                    <SwiperSlide className="slide-item p_relative">
                        <div className="banner-image">
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
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
                    </SwiperSlide>
                </Swiper>

            </section>
        </>
    )
}
