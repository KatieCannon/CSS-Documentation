import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import './AlignContent.css';
import AlignContentExample from '../AlignContentExample/AlignContentExample';

const alignContentValues = ['center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'stretch'];
const exampleDescription = {'center':'Puts items around the center.'};
const AlignContent = () => {
    return (
        <div className='alignContent'>
            <p className='alignContent__about'>A sub property of the Flexible Box Layout Module. It only applies where there are multiple lines.This property has no effect on single line flex containers (i.e. ones with flex-wrap: nowrap).</p><br />
            <p className='alignContent__about'>The below image shows 6 items with display: flex and flex: wrap</p>
            <div className='alignContent__example'><AlignContentExample value='none' /></div>
           {alignContentValues.map(value => (
               <div key={value}>
                   <SubHeader headerValue={value} />
                   <p className='alignContent__description'>{exampleDescription[value]}</p>
                   <div className='alignContent__example'>
                        <AlignContentExample value={value}/>
                    </div>
                </div>
           ))}
        </div>
    )
}

export default AlignContent;