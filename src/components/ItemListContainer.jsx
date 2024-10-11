import React, { useEffect, useState } from 'react';
import mockFetch from '../mocks/asyncMock'; 
import ProductItem from './ProductItem'; 

const ItemListContainer = () => {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await mockFetch(); 
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Hubo un problema al cargar los productos.');
            } finally {
                setLoading(false); 
            }
        };

        getProducts();
    }, []);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Productos</h1>
            <div className="product-list">
                {products.length > 0 ? (
                    products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default ItemListContainer;
