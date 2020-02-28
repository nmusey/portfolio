import React from 'react';

import Navbar from '../navbar/navbar';
import Landing from '../landing/landing';
import Section from '../section/section';
import DoubleColumn from '../double-column/double-column';
import ProjectContainer from '../project-container/project-container';
import List from '../list/list';

import ProfileImage from './profile.jpeg';
import './homepage.styles.scss';





/**
 * Homepage
 * 
 * Renders a homepage. Not intended to be incredibly reusable,
 *  just meant to tie together some other reusable components.
 */
class Homepage extends React.Component {

    constructor() {
        super();
        this.windowHeight = window.innerHeight; // Used for scroll animations
        this.scrollAnimated = false; // Only animates once. Flips after animating
    }


    // These are rendered by  a component later
    skillsArray = [
        'Front-End Development using React',
        'RESTful API Development using Express.js and Node.js',
        'Python',
        'PostgreSQL and MongoDB experience',
        'Object Oriented Programming'
    ]

    // These are rendered by a component later
    learningNowArray = [
        'React Hooks', 'Django', 'Artificial Intelligence',
        'Database Design'
    ]


    sections = [{
        name: "Projects",
        jsx: (<ProjectContainer id="project-container" username="octocat" />)
    }, {
        name: "Skills",
        jsx: (
            <DoubleColumn>
                <List title="My Skills" array={this.skillsArray} />
                <List title="What I'm Learning Now" array={this.learningNowArray} />
            </DoubleColumn>)
    }, {
        name: "Contact",
        jsx: ( <p>Feel free to contact me through email at nmusey@gmail.com with any questions or comments you might have.</p> )
    }]


    navbarLinks = this.sections.map( section => ({
        name: section.name,
        url: "#" + section.name.toLowerCase(),
        id: this.sections.indexOf(section)
    }) )


    render()  {
        return(
        <main className="homepage">
            <Navbar 
                title="Nick Musey"
                titleLink="#landing"
            >
                {this.navbarLinks}
            </Navbar>

            <section id="landing-section">
                <Landing 
                    className="landing"
                    title="Hi, I'm Nick"
                    subtitle="I'm a 4th year Computer Science and Psychology student the the University of Victoria"
                    picture={ProfileImage}
                    alt="Picture of Nick"
                />
            </section>

            <div className="personal-information">
            {
                this.sections.map( section => (
                    <Section 
                        title={section.name}
                        key={this.sections.indexOf(section)}
                        id={section.name.toLowerCase()}
                        animationheightbuffer={150}
                        component={section.jsx}
                    />
                ) )
            }
            </div>

        </main>
    )}
}



export default Homepage;