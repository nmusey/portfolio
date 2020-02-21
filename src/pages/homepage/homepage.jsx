import React from 'react';

import Navbar from '../../components/navbar/navbar';
import Landing from '../../components/landing/landing';
import DoubleColumn from '../../components/double-column/double-column';
import ProjectContainer from '../../components/project-container/project-container';
import FancyList from '../../components/fancy-list/fancy-list';

import './homepage.styles.scss';



const Homepage = () => {

    // Links declared here with title, url, and id.
    const navbarLinks = [
        {
            name: "Projects",
            url: "#projects",
            id: 1
        }, {
            name: "Skills",
            url: "#skills",
            id: 2
        }
    ]

    const skills = [
        'Front-End Development using React',
        'Back-End Development using Express.js and Node.js',
        'Python for automation',
        'PostgreSQL and MongoDB experience',
    ]

    const learningNow = [
        'React Hooks', 'Django', 'Artificial Intelligence',
        'Database Design'
    ]

    return (
        <div className="homepage">
            <Navbar title="Nick Musey">
                {navbarLinks}
            </Navbar>
            <Landing 
                title="Nick Musey"
                subtitle="Student & Developer"
            />
            <a name="projects" href="#projects"><h1>Projects</h1></a>
            <ProjectContainer id="project-container" username="nmusey"/>

            <a name="skills" href="#skills"><h1>Skills</h1></a>
            <DoubleColumn>
                <FancyList title="Skills" array={skills} />
                <FancyList title="Learning Now" array={learningNow} />
            </DoubleColumn>
        </div>
    )
}



export default Homepage;