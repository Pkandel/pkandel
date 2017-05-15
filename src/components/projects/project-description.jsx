import React, { Component } from 'react';
import './project.css';
class ProjectDescription extends Component {

  render() {
    const { onclick, ProjectDescription, technology, role, images, link } = this.props;
    return (
      <div id="Loan" className="Loan">
        <div className="clear">
          <i className="material-icons" onClick={onclick}>clear</i>
        </div>
        <div className="project-detail">
           <h4> <b> Project Description </b></h4><hr />
          {ProjectDescription}
        </div>
        <hr />
        <div className="technology">
          <h4> <b> Technology Used </b></h4><hr />
            Front End: {technology.frontend.map((fe) => <li> {fe} </li>)}<br />
            Back End: {technology.backend.map(be => <li> {be} </li>)}
        </div>
        <hr />
        <div className="role">
          <h4> <b> My Role </b></h4><hr />
          {role}
        </div>
        <hr />
        <div className="images">
          <h4> <b> screenshoots </b></h4><hr />
          {images.map((image) => <img src={image} />)}
        </div>
        <hr />
        <div className="link">
          <h4> <b> Link</b></h4><hr />
          <a href={link}>{link}</a>
          </div>
      </div>
    );
  }
}

export default ProjectDescription;
