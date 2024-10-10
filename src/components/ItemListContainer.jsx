import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/ItemListContainer.css';
import mockFetch from '../mocks/asyncMock'; // Asegúrate de que la ruta sea correcta

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mockFetch(); // Llama a la función mockFetch
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Cambiar el estado de carga a false después de obtener los datos
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <div className="card-container">
        {items.map((item) => (
          <Card key={item.id} className="item-card">
            <Card.Img variant="top" src={require(`../${item.imgSrc}`)} alt={item.title} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

