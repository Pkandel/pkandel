import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';
import { Router } from '../';
import './nav.css';


class Nav extends Component {

  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img src="./images/logo.png" alt="PK" style={{ width: "100px", height: "60px", float: "left" }} />
        </div>
        <div id="toggle">
          <div id="first"></div>
          <div id="second"></div>
          <div id="third"></div>
        </div>
        <div className="nav">
          <ul>
            <li><NavLink activeClassName="active" exact to="/contact" >Contact</NavLink></li>
            <li><NavLink activeClassName="active" exact to="/projects">Project</NavLink></li>
            <li><NavLink activeClassName="active" exact to="/skills">Skill</NavLink></li>
            <li><NavLink activeClassName="active" exact to="/about" >About</NavLink></li>
            <li><NavLink activeClassName="active" exact to="/" >Home</NavLink></li>

          </ul>
        </div>

        {/* when we clicked above it comes down and check the appropirate router and render component*/}

        <Router />

      </div>
    );
  }
}


export default Nav;