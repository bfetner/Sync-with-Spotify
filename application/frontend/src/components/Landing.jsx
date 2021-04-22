import React, {
  Component,
  useState,
  Box,
  Flex,
  ImageBackground,
  View,
  Text,
} from "react";
import { Form, Input, Checkbox, Modal, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

import Background from "../assets/bg.jpg";
import { Header } from "antd/lib/layout/layout";
import FAQ from "./FAQ";
import "../css/Landing.css";
import FaqComponent from "./FaqComponent";
import Footer from "./Footer";
import ToS from "./ToS"

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
            onClick={() => showModal()}
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
        <ToS />
        {/*<h3>Contact Us</h3>
          <p>If you have any questions about these Terms and Conditions, You can contact us:
                    </p>
                    <p>By visiting this page on our website: <Link to='/Contact'>http://localhost:3000/Contact</Link></p>
          */}

      </Modal>
      <FaqComponent />
      <Footer />
    </div>
  );
};

export default Landing;
