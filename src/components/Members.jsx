import React, {Component} from "react";
import Kai from "./images/pp.jpg";
import Daan from "./images/Daan.JPG";
import Emile from "./images/Emile.JPG";
import Niels from "./images/Niels.jpeg";
import Alexander from "./images/Alexander.JPG";
import "./css/Members.css"

export default class Members extends Component {

    render() {
        return (
            <div className="membersGrid">
                <div className="memberLeft">
                    <h3>Kai Goudswaard</h3>
                    <img src={Kai} alt=""/>
                </div>

                <div className="memberRight">
                    <h3>Daan de Win</h3>
                    <img src={Daan} alt=""/>
                </div>

                <div className="memberLeft">
                    <h3>Emile Feij</h3>
                    <img src={Emile} alt=""/>
                </div>

                <div className="memberRight">
                    <h3>Alexander Fabian Goovers</h3>
                    <img src={Alexander} alt=""/>
                </div>

                <div className="memberLeft">
                    <h3>Niels Pivo Veekens</h3>
                    <img src={Niels} alt=""/>
                </div>
            </div>
        )
    }
}