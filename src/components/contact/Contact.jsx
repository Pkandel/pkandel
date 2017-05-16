import React, { Component } from 'react';
import nodemailer from 'nodemailer';
import './contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = ({
      name: '',
      email: '',
      message: ''
    })
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleName = this._handleName.bind(this);
    this._handleEmail = this._handleEmail.bind(this);
    this._handleMessage = this._handleMessage.bind(this);

  }
  _handleName(e) {
    this.setState({
      name: e.target.value
    })
    e.preventDefault();
    
  }
  _handleEmail(e) {
    this.setState({
      email: e.target.value
    })
    e.preventDefault();
  }
  _handleMessage(e) {
    this.setState({
      message: e.target.value
    })
    e.preventDefault();
  }
  _handleSubmit(e) {
    const { name, email, message } = this.state;
    //send email from here
  }
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="container" id="contact">
          <h4> Please leave me a Message </h4>
          name: {name}, email: {email}, message: {message}

          <div className="contact-form">
            <form onSubmit={this._handleSubmit}>
            <div className="name-email">
              <div className="name"> Name  <input type="text" placeholder="your name" value={name} onChange={this._handleName} />   </div>
              <div className="email" > Email  <input type="text" placeholder="your email" value={email} onChange={this._handleEmail} />   </div>
            </div>

              <div className="message">
                Message <br />
                <textarea placeholder="please drop me the message" value={message} onChange={this._handleMessage}/>
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
