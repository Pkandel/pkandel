import React, { Component } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import { Router } from '../';
import './nav.css';


class Nav extends Component {
  constructor() {
    super();
    this.state = ({
      DisplaysmallNavLink: false,
      selectedNav: '',
    });
    this._renderNav = this._renderNav.bind(this);
    this._hideSmallNav = this._hideSmallNav.bind(this);
  }
  _renderNav() {
    const { DisplaysmallNavLink } = this.state;
    if (DisplaysmallNavLink === false) {
      document.getElementById('smallNavLink').style.display = 'block';
      this.setState({
        DisplaysmallNavLink: true,
      });
    } else {
      document.getElementById('smallNavLink').style.display = 'none';
      this.setState({
        DisplaysmallNavLink: false,
      });
    }
  }

  _hideSmallNav() {
    document.getElementById('smallNavLink').style.display = 'none';
    this.setState({
      DisplaysmallNavLink: false,
    });
  }
  render() {
    return (
      <div className="navbar">
        <div className="big logo">
          <img src="./images/logo.png" alt="PK" />
        </div>
        <div id="nav">
          <div className="nav">
            <ul>
              <li><NavLink activeClassName="active" exact to="/contact" >Contact</NavLink></li>
              <li><NavLink activeClassName="active" exact to="/projects">Project</NavLink></li>
              <li><NavLink activeClassName="active" exact to="/skills">Skill</NavLink></li>
              <li><NavLink activeClassName="active" exact to="/about" >About</NavLink></li>
              <li><NavLink activeClassName="active" exact to="/" >Home</NavLink></li>

            </ul>
          </div>
        </div>
        {/* when we clicked above it comes down and check the appropirate router and render component*/}

        <div className="smallNav" id="smallNav">
          <div className="smallNavHead" id="smallNavHead">
            <li>
              <a href="https://www.facebook.com/prakash.kandel.10" target="_blank"> <img src="./images/fb.jpeg" className="img-circle" style={{ width: '20px', heignt: '20px' }} alt="" /></a>
              <a href="mailto:unique.prakash2002@gmail.com?Subject=Hello%20Prakash"> <img src="./images/gmail.png" className="img-circle" style={{ width: '20px', heignt: '20px' }} alt="" /></a>
              <a href="https://www.linkedin.com/in/prakash-kandel-112b47a3/" target="_blank"> <img src="./images/linkedin.jpeg" className="img-circle" style={{ width: '20px' }} alt="" /></a>
            </li>
            {this.state.selectedNav}
            <div id="toggle" onClick={this._renderNav}>
              <div id="first" />
              <div id="second" />
              <div id="third" />
            </div>


          </div>
          <div className="smallNavLink" id="smallNavLink">
            <ul >
              <li><NavLink activeClassName="active" exact to="/" ><div onClick={this._hideSmallNav}>Home</div></NavLink></li>
              <hr />
              <li><NavLink activeClassName="active" exact to="/about" ><div onClick={this._hideSmallNav}>About</div></NavLink></li>
              <hr />
              <li><NavLink activeClassName="active" exact to="/skills"><div onClick={this._hideSmallNav}>Skill</div></NavLink></li>
              <hr />
              <li><NavLink activeClassName="active" exact to="/projects"><div onClick={this._hideSmallNav}>Project</div></NavLink></li>
              <hr />
              <li><NavLink activeClassName="active" exact to="/contact" ><div onClick={this._hideSmallNav}>Contact</div></NavLink></li>

            </ul>
          </div>
        </div>
        <Router />

      </div>
    );
  }
}


export default Nav;
