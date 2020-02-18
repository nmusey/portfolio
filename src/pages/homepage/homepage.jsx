import React from 'react';

import Navbar from '../../components/navbar/navbar';

import './homepage.styles.scss';



class Homepage extends React.Component {


    projects = [
        {name: "Test 1", url: "https://www.google.com", id:1},
        {name: "Test 2", url: "https://www.github.com", id:2},
        {name: "Test 3", url: "https://www.youtube.com", id:3},
    ];

    componentDidMount() {
        // Fetch Github info here
    }

    render() {
        return (
            <div className="homepage">
                <Navbar title="Nick Musey">
                    { this.projects }
                </Navbar>
                <a href="#landing" name="landing">
                    <div className="landing">
                        <h1 class="title">Title Here</h1>
                    </div>
                </a>
            </div>
        )

    }

}


export default Homepage;