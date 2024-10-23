import React, { useEffect, useState } from 'react';
import mockFetch from '../mocks/asyncMock';
import ProductItem from './ProductItem';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');

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

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Productos</h1>

            <div className="category-filter">
                <label htmlFor="category-select">Filtrar por categoría:</label>
                <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Todas las categorías</option>
                    <option value="Electrónica">Categoría A</option>
                    <option value="Ropa">Categoría B</option>
                </select>
            </div>

            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
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
