import React from 'react';

import Navbar from '../../components/navbar/navbar';
import Landing from '../../components/landing/landing';
import ProjectContainer from '../../components/project-container/project-container';

import './homepage.styles.scss';



const Homepage = () => {

    // Links declared here with title, url, and id.
    const navbarLinks = [
        {
            title: "Test1",
            url: "www.google.com",
            id: 1
        }, {
            title: "Test2",
            url: "www.youtube.com",
            id: 2
        }
    ]

    return (
        <div className="homepage">
            <Navbar title="Nick Musey">
                {navbarLinks} { 
                    // TODO - Redo these. Maybe another component for each link? 
                }
            </Navbar>
            <Landing 
                title="Nick Musey" 
                subtitle="Student & Developer"
            />
            <h1>Projects</h1>
            <ProjectContainer id="project-container" username="nmusey"/>
        </div>
    )
}



export default Homepage;