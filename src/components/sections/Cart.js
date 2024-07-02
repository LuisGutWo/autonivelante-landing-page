'use client'
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '@/src/context/cart-context';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;