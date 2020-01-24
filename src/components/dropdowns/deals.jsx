import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';

import Category from "./category";
import Footer from './footer';
import westernWear from "../../images/westernWear.svg";
import horses from "../../images/horses.svg";
import guns from "../../images/guns.svg";
import cattle from "../../images/cattle.svg";
import farmSupplies from "../../images/farmSupplies.svg";
import hats from "../../images/hats.svg";
import cactus from "../../images/cactus.svg";
import rockSolidDeals from "../../images/rockSolidDeals.svg";
import luckyDeals from "../../images/luckyDeals.svg";
import explosiveDeals from "../../images/explosiveDeals.svg";
import smokinDeals from "../../images/smokinDeals.svg";
import litDeals from "../../images/litDeals.svg";
import premiumDeals from "../../images/premiumDeals.svg";
import cabins from "../../images/cabins.svg";
import prospecting from "../../images/prospecting.svg";
import homeDecor from "../../images/homeDecor.svg";


const getDeal = (title, image, href, details) => {
  return (
    <a href={ href } className="m-4">
      <img src={ image } className="deals-image row" alt="Logo"/>
      <div className="deals-title row">{ title }</div>
      <div className="details row">{ details }</div>
    </a>
  )
};


class Deals extends Component {
  
  render () {
    return (
      <NavDropdown title="Deals" className="menu-dropdown">
        <div className="dropdown navbar-dropdown-menu" id="dropdown-deals">
          <div className="row dropdown-content">
            <div className="col">
              <div className="row">
                { getDeal('Explosive Deals', explosiveDeals, '/cactus', 'These deals will blow your mind!') }
              </div>
              <div className="row">
                { getDeal('Rock Solid Deals', rockSolidDeals, '/deal1', 'Solid deals') }
              </div>
            </div>
            <div className="col">
              <div className="row">
                { getDeal('Lucky Deals', luckyDeals, '/deal1', 'Feeling lucky today? Come check out these deals') }
              </div>
              <div className="row">
                { getDeal('Smokin\' Deals', smokinDeals, '/deal1', 'Hot deals, limited time only!') }
              </div>
            </div>
            <div className="col">
              <div className="row">
                { getDeal('Lit Deals', litDeals, '/deal1', `Light up your world with these deals`) }
              </div>
              <div className="row">
                { getDeal('Premium Deals', premiumDeals, '/deal1', 'Get those premium products for cheap') }
              </div>
            </div>
            <div className="col">
              <div className="row dropdown-col-header">Deals By Category</div>
              { Category('Western Wear', westernWear, '/western-wear') }
              { Category('Horses', horses, '/horses') }
              { Category('Guns', guns, '/guns') }
              { Category('Prospecting', prospecting, '/prospecting') }
              { Category('Home Decor', homeDecor, '/home-decor') }
            </div>
            <div className="col ml-2">
              <div className="row"><br/></div>
              { Category('Cattle', cattle, '/cattle') }
              { Category('Farm Supplies', farmSupplies, '/farm-supplies') }
              { Category('Hats', hats, '/hats') }
              { Category('Cabins', cabins, '/cabins') }
            </div>
          </div>
          <Footer/>
        </div>
      
      </NavDropdown>
    );
  }
}


export default Deals;
