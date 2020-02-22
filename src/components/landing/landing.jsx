import React from 'react';

import DoubleColumn from '../double-column/double-column';

import './landing.styles.scss';


/** Landing component
 * 
 * @param title title of the landing section
 * @param subtitle subtitle of the landing section
 * @param picture Picture to be displayed
 * @param altText Alternate text to the picture
 */
const Landing = ({ title, subtitle, picture, altText }) => {
    
    return (
        <div className="landing-bg">
            <DoubleColumn>
                <img 
                    src={picture}
                    alt={altText}
                    className="profilePicture"
                />
                <div id="landing-text">
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </DoubleColumn>
        </div>
    )
}




export default Landing;