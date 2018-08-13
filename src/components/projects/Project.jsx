
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
      source: '',
      demo: ''

    });

    this._showDescription = this._showDescription.bind(this);
  }
  _showDescription(e) {
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
          source:project.source,
          demo:project.demo
        });
      }
    });
    if (showmodal === false) {
      document.getElementById('project-detail').style.display = 'block';
      document.getElementById('project-detail').style.opacity = '0.9';
      document.getElementById('project').style.pointerEvents = "none";
      document.getElementById('project').style.opacity = "0";
      document.getElementById('nav').style.opacity = "0";
      document.getElementById('nav').style.pointerEvents = "none";      
      document.getElementById('footer').style.opacity = "0";
      document.getElementById('footer').style.pointerEvents = "none";   
      
      this.setState({
        showmodal: true,
      });
    } else {
      document.getElementById('project-detail').style.display = 'none'; 
      document.getElementById('project-detail').style.opacity = '0';
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
    const { projectDescription, technology, role, images, source, demo } = this.state;
    return (
      <div>
        <div className="container" id="project">
          <h4 style={{ color: "white" }}> <b>Commercial Project  >>> </b></h4>
          <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/wpa.jpeg" className="img" />
              <h3>Loan Calculator</h3>
              <p>This web application is for the Wealth Prtners Australian employee to help them calculating loan and describe the idea of reducing loan amout to their client.</p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showDescription} id="Loan Calculator">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./images/swagat.jpg" className="img" />
              <h3>Record Management</h3>
              <p>This is a web application hosted locally in the IIS server which help to manage records of a swagat grocery in Thomastown. This also helps to export data in every three months into exel or csv. </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showDescription} id="Record Management" >More Details &raquo;</a></p>
            </div>
          </div>
          <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>GADA Projcet</h3>
              <p>This is a Open source project carried out by GADA Technology to build a generic project which then can be used to generate multiple versions of it. </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showDescription} id="Gada Project">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>INTERNMATCH Project</h3>
              <p> I am currently working on this project.So description is comming about this project </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showDescription} id="Intern Match">More Details &raquo;</a></p>
            </div>
          </div>
          <h4 style={{color:"white"}}> <b> Open Source Projects >>> </b></h4>
          <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>PTE and Note Management</h3>
              <p>This web application is for those who want to get some material about the Perarson Test Of English. This also helps me to manage my notes. </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showDescription} id="Pte and Note Management">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>PHP MVC Boilerplate</h3>
              <p>This is a boilerplate to quickely get started for php developers on their own php application in Model, View and Controller structure which helps them to manage their code. </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showDescription} id="Php Mvc Boilerplate">More Details &raquo;</a></p>
            </div>
          </div>
          <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>Node API Boilerplate</h3>
              <p>This is a boilerplate to quickely get started for making API using NodeJs, ExpressJs, Mongodb, Mongoose, Docke, Docker-Compose and Swagger API. </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showDescription} id="Node Api Boilerplate">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>Node Secure API Boilerplate</h3>
              <p>This is a boilerplate to quickely get started for making Secured API using NodeJs, ExpressJs, Mongodb, Mongoose, Docke, Docker-Compose and Swagger API </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showDescription} id="Node Secure Api Boilerplate">More Details &raquo;</a></p>
            </div>
          </div>
          <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./favicon.png" className="img" />
              <h3>My Portfolio</h3>
              <p>This is a single page web application for creating a portfolio optimised for most of the devices and using modern technologies like react.This is a open source so anyone can use this code. </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showDescription} id="My Portfolio">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>React Layout Component</h3>
              <p>This web application is created during the work in GADA technology. It is an open source so that any one can use this project. This layout has standard header, collapsable sidebar, content and footer. </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showDescription} id="React Layout">More Details &raquo;</a></p>
            </div>
          </div>

          <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>Facebook-Keycloak Microservice</h3>
              <p>This project is a microservice that lets you save logged in user details from facebook provided that the keycloak token is sent through the header as Authorization. </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showDescription} id="Facebook Keycloak Microservice">More Details &raquo;</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>Email and Message Microservice</h3>
              <p>This project is a microservice that lets you send email and text messages which uses Nodemailer for sending email and Textmagic for sending texts.. </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showDescription} id="Email and Message Microservice">More Details &raquo;</a></p>
            </div>
          </div>
        </div>
        <ProjectDescription
          onclick={this._showDescription} ProjectDescription={projectDescription} technology={technology} role={role} images={images} source={source} demo={demo}
        />
      </div>
    );
  }
}

export default Project;
