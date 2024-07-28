"use client";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { formatPrice } from "@/src/utils/formatPrice";
import { Files } from "lucide-react";
import { ShoppingBag } from "lucide-react";

export default function ProductsCardHome({ item }) {

  return (
    <section
      className="products__card-maincontent wow fadeIn animated"
      data-wow-delay="05ms"
      data-wow-duration="1000ms"
    >
      {item && (
        <div className="card main__card">
          <Link
            href={{
              pathname: "/homeproducts/homeproduct",
              query: { id: item?.id },
            }}
            key={item.id}
            className="main__card-img-container"
          >
            {item.attributes?.image && (
              <Image
                style={{ width: "100%", height: "100%" }}
                src={item.attributes.image}
                className="card-img-top"
                alt="..."
              />
            )}
          </Link>
          <div className="card-body">
            {item.attributes?.title && (
              <h3 className="card-title fw-bold">{item.attributes.title}</h3>
            )}
            <div className="card-price fw-bold">
              {item.attributes?.price
                ? formatPrice(item.attributes?.price)
                : "-"}
            </div>
          </div>
          <div className="buttons__card">
            {item.id && (
              <Link
                href={{
                  pathname: "/homeproducts/homeproduct",
                  query: { id: item?.id },
                }}
                key={item.id}
                className="btn btn-outline-primary btn-lg d-flex justify-content-evenly align-content-center gap-4 ps-4"
              >
                <b className="fs-5">Ver detalle</b>
                <Files />
              </Link>
            )}

            <Link
              href="/cart"
              className="btn btn-primary btn-lg w-100 d-flex justify-content-evenly align-content-center"
            >
              <b>Agregar al carro</b>
              <ShoppingBag />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
