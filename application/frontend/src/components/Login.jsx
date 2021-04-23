import { SpotifyApiContext, User, UserTop } from "react-spotify-api";
import Cookies from "js-cookie";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import React, { useEffect, useState } from "react";
import defaultPfp from "../assets/image0.png";
import TrackCard from "./TrackCard";
import {Image} from "react-bootstrap";

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
import 'mdbreact/dist/css/mdb.css'

const Login = (props) => {
  const [spotifyAuthToken, setSpotifyAuthToken] = useState();
  useEffect(() => {
    setSpotifyAuthToken(Cookies.get("spotifyAuthToken"));
    console.log(Scopes.all);
  }, [Cookies.get("spotifyAuthToken")]);

  const logout = () => {
    Cookies.remove("spotifyAuthToken", {
      path: dev ? "" : "?",
    });
    window.location = dev ? "/Login" : "/?";
  };

  Cookies.set("username", "anonymous");

  const dev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  

  return (
    <div>
      {/* If there is a cookie named 'spotifyAuthToken' */}
      <MDBContainer>
        {Cookies.get("spotifyAuthToken") ? (
          <>
            <MDBRow>
              <h1>Hi! How's it going?</h1>
            </MDBRow>

            <SpotifyApiContext.Provider value={spotifyAuthToken}>
              <User>
              
                {(user, loading, error) =>
                  user && user.data ? (
                    <>
                      <MDBCol
                        style={{ maxWidth: "22rem", padding: "0 0 1rem 1rem" }}
                      >
                        <MDBCard>
                          
                            <Image src={
                              user.data.images[0]? 
                              user.data.images[0]?.url
                              : defaultPfp
                            }style={{ width: "165px", marginLeft: "50px", marginTop: "20px" }}  alt='Your Spotify Profile Picture'
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
                          {Cookies.set("username",user.data.display_name)}
                        </MDBCard>
                        
                      </MDBCol>
                      
                    </>
                    
                  ) : (
                    <h1>loading..</h1>
                  )
                }
              </User>

              <div style={{ width: '100%' }}>
                <MDBRow className='masonry-with-columns'>
                  <UserTop type='tracks'>
                    {(tracks, loading, error) =>
                      tracks && tracks.data
                        ? tracks.data.items.map((track, ind) => {
                            return (
                              <>
                                <TrackCard track={track} />
                              </>
                            )
                          })
                        : null
                    }
                  </UserTop>
                </MDBRow>
              </div>
            </SpotifyApiContext.Provider>
          </>
        ) : (
          
          <div>
            
            <h1>React Spotify Auth Demo</h1>
            <h2>Sign in to get started</h2>
            {/*  Display the login page */}
            <div className="spotifyBtn" onLoad={Cookies.set("username", "anonymous")}>
              <SpotifyAuth
                redirectUri={"http://localhost:3000/Login"}
                clientID="ad4f63abc34f445d9f82549d5dcfeb67"
                scopes={[
                  Scopes.userReadPrivate,
                  Scopes.userReadEmail,
                  "user-top-read",
                ]}
              />
            </div>
          </div>
        )}
      </MDBContainer>
    </div>
  );
};

export default Login;