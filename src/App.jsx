import React from 'react';
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';        
import Nosotros from './components/Nosotros'; 
import Noticias from './components/Noticias'; 
import Contacto from './components/Contacto'; 
import CartPage from './components/CartPage';
import Checkout from './components/Checkout'; 
import './styles/index.css';

const App = () => (
  <CartProvider>
    <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/category/empresa" element={<Nosotros />} /> 
          <Route path="/category/noticias" element={<Noticias />} /> 
          <Route path="/category/contacto" element={<Contacto />} /> 
          <Route path="/category/productos" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/cart" element={<CartPage />} />
          
      </Routes>
      <ToastContainer /> 
    </Router>
  </CartProvider>
);

export default App;
