import React from 'react';

import Project from '../project/project';

import './project-container.styles.scss';


/**
 * Container for automatically imported projects.
 * Pass in a Github username as a prop and they'll be rendered
 * Optionally pass in maxRepos as a prop to only fetch that many repos.
 */
class ProjectContainer extends React.Component {

    /* Props should include a Github username and optionally a maximum number of repos to load. */
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            projects: []
        }
        this.username = props.username; // Stored in the class so fetchRepos can access it

        props.maxRepos ? this.maxRepos=props.maxRepos : this.maxRepos=6;
    }


    /* Fetches Github repos using username stored in the class */
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

        this.setState({ isFetching: false });

        return projects;
    }


    /* Starts fetching upon mount  */
    componentDidMount() {
        this.setState( { projects: this.fetchRepos() } )
    }



    /* Renders a project for each imported repo. */
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