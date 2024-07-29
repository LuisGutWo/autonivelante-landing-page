"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Button, Image } from "react-bootstrap";
import { formatPrice } from "./products/formatPrice";
import { Files } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { addToCart } from "@/redux/slices/cartSlice";

export default function ProductsCard({ product }) {
  const dispatch = useDispatch();

  function handleAddItemToCart() {
    dispatch(addToCart(product));
    toast.success(`${product.attributes?.title}"Se agrego con éxito!"`);
    console.log(product)
  }
  
  return (
    <section
      className="products__card-maincontent wow fadeIn animated"
      data-wow-delay="05ms"
      data-wow-duration="1000ms"
    >
      {product && (
        <div className="card main__card">
          <Link
            href={{
              pathname: "/products/product",
              query: { id: product.id },
            }}
            key={product.id}
            className="main__card-img-container"
          >
            {product.attributes.image && (
              <Image
                style={{ width: "100%", height: "100%" }}
                src={product.attributes.image}
                className="card-img-top"
                alt="..."
              />
            )}
          </Link>
          <div className="card-body">
            {product.attributes.title && (
              <h3 className="card-title fw_bold pb-3">
                {product.attributes.title}
              </h3>
            )}
            <div className="card-price fw-bold">
              {product.attributes.price
                ? formatPrice(product.attributes.price)
                : "-"}
            </div>
          </div>
          <div className="buttons__card">
            <Link
              href={{
                pathname: "/products/product",
                query: { id: product.id },
              }}
              key={product.id}
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
      )}
    </section>
  );
}
