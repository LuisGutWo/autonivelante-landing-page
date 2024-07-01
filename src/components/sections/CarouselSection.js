"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { productsListPage } from "@/src/config/productsListPage";
import Link from "next/link";
import Image from "next/image";

export default function CarouselSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
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
              <div
                key={i}
                item={item}
                className="swiper-slide products__card-maincontent wow fadeIn animated"
                data-wow-delay="01ms"
                data-wow-duration="1000ms"
              >
                <div
                  className="card main__card text-center"
                  style={{
                    width: "21rem",
                    backgroundImage:
                      "url(assets/images/shop/card-backgroun-shape.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    backgroundSize: "22rem",
                  }}
                >
                  <Link href={item.url}>
                    <Image
                      src={item.image}
                      className="card-img-top"
                      style={{
                        marginTop: "40px",
                        marginBottom: "20px",
                      }}
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <h4 className="card-title fw-bold pb-3">{item.name}</h4>
                    <div className="card-price fw-bold">{item.price}</div>
                    <div className="buttons__card d-flex flex-column gap-4 mb-4">
                      <Link
                        href={item.url}
                        className="btn btn-outline-primary btn-lg"
                      >
                        <b>
                          Ver detalle
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            fill="currentColor"
                            className="bi bi-copy ms-3"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                            />
                          </svg>
                        </b>
                      </Link>
                      <Link
                        href="/contact-page"
                        onClick={() => setShowContactSend(true)}
                        className="btn btn-primary btn-lg"
                      >
                        Agregar al carro
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          fill="currentColor"
                          className="bi bi-bag-heart ms-3"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
