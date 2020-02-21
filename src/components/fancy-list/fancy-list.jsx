import React from 'react';

import './fancy-list.styles.scss'

/**
 * 
 * Expects a title and an array of strings
 */
const FancyList = ({ title, array }) => (
    <div className="fancy-list">
        <h1>{title}</h1>
        <ul>
            { array.map( item => { return (<li key={array.indexOf(item)}>{item}</li>) } ) }
        </ul>
    </div>
)

export default FancyList;