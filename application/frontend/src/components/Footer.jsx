import React, {useState} from 'react';
import "../css/Footer.css";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Checkbox,Modal,Button } from "antd";

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

    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col" style={{paddingRight: '5rem'}}>
                        <h4 style={{color: 'var(--color3)'}}>SYNC MUSIC STREAMING</h4>
                        <ul className="list-unstyled">
                            <li>111-111-1111</li>
                            <li>City, Country</li>
                            <li>Street Number Street Name</li>
                        </ul>
                    </div>
                    <div className="col" style={{paddingRight: '8rem'}}>
                        <h4 style={{color: 'var(--color3)'}}>CONTACT INFORMATION</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/Contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/Aboutus">The Creators</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col" >
                        <h4 style={{color: 'var(--color3)'}}>LEGAL</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link onClick={() => showModal()}>Terms of Service</Link>
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
            <Modal
                title="Terms of Service" 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: "none" } }}
                okText="OK"
                >
                    <p>Information you provide to us about yourself, or that we collect and infer based upon your entries and posts to <strong>Sync</strong>  may be used to improve your user experience, provide or suggest targeted services and to allow third party advertises and messaging to be tailored or targeted. We may use or provide to third parties aggregated data entered by users or inferred from usage. We may collect IP addresses and cookies for the primary purpose of assisting with ease of use by you. However, except as legally required, we will not sell or provide your email address, IP address, cookies, address or phone number to third parties for advertising or other purposes. In the future we may provide third parties with the ability to provide customizable or targeted advertising or messages and in such cases we may allow third party applications to access your user data in determining the messaging or advertising applicable to you. 
            </p>
                </Modal>
        </div>
    )
}

export default Footer;