"use client";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import CartProduct from "@/app/cart/CartProduct";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { formatPrice } from "@/src/utils/formatPrice";
import Layout from "@/src/components/layout/Layout";
import CartCount from "@/src/components/common/CartCount";

export default function Cart() {
  //Selecciona los items del cart
  const cartItems = useSelector((store) => store.cart);

  //Calcula el subtotal
  const subTotal = cartItems.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.qty;
  }, 0);

  console.log(cartItems);

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <section className="detailproducts__card-box">
        <Breadcrumb
          items={[
            { name: "Productos", href: "products" },
            { name: "Carrito", href: "cart" },
          ]}
        />
        <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center"
        >
          {/*DETALLE DEL CART*/}
          <div className="card detailmain__img-box text-center bg-black bg-opacity-10 p-5 mt-5">
            <article className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="py-2 mb-6">Tu Carrito</h2>
              <div className="d-flex align-items-center justify-content-between pb-3 font-semibold text-sm mb-4">
                <h2>Product</h2>
                <h2>Quantity</h2>
                <h2>Price</h2>
              </div>
            </article>
            <div className="d-flex flex-column justify-content-between align-items-center">
              {cartItems.length > 0 ? (
                cartItems.map((item, i) => (
                  <CartProduct key={i} cartItem={item} />
                ))
              ) : (
                <h1>No hay productos en tu carrito</h1>
              )}
            </div>

            {/* TOTAL PRODUCTS SECTION */}
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center p-5">
            <h2 className="pb-3">
              Total del carrito: <CartCount />
            </h2>
            <div className="d-flex align-items-center justify-content-between pb-6">
              <span>Subtotal </span>
              <span>{formatPrice(subTotal)}</span>
            </div>
            <div className="d-flex align-items-center justify-content-between py-4">
              <span>Total </span>
              <span>{formatPrice(subTotal)}</span>
            </div>
            <Link href="#" className="btn btn-primary w-100">
              Continuar con la orden
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
