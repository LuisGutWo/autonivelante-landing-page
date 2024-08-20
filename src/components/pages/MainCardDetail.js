"use client";
import { Button, Container, Image } from "react-bootstrap";
import "swiper/css/thumbs";
import "react-multi-carousel/lib/styles.css";
import { formatPrice } from "@/src/config/formatPrice";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";

export default function Home({ product }) {
  const dispatch = useDispatch();

  function handleAddItemToCart() {
    dispatch(addToCart(product));
    toast.success(`${product.attributes.title} Se agrego satisfactoriamente al carrito!`);
  }

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
            alt="Card Detail Image"
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
            <div className="buttons__card d-flex flex-column w-75">
              <Button
                onClick={handleAddItemToCart}
                className="btn btn-primary btn-lg w-100 d-flex justify-content-evenly align-content-center"
              >
                <b>Agregar al carro</b>
                <ShoppingBag />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
