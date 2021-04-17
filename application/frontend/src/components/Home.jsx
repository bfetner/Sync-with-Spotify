import React, { Component, useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col, Typography, Card } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../css/Home.css";
import Create from "./Create";

const Home = (props) => {
  {
    /* For creating rooms */
  }
  const [roomName, setRoomName] = useState();
  const [roomGenre, setGenre] = useState();

  const insertData = () => {
    var data = {
      room_name: roomName,
      genre: roomGenre,
    };
    Axios.post("http://localhost:8000/api/adds/", data)
      .then((res) => {
        console.log("hi");
        setRoomName("");
        setGenre("");
      })
      .catch((er) => console.log(er));
  };

  {
    /* For searching rooms */
  }
  
  const [viewData, setViewData] = useState([]);
  
  
  useEffect(() =>{
      
    Axios.get("http://localhost:8000/api/adds/")
    .then((res) => {
      setViewData(res.data)
    })
    .catch((er) => console.log(er));
},[])
  

  console.log(props.displayCreate);

  const [createStatus, setCreateStatus] = useState(false);

  const toggleCreate = () => {
    setCreateStatus(!createStatus);
  };

  return (
    <div>
      <div className="main home-main">
        <div className="home-top-text-block">
          Search for a room to join, or create your own room!
        </div>
        <div className="button-column">
          <Link
            to="/Join"
            class="btn btn-dark sync-button-color home-button-design"
            style={{ marginBottom: "30px" }}
          >
            Join a Room
          </Link>
          <button
            class="btn btn-dark sync-button-color home-button-design"
            style={{ marginBottom: "30px" }}
            onClick={() => toggleCreate()}
          >
            Create a Room
          </button>
        </div>
        <div style={{ width: "500px" }}>{createStatus && <Create />}</div>

        <div className="spacer"></div>

        <div> 
    
      <div class="main">
        <h1 style={{ marginTop: "30px", marginBottom: "30px" }}>
         Recommended Rooms
        </h1>
      </div>
      <Row gutter={[40, 16]}>
      {  viewData?.map((d,index) => <Col xs={24} md={8}>
          <Card 
              title="Room Details" 
              extra={<a href="#"></a>} 
              hoverable
              bordered
              style={{ width: "80%" , marginLeft: "50px"}}
          >
          <Row>
            
              <Col xs={24}>
                Room Name:<Typography.Text style={{float: "right"}} >{d.room_name}</Typography.Text>                                        
              </Col>
          
              <Col xs={24}>
                Genre:<Typography.Text style={{float: "right"}} >{d.genre}</Typography.Text>                                        
              </Col>
          </Row>
        </Card>
        
        </Col>)}

      </Row>
      
        

    </div>

        {/*<h1 style={{ marginTop: "30px", marginBottom: "30px" }}>
          Welcome to Sync!
        </h1>
        <h4>Share your spotify songs in one of our listening rooms!</h4>
        <h4 style={{ marginBottom: "30px" }}>
          Listen to music and chat with friends and the community!
        </h4>

        <Link
          to="/Create"
          class="btn btn-dark sync-button-color"
          style={{ marginBottom: "30px" }}
        >
          Create
        </Link>
        <h4>A new room or</h4>

        <h4>Search for a room to join</h4>

        <div class="search_box">
          <div class="dropdown" style="float: left">
            <button
              class="btn btn-secondary dropdown-toggle sync-button-color"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="{% url 'home' %}">
                  All
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="{% url 'searchbyname' %}">
                  Room name
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="{% url 'searchbygenre' %}">
                  Genre
                </a>
              </li>
            </ul>
          </div>

          <form action="{% url 'search_results' %}" method="get">
            <input
              name="q"
              type="text"
              placeholder="Search..."
              class="form-control search_bar"
              style="float: left; width: 300px"
            />
            <input
              type="submit"
              value="Search for Room"
              class="btn btn-dark sync-button-color"
              style="float: left"
            />
          </form>
        </div>

        <div class="result_box">
          {% for room in object_list %}
          <div class="result_card">
            <a href="{% url 'room' %}">
              <img src="{% static 'image0.png' %}" />
            </a>
            <br />{{ room.room_name }}<br />
            <em>{{ room.genre }}</em>
          </div>
          {% endfor %}

        
        </div>
      */}
      </div>
    </div>
  );
};

export default Home;