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
    <div className="main-landing">
      <figure className="position-relative">
        <div className="logo-flex">
          <figcaption className="logo">
            <img src="../assets/logoImage2.png" style={{ width: "135px", marginRight: "10px" }}></img>
          </figcaption>
        </div>
        <div className="fig-flex">

          <figcaption className="banner">Welcome to SYNC!</figcaption>
          <figcaption className="subtext1">
            Share your spotify songs in one of our listening rooms!
          </figcaption>
          <figcaption className="subtext2">
            Listen to music and chat with friends and the community!
          </figcaption>

          <figcaption className="landingButton">
            <Link

              class="btn btn-dark sync-button-color landingButton-text"
              
              size="lg"
              onClick={() => showModal()}
            >
              Continue to SYNC
          </Link>

          </figcaption>
        </div>

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
      </Modal>
      <FaqComponent />
      <Footer />
    </div>
  );
};

export default Landing;
