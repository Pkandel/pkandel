import React, { Component } from 'react';
import './home.css';
class Home extends Component {


  render() {
    return (
      <div className="home" id="home">
                  <h3> Hey, I'm <span className="name"> Prakash.</span> </h3>
                  <h4 > Passionate <span className="web-developer"> Web Developer </span> working in </h4>  
                  <p> <span className="company" >GADA Technology, </span> Carlton</p>
                  <div className="get-in-touch"> 
                    <div id="social">
                      <li>
                        <a href="https://www.facebook.com/prakash.kandel.10" target="_blank"> <img src="./images/fb.jpeg" className="img facebook"  alt="" /></a>
                        <a href="mailto:unique.prakash2002@gmail.com?Subject=Hello%20Prakash"> <img src="./images/gmail.png" className="img gmail"  alt="" /></a>
                        <a href="https://www.linkedin.com/in/prakash-kandel-112b47a3/" target="_blank"> <img src="./images/linkedin.jpeg" className="img linkedin"  alt="" /></a>
                      </li>
                    </div>
                   <div id="text"> Get In Touch </div>
                  </div>
      </div>
    );
  }
}

export default Home;
