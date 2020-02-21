import React from 'react';

import Project from '../project/project';

import './project-container.styles.scss';

class ProjectContainer extends React.Component {


    /**
     * 
     * Props should include a Github username and optionally a maximum number of repos to load.
     */
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            projects: []
        }
        this.username = props.username; // Stored in the class so fetchRepos can access it

        props.maxRepos ? this.maxRepos=props.maxRepos : this.maxRepos=6;
    }


    /**
     * Fetches Github repos using username given 
     */
    fetchRepos() {
        let projects = [];
        fetch(`https://api.github.com/users/${this.props.username}/repos?per_page=${this.maxRepos}`)
            .then( res => res.json() )
            .then( repos => {
                repos.forEach( 
                    repo => {
                        const { name, description, id } = repo;
                        const url = `https://www.github.com/${this.username}/${name}`; // create the url for the project
                        projects.push( { name, description, url, id} );
                });
                this.setState({ isFetching: false });
            })
            .catch(err => {
                console.error(err);
                this.setState({ projects: { name: "Error fetching projects", id: 0, url: ""} })
        })

        return projects;
    }


    
    componentDidMount() {
        this.setState( { projects: this.fetchRepos() } )
    }



    render() {
        if (this.state.isFetching) {
            return (
                <div className="project-container">
                    <h1>Projects are loading...</h1>
                </div>
            )
        } else if ( !this.state.projects.length ) {
            return (
                <div className="project-container">
                    <h1>No projects were found :(</h1>
                </div>
            )
        } else {
            return (
                <div className="project-container">
                    { this.state.projects.map( proj => (<Project name={proj.name} 
                                                                description={proj.description} 
                                                                key={proj.id} 
                                                                url={proj.url} />) 
                                            ) }
                </div>
            )
        }

    }
}

export default ProjectContainer;