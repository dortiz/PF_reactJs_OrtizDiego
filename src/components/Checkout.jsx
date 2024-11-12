import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Checkout.css';

const Checkout = () => {
    const { cart, clearCart } = useCart();

    if (!cart || cart.length === 0) {
        return <p>Tu carrito está vacío.</p>;
    }

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleFinalizePurchase = () => {
        const purchaseId = Math.random().toString(36).substr(2, 9).toUpperCase();
        alert(`Compra realizada con éxito. ID de compra: ${purchaseId}`);
        clearCart(); 
    };

    return (
        <div className="checkout-page">
            <h1>Detalles de tu Compra</h1>
            <div className="checkout-items">
                {cart.map((item) => (
                    <div key={item.id} className="checkout-item">
                        <h2>{item.title}</h2>
                        <p>Precio Unitario: ${item.price.toFixed(2)}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <h3>Total a Pagar: ${totalAmount.toFixed(2)}</h3>
            <button onClick={handleFinalizePurchase} style={{ display: 'inline-block' }}>Finalizar Compra</button>
        </div>
    );
};

export default Checkout;