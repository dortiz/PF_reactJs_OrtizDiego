// ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import mockFetch from '../mocks/asyncMock'; // Asegúrate de que esta ruta sea correcta
import ProductItem from './ProductItem'; // Asegúrate de que esta ruta sea correcta

const ItemListContainer = () => {
    const [products, setProducts] = useState([]); // Inicializa como un array
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado de error

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await mockFetch(); // Llama a la función mockFetch
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Hubo un problema al cargar los productos.');
            } finally {
                setLoading(false); // Finaliza el estado de carga
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
