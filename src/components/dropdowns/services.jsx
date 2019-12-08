import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap';
import Footer from './footer';

class Services extends Component {

    render() {
        return (
            <NavDropdown title="Services" className="menu-dropdown">
                <div className="dropdown m-4 navbar-dropdown-menu" id="dropdown-services">

                </div>

                <Footer/>
            </NavDropdown>
        );
    }
}


export default Services;