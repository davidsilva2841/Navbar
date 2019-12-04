import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap';
import Footer from './footer';

class Brands extends Component {

    render() {
        return (
            <NavDropdown title="Brands" className="menu-dropdown">
                <div className="dropdown m-4" id="dropdown">

                </div>

                <Footer/>
            </NavDropdown>
        );
    }
}


export default Brands;