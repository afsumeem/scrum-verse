import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logo1 from "../../images/logo1.svg"
import logo2 from "../../images/logo2.svg"
import logo3 from "../../images/logo3.svg"
import "./Header.css";

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='py-4 px-4'>
                {/* logo */}

                <Navbar.Brand href="#home" className="logodiv">
                    <div className='logo me-4'>
                        <img src={logo1} className="logo1" alt="" />
                        <img src={logo2} className="logo2" alt="" />
                        <img src={logo3} className="logo3" alt="" />
                        <p className='logoTitle'

                            style={{ fontWeight: "700", fontSize: "14px" }}>SCRUMVERSE</p>
                    </div>

                </Navbar.Brand>

                {/* nav items */}

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className='text-white'
                            style={{ fontWeight: "700", fontSize: "14px" }}
                        >HOME</Nav.Link>
                        <Nav.Link href="#about" className='text-white'
                            style={{ fontWeight: "700", fontSize: "14px" }}
                        >ABOUT</Nav.Link>
                        <Nav.Link href="#courses" className='text-white'
                            style={{ fontWeight: "700", fontSize: "14px" }}
                        >COURSES</Nav.Link>
                        <Nav.Link href="#blog" className='text-white'
                            style={{ fontWeight: "700", fontSize: "14px" }}
                        >BLOG</Nav.Link>

                    </Nav>

                    {/* login signup button */}
                    <Nav>
                        <Nav.Link
                            style={{ fontWeight: "700", fontSize: "14px" }}
                            href="#deets" className='text-white'>LOGIN</Nav.Link>
                        <Button variant="outline-light rounded-pill border border-2"
                            style={{ fontWeight: "700", fontSize: "14px" }}
                        >SIGN UP</Button>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Header;