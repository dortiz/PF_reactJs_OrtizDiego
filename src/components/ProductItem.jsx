// src/components/ProductItem.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <h3>{product.title}</h3>
            <img src={product.imgSrc} alt={product.title} />
            <p>{product.description}</p>
            <p className="product-category">{product.category}</p> {/* Mostrar categoría */}
            <Link to={`/product/${product.id}`}>
                <button className="more-button">Más</button>
            </Link>
        </div>
    );
};

export default ProductItem;
