import React from 'react';
import './ContentHeader.css';

const ContentHeader = ({ property }) => {
    return (
        <div className='contentHeader'>
            <h1>{property}</h1>
        </div>
    )
}

export default ContentHeader;