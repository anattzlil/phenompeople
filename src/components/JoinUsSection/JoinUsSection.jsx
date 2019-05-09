import React from 'react';
import JoinImg from '../../resources/assets/join/join-bg-img.png'
import './JoinUsSection.scss';

class JoinUsSection extends React.Component {
    render(){
        return(
            <section className='join_wrapper'>
            <div className='join_grid'>
                <img src={JoinImg} className='join_backgroundImg' alt='join section'/>
                <div className='join_card'>
                    <div className='join_card_inner'>
                        <h3 className='join_card_headline'>Join Us</h3>
                        <p className='join_card_paragraph'>
                        We have created a culture of excellence, innovation and hospitality. In our business, we know the Team Member experience is just as important as the Guest experience. 
                        </p>
                        <div className='join_statistics'>
                            <div className='join_statistic_container'>
                                <h2 className='join_statistic_num'>15</h2>
                                <p className='join_statistic_text'>Brands</p>
                            </div>
                            <div className='join_statistic_devider'></div>
                            <div className='join_statistic_container'>
                                <h2 className='join_statistic_num'>109</h2>
                                <p className='join_statistic_text'>Countries</p>
                            </div>
                            <div className='join_statistic_devider'></div>                            
                            <div className='join_statistic_container'>
                                <h2 className='join_statistic_num'>5,500+</h2>
                                <p className='join_statistic_text'>Properties Worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default JoinUsSection;