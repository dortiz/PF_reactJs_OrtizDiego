
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/CartWidget.css';

const CartWidget = () => {
    const { cart } = useCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0); 

    return (
        <div className="cart-widget">
            <Link to="/cart"> 
                <FaShoppingCart size={24} />
                <Badge bg="primary" pill className="ms-2">
                    {totalItems} 
                </Badge>
            </Link>
        </div>
    );
};

export default CartWidget;
