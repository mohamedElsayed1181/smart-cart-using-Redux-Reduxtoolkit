import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CustomNavbar() {
  const cart= useSelector(state=>state.cart)
  return (
    <div >
<Navbar expand="lg" className=" bg-body-tertiary">
      <Container>
        <Link className='nav-link' to="/">Cartapp</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link className=' nav-link' to="Home">Home</Link>
            <Link  className=' nav-link' to="Products">Products</Link>
            <Link className=' nav-link' to="Cart">cart-{cart.length}</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}
