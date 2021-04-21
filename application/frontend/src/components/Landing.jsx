import React, {
  Component,
  useState,
  Box,
  Flex,
  ImageBackground,
  View,
  Text,
} from "react";
import { Form, Input, Checkbox,Modal,Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

import Background from "../assets/bg.jpg";
import { Header } from "antd/lib/layout/layout";
import FAQ from "./FAQ";
import "../css/Landing.css";
import FaqComponent from "./FaqComponent";
import Footer from "./Footer";

const Landing = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    history.push('/Home')
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  return (
    <div>
      <figure className="position-relative">
        <img
          src={Background}
          alt="bg"
          className="img-fluid"
          style={{ filter: "brightness(30%)", width: "100%", height: "740px" }}
        />
        <figcaption className="logo">
          <img src="../assets/logoImage2.png" style={{ width: "135px", marginRight: "10px" }}></img>
        </figcaption>
        <figcaption className="banner">Welcome to Sync!</figcaption>
        <figcaption className="subtext1">
          Share your spotify songs in one of our listening rooms!
          <br />
          Listen to music and chat with friends and the community!
        </figcaption>
        
        <figcaption className="landingButton">
          <Link
           
            class="btn btn-dark sync-button-color"
            style={{ marginBottom: "30px", fontSize: '1.5rem' }}
            size="lg"
            onClick ={()=>showModal()}
          >
            Log in with Spotify
          </Link>
          
  </figcaption>
       
      </figure> 
      
      <Modal 
            title="Terms of Service" 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
            cancelButtonProps={{ style: { display: "none" } }}
            okText="Accept"
            
            
          >
            <p>Information you provide to us about yourself, or that we collect and infer based upon your entries and posts to <strong>Sync</strong>  may be used to improve your user experience, provide or suggest targeted services and to allow third party advertises and messaging to be tailored or targeted. We may use or provide to third parties aggregated data entered by users or inferred from usage. We may collect IP addresses and cookies for the primary purpose of assisting with ease of use by you. However, except as legally required, we will not sell or provide your email address, IP address, cookies, address or phone number to third parties for advertising or other purposes. In the future we may provide third parties with the ability to provide customizable or targeted advertising or messages and in such cases we may allow third party applications to access your user data in determining the messaging or advertising applicable to you. 
     {/* <br></br><strong>Sync</strong> is a platform. By nature, our platform helps our customers create interactive marketing campaigns including contests and sweepstakes. By doing so our customers can collect Personal Information from users including name, email and user-generated content. If you participate in a campaign created by a cellphone.com customer using the cellphone.com Platform your information is bound by the privacy policy and terms of the cellphone.com customer who created the campaign as well as cellphone.com's policies. Our customers may choose to transfer your Personal Information into their systems.*/}


            </p>
            
          </Modal>
      <FaqComponent />
      <Footer />
    </div>
  );
};

export default Landing;
