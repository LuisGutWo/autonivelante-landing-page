"use client";
import { Container, Image } from "react-bootstrap";
import Link from "next/link";
import "swiper/css/thumbs";
import "react-multi-carousel/lib/styles.css";
import { formatPrice } from "@/src/utils/formatPrice";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { ShoppingBag } from "lucide-react";

export default function Home({ product }) {
  if (!product) {
    return null;
  }

  const { attributes } = product;
  const {
    title,
    subtitle,
    desc,
    desc2,
    desc3,
    desc4,
    desc5,
    characteristics,
    price,
    image,
  } = attributes ?? {};

  return (
    <section className="detailproducts__card-box">
      <Container fluid className="detailproducts__card-maincontent">
        <div
          className="card detailmain__img-box text-center"
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/white_circle_bg.png?alt=media&token=6434adda-bb60-43ba-a345-f92d4aac073b)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "27rem",
          }}
        >
          <Image
            src={image}
            className="card-img-top"
            alt="..."
            onError={(event) => {
              event.target.src =
                "/assets/images/shop/default-product-image.png";
            }}
          />
        </div>
        <div className="card detailmain__card">
          <div className="detailcard-body">
            <h2 className="fw-bold pb-3">{title ?? "Product Title"}</h2>
            <h5 className="fw-bold mb_25">{subtitle ?? ""}</h5>
            {desc && <p className="fw-normal mb_25">{desc}</p>}
            {desc2 && <p className="fw-normal mb_25">{desc2}</p>}
            {desc3 && <p className="fw-normal mb_25">{desc3}</p>}
            {desc4 && <p className="fw-normal mb_25">{desc4}</p>}
            {desc5 && <p className="fw-normal mb_25">{desc5}</p>}

            {characteristics && (
              <>
                <p className="fs_16 mt-2 mb-2 fw-bold">Caracteristicas :</p>
                <div className="text-dark list-style-one">
                  <BlocksRenderer content={characteristics} />
                </div>
              </>
            )}

            <div className="detailcard-price fw-bold">
              {price ? formatPrice(price) : "Sin precio"}
            </div>
            <div className="buttons__card d-flex flex-column">
              <Link
                href="/cart"
                className="btn btn-primary btn-lg d-flex justify-content-center align-items-center gap-3 w-100"
              >
                <b>Agregar al carro</b>
                <ShoppingBag />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
