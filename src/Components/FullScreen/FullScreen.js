import React from 'react';
import Menu from '../Menu/Menu';
import './FullScreen.css';
import Content from '../Content/Content';


const FullScreen = () => {
    return (
        <div className='fullScreen'>
            <Menu />
            <Content />
        </div>
    )
}

export default FullScreen;