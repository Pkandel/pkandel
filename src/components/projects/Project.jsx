import React, { Component } from 'react';
import './project.css';

class Project extends Component {
  constructor() {
    super();
    this.state = ({
      showLoan: false,
    });

    this._showLoanCalculator = this._showLoanCalculator.bind(this);
  }
  _showLoanCalculator() {
  let { showLoan } = this.state;
  if (showLoan == false) {
    document.getElementById('Loan').style.display = 'block';
    this.setState({
      showLoan: true,
    });
  }  else {
    document.getElementById('Loan').style.display = 'block';
    this.setState({
      showLoan: false,
    });
  }
}
  render() {
    return (
      <div className="container" id="project">
        <div id="Loan" className="Loan">
          hello
        </div>
        <h4> Commercial Project >>> </h4>
        <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/wpa.jpeg" className="img" />
              <h3>Loan Calculator</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button" onClick={this._showLoanCalculator}>Learn More &raquo,</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./images/swagat.jpg" className="img" />
              <h3>Record Management</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
            </div>
            <div className="each-skill-3">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>GADA Projcet</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
            </div>
          </div>
        <h4> Open Source Projects >>> </h4>
        <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>PTE and Note Management</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>PHP MVC Boilerplate</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
            </div>
            <div className="each-skill-3">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>Node API Boilerplate</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
            </div>
          </div>
        <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>Node Secure API Boilerplate</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./favicon.png" className="img" />
              <h3>My Portfolio</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
            </div>
            <div className="each-skill-3">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>React Layout Component</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
            </div>
          </div>

        <div className="row">
            <div className="each-skill-1">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>Facebook-Keycloak Microservice</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
            </div>
            <div className="each-skill-2">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>Email and Message Microservice</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
            </div>
            <div className="each-skill-3">
              <img alt="projects" src="./images/project.jpeg" className="img" />
              <h3>File Upload Microservice</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
            </div>
          </div>

      </div>
    );
  }
}

export default Project;
