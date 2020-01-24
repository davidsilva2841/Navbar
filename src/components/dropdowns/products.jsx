import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Footer from './footer';
import Category from "./category";

import prospecting from '../../images/prospecting.svg';
import homeDecor from '../../images/homeDecor.svg';
import guns from '../../images/guns.svg';
import westernWear from '../../images/westernWear.svg';
import cabins from '../../images/cabins.svg';
import horses from '../../images/horses.svg';
import cattle from '../../images/cattle.svg';
import farmSupplies from '../../images/farmSupplies.svg';
import hats from '../../images/hats.svg';

const featured = (title, href) => {
  return <a className="row dropdown-item-primary mt-2" href={ href }>{ title }</a>
};

class Products extends Component {
  render () {
    return (
      <NavDropdown title="Products" className="menu-dropdown">
        <div className="dropdown navbar-dropdown-menu" id="dropdown-products">
          <div className="row dropdown-content">
            <div className="col-2 ml-4" id="products-featured-col">
              <div className="row dropdown-col-header">Featured</div>
              { featured('Yee-Haw Monday', '/yee-haw-monday') }
              { featured('Western Deals', '/western-deals') }
              { featured('Gift Ideas', '/gift-ideas') }
              { featured('Western Favorites', '/western-favorites') }
            </div>
            <div className="col ml-4">
              <div className="row dropdown-col-header">All Categories</div>
              { Category('Cabins', cabins, '/cabins') }
              { Category('Prospecting', prospecting, '/prospecting') }
              { Category('Home Decor', homeDecor, '/home-decor') }
            
            </div>
            <div className="col">
              <div className="row"><br/></div>
              { Category('Western Wear', westernWear, '/western-wear') }
              { Category('Horses', horses, '/horses') }
              { Category('Guns', guns, '/guns') }
            </div>
            <div className="col">
              <div className="row"><br/></div>
              { Category('Cattle', cattle, '/cattle') }
              { Category('Farm Supplies', farmSupplies, '/farm-supplies') }
              { Category('Hats', hats, '/hats') }
            </div>
          </div>
          <Footer/>
        </div>
      </NavDropdown>
    );
  }
}

export default Products;
