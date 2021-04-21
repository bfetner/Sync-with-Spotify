import React from 'react';
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>SYNC MUSIC STREAMING</h4>
                        <ul className="list-unstyled">
                            <li>111-111-1111</li>
                            <li>City, Country</li>
                            <li>Street Number Street Name</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>CONTACT INFORMATION</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/Contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/Aboutus">The Creators</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>LEGAL</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="">Terms of Service</Link>
                            </li>
                            <li>
                                <Link to="">Privacy</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <hr/>
                <div className="row" style={{paddingLeft: '15px'}}>
                    <p>
                        &copy; {new Date().getFullYear()} SYNC MUSIC STREAMING INC. | All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;