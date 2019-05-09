import React from 'react';
import './CardNavigation.scss';

const CardNavigation = ({className}) => {
    return (
        <div className={`${className} card_nav_icons`}>
            <div className='card_nav_icon filled'></div>
            <div className='card_nav_icon'></div>
            <div className='card_nav_icon'></div>
            <div className='card_nav_icon'></div>
        </div>
    )
}

export default CardNavigation;