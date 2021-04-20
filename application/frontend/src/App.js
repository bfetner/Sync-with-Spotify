import React, { Component } from "react";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Createpage from "./components/Createpage";
import Create from "./components/Create";
import Join from "./components/Join";
import Room from "./components/Room";
import NavBar from "./components/navbar";
import Contactus from "./components/Contactus";
import Aboutus from "./components/Aboutus";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    const PagesWithNavBar = () => {
      return (
        <div>
          <NavBar />
          <Switch>
            <Route path="/Home" exact component={Home} />
            <Route path="/Createpage" exact component={Createpage} />
            <Route path="/Join" exact component={Join} />
            <Route path="/Room/:roomGenre/:roomName" exact component={Room} />
            <Route path="/Contact" exact component={Contactus}></Route>
            <Route path="/Aboutus" exact component={Aboutus}></Route>
          </Switch>
        </div>
      );
    };

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route component={PagesWithNavBar} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
