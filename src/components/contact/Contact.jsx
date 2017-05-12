import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="container" id="contact">
          <h4> Please leave me a Message </h4>

          <div className="contact-form">
            <div className="name-email">
              <div className="name"> Name  <input type="text" placeholder="your name" />   </div>
              <div className="email" > Email  <input type="text" placeholder="your name" />   </div>
            </div>

              <div className="message">
                Message <br />
                <textarea placeholder="please drop me the message" />
              </div>

              <button type="submit" > <i className="material-icons">send</i> </button>
              <hr />
              <h4> Or you can send me a message on <b>0415174274 </b> </h4>
              <hr />
              </div>
            </div>
          );
  }
}

export default Contact;
