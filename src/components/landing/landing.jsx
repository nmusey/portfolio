import React from 'react';

import './landing.styles.scss';
import ProfileImage from './images/profile.jpeg';

/** Landing component
 * 
 * @param {*} bgURL - Optional. URL of background image. Defaults to solid colour of #11DD7788
 */
const Landing = ({ title, subtitle }) => {
    
    return (
        <div className="landing">
            <a href="#landing" name="landing">
                <div className="landing">
                    <div className="landing-background">
                        <div className="landing-right">
                            <img 
                                src={ProfileImage} 
                                alt="Profile"
                                className="profilePicture"
                            />
                        </div>
                        <div className="landing-left">
                            <span class="one-line">
                                <h1>{title}</h1>
                            </span>
                            <span class="one-line">
                                <h2>{subtitle}</h2>
                            </span> 
                        </div>  
                    </div>
                </div>
            </a>
        </div>   
    )
}

export default Landing;