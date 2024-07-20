import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainCard from "@/app/products/MainCard";

async function getData() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 1200);

  try {
    const res = await fetch(process.env.NEXT_STRAPI_URL, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error("Error al cargar la data");
    }

    return res.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      return null; // Ignore the error if the request was aborted
    }
    throw error;
  }
}

export default async function CarouselSection() {
  try {
    const products = await getData();

    if (!products) {
      throw new Error("Error loading products");
    }

    return (
      <div className="carousel__main-section">
        <div className="container carousel__container">
          <Carousel
            responsive={[
              {
                breakpoint: 3000,
                items: 3,
                slidesToSlide: 1,
              },
              {
                breakpoint: 1024,
                items: 2,
                slidesToSlide: 1,
              },
              {
                breakpoint: 0,
                items: 1,
                slidesToSlide: 1,
              },
            ]}
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={9000}
            className="swiper"
            containerClass="container-with-dots"
            draggable
            focusOnSelect
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            swipeable
          >
            {products.map((product, i) => (
              <MainCard key={i} product={product} />
            ))}
          </Carousel>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading products</div>;
  }
}
