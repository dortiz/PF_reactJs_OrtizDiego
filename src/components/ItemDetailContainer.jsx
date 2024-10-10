import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import mockFetch from '../mocks/asyncMock'; // Asegúrate de que la ruta sea correcta
import '../styles/ItemDetailContainer.css'; // Si tienes estilos específicos

const ItemDetailContainer = () => {
    const { itemId } = useParams(); // Obtener el id del producto desde la URL
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await mockFetch(); // Llama a la función mockFetch
                const foundItem = data.find((i) => i.id === parseInt(itemId)); // Busca el item por ID
                setItem(foundItem);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Cambiar el estado de carga a false después de obtener los datos
            }
        };

        fetchData();
    }, [itemId]);

    if (loading) {
        return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
    }

    if (!item) {
        return <div>Item not found</div>; // Mensaje si no se encuentra el producto
    }

    return (
        <div className="item-detail-container">
            <Card>
                <Card.Img variant="top" src={require(`../${item.imgSrc}`)} alt={item.title} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetailContainer;
