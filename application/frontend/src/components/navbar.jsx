import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const NavBar = () => {
  
  const history = useHistory();
  const onClick = ({ key }) => {
    if (`${key}` == 1) {
      history.push('/')
  }
  };
  const menu = (
    <Menu onClick={onClick}>
      
        <Menu.Item key="1">Logout</Menu.Item>
        
    </Menu>
  );
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="bg-dark-sync">
        {" "}
        {/*fixed="top" TOOK THIS OFF, WAS ADDING SCROLL TO PAGES WHEN NOT NEEDED*/}
        <Navbar.Brand href="/Home">
          <Image
            src="/assets/logoImage2.png"
            href="/Home"
            style={{ width: "65px", marginRight: "10px" }}
          />
          SYNC
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Createpage">Create</Nav.Link>
          <Nav.Link href="/Join">Join</Nav.Link>
          {/* <Nav.Link href="/Room">Room</Nav.Link>
          <Nav.Link href="/Contact">Contact us</Nav.Link>
          <Nav.Link href="/Aboutus">About us</Nav.Link> */}
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            signed in as, <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Username <DownOutlined />
              </a>
            </Dropdown>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
