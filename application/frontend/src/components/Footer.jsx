import React, { useState } from 'react';
import "../css/Footer.css";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Checkbox, Modal, Button } from "antd";
import ToS from './ToS'

const Footer = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col" style={{ paddingRight: '5rem' }}>
                        <h4 style={{ color: 'var(--color3)' }}>SYNC MUSIC STREAMING</h4>
                        <ul className="list-unstyled">
                            <li>111-111-1111</li>
                            <li>City, Country</li>
                            <li>Street Number Street Name</li>
                        </ul>
                    </div>
                    <div className="col" style={{ paddingRight: '8rem' }}>
                        <h4 style={{ color: 'var(--color3)' }}>CONTACT INFORMATION</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/Aboutus">The Creators</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col" >
                        <h4 style={{ color: 'var(--color3)' }}>LEGAL</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link onClick={() => showModal()}>Terms of Service</Link>
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
                <hr />
                <div className="row" style={{ paddingLeft: '15px' }}>
                    <p>
                        &copy; {new Date().getFullYear()} SYNC MUSIC STREAMING INC. | All rights reserved
                    </p>
                </div>
            </div>
            <Modal
                title="Terms of Service"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: "none" } }}
                okText="OK"
            >
                <ToS/>
            </Modal>
        </div>
    )
}

export default Footer;