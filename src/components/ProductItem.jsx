import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductItem.css';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>
                <button className="more-button">Más</button>
            </Link>
        </div>
    );
};

export default ProductItem;