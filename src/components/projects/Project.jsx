import React, { Component } from 'react';
import "./project.css";

class Project extends Component {

    render() {
        return (
           <div className="container">
                <div className="row">
        <div className="col-md-4">
            <img src="./images/back-end.jpg" className="img-circle" style={{width:"71px",height:"71px" }}/>
          <h3>Back-End</h3>
           <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
          <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
        </div>
        
          <div className="col-md-4">
                <img src="./images/front-end.png" className="img-circle" style={{width:"71px",heignt:"71px" }}/>
          <h3>Front-End </h3>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
          <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
       </div>
          
        <div className="col-md-4">
              <img src="./images/sql.png" className="img-circle" style={{width:"71px",heignt:"71px" }}/>
          <h3>Data-Handling</h3>
           <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
          <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
        </div>
      </div>
         <div className="row">
        <div className="col-md-4">
            <img src="./images/language.png" className="img-circle" style={{width:"71px",height:"71px" }}/>
          <h3>Programming Language</h3>
           <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
          <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
        </div>
        
        <div className="col-md-4">
                <img src="./images/verson-control.jpg" className="img-circle" style={{width:"71px",height:"71px" }}/>
          <h3>Version Control</h3>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
          <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
       </div>
          
        <div className="col-md-4">
              <img src="./images/other.jpg" className="img-circle" style={{width:"71px",height:"71px" }}/>
          <h3>Other</h3>
           <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris  sed odio dui. </p>
          <p><a className="btn btn-default" href="#" role="button">Learn More &raquo,</a></p>
        </div>
      </div>
           </div>
        );
    }
}

export default Project;