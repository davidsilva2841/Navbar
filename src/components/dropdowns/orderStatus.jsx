import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';

import orderStatus from '../../images/orderStatus.svg';

class OrderStatus extends Component {
  render () {
    return (
      <NavDropdown title="Order Status" className="menu-dropdown">
        <div className="dropdown navbar-dropdown-menu" id="dropdown-order-status">
          <div className="dropdown-content row m-2">
            <img src={ orderStatus } alt="" className="icon m-2"/>
            <div className="title mb-1">Order Status</div>
          </div>
        </div>
      
      </NavDropdown>
    );
  }
}


export default OrderStatus;
