import React from 'react';

import './navbar.styles.scss';

/** Navbar Component
 * 
 * @param title title for the left side of the navbar
 * @param titleLink what the title links to
 * @param children JSX elements with name, id, and url attributes
 * @param collapseWidth Optional, defines when the navbar should be a column instead of a row
 */
class Navbar extends React.Component {


    constructor(props) {
        super(props)

        /* collapseWidth will be the width the navbar 
            goes into a column */
        this.collapseWidth = props.collapseWidth || 600; 

        this.state = { 
            collapsed: false, 
            bigWindow: (window.innerWidth >= this.collapseWidth)
        }
    }


    /**
     * Negates the state so the navbar collapses.
     */
    collapseNav() {
        this.setState({ collapsed: !this.state.collapsed })
    }


    /**
     * Utility function to set bigWindow in state
     */
    setWindowState() {
        this.setState({ 
            bigWindow: (window.innerWidth >= this.collapseWidth),
         });
    }

    /** 
     * Sets window state and adds an event listener to watch for window resizes
     */
    componentDidMount() {
        this.setWindowState();
        window.addEventListener('resize', 
            () => this.setWindowState()
        );
    }

    /**
     * Conditionally renders the right side of the nav
     * This is toggled using the hamburger button
     */
    render() {
        const { title, titleLink, children } = this.props;
        
        return (
            <nav>
                <div className="nav-left">
                    {/* Conditionally render hamburger symbol */}
                    {/* { this.state.bigWindow &&  */}
                        {/* ( */}
                        <div 
                            className="nav-menu"
                            onClick={()=>this.collapseNav()}
                        >≡ </div>
                        {/* ) */}
                    {/* } */}

                    {/* Always render the title */}
                    <a href={titleLink}><h2>{title}</h2></a>
                </div> 

                {/* Conditionally render right of navbar */}
                {/* this.state.bigWindow */}
                { (!this.state.collapsed) &&
                    (<div className="nav-item-container">
                        { children.map( ({name, url, id}) => (
                            <a className="nav-item" href={url} key={id}>
                                <h3>{name}</h3>
                            </a>
                        ))}
                    </div>
                    )
                }
            </nav>
        )
    }

}

export default Navbar