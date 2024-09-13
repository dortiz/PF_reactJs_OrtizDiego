import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Tienda Dental AG</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#empresa">Empresa</Nav.Link>
        <Nav.Link href="#productos">Productos</Nav.Link>
        <Nav.Link href="#noticias">Noticias</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link>
      </Nav>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;