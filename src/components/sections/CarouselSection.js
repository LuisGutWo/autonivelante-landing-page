"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainCard from "@/src/components/elements/MainCard";
import { productsListPage } from "@/src/config/productsListPage";

export default function CarouselSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="carousel__main-section">
      <div className="container carousel__container">
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
            <section key={i} className="p-4">
              <MainCard key={i} item={item} />
            </section>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
