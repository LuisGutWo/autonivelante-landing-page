"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import MainCard from "@/app/products/MainCard";
import "swiper/css/thumbs";
import "react-multi-carousel/lib/styles.css";

const Home = ({ products }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section id="carousel" className="carousel__page">
      <div className="grey__square"></div>
      <div className="carousel__main-section">
        <Container>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition="3000ms ease-in-out"
            transitionDuration={6000}
            containerClass="carousel__container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {products.map((item, i) => (
              <MainCard key={i} item={item} />
            ))}
          </Carousel>
        </Container>
      </div>
    </section>
  );
};

export default Home;
