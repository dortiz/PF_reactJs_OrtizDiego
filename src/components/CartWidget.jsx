// src/components/CartWidget.jsx

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import '../styles/CartWidget.css';

const CartWidget = () => {
  const { cart } = useCart(); // Obtén directamente el cart desde el contexto
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Sumar la cantidad total de items

  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <Badge bg="primary" pill className="ms-2">
        {totalItems} {/* Mostrar la cantidad total de items en el carrito */}
      </Badge>
    </div>
  );
};

export default CartWidget;
