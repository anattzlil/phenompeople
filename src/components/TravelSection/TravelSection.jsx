import React, { Component } from 'react';
import './TravelSection.scss';
import Button from '../Button/Button';
import CardNavigation from '../CardNavigation/CardNavigation';
import Icon from '../../resources/icons';

class TravelSection extends Component {

    getLinkdinText = () => {
        return <span>
            Connect with <span className='travel_linkdln_button'>LinkdIn</span>
        </span>
    }

    render() {
        return(
            <section>
                <div className='travel_grid'>
                    <div className='travel_inner_frame'></div>
                    <Icon name='travelSectionIcon' width='4vw' className='travelSection_icon'/>
                    <div className='travel_headline_wrapper'>
                        <div className='travel_headline_1'>Share your travel</div>
                        <div className='travel_headline_2'>experience with us</div>
                    </div>
                    <form className='travel_form'>
                        <input className='travel_input' placeholder='Keyword, Job Title or Job ID'/>
                        <input className='travel_input' placeholder='Country, State or City'/>
                        <Button className='travel_form_button' buttonText='Find Jobs' handleClick={()=>{}} border='none'/>
                    </form>
                    <CardNavigation className='travel_nav_icons'/>
                </div>
                    <footer className='travel_footer'>
                        <div className='travel_footer_headline_container'>
                            <p className='travel_footer_headline'>Get Personalized Job Recommendations</p>
                            <p className='travel_footer_text'>Import your profile to find opportunities tailored for your talents</p>
                        </div>
                        <Button className='travel_footer_button' buttonText={this.getLinkdinText()} handleClick={()=>{}} border='none'/>
                    </footer>
            </section>
        )
    }
}

export default TravelSection;