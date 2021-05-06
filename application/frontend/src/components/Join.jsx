import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Row,
  Col,
  Card,
  Typography,
  AutoComplete,
  Divider,
  Dropdown,
  Menu,
} from "antd";
import Axios from "axios";
<<<<<<< HEAD
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
=======
import { DownOutlined, SearchOutlined  } from "@ant-design/icons";
>>>>>>> QA
import "../css/Join.css";
import Footer from "./Footer";

const Join = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  const [viewData, setViewData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [searchBarText, setSearchBarText] = useState({
    textField: 'Search rooms by "name" or "genre"',
    dropDown: "Search",
  });
  const viewRooms = () => {};
  const onClickfunction = ({ key }) => {
    if (`${key}` == 2) {
      searchByName();
      setSearchBarText({
        textField: "e.g. Tom's room",
        dropDown: "RoomName",
      });
    } else if (`${key}` == 3) {
      searchByGenre();
      setSearchBarText({
        textField: "e.g. Electronic",
        dropDown: "Genre",
      });
    }
  };

  const menu = (
    <Menu onClick={onClickfunction}>
      <Menu.Item key="2">RoomName</Menu.Item>
      <Menu.Item key="3">Genre</Menu.Item>
    </Menu>
  );
  useEffect(() => {
    Axios.get("http://localhost:8000/api/adds/")
      .then((res) => {
        setViewData(res.data);
      })
      .catch((er) => console.log(er));
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      setSearchedData([]);
    }
  }, [searchValue]);

  const searchAll = () => {};
  const searchByName = () => {
    Axios.get("http://localhost:8000/api/adds/")
      .then((res) => {
        let tempOptions = [];
        res.data.forEach((d) => {
          tempOptions.push({ value: d.room_name });
        });
        setOptions(tempOptions);
        setViewData(res.data);
      })
      .catch((er) => console.log(er));
  };
  const searchByGenre = () => {
    Axios.get("http://localhost:8000/api/adds/")
      .then((res) => {
        let tempOptions = [];
        res.data.forEach((d) => {
          tempOptions.push({ value: d.genre });
        });
        setOptions(tempOptions);
        setViewData(res.data);
      })
      .catch((er) => console.log(er));
  };

  {
    /* For joining rooms */
  }

  const joinRoom = (name, gen) => {
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
  const searchRoom = () => {
    if (searchValue === "") return;
    let result = viewData.filter((d) =>
<<<<<<< HEAD
      d.room_name.toLowerCase().includes(searchValue.toLowerCase()) ||
=======
      d.room_name.toLowerCase().includes(searchValue.toLowerCase())||
>>>>>>> QA
      d.genre.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchedData(result);
  };

  return (
    <Fragment>
      <div>
        <Row>
          <Col xs={24}>
            <div class="main">
              <h2 style={{ marginTop: "30px", marginBottom: "30px" }}>
                {" "}
                Search for rooms here
              </h2>
            </div>
          </Col>
        </Row>
        {options && (
          <div className="search_bar">
            <Dropdown overlay={menu}>
              <Button
                type="primary"
                className="ant-dropdown-link dropdown_button"
                onClick={(e) => e.preventDefault()}
              >
                {searchBarText.dropDown} <DownOutlined />
              </Button>
            </Dropdown>
            <AutoComplete
              style={{ width: "20%" }}
              onSearch={(value) => {
                setSearchValue(value);
                console.log(value);
                {/*let result = viewData.filter(
                  (d) =>
                    d.room_name.toLowerCase().includes(value.toLowerCase()) ||
                    d.genre.toLowerCase().includes(value.toLowerCase())
                );
                setSearchedData(result);*/}
              }}
              onSelect={(value) => {
                setSearchValue(value);
                console.log(value);
                {/*let result = viewData.filter(
                  (d) =>
                    d.room_name.toLowerCase().includes(value.toLowerCase()) ||
                    d.genre.toLowerCase().includes(value.toLowerCase())
                );

                setSearchedData(result);*/}
              }}
              notFoundContent="Sorry, the room with this name or genre was not found..." 
              options={options}
              placeholder={searchBarText.textField}
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            ></AutoComplete>
<<<<<<< HEAD
               <Button icon={<SearchOutlined />} className="dropdown_button" type="primary" onClick={()=>searchRoom()}></Button>
=======
             <Button icon={<SearchOutlined />} className="dropdown_button" type="primary" onClick={()=>searchRoom()}></Button>
>>>>>>> QA
          </div>
        )}

        {searchedData && searchedData.length > 0 && (
          <div>
            <Row>
              <Col xs={24}>
                <div class="main">
                  <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
                    {'Searched Rooms by  "' + searchValue + '"'}
                  </h4>
                </div>
              </Col>

              <Col xs={24}>
                <Row gutter={[40, 16]}>
                  {searchedData &&
                    searchedData.map((d, index) => (
                      <Col className="gutter-row" span={6} key={index}>
                        <Card
                          hoverable
                          bordered
                          style={{ width: "80%", marginLeft: "30px" }}
                          cover={<img alt="example" src={d.roomImageUrl} />}
                          className="join_cards"
                        >
                          <Row>
                            <Col xs={24} className="join_text">
                              Room Name:
                              <Typography.Text
                                className="join_text"
                                style={{ float: "right" }}
                                level={5}
                              >
                                {d.room_name}
                              </Typography.Text>
                            </Col>
                            <Col xs={24} className="join_text">
                              Genre:{" "}
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
                                {Math.floor(Math.random() * 50)}
                              </Typography.Text>
                            </Col>
                            <Col xs={24} className="join_text">
                              Link to join :
                              <Button
                                type="link"
                                onClick={() => joinRoom(d.room_name, d.genre)}
                                style={{ float: "right" }}
                              >
                                Click here
                              </Button>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Col>
            </Row>
            <Divider />
          </div>
        )}
        <Row>
          <Col xs={24}>
            <div class="main">
              <h2 style={{ marginTop: "30px", marginBottom: "30px" }}>
                {searchedData && searchedData.length > 0
                  ? "All Rooms"
                  : "Recommended Rooms"}
              </h2>
            </div>
          </Col>

          <Col xs={24}>
            <Row gutter={[40, 16]}>
              {viewData &&
                viewData.map((d, index) => (
                  <Col className="gutter-row" span={6} key={index}>
                    <Card
                      hoverable
                      bordered
                      style={{ width: "80%", marginLeft: "30px" }}
                      cover={<img alt="example" src={d.roomImageUrl} />}
                      className="join_cards"
                    >
                      <Row>
                        <Col xs={24} className="join_text">
                          Room Name:
                          <Typography.Text
                            className="join_text"
                            style={{ float: "right" }}
                            level={5}
                          >
                            {d.room_name}
                          </Typography.Text>
                        </Col>
                        <Col xs={24} className="join_text">
                          Genre:{" "}
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
                            {Math.floor(Math.random() * 50)}
                          </Typography.Text>
                        </Col>
                        <Col xs={24} className="join_text">
                          Link to join:
                          <Button
                            type="link"
                            onClick={() => joinRoom(d.room_name, d.genre)}
                            style={{ float: "right" }}
                          >
                            Click here
                          </Button>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </div>
      <div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Join;
