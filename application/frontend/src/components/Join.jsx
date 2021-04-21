import React, { Component, Fragment, useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col,Card, Typography, AutoComplete, Divider, Dropdown, Menu, message } from "antd";
import Axios from "axios";
import { DownOutlined } from '@ant-design/icons';
import "../css/Join.css";
import Footer from "./Footer";




const Join = (props) => {

  const [searchValue, setSearchValue] = useState('')
  const [options, setOptions] = useState([])
  const [viewData,setViewData] = useState([]);
  const [searchedData,setSearchedData] = useState([]);
  const viewRooms = () => {
    
  };
  const onClickfunction = ({ key }) => {
    
    
    if (`${key}` == 2) {
        searchByName();
    }
    else if (`${key}` == 3) {
        searchByGenre();
    }
  };
  
  const menu = (
    <Menu onClick={onClickfunction}>
      
        <Menu.Item key="2">RoomName</Menu.Item>
        <Menu.Item key="3">Genre</Menu.Item>
    </Menu>
);
  useEffect(() =>{
      
      Axios.get("http://localhost:8000/api/adds/")
      .then((res) => {
        setViewData(res.data)
      })
      .catch((er) => console.log(er));
  },[])

  useEffect(() => {
    if (searchValue === '') {
        setSearchedData([])
    }
    }, [searchValue])

  const searchAll = ()=>{
    
  }
  const searchByName = () => {
    Axios.get("http://localhost:8000/api/adds/")
      .then((res) => {
        let tempOptions = []
        res.data.forEach(d => {       
            tempOptions.push({value: d.room_name})
        });
        setOptions(tempOptions)
        setViewData(res.data)
      })
      .catch((er) => console.log(er));
  }
  const searchByGenre = () => {
    Axios.get("http://localhost:8000/api/adds/")
      .then((res) => {
        let tempOptions = []
        res.data.forEach(d => {       
            tempOptions.push({value: d.genre})
        });
        setOptions(tempOptions)
        setViewData(res.data)
      })
      .catch((er) => console.log(er));
  }

  {
    /* For joining rooms */
  }
  
  const joinRoom = (name,gen) => {
   
    const resultRoomGenre = gen;
    const resultRoomName = name;
    props.history.push(
      "/Room/" +
        resultRoomGenre +
        "/" +
        resultRoomName +
        "/" +
        (Math.floor(Math.random() * 6) + 1)
    );
  };
  const searchRoom = () => {
        if(searchValue === '') return;
        let result = viewData.filter(d => d.room_name.toLowerCase().includes(searchValue.toLowerCase()))
        setSearchedData(result)
    }

  return (
    <Fragment>
            <Row>
                <Col xs={24}>
                <div class="main">
                   <h2 style={{ marginTop: "30px", marginBottom: "30px" }}>  Search for rooms here</h2>
                </div>
                </Col>
            </Row>
            <Row style={{margin: "25px 0"}}>
                <Col xs={24}>
                    {options &&
                        <Row gutter={16} align='middle'>
                            <Col span={12} offset={6} >
                                <div>
                                <AutoComplete
                                    style={{width: "40%" ,marginLeft:"300px"}} 
                                    onSearch={(value) => {
                                        setSearchValue(value)
                                        console.log(value)
                                        let result = viewData.filter(d => d.room_name.toLowerCase().includes(value.toLowerCase()) || d.genre.toLowerCase().includes(value.toLowerCase()))
                                        setSearchedData(result)
                                        
                                    }}
                                    onSelect={(value) => {
                                        setSearchValue(value)
                                        console.log(value)
                                        let result = viewData.filter(d => d.room_name.toLowerCase().includes(value.toLowerCase()) || d.genre.toLowerCase().includes(value.toLowerCase()))

                                        setSearchedData(result)
                                        
                                    }}                        
                                    notFoundContent="Sorry, the room with this name or genre was not found..."          
                                    options={options}
                                    placeholder={"search rooms by \"name\" or \"genre\""}
                                    filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                >
                                </AutoComplete>        
                                <Dropdown 
                                overlay={menu} 
                                overlayClassName ="join_dropdown"
                                >
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Search <DownOutlined />
                                    </a>
                                </Dropdown>  
                                </div>              
                            </Col>
                            
                        </Row>
                    }
                </Col>
            </Row>
            {searchedData && searchedData.length > 0 && (
                <div>
                <Row>
                <Col xs={24}>
                <div class="main">
                  <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
                  {"Searched Rooms by  \"" + searchValue + "\""}
                  </h4>
                </div>

                </Col>

                <Col xs={24} >

                    <Row gutter={[40, 16]}>

                        {searchedData && (searchedData.map((d, index) => <Col className="gutter-row" span={6} key={index}>
                            <Card
                                hoverable
                                bordered
                                style={{ width: "80%" ,marginLeft: "30px"}}
                                cover={<img alt="example"src={d.roomImageUrl} />}
                                className="join_cards"
                                >
                                <Row>
                                
                                 <Col xs={24}className="join_text">
                                  Room Name:<Typography.Text className="join_text" style={{float: "right"}}level={5}>{d.room_name}</Typography.Text>                                        
                                    </Col>
                                    <Col xs={24} className="join_text">
                                    Genre:    <Typography.Text className="join_text" style={{float: "right"}} >{d.genre}</Typography.Text>                                        
                                    </Col>
                                    <Col xs={24}>
                                        <Button
                                            type="link"
                                            onClick={() => joinRoom(d.room_name,d.genre)}
                                            style={{ marginLeft: "250px"}}
                                        >
                                            Click to join
                                        </Button>
                                    </Col> 
                                </Row>
                            </Card>
                        </Col>))}

                    </Row>

                </Col>
            </Row>
            <Divider/>
            </div>
            )}
            <Row>
                <Col xs={24}>
                <div class="main">
                  <h2 style={{ marginTop: "30px", marginBottom: "30px" }}>
                  { searchedData && searchedData.length > 0 ? "All Rooms" : "Recommended Rooms"}
                  </h2>
                </div>
                   

                </Col>

                <Col xs={24}>

                    <Row gutter={[40, 16]}>

                        {viewData && (viewData.map((d, index) => <Col className="gutter-row" span={6} key={index}>
                            <Card
                                hoverable
                                bordered
                                style={{ width: "80%",marginLeft: "30px" }}
                                cover={<img alt="example"src={d.roomImageUrl} />}
                                className="join_cards"
                                 >
                                <Row>
                                
                                 <Col xs={24} className="join_text">
                                  Room Name:<Typography.Text className="join_text" style={{float: "right"}}level={5}>{d.room_name}</Typography.Text>                                        
                                    </Col>
                                    <Col xs={24} className="join_text">
                                    Genre:    <Typography.Text className="join_text"style={{float: "right"}} >{d.genre}</Typography.Text>                                        
                                    </Col>
                                    <Col xs={24}>
                                        <Button
                                            type="link"
                                            onClick={() => joinRoom(d.room_name,d.genre)}
                                            style={{ marginLeft: "250px"}}
                                        >
                                            Click to join
                                        </Button>
                                    </Col>
                                </Row>
                            </Card>   
                        </Col>))}

                    </Row>

                </Col>
            </Row>
            <Footer />
        </Fragment>
        
    )
}

export default Join;
