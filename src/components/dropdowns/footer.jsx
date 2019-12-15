import React from 'react';

import shipping from '../../assets/shipping.svg';
import fastPickup from '../../assets/fastPickup.svg';
import priceMatch from '../../assets/priceMatch.svg';

const Footer = () => {
    return (
        <div className="dropdown-footer-container container">
            <div className="dropdown-footer row justify-content-md-center">
                <div className="col text-center">
                    <img
                        className="m-2"
                        height="27px"
                        src={shipping}
                        alt=""
                    />
                    <a href="/price-match" className="link">Free shipping on everything</a>
                </div>

                <div className="col text-center middle-footer">
                    <img
                        className="m-2"
                        height="27px"
                        src={fastPickup}
                        alt=""
                    />
                    <a href="/price-match" className="link">Fast store pickup</a>
                </div>

                <div className="col text-center">
                    <img
                        className="m-2"
                        height="27px"
                        src={priceMatch}
                        alt=""
                    />
                    <a href="/price-match" className="link">Price Match Gaurantee</a>
                </div>
            </div>
        </div>

    );
};

export default Footer;