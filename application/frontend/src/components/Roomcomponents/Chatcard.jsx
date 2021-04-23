import React, { Component, useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import Axios from "axios";
import "../../css/Chat.css";

function Chatcard(props) {
  console.log(props);

  return (
    <div className="chat-card">
      <strong>{props.userName}</strong>: {props.comment}
    </div>
  );
}

export default Chatcard;
