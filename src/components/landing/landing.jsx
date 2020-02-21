import React from 'react';

import DoubleColumn from '../double-column/double-column';

import ProfileImage from './profile.jpeg';
import './landing.styles.scss';


/** Landing component
 * 
 * @param ProfileImage imported picture 
 * @param title title of the landing section
 * @param subtitle subtitle of the landing section
 */
const Landing = ({ title, subtitle }) => {
    
    return (
        <div className="landing-bg">
            <DoubleColumn>
                <img 
                    src={ProfileImage}
                    alt="Profile of Nick"
                    className="profilePicture"
                />
                <div id="landing-text">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
            </DoubleColumn>
        </div>
    )
}




export default Landing;