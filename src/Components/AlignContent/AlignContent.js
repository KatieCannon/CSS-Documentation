import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import './AlignContent.css';
import AlignContentExample from '../AlignContentExample/AlignContentExample';

const alignContentValues = ['center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'stretch'];
const exampleDescription = {
    'center':'Places items around the center.',
    'flex-start':'Places items from the start. ',
    'flex-end': 'Places items from end.',
    'space-between': 'Places items from start to end with even spacing.',
    'space-around':'Items are spaced with half size space on outside.',
    'stretch':'Auto sizes items to fit the container.'
};
const AlignContent = () => {
    return (
        <div className='alignContent'>
            <p className='alignContent__about'>A sub property of the Flexible Box Layout Module. It only applies where there are multiple lines. This property has no effect on single line flex containers (i.e. ones with flex-wrap: nowrap).</p>
            <p className='alignContent__about'>The below images shows 6 items with display: flex and flex: wrap</p>
           {alignContentValues.map(value => (
               <div key={value}>
                   <SubHeader headerValue={value} />
                   <p className='alignContent__description'>{exampleDescription[value]}</p>
                   <div className='alignContents__exampleContainerLabels'>
                       <p>Before</p>
                       <p>After</p>
                    </div>
                    <div className='alignContent__exampleContainer'>
                        <div className='alignContent__example'>
                            <AlignContentExample value='none'/>
                        </div>
                        <div className='alignContent__example'>
                           <AlignContentExample value={value}/>
                        </div>
                    </div>
                </div>
           ))}
        </div>
    )
}

export default AlignContent;