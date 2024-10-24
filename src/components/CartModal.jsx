import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartModal.css';

const CartModal = ({ isOpen, onClose }) => {
    const { cart, removeFromCart } = useCart(); 

    if (!isOpen) return null; 

    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(item.id); 
        }
    };

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0); 

    return (
        <div className="cart-modal">
            <div className="cart-modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h1>Tu Carrito</h1>
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
                                    <p>Precio Unitario: ${item.price.toFixed(2)}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                </div>
                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p> 
                            </div>
                        ))}
                    </div>
                )}
                <h3>Total del Carrito: ${totalAmount.toFixed(2)}</h3> 
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default CartModal;