
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import header from "./header.module.css"
import image from '../images/logo.jpg'



const Header = () => {



    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className={header.header}>

                        <Navbar.Brand ><img className={header.img} src={image} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                     
                            <Nav className="me-auto "  >
                                <Nav.Link href="">Home</Nav.Link>
                                <Nav.Link href="">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    
                    

                </Container>
            </Navbar>


        </>
    )
}
export default Header