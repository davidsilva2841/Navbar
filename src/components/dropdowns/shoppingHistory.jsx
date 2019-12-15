import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap';

import shoppingHistory from '../../assets/shoppingHistory.svg';

class ShoppingHistory extends Component {

    render() {
        return (
            <NavDropdown title="Shopping History" className="menu-dropdown">
                <div className="dropdown navbar-dropdown-menu" id="dropdown-shopping-history">
                    <div className="dropdown-content">
                        <div className="row m-2">
                            <div className="col title">
                                <img src={shoppingHistory} alt="" className="icon m-2"/>
                                <div className="title">Shopping History</div>
                            </div>
                            <a href="/content" className="col-7  p-2 message">See your full shopping history</a>
                        </div>
                        <div className="row m-2 sep"></div>
                    </div>
                </div>

            </NavDropdown>
        );
    }
}


export default ShoppingHistory;