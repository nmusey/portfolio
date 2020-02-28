import React from 'react';
import ReactDOM from 'react-dom';

import './section.styles.scss';

/**
 * 
 * @param title Title of the section
 * @param id id for navigation to the section
 * @param component component to render - can be more than
 * @param animationheightbuffer Height in pixels before the component animates to visible, defaults to 150px.
 */
class Section extends React.Component {


    constructor(props) {
        super()

        this.state = {
            yPosition: 0,
            hasAnimated: false,
            willAnimate: false,
            previousScroll: 0,
            animationHeightBuffer: props.animationheightbuffer || 150
        }
    
    }

        

    /* Add a listener to watch for user scrolling in order to animate at the correct time. */
    componentDidMount() {
        const node = ReactDOM.findDOMNode(this)
        this.setState({ yPosition: node.getBoundingClientRect().y });

        console.log(node);
        console.log(window.scrollY);

        window.addEventListener('scroll', () => {
            const windowTop = Math.round(window.scrollY) - this.state.animationHeightBuffer ;
            const windowBottom = windowTop + window.innerHeight;
            const inView = this.state.yPosition < windowBottom && this.state.yPosition > windowTop;

            // Decide animation state based on window and component position
            const willAnimate = inView && !this.state.hasAnimated;
            const hasAnimated = this.state.hasAnimated || willAnimate;

            this.setState({ willAnimate, hasAnimated });
        })
    }


    /* Only update state as the user moves down the page since this is all that changes state.
        Once the component has animated, stop updating since it doesn't change anything.
    */
    shouldComponentUpdate() {
        return this.state.hasAnimated && (window.scrollY > this.state.previousScroll + 50);
    }

    /* Track whether user scrolled down to save unnecessary udpating */
    componentDidUpdate() {
        this.setState({ previousScroll: window.scrollY });
    }



    render() {
        const {title, id, component} = this.props;

        if (this.state.willAnimate) {
            console.log(this.props.title + " will animate");
        }
        if (this.state.hasAnimated) {
            console.log("Already animated");
        }

        console.log("RENDER");

        return (
            <section id={id} ref={this.viewRef} 
                className={(this.state.willAnimate || this.state.hasAnimated) ? "scroll-animate" : "" }
            >
                <a href={"#" + id} name={id}>
                    <h2 
                        className="section-title"
                        id={id + "-title"}
                    >{title}</h2>
                </a>
                { component }
            </section>
        )
    }
}




export default Section;