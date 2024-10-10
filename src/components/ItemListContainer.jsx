// src/components/ItemListContainer.jsx

import React from 'react';
import ProductItem from './ProductItem';

const ItemListContainer = ({ products }) => {
  return (
    <div className="item-list-container">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
