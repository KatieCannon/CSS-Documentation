import React from 'react';
import './AlignSelf.css';
import SubHeader from '../SubHeader/SubHeader';

const alignSelfValues = ['center', 'stretch', 'flex-start', 'flex-end', 'baseline'];
const AlignSelf = () => {
    return(
        <div className='alignSelf'>
            <p className='alignSelf__about'>A sub property of the Flexible Box Layout Module that aligns a single element within a flex container.</p>
            {alignSelfValues.map(value => (
                <div key={value} >
                    <SubHeader headerValue={value} />
                </div>
            ))}
        </div>
    )
}

export default AlignSelf;