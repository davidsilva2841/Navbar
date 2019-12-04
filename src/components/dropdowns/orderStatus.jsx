import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';

class OrderStatus extends Component {

    render() {
        return (
            <NavDropdown title="Order Status" className="menu-dropdown">
                <div className="dropdown m-4" id="dropdown">

                </div>

            </NavDropdown>
        );
    }
}


export default OrderStatus;