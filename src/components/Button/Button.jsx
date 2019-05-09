import React from 'react';
import './Button.scss';

const Button = ({buttonText, isOutline, handleClick, className})  => {
    return(
            <button 
            className={`${isOutline ? 'button outline_button': 'button'} ${className}`} 
            onClick={handleClick}>
                {buttonText}
            </button>
    )
}

export default Button;