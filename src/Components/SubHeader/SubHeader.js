import React from 'react';
import './SubHeader.css';

const SubHeader = ({ headerValue }) => {
    return (
        <div className='subHeader' >
            <h2>{headerValue}</h2>
        </div>
    )
}

export default SubHeader;