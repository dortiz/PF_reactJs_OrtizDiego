import React from 'react';
import { useCart } from '../context/CartContext'; // Cambia a usar useCart

const AddItemButton = ({ item }) => {
    const { addToCart } = useCart(); // Destructura addToCart

    const handleAddToCart = () => {
        addToCart(item); // Agrega el item al carrito
        alert(`${item.title} ha sido agregado al carrito`);
    };

    return (
        <button onClick={handleAddToCart}>
            Agregar al carrito
        </button>
    );
};

export default AddItemButton;

