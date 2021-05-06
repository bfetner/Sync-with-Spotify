<<<<<<< HEAD
import React, {
  Component,
  useState,
  Box,
  Flex,
  ImageBackground,
  View,
  Text,
  useEffect,
} from "react";
import { Form, Input, Checkbox, Modal, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
=======
import React, { useState, useEffect } from "react";
import { Form, Input, Checkbox, Modal, Button } from "antd";
import { Link, useHistory, Redirect } from "react-router-dom";
>>>>>>> QA
import Axios from "axios";

import { Header } from "antd/lib/layout/layout";
import FAQ from "./FAQ";
import "../css/Landing.css";
import FaqComponent from "./FaqComponent";
import Footer from "./Footer";
import ToS from "./ToS";
import "../css/Create.css";
<<<<<<< HEAD

import { SpotifyApiContext, User, UserTop } from "react-spotify-api";
import Cookies from "js-cookie";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import defaultPfp from "../assets/image0.png";
import TrackCard from "./TrackCard";
import { Image } from "react-bootstrap";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
import "mdbreact/dist/css/mdb.css";

const Landing = () => {
=======
import UserInfo from "./UserInfo";

import { SpotifyApiContext, User, UserTop } from "react-spotify-api";
import Cookies from "js-cookie";
import { SpotifyAuth, Scopes, SpotifyAuthListener } from "react-spotify-auth";
import { Component } from "react";

const Landing = (props) => {
>>>>>>> QA
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const history = useHistory();

<<<<<<< HEAD
  const [spotifyAuthToken, setSpotifyAuthToken] = useState();
  useEffect(() => {
    setSpotifyAuthToken(Cookies.get("spotifyAuthToken"));
    console.log(Scopes.all);
  }, [Cookies.get("spotifyAuthToken")]);

  const logout = () => {
    Cookies.remove("spotifyAuthToken", {
      path: dev ? "" : "?",
    });
    window.location = dev ? "/Landing" : "/?";
  };

  Cookies.set("username", "anonymous");

  const dev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

=======
  const userInfo = UserInfo;

  console.log(props);

  const updateCurrentUser = (updateUserInfo) => {
    const stringUpdateUserInfo = JSON.stringify(updateUserInfo);
    localStorage.setItem("currentUser", stringUpdateUserInfo);
  };

  const retrieveCurrentUser = () => {
    const stringRetrieveUserInfo = localStorage.getItem("currentUser");
    const retrieveUserInfo = JSON.parse(stringRetrieveUserInfo);
    return retrieveUserInfo;
  };

  const [spotifyAuthToken, setSpotifyAuthToken] = useState(
    Cookies.get("spotifyAuthToken")
  );

  useEffect(() => {
    setSpotifyAuthToken(Cookies.get("spotifyAuthToken"));
    /* console.log(Scopes.all); */
  }, [Cookies.get("spotifyAuthToken")]);

  const handleTokenRetrieval = (token) => {
    Axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        userInfo.userId = res.data.id;
        userInfo.displayName = res.data.display_name;
        if (res.data.images.length !== 0) {
          userInfo.profilePictureUrl = res.data.images[0].url;
        }
        userInfo.administratorStatus = false;
        userInfo.spotifyToken = token;
        userInfo.product = res.data.product;
        updateCurrentUser(userInfo);
        history.push("/Home");
      })
      .catch((er) => {
        console.log(er);
      });
  };

>>>>>>> QA
  const showModal = () => {
    setIsModalVisible(true);
  };

  const showErrorModal = () => {
    setIsErrorVisible(true);
  };

  const handleOk = () => {
<<<<<<< HEAD
    history.push("/Login");
=======
    history.push("/Home");
>>>>>>> QA
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleErrorCancel = () => {
    setIsErrorVisible(false);
  };

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
      history.push("/Home");
    }
  };

<<<<<<< HEAD
  return (
    <div className="main-landing">
=======
  var shallRedirect;
  const redirectUser = retrieveCurrentUser();
  if (redirectUser) {
    shallRedirect = retrieveCurrentUser().spotifyToken;
  }
  if (shallRedirect) {
    return <Redirect to="/Home" />;
  }
  return (
    <div className="main-landing">
      <SpotifyAuthListener
      /* onAccessToken={(token) => {
          console.log("SpotifyAuthListener");
          Axios.get("https://api.spotify.com/v1/me", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          })
            .then((res) => {
              userInfo.userId = res.data.id;
              userInfo.displayName = res.data.display_name;
              userInfo.profilePictureUrl = res.data.images[0].url;
              userInfo.administratorStatus = false;
              userInfo.spotifyToken = token;
              updateCurrentUser(userInfo);
              history.push("/Home");
            })
            .catch((er) => {
              console.log(er);
            });
        }} */
      />
>>>>>>> QA
      <figure className="position-relative">
        <div className="logo-flex">
          <figcaption className="logo">
            <img
              src="../assets/logoImage2.png"
              style={{ width: "135px", marginRight: "10px" }}
            ></img>
          </figcaption>
        </div>
<<<<<<< HEAD
        <div className="fig-flex">
          {Cookies.get("spotifyAuthToken") ? (
            <>
              <MDBRow>
                <h1 class="text-light bg-dark">Hi! How's it going?</h1>
              </MDBRow>

              <SpotifyApiContext.Provider value={spotifyAuthToken}>
                <User>
                  {(user, loading, error) =>
                    user && user.data ? (
                      <>
                        <MDBCol
                          style={{
                            maxWidth: "22rem",
                            padding: "0 0 1rem 1rem",
                          }}
                        >
                          <figcaption>
                            <Link
                              class="btn btn-dark sync-button-color landingButton-text"
                              size="lg"
                              onClick={() => onClickFunks()}
                            >
                              Ready? Let's Sync!
                            </Link>
                          </figcaption>

                          <Form>
                            <Form.Item className="text-color">
                              <Checkbox
                                onChange={confirmTos}
                                required="required"
                                className="text-color"
                              ></Checkbox>
                              &nbsp;&nbsp;Click here to accept our{" "}
                              <a
                                onClick={() => showModal()}
                                style={{ color: "var(--color3)" }}
                              >
                                Terms of Service
                              </a>
                              .
                            </Form.Item>
                          </Form>
                          <MDBCard>
                            <Image
                              src={
                                user.data.images[0]
                                  ? user.data.images[0]?.url
                                  : defaultPfp
                              }
                              style={{
                                width: "165px",
                                marginLeft: "50px",
                                marginTop: "20px",
                              }}
                              alt="Your Spotify Profile Picture"
                            />

                            <MDBCardBody style={{ padding: "1rem" }}>
                              <MDBCardTitle>
                                <ul>
                                  <li>Welcome, {user.data.display_name}!</li>
                                </ul>
                                <MDBCardText>
                                  Here's some of your top tracks, as listed by
                                  Spotify.
                                </MDBCardText>
                              </MDBCardTitle>
                            </MDBCardBody>
                          </MDBCard>
                        </MDBCol>
                        <>
                          {Cookies.set("username", user.data.display_name)}
                          {Cookies.set("PlayerToken", spotifyAuthToken)}
                        </>
                      </>
                    ) : (
                      <h1>loading..</h1>
                    )
                  }
                </User>
                <div style={{ width: "100%" }}>
                  <MDBRow className="masonry-with-columns">
                    <UserTop type="tracks">
                      {(tracks, loading, error) =>
                        tracks && tracks.data
                          ? tracks.data.items.map((track, ind) => {
                              return (
                                <>
                                  <TrackCard track={track} />
                                </>
                              );
                            })
                          : null
                      }
                    </UserTop>
                  </MDBRow>
                </div>
              </SpotifyApiContext.Provider>
            </>
          ) : (
            <>
              <figcaption className="banner">Welcome to SYNC!</figcaption>
              <figcaption className="subtext1">
                Share your spotify songs in one of our listening rooms!
              </figcaption>
              <figcaption className="subtext2">
                Listen to music and chat with friends and the community!
              </figcaption>
              <figcaption className="landingButton">
                <div
                  className="spotifyBtn"
                  onLoad={() => {
                    Cookies.set("username", "anonymous");
                  }}
                >
                  <SpotifyAuth
                    redirectUri={"http://localhost:3000/"}
                    clientID="ad4f63abc34f445d9f82549d5dcfeb67"
                    scopes={[
                      Scopes.userReadPrivate,
                      Scopes.userReadEmail,
                      "user-top-read",
                      "user-read-recently-played",
                    ]}
                    title={"Login with Spotify!"}
                    showDialog={true}
                  />
                </div>
              </figcaption>
              <br />
              <br />
              <br />
              <br />
              <FaqComponent />
              <Footer />
            </>
          )}
        </div>
=======

        {Cookies.get("spotifyAuthToken") ? (
          <SpotifyApiContext.Provider value={spotifyAuthToken}>
            <div className="fig-flex">
              {handleTokenRetrieval(spotifyAuthToken)}
              <User>
                {(user, loading, error) =>
                  user && user.data ? (
                    <div>{spotifyAuthToken}</div>
                  ) : (
                    <div>Loading...</div>
                  )
                }
              </User>
            </div>
          </SpotifyApiContext.Provider>
        ) : (
          <div className="fig-flex">
            <figcaption className="banner">Welcome to SYNC!</figcaption>
            <figcaption className="subtext1">
              Share your spotify songs in one of our listening rooms!
            </figcaption>
            <figcaption className="subtext2">
              Listen to music and chat with friends and the community!
            </figcaption>
            <figcaption className="landingButton">
              {!tosStatus && (
                <Link
                  class="btn btn-dark sync-button-color landingButton-text"
                  size="lg"
                  onClick={() => onClickFunks()}
                >
                  Login with Spotify!
                </Link>
              )}
              {tosStatus && (
                <SpotifyAuth
                  redirectUri={"http://localhost:3000"}
                  clientID="ad4f63abc34f445d9f82549d5dcfeb67"
                  scopes={[
                    Scopes.userReadPrivate,
                    Scopes.userReadEmail,
                    "user-top-read",
                    "user-read-recently-played",
                  ]}
                  title={"Login with Spotify!"}
                  showDialog={true}
                  noLogo={true}
                  btnClassName="btn btn-dark sync-button-color landingButton-text"
                />
              )}
            </figcaption>

            <Form>
              <Form.Item className="text-color">
                <Checkbox
                  onChange={confirmTos}
                  required="required"
                  className="text-color"
                ></Checkbox>
                &nbsp;&nbsp;Click here to accept our{" "}
                <a
                  onClick={() => showModal()}
                  style={{ color: "var(--color3)" }}
                >
                  Terms of Service
                </a>
                .
              </Form.Item>
            </Form>
          </div>
        )}
>>>>>>> QA
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
        <p style={{ color: "red" }}>
          You must accept the Terms of Service to continue.
        </p>
      </Modal>
<<<<<<< HEAD
=======
      <FaqComponent />
      <Footer />
>>>>>>> QA
    </div>
  );
};

export default Landing;
