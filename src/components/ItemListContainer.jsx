import React, { useState, useEffect } from 'react';
import mockFetch from '../mocks/asyncMock';
import { Link } from 'react-router-dom';
import '../styles/ItemListContainer.css'; // Importar estilos

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('todas');

    useEffect(() => {
        const fetchItems = async () => {
            const fetchedItems = await mockFetch();
            setItems(fetchedItems);
            setLoading(false);
        };

        fetchItems();
    }, []);

    const categories = ['Todas', 'Categoria1', 'Categoria2']; 

    const filteredItems = selectedCategory === 'todas'
        ? items
        : items.filter(item => item.category === selectedCategory);

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
                <p>Cargando...</p>
            ) : (
                <div className="item-list">
                    {filteredItems.map(item => (
                        <div className="item-card" key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <img src={item.imgSrc} alt={item.title} />
                            <Link to={`/product/${item.id}`}>Ver Detalles</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;

