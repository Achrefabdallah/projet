// Cart.js
import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
