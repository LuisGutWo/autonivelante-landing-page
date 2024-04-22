
'use client'
import Link from "next/link"
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
            <section className="banner-style-two alternat-2 p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                        <figure className="banner-image"><img src="assets/images/banner/autonivelante_banner_img.png" alt="" /></figure>
                        <div className="auto-container">
                            <div className="content-box ms-5">
                                <h2>Somos expertos<br />en nivelar superficies<br />industriales<br />y residenciales</h2>
                                <div className="btn-box">
                                    <Link href="/about-us" className="theme-btn-one">Contáctenos</Link>
                                </div>
                            </div> 
                        </div>
                    </SwiperSlide>                    
                </Swiper>

            </section>
        </>
    )
}
