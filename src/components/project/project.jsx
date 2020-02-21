import React from 'react';

import './project.styles.scss';


const Project = ({name, description, url}) => (

    <div className="project">
        <a href={url} className="project-link">
            <h3 className="project-title">{name}</h3>
            { description ?  (<p className="project-description">{description}</p>) : null }
        </a>
    </div>

)

export default Project;