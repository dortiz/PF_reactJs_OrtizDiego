import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerProductoPorId } from '../firebase/products';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const foundProduct = await obtenerProductoPorId(id);
                setProduct(foundProduct);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <p>Cargando producto...</p>;
    }

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="product-detail">
            <h2>{product.title}</h2>
            <img src={product.imgSrc} alt={product.title} />
            <p>{product.description}</p>
            <p><strong>Categoría:</strong> {product.category}</p> 
            <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductDetail;