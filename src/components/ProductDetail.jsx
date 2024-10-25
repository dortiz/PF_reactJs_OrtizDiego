import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';
import mockFetch from '../mocks/asyncMock';

const ProductDetail = () => {
    const { id } = useParams(); 
    const [product, setProduct] = React.useState(null);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        const fetchProduct = async () => {
            try {
                const products = await mockFetch();
                const foundProduct = products.find(prod => prod.id === parseInt(id));
                setProduct(foundProduct);
            } catch (error) {
                console.error('Error fetching product:', error)
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);
    if(loading) {
        return <p>Cargando producto...</p>
    }
    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="product-detail">
            <h2>{product.title}</h2>
            <img src={product.imgSrc} alt={product.title} />
            <p>{product.description}</p>
            <p><strong>Categoría:</strong> {product.category}</p> {}
        </div>
    );
};

export default ProductDetail;