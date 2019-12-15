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
                    <div className="dropdown navbar-dropdown-menu" id="dropdown-account">
                        <div className="row m-2" id="account-row">
                            <div className="col-3 column-1">
                                <a href="/content" className="row">Track Order</a>
                                <a href="/content" className="row">Purchases</a>
                                <a href="/content" className="row">Digital Library</a>
                                <a href="/content" className="row"> Rewards</a>
                                <a href="/content" className="row">Manage Your Account</a>
                                <a href="/content" className="row">Credit Cards</a>
                                <a href="/content" className="row">Check Repair Status</a>
                                <a href="/content" className="row">Plans & Services</a>
                            </div>
                            <div className="col-4 column-2">
                                <div className="row title">Welcome!</div>
                                <div className="row message">Sign in to see your rewards, coins and offers.</div>
                                <div className="button-container"><button className="button">Sign in</button></div>
                            </div>
                            <div className="col-4 column-3">
                                <div className="row title">Create An Account</div>
                                <div className="row">Exclusive member-only offers</div>
                                <div className="row">Rewards for your purchases</div>
                                <div className="row">Saved purchase history</div>
                                <div className="button-container"><button className="button">Sign in</button></div>
                            </div>
                        </div>
                    </div>

                </NavDropdown>
            </React.Fragment>
        );
    }
}


export default Account;
