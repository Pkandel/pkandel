import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';
import { Router } from '../';
import './nav.css';

class Nav extends Component {

  _about() {
    document.getElementById('about').style.marginTop=0;
  }

  render() {
    return (
      <div className="navbar">
        <div className="logo">
            <img src="./images/logo.png" alt="PK" style={{width:"80px",height:"50px",float:"left"}}/>
        </div>
        <div className="nav">
        <ul>
          <li><NavLink activeClassName="active" exact to="/contact">Contact</NavLink></li>
          <li><NavLink activeClassName="active" exact to="/projects">Project</NavLink></li>
          <li><NavLink activeClassName="active" exact to="/skills">Skill</NavLink></li>
          <li><NavLink activeClassName="active" exact to="/about" ><div onClick={this._about.bind(this)}>About</div></NavLink></li>
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