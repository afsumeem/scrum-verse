import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='py-4 px-4'>

                <Navbar.Brand href="#home">SCRUMVERSE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className='text-white'>HOME</Nav.Link>
                        <Nav.Link href="#about" className='text-white'>ABOUT</Nav.Link>
                        <Nav.Link href="#courses" className='text-white'>COURSES</Nav.Link>
                        <Nav.Link href="#blog" className='text-white'>BLOG</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" className='text-white'>LOGIN</Nav.Link>
                        <Button variant="outline-light">SIGN UP</Button>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Header;