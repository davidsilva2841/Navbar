import React from "react";
import {Navbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';


const NavBar = () => {
    return (
        <Navbar id="navbar">
            <Form inline>
                <Form.Control type="text" placeholder="Search West Buy" className="mr-sm-2" id="searchBar" />
            </Form>
            <Nav className="ml-auto">
                <img
                    height="40px"
                    src="store.svg"
                    alt=""
                />
                <Nav.Link href="/localstore" className="navbar-localstore">Austin, TX</Nav.Link>
                <Nav.Link href="/cart">Cart</Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default NavBar;


