import React from 'react';

/**
 * 
 * @param title Title of the section
 * @param id id for navigation to the section
 * @param component component to render - can be more than
 */
const Section = ({title, id, component}) => (
    <section id="id">
        <a href={"#" + id} name={id}>
            <h2 
                className="section-title"
                id={id + "-title"}
            >{title}</h2>
        </a>
        { component }
    </section>
)


export default Section;