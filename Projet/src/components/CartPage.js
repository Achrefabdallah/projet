// CartPage.js
import React, { useState } from 'react';
import { useCart } from './CartContext';
import '../styles/CartPage.css';
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const CartPage = () => {
  const { cartState: { items, count }, removeFromCart, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleOrderCart = () => {
    // Add logic for ordering the cart (e.g., sending an order to the server)
    console.log("Ordering Cart:", items);
    // You can also clear the cart after ordering if needed
    // clearCart();

    // Show the checkout form
    setShowCheckout(true);
  };

  const handleCheckout = (formData) => {
    // Add logic to send receipt and handle form data
    console.log("Form Data:", formData);

    // Clear the cart
    clearCart();

    // Simulate sending a receipt to the email
    const receipt = generateReceipt(items, formData);
    sendReceipt(formData.email, receipt);

    // Hide the checkout form
    setShowCheckout(false);
  };

  const generateReceipt = (cart, formData) => {
    // Generate a receipt based on the cart contents and form data
    // You can format this in any way you want
    return `
      Thank you for your purchase, ${formData.name}!

      Items:
      ${cart.map(item => `${item.name} - ${item.price}`).join('\n')}

      Total: $${calculateTotal(cart)}
    `;
  };

  const calculateTotal = (cart) => {
    // Calculate the total based on the items in the cart
    // You may need to multiply by quantity or apply discounts in a real-world scenario
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const sendReceipt = (toEmail, receipt) => {
    // Simulate sending an email (in a real scenario, this would be done on the server side)
    window.alert(`Receipt sent to ${toEmail}:\n${receipt}`);
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <div className="product-info">
                    <p className="product-name">{item.name}</p>
                    <p className="product-price">${item.price}</p>
                    <div className="quantity-controls">
                      <span className="quantity-label">Qty:</span>
                      <span className="quantity">{item.quantity}</span>
                    </div>
                  </div>
                </div>
                <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p className="total-items">Total Items: {count}</p>
            <p className="total-price">
              Total Price: ${items.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </p>
            {showCheckout ? (
              <CheckoutForm handleCheckout={handleCheckout} />
            ) : (
              <button className="checkout-button" onClick={handleOrderCart}>Buy</button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
