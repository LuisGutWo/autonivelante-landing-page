"use client";
import React, { useRef, useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import { Image, Modal } from "react-bootstrap";
import styles from "./projects.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";

const projects = [
  {
    name: "Mathiesen",
    mt2: "1.135",
    duration: "15 días",
    year: "2022",
    description:
      "Aplicación de Autonivelante en toda la superficie, instalación de alfombra y Piso Vinílico LVT.",
    thumbnail: "/assets/images/projects/mathiensen/thumbnail.png",
    images: [
      "/assets/images/projects/mathiensen/mathiensen_01.png",
      "/assets/images/projects/mathiensen/mathiensen_02.png",
      "/assets/images/projects/mathiensen/mathiensen_03.png",
      "/assets/images/projects/mathiensen/mathiensen_04.png",
      "/assets/images/projects/mathiensen/mathiensen_05.png",
      "/assets/images/projects/mathiensen/mathiensen_06.png",
      "/assets/images/projects/mathiensen/mathiensen_07.png",
      "/assets/images/projects/mathiensen/mathiensen_08.png",
    ],
  },
  {
    name: "Patio Poster",
    mt2: "300",
    duration: "5 días",
    year: "2022",
    description:
      "Aplicación de Autonivelante en toda la superficie a instalar pavimentos. Instalación de Piso Vinílico.",
    thumbnail: "/assets/images/projects/patioposter/patio_poster_thumbnail.png",
    images: [
      "/assets/images/projects/patioposter/patio_poster_01.png",
      "/assets/images/projects/patioposter/patio_poster_02.png",
      "/assets/images/projects/patioposter/patio_poster_03.png",
      "/assets/images/projects/patioposter/patio_poster_04.png",
      "/assets/images/projects/patioposter/patio_poster_05.png",
      "/assets/images/projects/patioposter/patio_poster_06.png",
      "/assets/images/projects/patioposter/patio_poster_07.png",
      "/assets/images/projects/patioposter/patio_poster_08.png",
      "/assets/images/projects/patioposter/patio_poster_09.png",
      "/assets/images/projects/patioposter/patio_poster_10.png",
      "/assets/images/projects/patioposter/patio_poster_11.png",
    ],
  },
  {
    name: "Cajon del Maipo",
    mt2: "1000",
    duration: "1 día",
    year: "2022",
    description: "Aplicación de Autonivelante.",
    thumbnail:
      "/assets/images/projects/cajondelmaipo/cajon_maipo_thumbnail.png",
    images: [
      "/assets/images/projects/cajondelmaipo/cajon_maipo_01.png",
      "/assets/images/projects/cajondelmaipo/cajon_maipo_02.png",
      "/assets/images/projects/cajondelmaipo/cajon_maipo_03.png",
      "/assets/images/projects/cajondelmaipo/cajon_maipo_04.png",
      "/assets/images/projects/cajondelmaipo/cajon_maipo_05.png",
      "/assets/images/projects/cajondelmaipo/cajon_maipo_06.png",
      "/assets/images/projects/cajondelmaipo/cajon_maipo_07.png",
      "/assets/images/projects/cajondelmaipo/cajon_maipo_08.png",
      "/assets/images/projects/cajondelmaipo/cajon_maipo_09.png",
      "/assets/images/projects/cajondelmaipo/cajon_maipo_10.png",
    ],
  },
  {
    name: "CMaster",
    mt2: "200",
    duration: "5 días",
    year: "2022",
    description:
      "Aplicación de Autonivelante e instalación de piso Vinílico en Rollo.",
    thumbnail: "/assets/images/projects/cmaster/cmaster_thumbnail.png",
    images: [
      "/assets/images/projects/cmaster/cmaster_01.png",
      "/assets/images/projects/cmaster/cmaster_02.png",
      "/assets/images/projects/cmaster/cmaster_03.png",
      "/assets/images/projects/cmaster/cmaster_04.png",
      "/assets/images/projects/cmaster/cmaster_05.png",
      "/assets/images/projects/cmaster/cmaster_06.png",
      "/assets/images/projects/cmaster/cmaster_07.png",
      "/assets/images/projects/cmaster/cmaster_08.png",
      "/assets/images/projects/cmaster/cmaster_09.png",
      "/assets/images/projects/cmaster/cmaster_10.png",
      "/assets/images/projects/cmaster/cmaster_11.png",
      "/assets/images/projects/cmaster/cmaster_12.png",
      "/assets/images/projects/cmaster/cmaster_13.png",
    ],
  },
  {
    name: "Fosforo Estudio H",
    mt2: "531",
    duration: "5 días",
    year: "2022",
    description: "Instalación de Piso Vinílico LVT.",
    thumbnail:
      "/assets/images/projects/fosforoestudio/fosforo_estudio_thumbnail.png",
    images: [
      "/assets/images/projects/fosforoestudio/fosforo_estudio_01.png",
      "/assets/images/projects/fosforoestudio/fosforo_estudio_02.png",
      "/assets/images/projects/fosforoestudio/fosforo_estudio_03.png",
      "/assets/images/projects/fosforoestudio/fosforo_estudio_04.png",
      "/assets/images/projects/fosforoestudio/fosforo_estudio_05.png",
      "/assets/images/projects/fosforoestudio/fosforo_estudio_06.png",
    ],
  },
  {
    name: "Oficina Castro",
    mt2: "150",
    duration: "5 días",
    year: "2022",
    description:
      "Aplicación de Autonivelante. Instalación de Piso Vinílico LVT e Instalación de Alfombra.",
    thumbnail: "/assets/images/projects/oficinacasbro/casbro_thumbnail.png",
    images: [
      "/assets/images/projects/oficinacasbro/casbro_01.png",
      "/assets/images/projects/oficinacasbro/casbro_02.png",
      "/assets/images/projects/oficinacasbro/casbro_03.png",
      "/assets/images/projects/oficinacasbro/casbro_04.png",
      "/assets/images/projects/oficinacasbro/casbro_05.png",
      "/assets/images/projects/oficinacasbro/casbro_06.png",
      "/assets/images/projects/oficinacasbro/casbro_07.png",
    ],
  },
  {
    name: "Pichilemu",
    mt2: "70",
    duration: "1 día",
    year: "2023",
    description: "Aplicación de Autonivelante.",
    thumbnail: "/assets/images/projects/pichilemu/pichilemu_thumbnail.png",
    images: [
      "/assets/images/projects/pichilemu/pichilemu_01.png",
      "/assets/images/projects/pichilemu/pichilemu_02.png",
      "/assets/images/projects/pichilemu/pichilemu_03.png",
      "/assets/images/projects/pichilemu/pichilemu_04.png",
      "/assets/images/projects/pichilemu/pichilemu_05.png",
    ],
  },
  {
    name: "San Antonio",
    mt2: "500",
    duration: "3 días",
    year: "2022",
    description: "Aplicación e Instalación de Autonivelante.",
    thumbnail: "/assets/images/projects/sanantonio/sanantonio_thumbnail.png",
    images: [
      "/assets/images/projects/sanantonio/sanantonio_01.png",
      "/assets/images/projects/sanantonio/sanantonio_02.png",
      "/assets/images/projects/sanantonio/sanantonio_03.png",
      "/assets/images/projects/sanantonio/sanantonio_04.png",
      "/assets/images/projects/sanantonio/sanantonio_05.png",
    ],
  },
];

const SlideNavigation = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      className={`${className} ${styles.project__item__gallery}`}
    />
  );
};

const Gallery = (props) => {
  const { selectedProject, gallery = [] } = props;
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, [sliderRef]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
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

export default function MainProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");

  const openGallery = (project) => {
    setGallery(project.images);
    setSelectedProject(project.name);
    setModalOpen(true);
  };

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150">
        <Breadcrumb items={[{ name: "Proyectos", href: "projects" }]} />

        <section className="py-5">
          {projects.map((item, i) => (
            <div key={i} className={styles.projects__item}>
              <div className="row align-items-center proyects__card">
                <div className={`col-12 col-sm-6 ${i % 2 ? "order-sm-2" : ""}`}>
                  <h2 className="postcard__title blue text-dark text-start fs-3 fw-bold">
                    Proyecto {item.name}
                  </h2>
                  <div className="aboutcard__bar"></div>

                  <div className="mt-5">
                    <p>
                      <strong>Nombre proyecto:</strong> {item.name}
                    </p>
                    <p>
                      <strong>Metros cuadrados:</strong> {item.mt2} m2
                    </p>
                    <p>
                      <strong>Tiempo ejecución:</strong> {item.duration}
                    </p>
                    <p>
                      <strong>Año:</strong> {item.year}
                    </p>
                    <p>
                      <strong>Descripción:</strong> {item.description}
                    </p>
                  </div>
                </div>

                <div className={`col-12 col-sm-6 ${i % 2 ? "order-sm-1" : ""}`}>
                  <figure onClick={() => openGallery(item)}>
                    <Image src={item.thumbnail} alt={item.name} />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </section>

        <Modal show={modalOpen} onHide={setModalOpen} size="lg" centered>
          <Modal.Body>
            <Gallery {...{ selectedProject, gallery }} />
          </Modal.Body>
        </Modal>
      </Container>
    </Layout>
  );
}
