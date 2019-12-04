import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';
import Footer from './footer';

class Services extends Component {

    render() {
        return (
            <NavDropdown title="Services" className="menu-dropdown">
                <div className="dropdown m-4" id="dropdown-services">

                </div>

                <Footer/>
            </NavDropdown>
        );
    }
}


export default Services;