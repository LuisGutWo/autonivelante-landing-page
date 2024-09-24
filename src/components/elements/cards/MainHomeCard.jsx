"use client";
import Link from "next/link";
import { Button, Image } from "react-bootstrap";
import { formatPrice } from "@/src/config/formatPrice";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { ShoppingBag } from "lucide-react";
import { Files } from "lucide-react";
import toast from "react-hot-toast";

export default function ProductsCardHome({ product, index }) {
  const dispatch = useDispatch();

  if (!product || !product.attributes) {
    return null;
  }

  const handleAddItemToCart = () => {
    if (product && product.attributes) {
      try {
        dispatch(addToCart(product));
        toast.success(
          `${product.attributes.title} Se agrego satisfactoriamente al carrito!`
        );
      } catch (error) {
        console.error(error);
        toast.error("Ocurrió  un error al agregar el producto al carrito");
      }
    } else {
      console.error(
        "Ocurrió un error al intentar agregar el producto al carrito"
      );
    }
  };

  return (
    <section
      key={index}
      className="products__card-maincontent wow fadeIn animated"
      data-wow-delay="05ms"
      data-wow-duration="1000ms"
    >
      <div className="card main__card">
        <Link
          key={index}
          href={`/homeproducts/${product.id}`}
          className="main__card-img-container"
        >
          <Image
            height={20}
            width={10}
            src={product.attributes?.image}
            className="card-img-top"
            alt="Product card main Image"
            onError={(event) => {
              event.target.src =
                "/assets/images/shop/default-product-image.png";
            }}
          />
        </Link>
        <div className="card-body">
          <h3 className="card-title fw-bold">{product.attributes?.title}</h3>
          <div className="card-price fw-bold">
            {formatPrice(product.attributes?.price)}
          </div>
        </div>
        <div className="buttons__card">
          <Link
            key={index}
            href={`/homeproducts/${product.id}`}
            className="btn btn-outline-primary btn-lg d-flex justify-content-evenly align-content-center gap-4 ps-4"
          >
            <b className="fs-5">Ver detalle</b>
            <Files />
          </Link>

          <Button
            onClick={handleAddItemToCart}
            className="btn btn-primary btn-lg w-100 d-flex justify-content-evenly align-content-center"
          >
            <b>Agregar al carro</b>
            <ShoppingBag />
          </Button>
        </div>
      </div>
    </section>
  );
}
