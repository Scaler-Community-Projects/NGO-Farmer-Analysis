import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'; 
  
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">NGO-SWERA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Catalog</Nav.Link> 
                </Nav>
                <Nav>
                    <Nav.Link  href="#">
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    )
}

export default NavBar;
