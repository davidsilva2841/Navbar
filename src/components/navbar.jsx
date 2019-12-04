import React from "react";
import {Navbar, Nav, Form} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar id="navbar">
            <Form inline>
                {/* TODO: Add search bar features */}
                <Form.Control type="text" placeholder="Search West Buy" className="mr-sm-2" id="searchBar" />
            </Form>
            <Nav className="ml-auto">
                {/* TODO: Update logo */}
                <img
                    height="40px"
                    src="store.svg"
                    alt=""
                />

                {/* TODO: Add local store functionality */}
                <Nav.Link href="/localstore" className="navbar-localstore">Austin, TX</Nav.Link>
                <Nav.Link href="/cart">Cart</Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default NavBar;
