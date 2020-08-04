import React from 'react';
import AlignContent from  '../Components/AlignContent/AlignContent';
import AlignSelf from '../Components/AlignSelf/AlignSelf';
import AlignItems from '../Components/AlignItems/AlignItems';
import FlexBasis from '../Components/FlexBasis/FlexBasis';
import FlexDirection from '../Components/FlexDirection/FlexDirection';
import FlexFlow from '../Components/FlexFlow/FlexFlow';
import FlexGrow from '../Components/FlexGrow/FlexGrow';

const componentMap = {'align-items': <AlignItems />,
    'align-content': <AlignContent />,
    'align-self': <AlignSelf />,
    'flex-basis': <FlexBasis/>,
    'flex-direction': <FlexDirection />,
    'flex-flow': <FlexFlow />,
    'flex-grow': <FlexGrow />};

export default componentMap;