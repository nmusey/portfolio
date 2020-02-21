import React from 'react';

import ProfileImage from './images/profile.jpeg';
import DoubleColumn from '../double-column/double-column';

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
                    alt="Profile"
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