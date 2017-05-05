import React, { Component } from 'react';
import './about.css';

class About extends Component {

  render() {
    return (
      <div className="container" id="about">
        <div className="profile" >
          <div className="profilePicture">
            <img className="img-circle" src="./images/me.jpeg" alt="Profile" />
          </div>
          <b style={{ fontSize: '20px' }}> Prakash Kandel </b> <br />
          Web Developer <br />
          Outcome.Life, Federation University Australia <br />
          Melbourne Australia
            <hr />
          <div className="profileCaption"> I am always interested in things that change the world or will change the world.
            Always ready to accept challenges which I think is the best way to learn new things.
            Never hesitate to say no for things which I don't know and never take my step back
            when I get a chance to learn new technologies
            </div>
        </div>
        <div className="aboutMe" >

          Hi, Thank you very much for visiting my site. You might already guess that I am a tech guy originally from nepal.
        I have completed my Bachelors degree in Science major in physics from back home in 2012.<br /><br />
          I came to australia in 2013 and joined Federation
        University (Formely University of Ballarat) to study bachelors in IT major Software Engineering. I have completed my degree in 2016. <br /><br />

          Currently, I am working in GADA technology as a Javascript Developer. I am having a great time in the company as I am working
        with some of the top tech guy. <br /><br />

          Please connect with me in facebook, linkedIn or drop me an email.<br /><br />
          Thank you again!!!

        </div>
      </div>
    );
  }
}

export default About;
