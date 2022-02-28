import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <img src="/logo.png" alt="Travel Insider" width="250px" /></Navbar.Brand>
                    <Nav className="ms-auto">
                        <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to="/features"><Nav.Link>Features</Nav.Link></LinkContainer>
                        <LinkContainer to="/locations"><Nav.Link>Locations</Nav.Link></LinkContainer>
                        <LinkContainer to="/about"><Nav.Link>About Us</Nav.Link></LinkContainer>
                        <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;