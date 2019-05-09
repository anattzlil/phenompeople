import React from 'react';
import './Footer.scss';
import companyLogoWhite from '../../resources/assets/svg/logo_white.svg';
import Icon from '../../resources/icons/';

class Footer extends React.Component {
    render(){
        return(
            <footer className='footer_wrapper'>
                <div className='footer_inner_wrapper'>
                    <div className='footer_phenome_people'>
                        <img src={companyLogoWhite} alt='phenomPeople logo' className='footer_company_logo'/>
                        <p className='footer_company_text'>The world's first Talent Experience Management platform on a mission to help a billion people find the right job.</p>
                    </div>
                    <div className='footer_links'>
                        <div className='footer_links_section'>
                            <h4 className='footer_link_headline'>OUR PLATFORM</h4>
                            <ul className='footer_link_list'>
                                <li>Candidate Experience</li>
                                <li>Phenom AI</li>
                                <li>Employee Experience</li>
                                <li>Management Experience</li>
                                <li>Recruiter Experience</li>
                                <li>Integrations</li>
                            </ul>
                        </div>
                        <div className='footer_links_section'>
                            <h4 className='footer_link_headline'>LEARN MORE</h4>
                            <ul className='footer_link_list'>
                                <li>About Phenom</li>
                                <li>Customers</li>
                                <li>Resources</li>
                                <li>Our Blog</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div className='footer_links_section'>
                            <h4 className='footer_link_headline'>CONNECT</h4>
                            <ul className='footer_link_list'>
                                <li>Contact us</li>
                                <li>INT: +1.267.282.0098</li>
                                <li>USA:  888.985.7755</li>
                                <li className='footer_link_list_item_follow' >
                                    <span>Follow Us:</span>
                                    <Icon name='facebook' width='1vw' height='1vw'/>
                                    <Icon name='linkdn' width='1vw' height='1vw'/>
                                    <Icon name='twitter' width='1vw' height='1vw'/>
                                    <Icon name='pinterest' width='1vw' height='1vw'/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer_inner_footer'>
                    <p className='footer_copyright'>Copyright © 2019 Phenom People, Inc</p>
                    <ul className='footer_inner_footer_menu'>
                        <li>IAMPHENOM</li>
                        <li>Terms & Conditions</li>
                        <li>Security Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;