import React from 'react';
import './StarRatings.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const StarRatings = ({number, className}) => {
    const one = number > 0 ? (number < 1 ? 'half' : 'full') : 'empty';
    const two = number > 1 ? (number < 2 ? 'half' : 'full') : 'empty';
    const three = number > 2 ? (number < 3 ? 'half' : 'full') : 'empty';
    const four = number > 3 ? (number < 4 ? 'half' : 'full') : 'empty';
    const five = number > 4 ? (number < 5 ? 'half' : 'full') : 'empty';
    return (
        <div className={` ${className} stars_wrapper`}>
            <span className={`star-icon`}><FontAwesomeIcon icon={faStar} color={one == 'full' ? '#fece00' : 'gray'}/>
              {one == 'half' && <span className={`star-icon-half`}><FontAwesomeIcon icon={faStarHalf} color={number > 0 ? '#fece00' : 'gray'}/></span>}
            </span>
            
            <span className={`star-icon`}><FontAwesomeIcon icon={faStar} color={two == 'full' ? '#fece00' : 'gray'}/>
                {two == 'half' && <span className={`star-icon-half`}><FontAwesomeIcon icon={faStarHalf} color={number > 0 ? '#fece00' : 'gray'}/></span>}
            </span>

            <span className={`star-icon`}><FontAwesomeIcon icon={faStar} color={three == 'full' ? '#fece00' : 'gray'}/>
                {three == 'half' && <span className={`star-icon-half`}><FontAwesomeIcon icon={faStarHalf} color={number > 0 ? '#fece00' : 'gray'}/></span>}
            </span>

            <span className={`star-icon`}><FontAwesomeIcon icon={faStar} color={four == 'full' ? '#fece00' : 'gray'}/>
                {four == 'half' && <span className={`star-icon-half`}><FontAwesomeIcon icon={faStarHalf} color={number > 0 ? '#fece00' : 'gray'}/></span>}
            </span>

            <span className={`star-icon`}><FontAwesomeIcon icon={faStar} color={five == 'full' ? '#fece00' : 'gray'}/>
                {five == 'half' && <span className={`star-icon-half`}><FontAwesomeIcon icon={faStarHalf} color={number > 0 ? '#fece00' : 'gray'}/></span>}
            </span>
        </div>
    )
}

export default StarRatings;