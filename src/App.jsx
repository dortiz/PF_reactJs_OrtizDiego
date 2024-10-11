import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
};

export default App;
