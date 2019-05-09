import React from 'react';
import Icon from '../../../resources/icons';
import '../TalentSection.scss';
import Lottie from 'react-lottie'



export default class TalentItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isHover: false,
            isStopped: true
        }
    }
    
getDefaultOptions = () => {
    const { direction} = this.state;
    const { hoverAnim } = this.props.talentObj;
    return {
        loop: false,
        autoplay: true, 
        animationData: hoverAnim.data,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        },
        direction: direction || 1
    }
}
  

toggleHover = () => this.setState(prev => {
    return {isHover: !prev.isHover}
})
    render() {
        const { talentObj, handleClick } = this.props;
        const { iconName, title, number, className, hoverAnim } = talentObj;
        const {isHover} = this.state;
    return(
        <div onClick={handleClick} className={`${className} talentItem_container`} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            <div className='talent_item_frame'></div>
            {!isHover || !hoverAnim ? <Icon name={iconName} className={`${isHover} talentItem_icon`} width={'3vw'} color={isHover ? '#fff' : '#0F4C97' }/>
            :
            <div className='talent_item_lottie'>
                <Lottie options={this.getDefaultOptions()}
                  width={hoverAnim.width}
                />
            </div>
            }
            <div className='talentItem_title_container'>
                <h2 className='talentItem_title'>{title}</h2>
                <h2 className='talentItem_count'>({number})</h2>
            </div>
        </div>
    )
}
}