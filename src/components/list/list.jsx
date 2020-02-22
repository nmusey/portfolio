import React from 'react';

import './list.styles.scss'

/**
 * 
 * Expects a title and an array of strings
 */
const List = ({ title, array }) => (
    <div className="list">
        <span className="list-title"><h1>{title}</h1></span>
        <ul>
            { array.map( item => { return (<li key={array.indexOf(item)}>{item}</li>) } ) }
        </ul>
    </div>
)

export default List;