// Catalog.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from './CartContext';

const products = [
  { id: 1, name: 'Bougeoire suspendu', price: 20, image: 'img.jpg', }, 
  { id: 2, name: 'Lustre', price: 30,description: '3 ampoules', image: '4.jpg', }, 
  { id: 3, name: 'Lustre', price: 35,description: '4 ampoules', image: '3.jpg', }, 
  { id: 5, name: 'Lustre 1', price: 40,description: '5 ampoules', image: '6.jpg', }, 
  { id: 6, name: 'Lustre 2', price: 45,description: '5 ampoules', image: '7.jpg', }, 
  { id: 7, name: 'Lustre 4', price: 45,description: '5 ampoules', image: '8.jpg', },
  { id: 8, name: 'Lampe de Chevet', price: 45,description: '', image: '9.jpg', },
  { id: 9, name: 'Lustre 5', price: 45,description: '5 ampoules', image: '10.jpg', },
  // Add more products as needed
];

const Catalog = () => {
  const { addToCart } = useCart();

  return (
    <Container className="mt-4">
      <h2>Catalog</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={`https://via.placeholder.com/300x200?text=${product.name}`} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Catalog;
