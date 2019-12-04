import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';

class Account extends Component {

    render() {
        return (
            <NavDropdown title="Account" className="menu-dropdown">
                <div className="dropdown m-4" id="dropdown">

                </div>

            </NavDropdown>
        );
    }
}


export default Account;