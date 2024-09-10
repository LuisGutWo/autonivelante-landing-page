"use client";
import Link from "next/link";
import React from "react";

export default function CartProduct() {
  return (
    <tr>
      <td colSpan="4" className="prod-column">
        <div className="column-box">
          <Link href="/products">
            <h1 className="btn btn-danger product__empty-section">
              No hay productos en tu carrito
            </h1>
          </Link>
        </div>
      </td>
    </tr>
  );
}
