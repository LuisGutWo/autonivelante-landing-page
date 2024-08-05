"use client";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import CartProduct from "@/app/cart/CartProduct";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import CartCount from "@/src/components/common/CartCount";
import { formatPrice } from "@/src/utils/formatPrice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart);
  const subTotal = cartItems.reduce((acc, currentItem) => {
    return acc + currentItem.attributes?.price * currentItem.qty;
  }, 0);

  return (
    <Layout headerStyle={4} footerStyle={1}>
      <Container className="mt_150">
        <Breadcrumb
          items={[
            { name: "Productos", href: "/products" },
            { name: "Carrito", href: "/cart" },
          ]}
        />
        <h2 className="py-2 mt-5">Tu Carrito</h2>
        <Container fluid className="cart__container">
          {/*DETALLE DEL CART*/}
          <div className="card cart__container-products-section">
            <div className="cart__products-title">
              <h3>Producto</h3>
              <h4>Cantidad</h4>
              <h4>Precio</h4>
            </div>

            <div className="cart__product-card">
              {cartItems.length > 0 ? (
                cartItems.map((item, i) => (
                  <CartProduct key={i} cartItem={item} />
                ))
              ) : (
                <h1>No hay productos en tu carrito</h1>
              )}
            </div>
          </div>

          {/* TOTAL PRODUCTS SECTION */}
          <div className="cart__total-section">
            <h4>
              Total del carrito: <CartCount />
            </h4>
            <div className="d-flex align-items-center justify-content-around gap-4 pb-6">
              <span>Subtotal </span>
              <span>{formatPrice(subTotal)}</span>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-4 py-4">
              <span>Total </span>
              <span>{formatPrice(subTotal)}</span>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Continuar con la orden
            </Link>
          </div>
        </Container>
      </Container>
    </Layout>
  );
}
