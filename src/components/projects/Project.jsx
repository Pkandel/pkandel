
import React, { Component } from 'react';
import ProjectDescription from './project-description';
import ProjectData from './projectData';
import './project.css';

class Project extends Component {
  constructor() {
    super();
    this.state = ({
      showmodal: false,
      projectDescription: '',
      technology: {
        frontend: [],
        backend: [],
      },
      role: '',
      images: [],
      link: ''

    });

    this._showLoanCalculator = this._showLoanCalculator.bind(this);
  }
  _showLoanCalculator(e) {
    const { showmodal } = this.state;
    ProjectData.map((project) => {
      if (e.currentTarget.id === project.id) {
        this.setState({
          projectDescription: project.projectDescription,
          technology: {
            frontend: project.technology.frontend,
            backend: project.technology.backend
          },
          role: project.role,
          images:project.images,
          link:project.link
        });
      }
    });
    if (showmodal == false) {
      document.getElementById('Loan').style.display = 'block';
      document.getElementById('project').style.pointerEvents = "none";
      document.getElementById('project').style.opacity = "0.5";
      document.getElementById('nav').style.opacity = "0.5";
      document.getElementById('nav').style.pointerEvents = "none";      
      document.getElementById('footer').style.opacity = "0.5";
      document.getElementById('footer').style.pointerEvents = "none";   
      
      this.setState({
        showmodal: true,
      });
    } else {
      document.getElementById('Loan').style.display = 'none';
      document.getElementById('project').style.pointerEvents = "auto";
      document.getElementById('project').style.opacity = "1";
      document.getElementById('nav').style.opacity = "1";
      document.getElementById('nav').style.pointerEvents = "auto";   
      document.getElementById('footer').style.opacity = "1";
      document.getElementById('footer').style.pointerEvents = "auto";               
      this.setState({
        showmodal: false,
      });
    }
  }
  render() {
    const { projectDescription, technology, role, images, link } = this.state;
    return (
      <div>
        <div className="container" id="project">
         <h4> <b>Commercial Project  >>> </b></h4>
          <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/wpa.jpeg" className="img" />
              <h3>Loan Calculator</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showLoanCalculator} id="Loan Calculator">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./images/swagat.jpg" className="img" />
              <h3>Record Management</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-3">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>GADA Projcet</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">More Details &raquo;</a></p>
            </div>
          </div>
          <h4> <b> Open Source Projects >>> </b></h4>
          <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>PTE and Note Management</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>PHP MVC Boilerplate</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-3">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>Node API Boilerplate</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">More Details &raquo;</a></p>
            </div>
          </div>
          <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>Node Secure API Boilerplate</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./favicon.png" className="img" />
              <h3>My Portfolio</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-3">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>React Layout Component</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">More Details &raquo;</a></p>
            </div>
          </div>

          <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>Facebook-Keycloak Microservice</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>Email and Message Microservice</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-3">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>File Upload Microservice</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">More Details &raquo;</a></p>
            </div>
          </div>
        </div>
        <ProjectDescription
          onclick={this._showLoanCalculator} ProjectDescription={projectDescription} technology={technology} role={role} images={images} link={link}
        />
      </div>
    );
  }
}

export default Project;
