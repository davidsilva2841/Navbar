import React from "react";
import {Navbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';


const NavBar = () => {
    return (
        <div id="navbar-container">

            <Navbar.Brand href="/" id="navbar-logo" className="ml-4">
                <h2
                    style={{
                        color: 'white',
                        fontFamily: 'Passion One',
                        fontWeight: '700',
                        margin: '10px 0 0 0'
                    }}
                >
                    <span>WEST</span>
                    <br/>
                    <span>BUY</span>
                    <img
                        alt=""
                        width="60"
                        height="60"
                        src="logo.svg"
                    />
                </h2>

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
                    <Nav className="ml-auto">
                        <Nav.Link href="/localstore">Austin, TX </Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                    </Nav>
                </Navbar>

                <Navbar>
                    <Nav>
                        <NavDropdown title="Products">

                        </NavDropdown>
                    </Nav>
                </Navbar>

            </div>
        </div>
    )
};

export default NavBar;


