import React, { Component } from 'react';
import './about.css';

class About extends Component {

  render() {
    return (
      <div className="container" id="about">
        <div className="profile">
          <div className="profilePicture">
            <img className="img-circle" src="./images/me.jpeg" alt="Profile" style={{ width: '180px', height: '180px' }} />
          </div>
          <b style={{ fontSize: '20px' }}> Prakash Kandel </b> <br />
          Web Developer <br />
          Outcome.Life, Federation University Australia <br />
          Melbourne Australia
            <hr />
          <div style={{ textAlign: 'left', paddingLeft: '10px', paddingRight: '10px' }}> I am always interested in things that change the world or will change the world.
            Always ready to accept challenges which I think is the best way to learn new things.
            Never hesitate to say no for things which I don't know and never take my step back
            when I get a chance to learn new technologies
            </div>
        </div>
      </div>
    );
  }
}

export default About;
