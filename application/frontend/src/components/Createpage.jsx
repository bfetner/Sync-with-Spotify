import React, { Component, useState, setState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Modal, message, Select } from "antd";
import Axios from "axios";
import "../css/Create.css";
import Room from "./Room";
import { withRouter, useHistory, useLocation } from "react-router-dom";
import Create from "./Create";

const Createpage = (props) => {
  return (
    <div className="createpage-flex">
      <div className="createpage-top-text-block">Create your own room!</div>
      <div>
        <Create />
      </div>
    </div>
  );
};

export default Createpage;