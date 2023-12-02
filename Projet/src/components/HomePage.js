import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div>
      

      <Container className="mt-4">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Modern Carousel</h3>
              <p>Create stunning slides for your e-commerce website.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Engaging Content</h3>
              <p>Engage your customers with visually appealing content.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Responsive Design</h3>
              <p>Ensure a seamless experience across all devices.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      
    

      
    </div>
  );
};

export default HomePage;