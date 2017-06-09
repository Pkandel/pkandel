import React, { Component } from 'react';
import './contact.css';
import axios from 'axios';

class Contact extends Component {
  constructor() {
    super();
    this.state = ({
      name: '',
      email: '',
      message: '',
      fetching: false
    });
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleName = this._handleName.bind(this);
    this._handleEmail = this._handleEmail.bind(this);
    this._handleMessage = this._handleMessage.bind(this);
  }
  _handleName(e) {
    this.setState({
      name: e.target.value,
    });
    e.preventDefault();
  }
  _handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
    e.preventDefault();
  }
  _handleMessage(e) {
    this.setState({
      message: e.target.value,
    });
    e.preventDefault();
  }
  _handleSubmit(e) {
    const { name, email, message } = this.state;
    if (name === '') {
      document.getElementById("feedback-error").innerHTML = "Please provide your Name";
      e.preventDefault();
      return false;
    }
    else {
      document.getElementById("feedback-error").innerHTML = "";

    }
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEmail.test(email) === false) {
      document.getElementById("feedback-error").innerHTML = "Please provide your Valid Email";
      e.preventDefault();
      return false;
    }
    else {
      document.getElementById("feedback-error").innerHTML = "";
    }
    if (message === '') {
      document.getElementById("feedback-error").innerHTML = "Please provide the message";
      e.preventDefault();
      return false;
    }
    else {
      document.getElementById("feedback-error").innerHTML = "";
    }
    this.setState({ fetching: true })
    // send email from here
    const baseUrl = (process.env.NODE_ENV === 'production') ? 'https://pkandel-server.xyz/mail/send' : 'http://localhost:5000/mail/send';
    axios.post(baseUrl, {
      from: email,
      message,
      name,
    })
      .then((response) => {
        this.setState({ fetching: false });
        document.getElementById("feedback-success").innerHTML = "Thank you for sending me an email";
      })
      .catch((err) => {
        this.setState({ fetching: false });
        document.getElementById("feedback-error").innerHTML = "Something went wrong.Please try again";
        console.log('error sending mail', err);
      });
   
    e.preventDefault();
  }
  render() {
    const { name, email, message, fetching } = this.state;
    if(fetching === false) {
      document.getElementById('overlay').style.display = "none";
    }
    else {
      document.getElementById('overlay').style.display = "block";
    }
    return (
      <div className="container" id="contact">
        <span id="feedback-error" style={{color:"red", textShadow:"none"}}></span>
        <span id="feedback-success" style={{color:"green"}}></span>

        <div className="contact-form">
          <form onSubmit={this._handleSubmit}>
            <div className="name-email">
              <div className="name"> Name  <input type="text" placeholder="your name" value={name} onChange={this._handleName} />  </div>
              <div className="email" > Email <input type="text" placeholder="your email" value={email} onChange={this._handleEmail} /></div>
            </div>

            <div className="message">
              Message <br />
              <textarea placeholder="please drop me the message" value={message} onChange={this._handleMessage} />
            </div>

            <button type="submit" > <i className="material-icons">send</i> </button>
            <hr />
            <h4> Or you can send me a message on <b>0415174274 </b> </h4>
            <hr />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
