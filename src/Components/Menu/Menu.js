import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import cssPropertiesArray from '../../utils/cssProperties';
import './Menu.css';

const Menu = () => {
    const { property } = useParams();
    const [cssProperties] = useState(cssPropertiesArray);
    return (
        <div className='menu'>
            <h1>CSS Properties</h1>
            { cssProperties.map(cssProperty => (
                property === cssProperty ? (
                    <Link to={`/${cssProperty}`} key={cssProperty}>
                        <h2 className='menu__property active'>{cssProperty}</h2>
                    </Link>
                ) : (
                    <Link to={`/${cssProperty}`} key={cssProperty}>
                        <h2 className='menu__property'>{cssProperty}</h2>
                    </Link>
                )
            ))}
        </div>
    )
}

export default Menu;