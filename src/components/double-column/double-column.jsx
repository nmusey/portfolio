import React from 'react';

import './double-column.scss';


/**
 * DoubleColumn
 * 
 * Displays 2 children in side by side columns.
 * The first child will be on the left and vice versa.
 * Collapses to one column for smaller screens.
 * 
 * @param children 2 JSX elements to be displayed
 */
const DoubleColumn = ({ children }) => (    
    <div className="double-column">
        <div className="left-double-column">
            { children[0] }
        </div>
        <div className="right-double-column">
            { children[1] }
        </div>
    </div>

)


export default DoubleColumn;