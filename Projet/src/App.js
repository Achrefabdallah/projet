// App.js
import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage';

import ContactPage from './components/ContactPage';


import Header from './components/Header'
import Footer from './components/Footer'
import Catalog from './components/Catalog';
import CartPage from './components/CartPage'



const App = () => {


  return (
    
    
      <Routes>
        <Route path="/" element={ <><Header /> <Outlet /> <Footer/></> } >
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
  );
};

export default App;
