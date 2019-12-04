import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap';

class ShoppingHistory extends Component {

    render() {
        return (
            <NavDropdown title="Shopping History" className="menu-dropdown">
                <div className="dropdown m-4" id="dropdown">

                </div>

            </NavDropdown>
        );
    }
}


export default ShoppingHistory;