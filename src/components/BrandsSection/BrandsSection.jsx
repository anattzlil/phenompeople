import React from 'react';
import './BrandsSection.scss';
import Button from '../Button/Button.jsx';
import ArrowButton from '../Button/ArrowButton.jsx';
import CardNavigation from '../CardNavigation/CardNavigation.jsx';

import BrandImg from '../../resources/assets/brands/brands-bg-img.png'

class BrandsSection extends React.Component {

    handleJobsButtonClick = () => {
        console.log('handleJobsButtonClick')
    }

    render(){
        return(
            <section className='brands_wrapper'>
                <div className='brands_headline'>Explore Our Amazing Brands</div>
                <div className='brands_grid'>
                    <img src={BrandImg} className='brands_backgroundImg' alt={'brands section backgroundImg'}/>
                    <div className='brands_card'>
                        <div className='brands_card_inner'>
                            <h3 className='brands_card_headline'>Phenom Resort & Spa</h3>
                            <p className='brands_card_paragraph'>
                            With a fresh, modern expression of it’s rich, authentic legacy, Phenom Resort & Spa provides guests the exceptional environment and the personalized attention of True Waldorf Service that creates unforgettable experiences for our discerning travelers.
                            </p>
                            <Button buttonText='View Jobs (1436)' isOutline  handleClick={this.handleJobsButtonClick} className='brands_jobs_button'/>
                            <CardNavigation className='brands_jobs_Navigation'/>
                            <ArrowButton action='back' handleClick={this.handleArrowClick} className='brands_back_button' width={'5vw'}/>
                            <ArrowButton action='next' handleClick={this.handleArrowClick} className='brands_next_button' width={'5vw'}/>
                        </div>
                    </div>
                </div>
                <a href='#' className='brands_link'>View All Brands</a>
            </section>
        )
    }
}

export default BrandsSection;