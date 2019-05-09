import React, { Component } from 'react';

import './Navbar.scss';
import companyLogo from '../../resources/assets/svg/logo.svg';
import searchIcon from '../../resources/assets/svg/search-icon.svg';
import signInIcon from '../../resources/assets/svg/sign-in-icon.svg';
import jobsIcon from '../../resources/assets/svg/jobs-icon.svg';

import MenuIcon from '@material-ui/icons/Menu';
import Icon from '../../resources/icons';

class Navbar extends Component {

    render() {
        return(
            <div className='navbar_outer_wrapper'>

                <div className='navbar_wrapper'>
                    <a href='#' className='navbar-logo'><img src={companyLogo} alt='phenomPeople logo'/></a>
                    <button className='navbar_menu_icon' onClick={this.props.toggleSideBar}><MenuIcon/></button>
                    <div className='navbar_search_icon_container' onClick={this.props.openSearchSection}>
                        <Icon name='search' width='5vw' className='navbar_searchIcon' />
                    </div>
                    <ul className='navbarList_company'>
                        <li className='navbarList_item'>About Us</li>
                        <li className='navbarList_item'>Our Brand</li>
                        <li className='navbarList_item'>University</li>
                        <li className='navbarList_item'>Military</li>
                        <li className='navbarList_item'>Areas of Talent</li>
                    </ul>
                    <ul className='navbarList_user'>
                        <li className='navbarList_item'>
                            <img className='navbarList_item_icon' src={signInIcon} alt='sign-in'/>
                            Sign in
                        </li>
                        <li className='navbarList_item'>
                            <img className='navbarList_item_icon' src={jobsIcon} alt='jobs'/>                        
                            Saved Jobs
                        </li>
                        <li className='navbarList_item' onClick={this.props.openSearchSection}>
                        <img className='navbarList_item_icon' src={searchIcon} alt='search'/>
                            Search Jobs
                        </li>
                    </ul>
                </div>
                </div>

        )
    }
}

export default Navbar;