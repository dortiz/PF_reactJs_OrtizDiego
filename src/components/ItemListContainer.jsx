import React from 'react';
import { Card, Container } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>{greeting}</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemListContainer;