import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { About, Contact, Project, Skill, Home } from '../';

class Rout extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Project} />
                <Route path="/skills" component={Skill} />
                <Route path="/skills" component={Skill} />
                <Route path="/about" component={About} />
                
                
            </Switch>
        );
    }
}
export default Rout;