"use client";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import CartProduct from "@/app/cart/CartProduct";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Button, Container, Table } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import CartCount from "@/src/components/common/CartCount";
import { formatPrice } from "@/src/config/formatPrice";
import CartProductEmpty from "@/app/cart/CartProductEmpty";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart);
  const subTotal = cartItems.reduce(
    (acc, { attributes: { price }, qty }) => acc + price * qty,
    0
  );

  const cartHasItems = cartItems.length > 0;

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
        <div className="mainfeat__bar"></div>
        <section className="cart-section p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 table-column">
                <div className="table-outer">
                  <Table className="cart-table">
                    <thead className="cart-header">
                      <tr>
                        <th>&nbsp;</th>
                        <th className="prod-column">Producto</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th className="price">Precio</th>
                        <th className="quantity">Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartHasItems ? (
                        cartItems.map((item, i) => (
                          <CartProduct key={i} cartItem={item} />
                        ))
                      ) : (
                        <CartProductEmpty />
                      )}
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="othre-content">
                <div className="coupon-box">
                  <input type="text" placeholder="Código del Cupón..." />
                  <Button type="button" className="theme-btn-one">
                    Validar Cupón
                  </Button>
                </div>
                <div className="update-btn">
                  <Link href="/cart">
                    <Button type="button" className="theme-btn-two text-light">
                      Actualizar Carrito
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="cart-total">
                <div className="row">
                  <div className="col-xl-5 col-lg-12 col-md-12 offset-xl-7 cart-column">
                    <div className="total-cart-box clearfix">
                      <h3
                        className="fs_20 b_radius_5 fw_medium lh_50 d-flex justify-content-start ps-4 align-items-center text-dark"
                        style={{ backgroundColor: "#015c9320" }}
                      >
                        Detalle del Carrito
                      </h3>
                      <ul className="list clearfix mb_30">
                        <li>
                          Total items:
                          <span>
                            <CartCount />
                          </span>
                        </li>
                        <li>
                          Subtotal:<span>{formatPrice(subTotal)}</span>
                        </li>
                        <li>
                          Total:<span>{formatPrice(subTotal)}</span>
                        </li>
                      </ul>
                      <Link href="/contact-page" className="theme-btn-one">
                        Realizar la orden
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
