import React from 'react';
import hospitalityImg from '../../resources/assets/hospitality/hospitality-bg-img.png';
import Icon from '../../resources/icons';
import './HospitalitySection.scss';

class HospitalitySection extends React.Component {
    render(){
        return(
            <section className='hospitality_wrapper'>
                <div className='hospitality_headline'><span className='hospitlity_headline_special'>we are</span> phenom, <span className='hospitlity_headline_special'>we are</span> hospitality </div>
                <div className='hospitality_container'>
                    <img src={hospitalityImg} alt='hospitality' className='hospitality_frame'/>
                    <button className='hospitality_play_button'><Icon name='play' width='8vw' className='hospitality_play_icon'/></button>
                </div>
            </section>
        )
    }
}

export default HospitalitySection;