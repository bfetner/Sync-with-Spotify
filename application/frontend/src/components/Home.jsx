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

const Home = (props) => {
  {
    /* For creating rooms */
  }
  console.log(props);
  const [roomName, setRoomName] = useState();
  const [roomGenre, setGenre] = useState();
  const history = useHistory();

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

  useEffect(() => {
    Axios.get("http://localhost:8000/api/adds/")
      .then((res) => {
        console.log(res.data);
        setViewData(res.data);
      })
      .catch((er) => console.log(er));
  }, []);
  {
    /* For joining rooms */
  }
  const joinRoom = () => {
    var rooms = document.getElementById("rooms").value;
    console.log("hi");
    console.log(rooms);
    const resultRoomGenre = "unknown";
    const resultRoomName = "unknown";
    props.history.push(
      "/Room/" +
        resultRoomGenre +
        "/" +
        resultRoomName +
        "/" +
        (Math.floor(Math.random() * 6) + 1)
    );
  };

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
            <div
              style={{ marginTop: "30px", marginBottom: "30px" }}
              className="home-top-text-block"
            >
              Recommended Rooms
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
                      Room Name:
                      <Typography.Text
                        className="join_text"
                        style={{ float: "right" }}
                        id="rooms"
                        value={d.room_name}
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
                    <Col xs={24}>
                      <Button
                        type="link"
                        onClick={() => joinRoom()}
                        style={{ float: "right" }}
                      >
                        Click to join
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
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
      <Footer />
    </div>
  );
};

export default Home;
