import React from 'react';

import './navbar.styles.scss';

/** Navbar Component
 * 
 * Expects a title as a prop
 * Child elements should be objects with a name and url
 * 
 */
const Navbar = ({title, children}) => (
    <nav>
        <a href="#landing">
            <div className="nav-left">
                <h2>{title}</h2>
            </div>
        </a>
        <div className="nav-right">
            { children.map( ({name, url}) => (
            <a className="navbar-item" href={url}>
                <h3>{name}</h3>
            </a>
            ))}
        </div>     
    </nav>
)

export default Navbar