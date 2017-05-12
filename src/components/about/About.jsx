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
          <div className="edu-exp">
            <div className="experience" >
              <h4> Experince </h4>
              <hr />
              <div className="experience-each">
                <img alt="projects" src="./images/back-end.jpg" className="img-circle" style={{ width: '71px', height: '71px' }} />
                <h3>Back-End</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
                <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
              </div>
              <div className="experience-each">
                <img alt="projects" src="./images/back-end.jpg" className="img-circle" style={{ width: '71px', height: '71px' }} />
                <h3>Back-End</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
                <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
              </div>
              <div className="experience-each">
                <img alt="projects" src="./images/back-end.jpg" className="img-circle" style={{ width: '71px', height: '71px' }} />
                <h3>Back-End</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
                <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
              </div>
            </div>

            <div className="education" >
              <h4> Education </h4>
              <hr />
              <div className="education-each">
                <img alt="projects" src="./images/back-end.jpg" className="img-circle" style={{ width: '71px', height: '71px' }} />
                <h3>Back-End</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
                <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
              </div>
              <div className="education-each">
                <img alt="projects" src="./images/back-end.jpg" className="img-circle" style={{ width: '71px', height: '71px' }} />
                <h3>Back-End</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
                <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
              </div>
              <div className="education-each">
                <img alt="projects" src="./images/back-end.jpg" className="img-circle" style={{ width: '71px', height: '71px' }} />
                <h3>Back-End</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
                <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
              </div>

            </div>
          </div>
      </div>
    );
  }
}

export default About;
