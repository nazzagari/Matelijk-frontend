import React, { Component } from "react";
import {Button, Form, FormGroup, FormControl, FormText} from "react-bootstrap";
import "./css/Login.css";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

    }

    handleChange = event => {
        this.setState( {
            username: event.target.value,
            password: event.target.value
        });
    }

    handleSubmit = event => {
         
    }

    render() {
        return (

            <div className="loginForm">
                <div className= "loginHeader">
                    <h1>Login</h1>
                </div>

                <div className="formContent">
                    <Form>
                        <FormGroup controlId="username">
                            <label>Gebruikersnaam</label>
                            <FormControl autofocus type="text" placeholder="Vul gebruikersnaam in" value={this.state.username} onChange={this.handleChange}/>
                        </FormGroup>
                    </Form>

                    <Form>
                        <FormGroup controlId="username">
                            <label>Wachtwoord</label>
                            <FormControl autofocus type="text" placeholder="Vul wachtwoord in" value={this.state.password} onChange={this.handleChange}/>
                        </FormGroup>
                    </Form>

                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Verstuur
                    </Button>

                </div>
            </div>
        )
    }
}

