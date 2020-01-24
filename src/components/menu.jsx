import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

import Products from "./dropdowns/products.jsx";
import Brands from "./dropdowns/brands.jsx";
import Deals from "./dropdowns/deals.jsx";
import Services from "./dropdowns/services.jsx";
import Account from "./dropdowns/account.jsx";
import ShoppingHistory from "./dropdowns/shoppingHistory.jsx";
import OrderStatus from "./dropdowns/orderStatus.jsx";


import '../styles/menu.scss';
import '../styles/dropdowns.scss';

const Menu = () => {
  return (
    <Navbar id="menu-container" className="mt-1">
      <Nav className="mr-auto leftMenu">
        <Products/>
        <Brands/>
        <Deals/>
        <Services/>
      </Nav>
      
      <Nav className="ml-auto rightMenu">
        <Account/>
        <ShoppingHistory/>
        <OrderStatus/>
        <Nav.Link href="/saved-items">Saved Items</Nav.Link>
      </Nav>
    </Navbar>
  )
};

export default Menu;
