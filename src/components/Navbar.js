import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'
import { Link } from 'react-router-dom';

class NavbarT extends React.Component{
    render(){
        return(
            <Navbar bg="light" expand="lg" className="navbar mb-5">
                <Navbar.Brand as={Link} to="/"><img src="https://trello-attachments.s3.amazonaws.com/5ee24c86a36ad553774495fd/5ee2508e8bb9d55b1d8372de/8754c88ebb21f006040cc5669f8a15fe/logo256.png" alt="Team Tomato"></img>Team Tomato</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="borderBottom" as={Link} to="/" active="true">Our Solutions</Nav.Link>
                        <Nav.Link className="borderBottom" as={Link} to="/Contributions">Contributions</Nav.Link>
                        <Nav.Link className="borderBottom" as={Link} to="/Articles">Our Articles</Nav.Link>
                        <Nav.Link className="borderBottom" as={Link} to="/About Us">About Us</Nav.Link>
                        <Nav.Link className="borderBottom" as={Link} to="/Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavbarT;