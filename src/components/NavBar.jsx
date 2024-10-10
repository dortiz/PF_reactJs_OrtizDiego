import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png'; // Cambia la ruta a ../assets
import '../styles/NavBar.css'; // Cambia la ruta a ../styles

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Tienda Dental" className="logo" />
        </Link>
      </div>
      <button className="navbar-toggler-custom" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse-container">
        <ul className="navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/empresa">Nosotros</Link></li>
          <li><Link to="/category/productos">Productos</Link></li>
          <li><Link to="/category/noticias">Noticias</Link></li>
          <li><Link to="/category/contacto">Contacto</Link></li>
        </ul>
      </div>
      <div className="cart-widget-container">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;