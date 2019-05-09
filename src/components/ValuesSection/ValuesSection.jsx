import React from 'react';
import './ValuesSection.scss';
import valuesImg from '../../resources/assets/values/values-bg-img.png';
import ArrowButton from '../Button/ArrowButton.jsx';

class ValuesSection extends React.Component {

    handleArrowClick = () => {
        console.log('handleArrowClick [valuesSection]')
    }

    render(){
        return(
            <section className='values_wrapper'>
                <div className='values_headline'>Our Values</div>
                <div className='values_grid'>
                    <img src={valuesImg} alt='values' className='values_backgroundImg'/>
                    <div className='values_card'>
                        <div className='values_card_inner'>
                            <h1 className='values_card_headline'>H</h1>
                            <h3 className='values_card_subHeadline'>Hospitality</h3>
                            <p className='values_card_paragraph'>
                            We’re passionate about delivering exceptional guest experiences.
                            </p>
                        </div>
                        <ArrowButton action='back' handleClick={this.handleArrowClick} className='values_back_button' width={'5vw'}/>
                        <ArrowButton action='next' handleClick={this.handleArrowClick} className='values_next_button' width={'5vw'}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default ValuesSection;