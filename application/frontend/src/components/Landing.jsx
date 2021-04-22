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
import "../css/Create.css"

const Landing = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const history = useHistory();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showErrorModal = () => {
    setIsErrorVisible(true);
  };

  const handleOk = () => {
    history.push('/Home')
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleErrorCancel = () => {
    setIsErrorVisible(false);
  }

  const formItemLayout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 0,
    },
  };

  const otherItemLayout = {
    wrapperCol: {
      span: 0,
      offset: 5,
    },
  };

  const [tosStatus, setTosStatus] = useState(false);
  const [modalTosStatus, setModalTosStatus] = useState();
  const [modalMessage, setModalMessage] = useState();

  const confirmTos = () => {
    setTosStatus(!tosStatus);
  };

  const onClickFunks = () => {
    const clickTosStatus = tosStatus;

    setModalTosStatus(clickTosStatus);

    setModalMessage("");
    if (!clickTosStatus) {
      setModalMessage("You must accept the terms for service.");
      showErrorModal();
    } else {
      history.push('/Home')
    }
  }

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
            onClick={() => onClickFunks()}
          >
            Continue to SYNC
          </Link>

        </figcaption>
        <Form>
            <Form.Item className="text-color">
              <Checkbox
                onChange={confirmTos}
                required="required"
                className="text-color"
              >
              </Checkbox>
              &nbsp;&nbsp;Click here to accept our{" "}
              <a onClick={() => showModal()} style={{ color: "var(--color3)" }}>
                Terms of Service
          </a>.
            </Form.Item>
          </Form>
      </div>

    </figure>
    <Modal
      title="Terms of Service"
      visible={isModalVisible}
      onOk={handleCancel}
      onCancel={handleCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okText="OK"
    >
      <ToS />
    </Modal>
    <Modal
        visible={isErrorVisible}
        onOk={handleErrorCancel}
        onCancel={handleErrorCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okText="OK"
      >
        <p style={{ color: "red" }}>You must accept the Terms of Service to continue.</p>
      </Modal>
    <FaqComponent />
    <Footer />
  </div>
);
};

export default Landing;
