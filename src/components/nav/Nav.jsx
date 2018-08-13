import React, { Component } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import Keycloak from 'keycloak-js';
import Loader from '../loader';
import { Router, Footer } from '../';
import './nav.css';


class Nav extends Component {

  constructor() {
    super();
    this.state = ({
      DisplaysmallNavLink: false,
      keycloak: {},
      isAuthenticated: true
    });
    this._renderNav = this._renderNav.bind(this);
    this._hideSmallNav = this._hideSmallNav.bind(this);
  }

  componentDidMount() {

  }

  componentWillMount() {
    // const _keycloak = Keycloak();
    // _keycloak.init({ onLoad: 'login-required' }).success((authenticated) => {
    //   this.setState({
    //     keycloak: _keycloak,
    //     isAuthenticated: true
    //   })
    // }).error(function () {
    //   alert('failed to initialize');
    // });
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
    const { location } = window;
    let selectedNav = (location.href.replace(location.origin, '')).replace('/', '').toUpperCase()
    if (selectedNav === '') selectedNav = 'HOME';
    if (!this.state.isAuthenticated) return <Loader />;
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
              <a href="https://www.facebook.com/prakash.kandel.10" target="_blank"> <img src="./images/fb.jpeg" className="img-circle" style={{ marginRight: '10px', width: '20px', heignt: '20px' }} alt="" /></a>
              <a href="mailto:unique.prakash2002@gmail.com?Subject=Hello%20Prakash"> <img src="./images/gmail.png" className="img-circle" style={{ marginRight: '10px', width: '20px', heignt: '20px' }} alt="" /></a>
              <a href="https://www.linkedin.com/in/prakash-kandel-112b47a3/" target="_blank"> <img src="./images/linkedin.jpeg" className="img-circle" style={{ marginRight: '10px', width: '20px' }} alt="" /></a>
            </li>

            <text style={{ color: "white" }} >{selectedNav} </text>

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
        <Footer />
        <Router />
      </div>
    );
  }
}


export default Nav;
