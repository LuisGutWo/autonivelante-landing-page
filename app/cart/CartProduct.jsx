"use client";
import React from "react";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { formatPrice } from "@/src/utils/formatPrice";
import { useDispatch } from "react-redux";

export default function CartProduct({ cartItem }) {
  const dispatch = useDispatch();
  function handleItemDelete(cartId) {
    dispatch(removeFromCart(cartId));
    toast.success(`${cartItem.attributes?.title} Se elimino del carrito`);
  }
  function handleQtyIncrement(cartId) {
    dispatch(incrementQty(cartId));
  }
  function handleQtyDecrement(cartId) {
    dispatch(decrementQty(cartId));
  }

  return (
    <div className="cart__products-main-container">
      <div className="cart__items-products-detail">
        <Image
          src={cartItem.attributes?.image}
          width={100}
          height={100}
          alt={cartItem.attributes?.title}
          className="cart__product-image"
        />
        <div className="d-flex flex-column">
          <h5>{cartItem.attributes?.title}</h5>
        </div>
      </div>
      <div className="cart__items-qty d-flex align-items-center p-1 b_radius_10 mx-5">
        <button
          onClick={() => handleQtyDecrement(cartItem.id)}
          className="btn py-2 px-4"
        >
          <Minus />
        </button>
        <p className="d-flex flex-grow-1 py-2 px-4">{cartItem?.qty}</p>
        <button
          onClick={() => handleQtyIncrement(cartItem.id)}
          className="btn py-2 px-4"
        >
          <Plus />
        </button>
      </div>
      <div className="cart__items-price">
        <h4>{formatPrice(cartItem.attributes?.price)}</h4>
        <button onClick={() => handleItemDelete(cartItem.id)}>
          <Trash2 className="text-danger" />
        </button>
      </div>
    </div>
  );
}
