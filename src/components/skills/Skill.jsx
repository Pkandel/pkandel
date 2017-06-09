import React, { Component } from 'react';
import './skill.css';

class Skill extends Component {

    render() {
        return (
            <div className="container" id="skill">
                <div className="row">
                    <div className="each-skill-1">
                        <img alt="projects" src="./images/react.svg" className="img" />
                        <h3>React Js</h3>
                        <p>React is a great language to build the view component in the application. Because we make individual components while using React, 
                            It makes it so flexible and reusable thus increasing the speed for the next project.
                            I have done couple of projects using React. And this web application is entirely made up of using React.</p>

                    </div>
                    <div className="each-skill-2">
                        <img alt="projects" src="./images/redux.png" className="img" />
                        <h3>Redux Js</h3>
                        <p>I always love using Redux with React and it goes so well. It is a great technology to manage data flow in the front end. It has a very good structure and makes it so easy to understand.
                            The reducers, action and store is cool about redux. I am currently using React and Redux to make a cool application in GADA technology.
                        </p>

                    </div>
                </div>
                <div className="row">
                    <div className="each-skill-1">
                        <img alt="projects" src="./images/nodejs.png" className="img" />
                        <h3>Node JS</h3>
                        <p>Node Js is great language to work for back-end staff. Because it is based on the modular approach, it makes it so easy to reuse these module. And there are thousands of npm packages around there
                            which help a lot while doing a project.I have make couple of microservices using Node, Express and mongodb.
                             </p>

                    </div>
                    <div className="each-skill-2">
                        <img alt="projects" src="./images/docker.png" className="img" />
                        <h3>Docker</h3>
                        <p>Docker is the world's leading software container platform. Really, it is great to work with. In a big project where there are so many developers, docker makes it easy to 
                            provide the same platform to run the application so we don't have to worry about the platform that we are using.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="each-skill-1">
                        <img alt="projects" src="./images/keycloak.png" className="img" />
                        <h3>Keycloak</h3>
                        <p> Keycloak is an open source Identity and Access Management solution amined for modern applicaion and services.
                            If we can provide a great security using Keycloak, why do we bother to write code for every project. It also has social login which is really handy for modern applications. </p>

                    </div>
                    <div className="each-skill-2">
                        <img alt="projects" src="./images/git.jpeg" className="img" />
                        <h3>Git and Github</h3>
                        <p>Image result for git and githubwww.youtube.com
                            Git is the distributed version control system. Git is responsible for keeping track of changes to content (usually source code files),
                            and it provides mechanisms for sharing that content with others. GitHub is a company that provides Git repository hosting. </p>
                    </div>
                </div>

                <div className="row">
                    <div className="each-skill-1">
                        <img alt="projects" src="./images/sql.png" className="img" />
                        <h3>Mysql</h3>
                        <p>MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius' 
                            daughter, and "SQL", the abbreviation for Structured Query Language </p>

                    </div>
                    <div className="each-skill-2">
                        <img alt="projects" src="./images/mongodb.png" className="img" />
                        <h3>Mongodb and Mongoose</h3>
                        <p>MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas. And mongoose is great tool 
                            to work with mongodb database. </p>

                    </div>
                </div>

                <div className="row">
                    <div className="each-skill-1">
                        <img alt="projects" src="./images/express.png" className="img" />
                        <h3>Express Js</h3>
                        <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. </p>
                    </div>
                    <div className="each-skill-2">
                        <img alt="projects" src="./images/java.png" className="img" />
                        <h3>Java</h3>
                        <p>Java is really great object oriented programming language tha can be used to build any kind of application. Wheather we are making web apllicaton, desktop application or mobile applicaion (android)
                            Java really shines in all areas. </p>

                    </div>
                </div>
                <div className="row">
                    <div className="each-skill-1">
                        <img alt="projects" src="./images/php.png" className="img" />
                        <h3>PHP</h3>
                        <p>Php is great and widely used programming language that we use to build the back-end of web apllicaton.
                            It is really easy to start and also (IMO) cheap and easy to host online. I have done many projects using PHP.
                             </p>

                    </div>
                    <div className="each-skill-2">
                        <img alt="projects" src="./images/csharp.png" className="img" />
                        <h3>C#</h3>
                        <p>C# is also a great object oriented programming language that can be used to build any kind of application. It is used to make either android or IOS applicatioin using Xamrin and ASP.NET to make
                            awesome web applicaton. </p>
                    </div>
                </div>

            </div>

        );
    }
}

export default Skill;