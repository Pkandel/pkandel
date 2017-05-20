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
                <img alt="projects" src="./images/outcome.jpg" className="img-circle" style={{ width: '71px', height: '71px' }} />
                <h3>Front-End React Developer</h3>
                <h4> Outcome.Life</h4>
                <h5> Mar 2017 - present . 3 Months</h5>
                <p>I am working as a front end react developer as well as back end using Nodejs, Mongodb, ExpressJs, Keycloak, Docker, Swagger and more... </p>
                {/*<p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>*/}
              </div>
              <hr />
              <div className="experience-each">
                <img alt="projects" src="./images/wpa.jpeg" className="img-circle" style={{ width: '71px', height: '71px' }} />
                <h3>Full Stack Developer</h3>
                <h4> Wealth Partner Australia (WPA)</h4>
                <h5> Jul 2015 - Nov 2015 . 5 Months</h5>
                <p>Worked as a full stack developer for creating a Loan Calculator web appication useing ASP.NET MVC5. </p>
                {/*<p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>*/}
              </div>
              <hr />
              <div className="experience-each">
                <img alt="projects" src="./images/atmc.jpeg" className="img-circle" style={{ width: '71px', height: '71px' }} />
                <h3>Mentor</h3>
                <h4> Australian Technical and Management College (ATMC)</h4>
                <h5> Jul 2015 - Nov 2015 . 5 Months</h5>
                <p>Worked as a mentor for mentoring the students of the subject group of WWW Tech2 (Php and xml) and Information and Security subjects.</p>
              </div>
            </div>
          <hr />
            <div className="education" >
              <h4> Education </h4>
              <hr />
              <div className="education-each">
                <img alt="projects" src="./images/atmc.jpeg" className="img-circle" style={{ width: '71px', height: '71px' }} />
                <h3>Professional Year</h3>
                <h4> Australian Technical and Management College</h4>
                <h5> Jul 2016 - Feb 2017</h5>
                <p>This course helped me a lot to get a real world experience in IT which I could hardly get from the University. </p>
                {/*<p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>*/}
              </div>
              <hr />
              <div className="education-each">
                <img alt="projects" src="./images/federation.png" className="img-circle" style={{ width: '71px', height: '71px' }} />
                <h3>Bachelor Of IT </h3>
                <h4> Federation University <span style={{marginLeft:"3em"}}> 6.33 GPA </span></h4>
                <h5>  2013 - 2016</h5>
                <p>Bachelor Of IT major in Software Engineering </p>
                {/*<p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>*/}
              </div>
              <hr />
              <div className="education-each">
                <img alt="projects" src="./images/birendra.jpg" className="img-circle" style={{ width: '71px', height: '71px' }} />
                <h3>Bachelor Of Science</h3>
                <h4> Tribhuvan University <span style={{ marginLeft: "3em" }}> 70% </span></h4>
                <h5>  2007 - 2011</h5>
                <p>Bachelor Of Science major in Physics </p>
                {/*<p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>*/}
              </div>

            </div>
          </div>
      </div>
    );
  }
}

export default About;
