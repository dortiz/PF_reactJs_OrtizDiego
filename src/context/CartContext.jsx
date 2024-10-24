// src/context/CartContext.jsx

import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para añadir productos al carrito
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(i => i.id === item.id);
            if (existingItem) {
                // Si ya existe, aumentar la cantidad
                return prevCart.map(i => 
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevCart, { ...item, quantity: 1 }]; // Si no existe, agregar con cantidad 1
        });
        toast.success(`${item.title} agregado al carrito!`);
    };

    // Función para eliminar productos del carrito
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

// Hook para usar el contexto en otros componentes
export const useCart = () => {
    return useContext(CartContext);
};
