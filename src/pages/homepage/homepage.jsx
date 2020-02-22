import React from 'react';

import Navbar from '../../components/navbar/navbar';
import Landing from '../../components/landing/landing';
import DoubleColumn from '../../components/double-column/double-column';
import ProjectContainer from '../../components/project-container/project-container';
import List from '../../components/list/list';

import ProfileImage from './profile.jpeg';
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
        'RESTful API Development using Express.js and Node.js',
        'Python',
        'PostgreSQL and MongoDB experience',
        'Object Oriented Programming'
    ]

    const learningNow = [
        'React Hooks', 'Django', 'Artificial Intelligence',
        'Database Design'
    ]

    return (
        <main className="homepage">
            <Navbar title="Nick Musey">
                {navbarLinks}
            </Navbar>

            <section id="landing-section">
                <Landing 
                    title="Hi, I'm Nick"
                    subtitle="I'm a 4th year Computer Science and Psychology student the the University of Victoria"
                    picture={ProfileImage}
                    alt="Picture of Nick"
                />
            </section>
            
            <section id="project-section">
                <a name="projects" href="#projects"><h1>Projects</h1></a>
                <ProjectContainer id="project-container" username="nmusey" />
            </section>
            
            <section id="skill-section">
                <a name="skills" href="#skills"><h1>Skills</h1></a>
                <DoubleColumn>
                    <List title="My Skills" array={skills} />
                    <List title="What I'm Learning Now" array={learningNow} />
                </DoubleColumn>
            </section>

            <section id="contact-section">
                <a name="contact" href="#contact">
                    <h1>Contact</h1>
                    Feel free to contact me through email at nmusey@gmail.com with any questions or comments you might have.
                </a>
                
            </section>
        </main>
    )
}



export default Homepage;