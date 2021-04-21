import React, {
  Component,
  useState,
  Box,
  Flex,
  ImageBackground,
  View,
  Text,
} from "react";
import { Form, Input, Checkbox } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import { CardDeck, Button, Container } from "react-bootstrap";
import Background from "../assets/bg.jpg";
import { Header } from "antd/lib/layout/layout";
import FAQ from "./FAQ";
import "../css/Landing.css";
import FaqComponent from "./FaqComponent";
import Footer from "./Footer";

const Landing = () => {
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
            to="/Home"
            class="btn btn-dark sync-button-color"
            style={{ marginBottom: "30px", fontSize: '1.5rem' }}
            size="lg"
          >
            Log in with Spotify
          </Link>
        </figcaption>
      </figure>
      <FaqComponent />
      <Footer />
    </div>
  );
};

export default Landing;
