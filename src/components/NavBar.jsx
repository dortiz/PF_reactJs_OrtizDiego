import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import CartModal from './CartModal'; 
import logo from '../assets/logo.png';
import '../styles/NavBar.css';

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={logo} alt="Tienda Dental" className="logo" />
                </Link>
            </div>

            <ul className="navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/empresa">Nosotros</Link></li>
                <li><Link to="/category/productos">Productos</Link></li>
                <li><Link to="/category/noticias">Noticias</Link></li>
                <li><Link to="/category/contacto">Contacto</Link></li>
            </ul>

            <div className="cart-widget-container" onClick={toggleModal}>
                <CartWidget />
            </div>

            <CartModal isOpen={isModalOpen} onClose={toggleModal} /> 
        </nav>
    );
};

export default NavBar;