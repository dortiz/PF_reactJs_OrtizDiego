import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={require('../assets/img1.jpg')} alt="Primera imagen" />
          <Carousel.Caption>
            <h3>Primera Imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={require('../assets/img2.jpg')} alt="Segunda imagen" />
          <Carousel.Caption>
            <h3>Segunda Imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ItemListContainer;
