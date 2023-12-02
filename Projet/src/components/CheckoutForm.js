// CheckoutForm.js
import React, { useState } from 'react';

const CheckoutForm = ({ handleCheckout }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      email,
      name,
      surname,
      address,
      paymentMethod,
    };

    // Pass the form data to the parent component's handleCheckout function
    handleCheckout(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Surname:
        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
      </label>
      <br />
      <label>
        Address:
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
      </label>
      <br />
      <label>
        Payment Method:
        <input type="text" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckoutForm;
