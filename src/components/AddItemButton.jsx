import React from 'react';
import { useCart } from '../context/CartContext'; 

const AddItemButton = ({ item }) => {
    const { addToCart } = useCart(); 

    const handleAddToCart = () => {
        addToCart(item); 
        alert(`${item.title} ha sido agregado al carrito`);
    };

    return (
        <button onClick={handleAddToCart}>
            Agregar al carrito
        </button>
    );
};

export default AddItemButton;

