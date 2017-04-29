import React, { Component } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import { Router } from '../';
import './nav.css';
import { Footer } from '../';


class Nav extends Component {
  constructor() {
    super();
    this.state = ({
      smallNav: 'none',
    });
    this._renderNav = this._renderNav.bind(this);
    this._hideSmallNav = this._hideSmallNav.bind(this);
  }
  _renderNav() {
    const { smallNav } = this.state;
    if (smallNav === 'none') {
      document.getElementById('smallNav').style.display = 'block';
      this.setState({
        smallNav: 'block',
      });
    } else {
      document.getElementById('smallNav').style.display = 'none';
      this.setState({
        smallNav: 'none',
      });
    }
  }

  _hideSmallNav() {
    document.getElementById('smallNav').style.display = 'none';
  }
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img src="./images/logo.png" alt="PK" />
        </div>
        <div id="toggle" onClick={this._renderNav}>
          <div id="first" />
          <div id="second" />
          <div id="third" />
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
        <Footer />
        <div className="smallNav" id="smallNav">
          <ul>
            <li><NavLink activeClassName="active" exact to="/contact" ><div onClick={this._hideSmallNav}>Contact</div></NavLink></li>
            <li><NavLink activeClassName="active" exact to="/projects"><div onClick={this._hideSmallNav}>Project</div></NavLink></li>
            <li><NavLink activeClassName="active" exact to="/skills"><div onClick={this._hideSmallNav}>Skill</div></NavLink></li>
            <li><NavLink activeClassName="active" exact to="/about" ><div onClick={this._hideSmallNav}>About</div></NavLink></li>
            <li><NavLink activeClassName="active" exact to="/" ><div onClick={this._hideSmallNav}>Home</div></NavLink></li>

          </ul>
        </div>
        <Router />

      </div>
    );
  }
}


export default Nav;
