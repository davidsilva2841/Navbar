import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Footer from './footer';

import westBull from '../../images/westBull.svg';
import rodeoWear from '../../images/rodeoWear.svg';
import yeeHawGear from '../../images/yeeHawGear.svg';
import prospectingPro from '../../images/prospectingPro.svg';
import wildHorses from '../../images/wildHorses.svg';


const getBrand = (title, image, href) => {
  return (
    <div className="col text-center">
      <img src={ image } className="brands-image p-2" alt="Logo"/>
      <a href={ href } className="brand-name">{ title }</a>
    </div>
  )
};

class Brands extends Component {
  render () {
    return (
      <NavDropdown title="Brands" className="menu-dropdown">
        <div className="dropdown navbar-dropdown-menu " id="dropdown">
          <div className="dropdown-col-header dropdown-content">Brand Shops</div>
          <div className="row mb-5">
            { getBrand('West Bull', westBull, '/west-bull') }
            { getBrand('Rodeo Wear', rodeoWear, '/rodeo-wear') }
            { getBrand('Yee-Haw Gear', yeeHawGear, '/yee-haw-gear') }
            { getBrand('Prospecting Pro', prospectingPro, '/prospecting-pro') }
            { getBrand('Wild Horses', wildHorses, '/wild-horses') }
          </div>
          <Footer/>
        </div>
      
      </NavDropdown>
    );
  }
}


export default Brands;
