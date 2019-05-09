import React from 'react';
import Button from '../Button/Button.jsx';
import pic1 from '../../resources/assets/connect/connect-img1.png';
import pic2 from '../../resources/assets/connect/connect-img2.png';
import pic3 from '../../resources/assets/connect/connect-img3.png';
import Icon from '../../resources/icons';

import './ConnectSection.scss';

const connectArray = [
    {iconName:'facebook', title:'Find out what inspires our work', button:'facebook.com/phenom', action: '', img:null, color:'medium'},
    {iconName:null, title:null, button:null, action: null, img:pic1},
    {iconName:'twitter', title:'Check in with us all over the world', button:'Follow @Phenom', action: '', img:null, color:'bright'},
    {iconName:null, title:null, button:null, action: null, img:pic2},
    {iconName:'instagram', title:'Take a look behind the scenes', button:'Follow @Hilton', action: '', img:null, color:'dark'},
    {iconName:null, title:null, button:null, action: null, img:pic3},
]

const ConnectItem = ({connectObj}) => {
    const {iconName, title, button, action, color} = connectObj;
    return (
        <div className={`${color} connectItem_wrapper`}>
        <div className={`${color} connectItem_inner_wrapper`}>
            <Icon className='connectItem_icon' name={iconName} height='1.5vw' width='1.5vw'/>
            <h3 className='connectItem_title'>{title}</h3>
            <Button isOutline handleClick={action} buttonText={button} className='connectItem_button'/>
        </div>
        </div>
    )
}

class ConnectSection extends React.Component {

    renderConnectItems = () => {
        return connectArray.map((connectItem,i) => {
            if (connectItem.img) {
                return <img key={i} src={connectItem.img} alt={connectItem.title} className='connectItem_img'/>
            } else {
                return <ConnectItem key={i} connectObj={connectItem}/>
            }
        })
    }

    render(){
        return(
            <section className='connect_wrapper'>
            <div className='connect_headline'>connect with us</div>
            <div className='connect_grid'>
                <div className='connect_inner_grid'>
                    {this.renderConnectItems()}
                </div>
            </div>
        </section>
        )
    }
}

export default ConnectSection;