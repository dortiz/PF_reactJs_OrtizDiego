import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import './CartWidget.css';

const CartWidget = () => {
  const itemCount = 0; // Número hardcodeado

  return (
    <div className="cart-widget-container">
      <FaShoppingCart size={24} />
      <Badge bg="primary" pill className="badge">
        {itemCount}
      </Badge>
    </div>
  );
};

export default CartWidget;
