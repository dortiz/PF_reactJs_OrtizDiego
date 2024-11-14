import React, { useState, useEffect } from 'react';
import { obtenerTodosLosProductos, obtenerProductosPorCategoria } from '../firebase/products';
import ProductItem from './ProductItem';
import LoadingBar from './LoadingBar';
import '../styles/ItemListContainer.css';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const fetchedItems = selectedCategory === 'Todas' 
                    ? await obtenerTodosLosProductos()
                    : await obtenerProductosPorCategoria(selectedCategory);
                setItems(fetchedItems);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [selectedCategory]);

    const categories = ['Todas', 'Prevencion', 'Instrumental', 'Descartables'];

    return (
        <div className="item-list-container">
            <h1>Lista de Productos</h1>
            <div className="category-select">
                <label htmlFor="categories">Selecciona una categoría:</label>
                <select
                    id="categories"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {loading ? (
                <LoadingBar />
            ) : (
                <div className="item-list">
                    {items.length > 0 ? (
                        items.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))
                    ) : (
                        <p>No hay productos disponibles en esta categoría.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;