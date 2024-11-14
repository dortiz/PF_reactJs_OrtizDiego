// src/components/ItemDetailContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { obtenerProductoPorId } from '../firebase/products';
import { toast } from 'react-toastify'; 
import '../styles/ItemDetailContainer.css'; 

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart(); 

    useEffect(() => {
        const fetchItem = async () => {
            setLoading(true);
            try {
                const foundItem = await obtenerProductoPorId(id);
                setItem(foundItem);
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
            setLoading(false);
        };

        fetchItem();
    }, [id]);

    const handleQuantityChange = (event) => {
        const value = Math.max(1, parseInt(event.target.value) || 1); 
        setQuantity(value);
    };

    const handleAddToCart = () => {
        if (item) {
            const itemWithQuantity = { ...item, quantity }; 
            addToCart(itemWithQuantity); 
            toast.success('Producto agregado al carrito!');
        }
    };

    if (loading) return <p>Cargando...</p>;
    if (!item) return <p>Producto no encontrado.</p>;

    return (
        <div className="item-detail-container">
            <div className="item-card">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>Precio: ${item.price.toFixed(2)}</p> 
                <img src={item.imgSrc} alt={item.title} />
                
                <div className="quantity-container">
                    <button className="quantity-button" onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
                    <input
                        type="number"
                        className="quantity-input"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                    <button className="quantity-button" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                
                <button onClick={handleAddToCart}>Añadir al carrito</button>
            </div>
        </div>
    );
};

export default ItemDetailContainer;