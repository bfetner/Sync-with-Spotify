import React, { Component, useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  Card,
} from "antd";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import "../css/Home.css";
import Create from "./Create";
import Footer from "./Footer";

const DeleteRoom = (props) => {

    const [viewData, setViewData] = useState([]);
    const history = useHistory()

    useEffect(() => {
        Axios.get("http://localhost:8000/api/adds/")
        .then((res) => {
            console.log(res.data);
            setViewData(res.data);
        })
        .catch((er) => console.log(er));
    }, []);

    const joinRoom = (name,gen) => {
   
        const resultRoomGenre = gen;
        const resultRoomName = name;
        props.history.push(
          "/Room/" +
            resultRoomGenre +
            "/" +
            resultRoomName +
            "/" +
            undefined +  
            "/" +
            (Math.floor(Math.random() * 6) + 1)
        );
      };
      const refreshpage = () => {
        Axios.get("http://localhost:8000/api/adds/")
        .then((res) => {
            console.log(res.data);
            setViewData(res.data);
        })
        .catch((er) => console.log(er));
      }
      const deleteRoom = (roomid) => {
   
        var data = {
          
          id: roomid,
        };
        console.log(data.id)
        Axios.delete("http://localhost:8000/api/adds/"+ data.id + "/")
        .then((res) => {
         refreshpage()
           
        })
        .catch((er) => console.log(er));
        
       
      };
    
    return (
        <div>
            <div class="main">
            <div
              style={{ marginTop: "30px", marginBottom: "30px" }}
              className="home-top-text-block"
            >
              All Rooms
            </div>
          </div>
          <Row gutter={[40, 16]}>
            {viewData?.map((d, index) => (
              <Col className="gutter-row" span={6}>
                <Card
                  className="join_cards"
                  hoverable
                  bordered
                  style={{ width: "80%", marginLeft: "30px" }}
                  cover={<img alt="example" src={d.roomImageUrl} />}
                >
                  <Row>
                  <Col xs={24} className="join_text">
                     Id
                      <Typography.Text
                        className="join_text"
                        style={{ float: "right" }}
                      
                      >
                        {d.id}
                      </Typography.Text>
                    </Col>
                    <Col xs={24} className="join_text">
                      Room Name:
                      <Typography.Text
                        className="join_text"
                        style={{ float: "right" }}
                      
                      >
                        {d.room_name}
                      </Typography.Text>
                    </Col>

                    <Col xs={24} className="join_text">
                      Genre:
                      <Typography.Text
                        className="join_text"
                        style={{ float: "right" }}
                      >
                        {d.genre}
                      </Typography.Text>
                    </Col>
                    <Col xs={24} className="join_text">
                      No of members:
                      <Typography.Text
                        className="join_text"
                        style={{ float: "right" }}
                      >
                        {Math.floor(Math.random()*50)}
                      </Typography.Text>
                    </Col>
                    <Col xs={24} className="join_text">
                      Link to join:
                      
                      <Button
                        type="link"
                        onClick={() => joinRoom(d.room_name,d.genre)}
                        style={{ float: "right"}}
                        
                      >
                        Click here
                      </Button>
                      
                    </Col>
                    <Col xs={24} className="join_text">
                       <Button
                            type="link"
                            onClick={() => deleteRoom(d.id)}
                            style={{ float: "right"}}
                            
                        >
                            Destroy this room
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
    );
}

export default DeleteRoom