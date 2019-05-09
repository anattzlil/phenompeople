import React from 'react';

import './ReviewsSection.scss';
import StarRatings from '../StarRatings/StarRatings.jsx';
import Button from '../Button/Button.jsx';

class ReviewsSection extends React.Component {

    handleMoreReviewsClick = () => {
        console.log('clicked [view All Reviews]')
    }

    calculateFillWidth = (number) => {
        let presentage = number / 5 * 100;
        return `${presentage}%`
        
    }

    renderReviewField = () => {
        let fieldArray = [
            { title: 'Work/life Balance Rating', number: 3.9},
            { title: 'Culture & Values Rating', number: 4.7},
            { title: 'Compensation & Benefits', number: 4.2},
        ];
        return fieldArray.map((field, i) => {
            return (
                <section key={i} className='reviews_field_wrapper'>
                    <h5 className='reviews_field_title'>{field.title}</h5>
                    <div className='reviews_bar_container'>
                        <div className='reviews_bar'>
                            <div className='reviews_bar_filled' style={{width: this.calculateFillWidth(field.number)}}></div>
                        </div><span className='reviews_bold_number'>{field.number}</span>
                    </div>
                </section>
            )
        })
    };

renderUserReviews = () => {
    let reviewsArray = [
        { title: '"What a Great Place to Work!"', number: 4, date:'Oct 29, 2018', position: 'Current Employee - Anonymous Employee'},
        { title: '"Excellent company"', number: 4, date:'Oct 29, 2018', position: 'Current Employee - Anonymous Employee in Ambler, PA'},
        { title: '"Great company with great benefits"', number: 4, date:'Oct 29, 2018', position: 'Current Employee - Anonymous Employee in Saint Louis, MO'},
        { title: '"Amazing Company. Amazing Culture"', number: 4, date:'Oct 29, 2018', position: 'Current Employee - Anonymous Employee'},
    ];
    return reviewsArray.map((review, i) => {
        return <section key={i} className='reviewItem_user_wrapper'>
            <div className='reviewItem_user_stars_container'>
             <StarRatings className='reviewItem_user_stars' number={review.number}/> <span className='reviewItem_user_date'>{review.date}</span>
            </div>
            <h4 className='reviewItem_user_title'>{review.title}</h4>
            <p className='reviewItem_user_position'>{review.position}</p>
            <a className='reviewItem_user_more'>read more</a>
        </section>      
    })
}

    render(){
        return(
            <section className='reviews_wrapper'>
                <div className='reviews_headline_grid'>
                    <div className='reviews_headline'>glassdoor reviews</div>
                </div>
                <div className='reviews_grid'>
                    <div className='reviews_glassdor'>
                        <div className='reviews_glassdor_stars_container'>
                            <StarRatings className='reviews_glassdoor_stars' number={4.5}/> <span className='reviews_number'><span className='reviews_bold_number'>4.7</span> / 261 ratings</span>
                        </div>
                        {this.renderReviewField()}
    
                    </div>
                    <div className='reviews_user_reviews_container'>
                        <div className='reviews_user_reviews'>
                            {this.renderUserReviews()}
                        </div>
                        <Button className='reviews_user_reviews_button' buttonText='View All Reviews' handkeClick={this.handleMoreReviewsClick}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default ReviewsSection;