"use client";
import React, { useCallback } from "react";
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
import { Button } from "react-bootstrap";

export default function CartProduct({ cartItem }) {
  const dispatch = useDispatch();

  const handleItemDelete = useCallback(() => {
    dispatch(removeFromCart(cartItem.id));
    toast.success(`${cartItem.attributes?.title} was removed from the cart`);
  }, [dispatch, cartItem]);

  const handleQtyIncrement = useCallback(() => {
    dispatch(incrementQty(cartItem.id));
  }, [dispatch, cartItem]);

  const handleQtyDecrement = useCallback(() => {
    dispatch(decrementQty(cartItem.id));
  }, [dispatch, cartItem]);

  return (
    <tr>
      <td colSpan="4" className="prod-column">
        <div className="column-box">
          <Button
            onClick={handleItemDelete}
            className="bg-transparent border-0"
          >
            <Trash2 className="text-danger" />
          </Button>

          <Image
            src={cartItem.attributes?.image}
            width={100}
            height={100}
            alt={cartItem.attributes?.title}
            className="prod-thumb"
          />

          <div className="prod-title">
            <h4>{cartItem.attributes?.title}</h4>
          </div>
        </div>
      </td>
      <td className="price">{formatPrice(cartItem.attributes?.price)}</td>
      <td className="qty">
        <div className="item-quantity">
          <div className="cart__items-qty d-flex align-items-center p-1 b_radius_10 b_shadow_3 mx-5">
            <Button onClick={handleQtyDecrement} className="btn py-1 px-2">
              <Minus />
            </Button>
            <p className="d-flex justify-content-center align-items-center flex-grow-1 text-center">
              {cartItem?.qty}
            </p>
            <Button onClick={handleQtyIncrement} className="btn py-1 px-2">
              <Plus />
            </Button>
          </div>
        </div>
      </td>
    </tr>
  );
}
