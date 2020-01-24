import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';

import store from '../images/store.svg';
import cart from '../images/cart.svg';


import SearchBar from "./dropdowns/searchBar";

class Navbar extends Component {
  render () {
    return (
      <Navbar id="navbar">
        <SearchBar/>
        
        <Nav className="ml-auto">
          <img
            height="40px"
            src={ store }
            alt=""
          />
          
          <Nav.Link
            href="/localstore"
            style={ { fontWeight: 'bold' } }
          >
            Austin, TX
          </Nav.Link>
          
          <Nav.Link
            href="/localstore"
            className="navbar-localstore"
            style={ { fontStyle: 'italic', fontSize: '13px' } }
          >
            Open till 9 pm
          </Nav.Link>
          
          <img
            className="ml-2"
            height="40px"
            src={ cart }
            alt=""
          />
          <Nav.Link href="/cart">Wagon</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navbar;
// --------------------------------------------------------------------------------------------------
