import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="footer" id="footer">
        <li>
          <a title="connect me on Facebook" href="https://www.facebook.com/prakash.kandel.10" target="_blank" > <img src="./images/fb.jpeg" className="img"  alt="" /></a>
          <a title="send me an Email" href="mailto:unique.prakash2002@gmail.com?Subject=Hello%20Prakash"> <img src="./images/gmail.png" className="img"  alt="" /></a>
          <a title="connect me on LinkedIn" href="https://www.linkedin.com/in/prakash-kandel-112b47a3/" target="_blank"> <img src="./images/linkedin.jpeg" className="img"  alt="" /></a>
        </li>
        </div>
    );
  }
}
export default Footer;
