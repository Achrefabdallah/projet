// Header.js

import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ModalComponent from './ModalComponent'; // Import the modal component
import '../styles/HomePage.css';
import { useCart } from './CartContext';
const Header = () => {
  const { cartState } = useCart();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const { count } = cartState;

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setIsLoginForm(true);
  };

  const handleModalClose = () => {
    setShowLoginModal(false);
  };

  return (
    <div>
      <Navbar className="navbar" variant="dark" expand="lg">
        <Container>
          {/* Logo on the left */}
          <Navbar.Brand href="#home" className="logo">
            Your Logo
          </Navbar.Brand>

          {/* Centered Navigation Links */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {/* Use Link instead of Nav.Link for internal navigation */}
              <Link to="/" className="nav-link">
                Accueil
              </Link>
              <Link to="/catalog" className="nav-link">
                Catalogue
              </Link>
              <Link to="/contact" className="nav-link">
                Contactez nous
              </Link>
            </Nav>
          </Navbar.Collapse>

          {/* User and Cart on the right */}
          <Nav className="ml-auto">
            <Nav.Link href="#signin" className="nav-link" onClick={handleLoginClick}>
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
            <Link to="/cart" className="nav-link">
            <FontAwesomeIcon icon={faShoppingCart} />
            Cart ({count})
          </Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Login/Signup Modal */}
      <ModalComponent
        show={showLoginModal}
        handleClose={handleModalClose}
        isLoginForm={isLoginForm}
        setIsLoginForm={setIsLoginForm}
      />
    </div>
  );
};

export default Header;

