import React from 'react';
import './AlignContentExample.css';

const AlignContentExample = ({ value }) => {
    return (
        <div className={value}>
            <div className='alignContentExample__box'>1</div>
            <div className='alignContentExample__box'>2</div>
            <div className='alignContentExample__box'>3</div>
            <div className='alignContentExample__box'>4</div>
            <div className='alignContentExample__box'>5</div>
            <div className='alignContentExample__box'>6</div>
        </div>
    )
}

export default AlignContentExample;