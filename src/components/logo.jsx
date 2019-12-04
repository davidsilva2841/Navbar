import React from "react";
import {Navbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';


const Logo = () => {
    return (
        <div id="logo-container">
            <Navbar.Brand href="/" id="logo" className="ml-4 mt-4">
                <span style={{display: 'block'}} className="navbar-logo">WEST</span>
                <span  className="navbar-logo sub">BUY</span>
                <img
                    alt=""
                    height="80"
                    src="logo.svg"
                />
            </Navbar.Brand>
        </div>

    )
};

export default Logo;