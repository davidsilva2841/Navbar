import React from "react";
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';


const NavBar = () => {
    return (
        <div id="navbar-container">

            <Navbar.Brand href="/" id="navbar-logo">
                <h2
                    style={{
                        color: 'white',
                        fontWeight: 'bold'
                    }}
                >
                    WEST BUY
                </h2>
                <img
                    alt=""
                    width="60"
                    height="60"
                    src="logo.gif"
                />
            </Navbar.Brand>

            <div id="navbar">
                <Navbar>
                    <Navbar id="basic-navbar-nav" className="ml-auto">
                        <Nav>
                            <Nav.Link href="/topdeals">Top Deals</Nav.Link>
                            <Nav.Link href="/dealoftheday">Deal of the Day</Nav.Link>
                            <Nav.Link href="/creditcards">Credit Cards</Nav.Link>
                            <Nav.Link href="/foryourbusiness">For Your Business</Nav.Link>
                            <Nav.Link href="/giftcards">Gift Cards</Nav.Link>
                            <Nav.Link href="/giftideas">Gift Ideas</Nav.Link>
                        </Nav>
                    </Navbar>
                </Navbar>

                <Navbar>
                    <Form inline>
                        <FormControl type="text" placeholder="Search West Buy" className="mr-sm-2" />
                    </Form>
                </Navbar>
            </div>
        </div>
    )
};

export default NavBar;


