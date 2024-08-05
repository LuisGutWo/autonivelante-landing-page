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
    <div>
      {/* CART1 */}
      <div className="d-flex align-items-center justify-content-between bg-dark bg-opacity-25 pb-3 mb-4 w-100">
        <div className="d-flex align-items-center gap-3">
          <Image
            src={cartItem.attributes?.image}
            width={100}
            height={100}
            alt={cartItem.attributes?.title}
            className="rounded-xl w-20 h-20"
          />
          <div className="flex flex-col">
            <h2>{cartItem.attributes?.title}</h2>
          </div>
        </div>
        <div className="d-flex gap-3 align-items-center bg-dark p-1 b_radius_10">
          <button
            onClick={() => handleQtyDecrement(cartItem.id)}
            className="btn btn-danger py-2 px-4"
          >
            <Minus />
          </button>
          <p className="d-flex flex-grow-1 py-2 px-4 text-light">
            {cartItem?.qty}
          </p>
          <button
            onClick={() => handleQtyIncrement(cartItem.id)}
            className="btn btn-primary py-2 px-4"
          >
            <Plus />
          </button>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <h4>{formatPrice(cartItem.attributes?.price)}</h4>
          <button onClick={() => handleItemDelete(cartItem.id)}>
            <Trash2 className="text-red-600 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
