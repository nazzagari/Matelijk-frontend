import React, { Component } from 'react';
import {LinkContainer} from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import './App.css';
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Matelijke guys</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>

              <LinkContainer to="/members">
                <NavItem>Leden</NavItem>
              </LinkContainer>

              <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
            
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes/>
      </div>
    );
  }
}

export default App;
