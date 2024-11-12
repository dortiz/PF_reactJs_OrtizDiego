import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom'; 
import '../styles/CartPage.css';

const CartPage = () => {
    const { cart, removeFromCart, setCart } = useCart();

    const handleDecreaseQuantity = (item) => {
        setCart((prevCart) =>
            prevCart
                .map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
                .filter((cartItem) => cartItem.quantity > 0)
        );
    };

    const handleIncreaseQuantity = (item) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return <p>Tu carrito está vacío.</p>;
    }

    return (
        <div className="cart-page">
            <h1>Tu Carrito</h1>
            <div className="cart-items">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.imgSrc} alt={item.title} />
                        <div>
                            <h2>{item.title}</h2>
                            <p>Descripción: {item.description}</p>
                            <p>Precio Unitario: ${item.price.toFixed(2)}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                        </div>
                        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <h3>Total del Carrito: ${totalAmount.toFixed(2)}</h3>

            <Link to="/checkout">
                <button className="checkout-button">Finalizar Compra</button>
            </Link>
        </div>
    );
};

export default CartPage;