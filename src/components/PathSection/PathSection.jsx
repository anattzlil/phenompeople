import React, { Component } from 'react';
import './PathSection.scss';
import Icon from '../../resources/icons';
import Button from  '../Button/Button';

const pathArray = [
    {img: 'corporate', title:'Coporate', num: 86, description: 'The vision for Our Corporate team is to be a trusted business partner that serves as a catalyst in driving our company’s mission. '},
    {img:'guest-services', title:'Guest Services', num: 104, description: 'The vision for Our Corporate team is to be a trusted business partner that serves as a catalyst in driving our company’s mission. '},
    {img: 'students', title:'Students', num: 24, description: 'The vision for Our Corporate team is to be a trusted business partner that serves as a catalyst in driving our company’s mission. '},
]


const PathItem = ({ pathObj: {img, title, num, description}, handleClick }) => {
    return (
        <div className='pathItem_container' onClick={handleClick}>
            <div className={`${img} pathItem_Img_container`}>
                <div className='pathItem_Img_overlay'></div>
            </div>
            <div className='pathItem_details_container'>
                <div className='pathItem_title_container'>
                    <h2 className='pathItem_title'>{title}<span>({num})</span></h2>
                    <Icon name='decoration' color='#fff' width={'11vw'} height='2vw'/>
                </div>
                <p className='pathItem_details_text'>{description}</p>
                <Button buttonText='view jobs' isOutline handleClick={()=>{}} className='pathItem_details_button'/>
            </div>
        </div>
    )
}



class PathSection extends Component {

    handleClick = (item) => {
        console.log('clicked handle click on pathItem: ', item);
    }

    getPathItem = () => {
        return pathArray.map((path, i) => {
            return <PathItem key={i} pathObj={path} handleClick={() => this.handleClick(path.title)} />
        })
    }

    render() {
        return(
            <section className='path_wrapper'>
                <h1 className='path_headline'>choose your path</h1>
                <div className='path_grid'>
                    <div className='path_items_wrapper'>
                        {this.getPathItem()}
                    </div>
                </div>
            </section>
        )
    }
}

export default PathSection;