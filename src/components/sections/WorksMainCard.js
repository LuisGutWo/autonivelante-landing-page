import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { Card, Container } from "react-bootstrap";

export default function WorksMainCard() {
	return (
		<Container>
            <Card class="works__card-main d-flex justify-content-between gap-5 align-items-center">
                <section className="works__card-content">
                    <Container class="works__card-text">
                        <h1>Maithense</h1>
                    </Container>
                </section>
                <section class="swiper__card-section">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </section>
            </Card>
        </Container>
	);
}
