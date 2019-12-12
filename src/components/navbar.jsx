import React from "react";
import {Navbar, Nav, Form, InputGroup} from 'react-bootstrap';

import store from '../assets/store.svg';
import cart from '../assets/cart.svg';

const NavBar = (props) => {
    return (
        <Navbar id="navbar">
            <Form inline>
                {/* TODO: Add search bar features */}
                <Form.Control
                    id="searchBar"
                    onChange={props.onSearchChange}
                    type="text"
                    placeholder="Search West Buy"
                />
            </Form>
            <Nav className="ml-auto">
                <img
                    height="40px"
                    src={store}
                    alt=""
                />

                {/* TODO: Add local store functionality */}
                <Nav.Link href="/localstore" style={{fontWeight: 'bold'}}>Austin, TX</Nav.Link>
                <Nav.Link href="/localstore" className="navbar-localstore" style={{fontStyle: 'italic', fontSize: '13px'}}>Open till 9 pm</Nav.Link>

                <img
                    className="ml-2"
                    height="40px"
                    src={cart}
                    alt=""
                />
                <Nav.Link href="/cart">Cart</Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default NavBar;
