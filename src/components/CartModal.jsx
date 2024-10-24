// src/components/CartModal.jsx

import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartModal.css'; // Importar estilos

const CartModal = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, addToCart } = useCart(); // Usa directamente cart

    if (!isOpen) return null; // No renderizar si el modal no está abierto

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Calcular total de items
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); // Calcular precio total

    return (
        <div className="cart-modal">
            <div className="cart-modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h1>Tu Carrito</h1>
                <h2>Total de productos: {totalItems}</h2>
                <h2>Precio total: ${totalPrice.toFixed(2)}</h2>
                {/* Verifica si cart es un array y su longitud */}
                {Array.isArray(cart) && cart.length === 0 ? (
                    <p>No hay productos en tu carrito.</p>
                ) : (
                    <div className="cart-items">
                        {Array.isArray(cart) && cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.imgSrc} alt={item.title} />
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>Descripción: {item.description}</p>
                                    <div className="quantity-control">
                                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                        <button onClick={() => addToCart(item)}>+</button>
                                        <span>{item.quantity}</span> {/* Mostrar la cantidad actual */}
                                        <button onClick={() => item.quantity > 1 && removeFromCart(item.id)}>−</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default CartModal;
