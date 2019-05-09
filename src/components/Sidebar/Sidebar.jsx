import React from 'react';
import './Sidebar.scss';
import MenuIcon from '@material-ui/icons/Menu';

import signInIcon from '../../resources/assets/svg/sign-in-icon.svg';
import jobsIcon from '../../resources/assets/svg/jobs-icon.svg';


const Sidebar = ({isOpen,toggleSideBar}) => {
return (
    <div className={`${isOpen ? 'openSideBar' : ''} side-bar-menu-container`}>
        <div className='sidebar_title_container'>
            <button className='sidebar_menu_button' onClick={toggleSideBar}>
                <MenuIcon/><span className='sidebar_menu_title'>Menu</span> 
            </button>
        </div>
        <ul className='sidebarList_company'>
            <li className='sidebarList_company_item'><a onClick={toggleSideBar}>About Us</a></li>
            <li className='sidebarList_company_item'><a onClick={toggleSideBar}>Our Brand</a></li>
            <li className='sidebarList_company_item'><a onClick={toggleSideBar}>University</a></li>
            <li className='sidebarList_company_item'><a onClick={toggleSideBar}>Military</a></li>
            <li className='sidebarList_company_item'><a onClick={toggleSideBar}>Areas of Talent</a></li>
        </ul>
        <div className='sideBar_devider'></div>
        <ul className='sidebarList_user'>
            <li className='sidebarList_item'>
                <img className='sidebarList_item_icon' src={signInIcon} alt='sign-in'/>
                Sign in
            </li>
            <li className='sidebarList_item'>
                <img className='sidebarList_item_icon' src={jobsIcon} alt='sign-in'/>                        
                Saved Jobs
            </li>
        </ul>
    </div>
)
}

export default Sidebar;