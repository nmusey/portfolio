import React from 'react';

import './project.styles.scss';


const Project = ({name, url}) => (

    <div className="project">
        <a href={url} className="project-link">
            <h3 className="project-title">{name}</h3>
        </a>
    </div>

)

export default Project;