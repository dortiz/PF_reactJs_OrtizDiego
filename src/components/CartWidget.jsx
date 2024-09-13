import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
  const itemCount = 5; // Número hardcodeado

  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={24} />
      <Badge bg="primary" pill className="ms-2">
        {itemCount}
      </Badge>
    </div>
  );
};

export default CartWidget;