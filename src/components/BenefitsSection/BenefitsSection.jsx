import React, { Component } from 'react';
import './BenefitsSection.scss';
import Icon from '../../resources/icons'

const benefitsArray = [
    {iconName:'pension', title:'Pension Plans', text: 'People in work tend to enjoy happier and healthier lives than those who are not in work. Our physical and mental health is generally improved through work. '},
    {iconName:'learnAndGrow', title:'Learn and Grow', text: 'People in work tend to enjoy happier and healthier lives than those who are not in work. Our physical and mental health is generally improved through work. '},
    {iconName:'current', title:'Keep Current', text: 'People in work tend to enjoy happier and healthier lives than those who are not in work. Our physical and mental health is generally improved through work. '},
    {iconName: 'invest', title:'Invest in yourself', text: 'People in work tend to enjoy happier and healthier lives than those who are not in work. Our physical and mental health is generally improved through work. '},
]

const BenefitItem = ({item: {iconName, title, text}, selectedItem, index, showDescription}) => {
    return(
        <li className={`benefits_item ${ selectedItem == index ? 'chosen' : '' }`} >
            <div className='benefits_item_main' onClick={() => showDescription(index)}>
                 <Icon name={iconName} color={selectedItem == index ? '#0f4c97' : '#000' } className='benefits_item_icon' width={'5vw'}/>
                <span className='benefits_item_title'>{title}</span>
            </div>
            <div className='benefits_item_text'>
                <p> {text} </p>
            </div>
        </li>
    )
}


class BenefitsSection extends Component {
 
    constructor(props){
        super(props);
        this.state= { selectedItem: 0 }
    }

    renderBenefitsItem = () => {
        return benefitsArray.map((item, i) => {
           return <BenefitItem key={i} index={i} item={item} selectedItem={this.state.selectedItem} />
        })
    }

    render() {
        return(
            <section className='benefits_wrapper'>
                <h1 className='benefits_headline'>check out our benefits</h1>
                <div className='benefits_grid'>
                    <ul className='benefits_items_wrapper'>
                    {this.renderBenefitsItem()}
                    </ul>
                </div>
            </section>
        )
    }
}

export default BenefitsSection;