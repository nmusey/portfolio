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
            collapsed: true, 
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
                    {/* Always render the hamburger button */}
                    <button
                        type="switch" 
                        className="nav-button interactive"
                        onClick={()=>this.collapseNav()}
                    >≡ </button>

                    {/* Always render the title */}
                    <a href={titleLink}> <h2>{title}</h2> </a>
                </div> 

                {/* Conditionally render right of navbar */}
                <div 
                    className={ `nav-drawer ${
                        (!this.state.collapsed && this.state.bigWindow)
                        ? "nav-drawer-vis" : "nav-drawer-invis"}`
                }>
                    { !this.state.collapsed && children.map( ({name, url, id}) => (
                        <a  
                            href={url} 
                            key={id}
                            onClick={()=>window.dispatchEvent(new CustomEvent('navScroll'))}
                        >
                        <h3 className="nav-item interactive ">{name}</h3>
                        </a>
                    ))}
                </div> 
            </nav>
        )
    }

}

export default Navbar