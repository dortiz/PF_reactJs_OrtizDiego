// src/components/ProductDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/ProductDetail.css';

// Puedes reemplazar esto con la lógica para obtener productos desde un estado o una API
const products = [
    { id: 1, name: "Producto 1", description: "Descripción del Producto 1", image: "/path/to/image1.jpg" },
    { id: 2, name: "Producto 2", description: "Descripción del Producto 2", image: "/path/to/image2.jpg" },
    // ... más productos
];

const ProductDetail = () => {
    const { id } = useParams(); // Obtiene el ID del producto de la URL
    const product = products.find(prod => prod.id === parseInt(id)); // Busca el producto por ID

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetail;
