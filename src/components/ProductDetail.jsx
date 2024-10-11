import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';


import mockFetch from '../mocks/asyncMock';

const ProductDetail = () => {
    const { id } = useParams(); 

    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        const fetchProduct = async () => {
            const products = await mockFetch();
            const foundProduct = products.find(prod => prod.id === parseInt(id));
            setProduct(foundProduct);
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="product-detail">
            <h2>{product.title}</h2>
            <img src={product.imgSrc} alt={product.title} />
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetail;

