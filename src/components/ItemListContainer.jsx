import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ItemListContainer.css';

import imagen1 from '../assets/carousel1.jpeg';
import imagen2 from '../assets/carousel2.jpg';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1 className="title">{greeting}</h1>
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Insumo de prevención Bucal</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Insumos para Odontologos</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ItemListContainer;
