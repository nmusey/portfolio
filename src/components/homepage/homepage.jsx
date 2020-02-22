import React from 'react';

import Navbar from '../navbar/navbar';
import Landing from '../landing/landing';
import Section from '../section/section';
import DoubleColumn from '../double-column/double-column';
import ProjectContainer from '../project-container/project-container';
import List from '../list/list';

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

    // These are rendered by  a component later
    const skills = [
        'Front-End Development using React',
        'RESTful API Development using Express.js and Node.js',
        'Python',
        'PostgreSQL and MongoDB experience',
        'Object Oriented Programming'
    ]

    // These are rendered by a component later
    const learningNow = [
        'React Hooks', 'Django', 'Artificial Intelligence',
        'Database Design'
    ]



    return (
        <main className="homepage">
            <Navbar 
                title="Nick Musey"
                titleLink="#landing"
            >
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

            <Section title="Projects" id="projects"
                component={(<ProjectContainer id="project-container" username="nmusey" />)}
            />

            <Section title="Skills" id="skills"
                component={(
                    <DoubleColumn>
                        <List title="My Skills" array={skills} />
                        <List title="What I'm Learning Now" array={learningNow} />
                    </DoubleColumn>)}
            />            



            <Section title="Contact" id="contact"
                component={(
                    <p>Feel free to contact me through email at nmusey@gmail.com with any questions or comments you might have.</p>
                )}
            />

        </main>
    )
}



export default Homepage;