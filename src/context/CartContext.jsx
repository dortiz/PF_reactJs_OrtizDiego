import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: item.quantity }];
            }
        });
        toast.success(`${item.title} agregado al carrito!`);
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
        toast.error(`Producto eliminado del carrito!`);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};