import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import '../styles/CartWidget.css';

const CartWidget = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <Badge bg="primary" pill className="ms-2">
        {totalItems}
      </Badge>
    </div>
  );
};

export default CartWidget;
