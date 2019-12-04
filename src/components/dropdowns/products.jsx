import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap';
import Footer from './footer';

class Products extends Component {

    render() {
        return (
            <NavDropdown title="Products" className="menu-dropdown">
                <div className="dropdown m-4" id="dropdown-products">
                    <div className="row mb-4">
                        <div className="col dropdown-col-header">Featured</div>
                        <div className="col dropdown-col-header">All Categories</div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                    </div>

                    <div className="row mb-3">

                        <a className="col dropdown-item-primary"  href="/yee-haw-monday">Yee-Haw Monday</a>

                        <img
                            className="dropdown-item-icon"
                            src="home.svg"
                        />
                        <a className="col dropdown-item-sub" href="/Houses">Houses</a>
                        <a className="col dropdown-item-sub" href="/">Cactuses</a>
                        <a className="col dropdown-item-sub" href="/">Boots</a>
                    </div>

                    <div className="row">
                        <a className="col dropdown-item-primary"  href="/gift-ideas">Gift Ideas</a>
                        <a className="col dropdown-item-sub" href="/">Guns</a>
                        <a className="col dropdown-item-sub" href="/">Hats</a>
                        <a className="col dropdown-item-sub" href="/">Horses</a>
                    </div>


                </div>

                <Footer/>
            </NavDropdown>
        );
    }
}


export default Products;