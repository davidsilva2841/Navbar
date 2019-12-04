import React from 'react';

const Footer = () => {
    return (
        <div className="dropdown-footer p-2">
            <div className="row">
                <div className="col text-center">
                    <a href="/price-match" className="footer-link">Free shipping on everything</a>
                </div>

                <div className="col text-center">
                    <a href="/price-match" className="footer-link">Fast store pickup</a>
                </div>

                <div className="col text-center">
                    <a href="/price-match" className="footer-link">Price Match Gaurantee</a>
                </div>
            </div>
        </div>

    );
};

export default Footer;