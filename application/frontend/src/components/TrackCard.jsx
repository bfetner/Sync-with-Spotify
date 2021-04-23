import React from 'react';
import {Image} from "react-bootstrap";


import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const TrackCard = (props) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: '20rem' }}>
      <Image src={props.track.album.images[0].url} style={{ width: "65px", marginLeft: "50px", marginTop: "20px" }}  alt='Your Spotify '/>
        <MDBCardBody>
          <MDBCardTitle>{props.track.name}</MDBCardTitle>
          <MDBCardText>
            
            Artist: {props.track.artists.map(artist => artist.name).join(' ')} <br />
            Album: {props.track.album.name}
            
          </MDBCardText>
          <a href={props.track.external_urls.spotify}>Listen on Spotify</a>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default TrackCard;