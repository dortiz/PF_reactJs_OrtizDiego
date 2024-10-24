import React, { useContext } from 'react';
import { useCart } from '../context/CartContext'; 

const Checkout = () => {
    const { cart, totalAmount, clearCart } = useContext(CartContext); 

    const handlePurchase = () => {
        alert('Compra realizada con éxito');
        clearCart(); 
    };

    return (
        <div className="checkout">
            <h2>Resumen de tu compra</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} unidades - ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            <p>Total: ${totalAmount}</p>
            <button onClick={handlePurchase} className="complete-purchase-button">
                Finalizar compra
            </button>
        </div>
    );
};

export default Checkout;