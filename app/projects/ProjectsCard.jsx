"use client";
import React, { useRef, useState, useCallback } from "react";
import { Image, Modal } from "react-bootstrap";
import styles from "./projects.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

const SlideNavigation = (props) => {
  const { className, ...otherProps } = props || {};
  const combinedClassName = className
    ? `${className} ${styles.project__item__gallery}`
    : styles.project__item__gallery;
  return <div {...otherProps} className={combinedClassName} />;
};

const Gallery = (props) => {
  const { selectedProject, gallery = [] } = props;
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current || !sliderRef.current.swiper) return;
    sliderRef.current.swiper.slidePrev();
  }, [sliderRef]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current || !sliderRef.current.swiper) return;
    sliderRef.current.swiper.slideNext();
  }, [sliderRef]);

  return (
    <div>
      <h6 className="text-dark fw-bold mb-3">{selectedProject}</h6>

      <Swiper
        ref={sliderRef}
        modules={[Navigation, Keyboard]}
        slidesPerView={1}
        spaceBetween={0}
        navigation={false}
        loop
        keyboard
      >
        <SlideNavigation
          className={styles["project__item__gallery--prev"]}
          onClick={handlePrev}
        />

        {gallery.map((image, i) => (
          <SwiperSlide key={i}>
            <Image src={image} alt="" />
          </SwiperSlide>
        ))}

        <SlideNavigation
          className={styles["project__item__gallery--next"]}
          onClick={handleNext}
        />
      </Swiper>
    </div>
  );
};

export default function ProjectsCard({ item, i }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");

  const openGallery = (item) => {
    if (item != null && item.images != null) {
      setGallery(item.attributes.images);
      setSelectedProject(
        item.attributes.name != null ? item.attributes.name : ""
      );
      setModalOpen(true);
    }
  };

  return (
    <div key={i} className={styles.projects__item}>
      <div className="row align-items-center proyects__card">
        <div className={`col-12 col-sm-6 ${i % 2 ? "order-sm-2" : ""}`}>
          <h2 className="postcard__title blue text-dark text-start fs-3 fw-bold">
            Proyecto {item?.attributes.name}
          </h2>
          <div className="aboutcard__bar"></div>

          <div className="mt-5">
            <p>
              <strong>Nombre proyecto:</strong> {item?.attributes.name}
            </p>
            <p>
              <strong>Metros cuadrados:</strong> {item?.attributes.mt2} m2
            </p>
            <p>
              <strong>Tiempo ejecución:</strong> {item?.attributes.duration}
            </p>
            <p>
              <strong>Año:</strong> {item?.attributes.year}
            </p>
            <p>
              <strong>Descripción:</strong> {item?.attributes.description}
            </p>
          </div>
        </div>

        <div className={`col-12 col-sm-6 ${i % 2 ? "order-sm-1" : ""}`}>
          <figure onClick={() => openGallery(item)}>
            <Image
              className={styles.projects__img}
              src={item?.attributes?.thumbnail}
              alt={item?.attributes.name}
            />
          </figure>
          <Modal
            show={modalOpen}
            onHide={() => setModalOpen(false)}
            size="lg"
            centered
          >
            <Modal.Body>
              {gallery.length > 0 && (
                <Gallery selectedProject={selectedProject} gallery={gallery} />
              )}
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}
