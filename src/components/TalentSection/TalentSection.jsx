import React, { Component } from 'react';
import './TalentSection.scss';
import TalentItem from './TalentItem/TalentItem';
import guestServiceAnimation from '../../lottie/guest-service.json';
import revenueAnimation from '../../lottie/revenue.json';

 

const talentArray = [
  {iconName: 'home', title: 'Work from Home', number: 83, className:'talentItem_home'},
  {iconName: 'guestService', hoverAnim:{data: guestServiceAnimation, width: '3vw'} , title: 'Guest Services / Operations', number: 208, className:'talentItem_guest'},
  {iconName: 'revenue', hoverAnim:{data: revenueAnimation, width: '4vw'}, title: 'Revenue Management', number: 112, className:'talentItem_revenue'},
  {iconName: 'culinary', title: 'Culinary', number: 54, className:'talentItem_culinary'},
  {iconName: 'spa', title: 'Spa and Recreation', number: 12, className:'talentItem_spa'},
  {iconName: 'food', title: 'Food and Beverage', number: 65, className:'talentItem_food'},
  {iconName: 'manager', title: 'General Manager / Hotel Manager', number: 87, className:'talentItem_manager'},
]

class TalentSection extends Component {

    handleClick = (item) => {
        console.log('clicked handle click on talentItem: ', item);
    }

    getTopTalentItems = () => {
            let topArray = talentArray.slice(0, 4);
                return topArray.map((talent, i) => {
                    return <TalentItem key={i} talentObj={talent} handleClick={() => this.handleClick(talent.title)} />
                })
    }

    getBottomTalentItems = () => {
            let bottomArray = talentArray.slice(4, 7);
                return bottomArray.map((talent, i) => {
                    return <TalentItem key={i} talentObj={talent} handleClick={() => this.handleClick(talent.title)} />
                })
    }

    render() {
        return(
            <section className='talent_wrapper'>
                <h1 className='talent_headline'>find your talent</h1>
                <div className='talent_main_grid'>
                    <div className='talent_grid_top'>
                            {this.getTopTalentItems('top')}
                    </div>
                    <div className='talent_grid_bottom'>
                            {this.getBottomTalentItems('bottom')}
                    </div>
                </div>
                <a href='#' className='talent_link'>Show More</a>
            </section>
        )
    }
}

export default TalentSection;