import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
      <img
          src={logo}
          alt="Tienda Dental"
          style={{ width: '150px', height: 'auto' }} 
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#empresa">Nosotros</Nav.Link>
        <Nav.Link href="#productos">Productos</Nav.Link>
        <Nav.Link href="#noticias">Noticias</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link>
      </Nav>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;