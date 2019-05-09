import React from 'react';
import communityBgImg from '../../resources/assets/community/community-bg-img.png';
import Icon from '../../resources/icons'
import Button from '../Button/Button.jsx';
import './CommunitySection.scss';

class CommunitySection extends React.Component {
    handleJoinClick = () => {
        console.log('clicked [handleJoinClick]');
    }
    render(){
        return(
            <section className='community_wrapper'>
                <img src={communityBgImg} alt='talent community' className='community_bg_img'/>
                <div className='community_card_wrapper'>
                    <div className='community_card_inner_wrapper'>
                        <div className='community_card_headline_container'>
                            <h5 className='community_card_headline1'>Join our</h5>
                            <h2 className='community_card_headline2'>Talent Community</h2>
                        </div>
                        <Icon className='community_card_decorator' name='decoration' color= "#4A4A4A" width='10vw' height='5vw'/>
                        <h4 className='community_card_sub_headline'>You could take your job search to the next level.</h4>
                        <p className='community_card_text'>Be the first to know about new job openings, build your professional network and stand out from other applicants.</p>
                        <Button className='community_card_button' handleClick={this.handleJoinClick} buttonText='Join Us'/>
                    </div>
                </div>
            </section>
        )
    }
}

export default CommunitySection;