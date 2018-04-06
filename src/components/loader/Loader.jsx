import React, { Component } from 'react';
import './loader.css';

class Loader extends Component {
    render() {
        return (
            <div id="overlay" className="overlay">
                <div id="loader" className="loader"></div>
            </div>
        );
    }
}

export default Loader;