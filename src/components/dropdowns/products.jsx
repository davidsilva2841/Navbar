import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap';
import Footer from './footer';

import prospecting from '../../assets/prospecting.svg';
import homeDecor from '../../assets/homeDecor.svg';
import guns from '../../assets/guns.svg';
import westernWear from '../../assets/westernWear.svg';
import cabins from '../../assets/cabins.svg';
import horses from '../../assets/horses.svg';


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

                        <img className="dropdown-item-icon" src={westernWear}/>
                        <a className="col dropdown-item-sub" href="/western-wear">Western Wear</a>

                        <img className="dropdown-item-icon" src={guns}/>
                        <a className="col dropdown-item-sub" href="/guns">Guns</a>

                        <img className="dropdown-item-icon" src={horses}/>
                        <a className="col dropdown-item-sub" href="/horses">Horses</a>
                    </div>

                    <div className="row">
                        <a className="col dropdown-item-primary"  href="/">Gift Ideas</a>

                        <img className="dropdown-item-icon" src={cabins}/>
                        <a className="col dropdown-item-sub" href="/cabins">Cabins</a>

                        <img className="dropdown-item-icon" src={prospecting}/>
                        <a className="col dropdown-item-sub" href="/prospecting">Prospecting</a>

                        <img className="dropdown-item-icon" src={homeDecor}/>
                        <a className="col dropdown-item-sub" href="/home-decor">Home Decor</a>
                    </div>


                </div>

                <Footer/>
            </NavDropdown>
        );
    }
}


export default Products;