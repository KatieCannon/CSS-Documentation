import React from 'react';
import Menu from '../Menu/Menu';
import './FullScreen.css';
import componentMap from '../../utils/componentMap';
import { useParams } from 'react-router-dom';


const FullScreen = () => {
    const { property } = useParams();
    return (
        <div className='fullScreen'>
            <Menu />
            {componentMap[property]}
        </div>
    )
}

export default FullScreen;