import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';
import Footer from './footer';

class Deals extends Component {

    render() {
        return (
            <NavDropdown title="Deals" className="menu-dropdown">
                <div className="dropdown m-4" id="dropdown-deals">

                </div>

                <Footer/>
            </NavDropdown>
        );
    }
}


export default Deals;