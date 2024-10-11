import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import '../styles/CartWidget.css';

const CartWidget = () => {
  const itemCount = 5;

  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <Badge bg="primary" pill className="ms-2">
        {itemCount}
      </Badge>
    </div>
  );
};

export default CartWidget;