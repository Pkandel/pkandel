import React, { Component } from 'react';
import './about.css';

class About extends Component {

  render() {
    return (
      <div className="container" id="about">
        <div className="col-md-8 col-sm-9 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                     the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                      of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                       but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                         with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        <div className="col-md-2 col-sm-3 ">
          <img className="img-circle" src="./images/me.jpeg" alt="Profile" style={{ width: '250px', height: '250px' }} />
        </div>
      </div>
    );
  }
}

export default About;
