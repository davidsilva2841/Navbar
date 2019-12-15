import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap';
import Footer from './footer';

const getLink = (title, href) => {
    return <div className="row mt-3"><a href={href} className="link">{title}</a></div>;
};

class Services extends Component {

    render() {
        return (
            <NavDropdown title="Services" className="menu-dropdown">
                <div className="dropdown navbar-dropdown-menu" id="dropdown-services">
                    <div className="row dropdown-content">
                        <div className="col-8" id="left-container">
                            <div className="row">
                                <div className="col-3 m-3">
                                    <div className="row title">Get Support</div>
                                    {getLink('Chat with a western agent', '/href')}
                                    {getLink('Schedule a Service', '/href')}
                                    {getLink('Check Repair Status', '/href')}
                                </div>
                                <div className="col-7 m-3">
                                    <div className="row title">Learn About Installation, Setup & Repair</div>
                                    <div className="row">
                                        <div className="col">
                                            {getLink('Cowboy Certified Repair', '/href')}
                                            {getLink('Appliance Services', '/href')}
                                            {getLink('Cattle Services', '/href')}
                                        </div>
                                        <div className="col">
                                            {getLink('Home Services', '/href')}
                                            {getLink('Banking Services', '/href')}
                                            {getLink('See All Services', '/href')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 m-3" id="right-container">
                            <div className="row title">Protection & Support Plans</div>
                            {getLink('Total Western Support', '/href')}
                            {getLink('24/7 Membership Plans', '/href')}

                            <div className="row title mt-4">Additional Services</div>
                            {getLink('Trade In Your Cattle', '/href')}
                            {getLink('Haul Away', '/href')}
                        </div>
                    </div>

                    <Footer/>
                </div>

            </NavDropdown>
        );
    }
}


export default Services;