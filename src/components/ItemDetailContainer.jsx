import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import mockFetch from '../mocks/asyncMock'; 
import '../styles/ItemDetailContainer.css'; 

const ItemDetailContainer = () => {
    const { itemId } = useParams(); 
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await mockFetch(); 
                const foundItem = data.find((i) => i.id === parseInt(itemId)); 
                setItem(foundItem);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, [itemId]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (!item) {
        return <div>Item not found</div>; 
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
