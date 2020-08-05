import React from 'react';
import componentMap from '../../utils/componentMap';
import { useParams } from 'react-router-dom';
import ContentHeader from '../ContentHeader/ContentHeader';


const Content = () => {
    const { property } = useParams();
    return (
        <div className='content'>
            <ContentHeader property={property}/>
             {componentMap[property]}
        </div>
    )
}

export default Content;