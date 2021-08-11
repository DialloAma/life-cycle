import React from 'react';
import {Navbar, Container,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navb = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React Movies</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Class">Class</Nav.Link>
                        <Nav.Link as={Link} to="/Function">Funtion</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
}

export default Navb;
