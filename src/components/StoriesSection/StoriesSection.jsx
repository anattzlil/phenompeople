import React, { Component } from 'react';
import './StoriesSection.scss';
import ArrowButton from '../Button/ArrowButton.jsx';
import CardNavigation from '../CardNavigation/CardNavigation.jsx';
 
import Lora from '../../resources/assets/stories/lora.png';
import Kate from '../../resources/assets/stories/kate.png';

const storiesArray = [
    {name: 'Lora Sullivan', img: Lora, position: 'Head of Marketing', quote: '“ We are a business serving people, and our Team Members extend their passion for hospitality beyond our hotel walls every day.”'},
    {name: 'Kate Allison', img: Kate, position: 'Senior Revenue Manager', quote: '“People will most likely forget what you said, forget what you did, but people will never forget how you made them feel.”'},
]

function StoryItem(props){
    const member = storiesArray[props.index];
    const {name, position, quote, img} = member;
    return (
        <div className='storyItem_grid'>
            <img className='storyItem_profile_pic' src={img} alt={name}/>
            <div className='storyItem_details'>
                <div className='storyItem_details_seperator'></div>
                <h3 className='storyItem_details_name'>{name}</h3>
                <p className='storyItem_details_text'>{position}</p>
            </div>
            <div className='storyItem_seperator'></div>
            <div className='storyItem_quote'>{quote}</div>
            <ArrowButton handleClick={props.handleClick} action='back' className='storyItem_button_left' width={40}/>
            <ArrowButton handleClick={props.handleClick} action='next' className='storyItem_button_right' width={40}/>
        </div>
    )
}


class StoriesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStoryIndex: 0
        }
    }
    handleClick = (action) => {
        console.log('clicked handle click on Stories: ', action);
        let index = this.state.currentStoryIndex;
        let newIndex = 0;
        switch (action) {
            case 'next':
                if (storiesArray[index + 1]) {
                    newIndex = index + 1
                }
                break;
            case 'back':
                if (storiesArray[index - 1]) {
                    newIndex = index - 1
                };
                break;
            }
            console.error('newIndex: ', newIndex)
        this.setState({ currentStoryIndex: newIndex });
    }

    render() {
        const { currentStoryIndex } = this.state; 
        return(
            <section className='stories_wrapper'>
                <h1 className='stories_headline'>team member stories</h1>
                <div className='stories_main_grid'>
                    <StoryItem  index={currentStoryIndex} handleClick={this.handleClick}/>
                    <CardNavigation className='stories_navigation'/>
                </div>
            </section>
        )
    }
}

export default StoriesSection;