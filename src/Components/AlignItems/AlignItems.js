import React from 'react';
import './AlignItems.css';
import SubHeader from '../SubHeader/SubHeader';

const alignItemsValues = ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'];
const AlignItems = () => {
    return (
        <div className='alignItems'>
            <p className='alignItems__about'>A sub property of the Flexible Box Layout Module that controls how items are positioned along a flex container's cross axis.</p>
            {alignItemsValues.map(value => (
                <div key={value}>
                    <SubHeader headerValue={value} />
                </div>
            ))}
        </div>
    )
}

export default AlignItems;