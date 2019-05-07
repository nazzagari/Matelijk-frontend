import React, { Component } from "react";
import "./css/Home.css";
import Kai from "./images/pp.jpg";

export default class Home extends Component {
    render() {
      return (
        <div className="Home">
          <div className="lander">
            <h1>Matelijke guys</h1>
            <img src={Kai} alt={""}/>
          </div>
        </div>
      );
    }
  }