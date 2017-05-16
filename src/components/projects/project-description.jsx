import React, { Component } from 'react';
import './project.css';
class ProjectDescription extends Component {

  render() {
    const { onclick, ProjectDescription, technology, role, images, source, demo } = this.props;
    return (
      <div id="project-detail" className="project-detail">
        <div className="clear">
          <i className="material-icons" onClick={onclick}>clear</i>
        </div>
        <div className="project-description">
           <h4> <b> Project Description </b></h4><hr />
          {ProjectDescription}
        </div>
        <br />
        <div className="technology">
          <h4> <b> Technology Used </b></h4><hr />
            Front End: {technology.frontend.map((fe) => <li> {fe} </li>)}<br />
            Back End: {technology.backend.map(be => <li> {be} </li>)}
        </div>
        <br />
        <div className="role">
          <h4> <b> My Role </b></h4><hr />
          {role}
        </div>
        <br />
        <div className="images">
          <h4> <b> screenshoots </b></h4><hr />
         <div className="image"> {images.map((image) => <img src={image} />)} </div>
        </div>
        <br />
        <div className="source">
          <h4> <b> Source Code: </b> <a style={{paddingLeft:"3em"}} href={source}>{source}</a></h4><hr />    
          </div>
        <div className="demo">
          <h4> <b> Live Demo: </b><a style={{ paddingLeft: "3em" }} href={demo}>{demo}</a></h4><hr />
        </div>
      </div>
    );
  }
}

export default ProjectDescription;
