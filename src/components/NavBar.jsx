import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-container">
      <Navbar.Brand href="#home" className="navbar-brand">
        <img
          src={logo}
          alt="Tienda Dental"
          className="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
      <Navbar.Collapse id="basic-navbar-nav" className="collapse-container">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#empresa">Nosotros</Nav.Link>
          <Nav.Link href="#productos">Productos</Nav.Link>
          <Nav.Link href="#noticias">Noticias</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="cart-widget-container">
        <CartWidget />
      </div>
    </Navbar>
  );
};

export default NavBar;
