import React from 'react';
import Icon from '../../resources/icons';


const ArrowButton = ({action, handleClick, className, width}) => {
    return (
        <button onClick={() => handleClick(action)} className={`${className} arrowButton `}>
            <Icon name={action == 'back' ? 'backArrow' : 'nextArrow'} width={width}/>
        </button>
    )
}

export default ArrowButton;