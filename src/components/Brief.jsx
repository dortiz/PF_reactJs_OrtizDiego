import React, { useContext } from 'react';
import { useCart } from '../context/CartContext';

const Brief = () => {
    const { cart, totalAmount } = useContext(CartContext); 

    return (
        <div className="brief">
            <h2>Resumen de tu pedido</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} unidades - ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            <p>Total: ${totalAmount}</p>
        </div>
    );
};

export default Brief;
