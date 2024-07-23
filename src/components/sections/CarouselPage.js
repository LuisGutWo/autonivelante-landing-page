"use client";
import { Container } from "react-bootstrap";
import "swiper/css/thumbs";
import { productsListPage } from "@/src/config/productsListPage";
import MainCard from "@/app/products/MainCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section id="carousel" className="carousel__page">
      <div className="grey__square"></div>
      <div className="carousel__main-section">
        <Container className="carousel__container">
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={9000}
            customTransition="all 5s linear"
            centerMode={false}
            containerClass="container-with-dots"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            draggable
            focusOnSelect={true}
            infinite={true}
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover={true}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            className="swiper"
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide
            swipeable={true}
          >
            {productsListPage.map((item, i) => (
              <MainCard key={i} item={item} />
            ))}
          </Carousel>
        </Container>
      </div>
    </section>
  );
}
