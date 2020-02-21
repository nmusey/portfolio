import React from 'react';

import './navbar.styles.scss';

/** Navbar Component
 * 
 * @param title title for the left side of the navbar
 * @param children JSX elements with name, id, and url attributes
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
            { children.map( ({name, url, id}) => (
            <a className="navbar-item" href={url} key={id}>
                <h3>{name}</h3>
            </a>
            ))}
        </div>     
    </nav>
)

export default Navbar