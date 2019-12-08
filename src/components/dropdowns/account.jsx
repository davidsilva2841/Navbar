import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

import account from '../../assets/account.svg';
import cart from "../../assets/cart.svg";

class Account extends Component {

    render() {
        return (
            <React.Fragment>
            <img
                className="ml-2"
                height="30px"
                src={account}
                alt=""
            />
            <NavDropdown title="Account" className="menu-dropdown">
                <div className="dropdown m-4 navbar-dropdown-menu" id="dropdown">

                </div>

            </NavDropdown>
            </React.Fragment>
        );
    }
}


export default Account;
