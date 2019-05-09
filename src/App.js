import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar.jsx';
import TravelSection from './components/TravelSection/TravelSection.jsx';
import PathSection from './components/PathSection/PathSection.jsx';
import TalentSection from './components/TalentSection/TalentSection.jsx';
import StoriesSection from './components/StoriesSection/StoriesSection.jsx';
import BenefitsSection from './components/BenefitsSection/BenefitsSection.jsx';
import BrandsSection from './components/BrandsSection/BrandsSection.jsx';
import JoinUsSection from './components/JoinUsSection/JoinUsSection.jsx';
import HospitalitySection from './components/HospitalitySection/HospitalitySection.jsx';
import ValuesSection from './components/ValuesSection/ValuesSection.jsx';
import ConnectSection from './components/ConnectSection/ConnectSection.jsx';
import ReviewsSection from './components/ReviewsSection/ReviewsSection.jsx';
import CommunitySection from './components/CommunitySection/CommunitySection.jsx';
import Footer from './components/Footer/Footer.jsx';
import SearchSection from './components/SearchSection/SearchSection.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchSectionOpen: false,
      sideBar: false
    }
  }

openSearchSection = () => {
  this.setState( {
    searchSectionOpen:  true,
    sideBar: false
  })
}

closeSearchSection = () => {
  this.setState({ searchSectionOpen: false})
}

toggleSideBar = () => {
  if (this.state.searchSectionOpen) {
    this.setState({searchSectionOpen: false})
  }
  this.setState(prev => {
    return {sideBar:!prev.sideBar}
  })
}

  render() {
    return (
      <div className="app-container" >
      {this.state.searchSectionOpen && <div className='app-darken-page' onClick={this.closeSearchSection}></div>}
      {this.state.sideBar && <div className={`${this.state.sideBar ? 'overlay-all-page' : ''} app-darken-page`} onClick={this.toggleSideBar}></div>}
      <div className='app_header'>
          <Navbar openSearchSection={this.openSearchSection} toggleSideBar={this.toggleSideBar}/>
        <div className={`${this.state.searchSectionOpen ? 'open ': ''} navbar_search_section`}>
            <SearchSection closeSearchSection={this.closeSearchSection}/>
        </div>
      </div>
      <Sidebar isOpen={this.state.sideBar} toggleSideBar={this.toggleSideBar} />
       <TravelSection />
       <PathSection />
       <TalentSection />
       <StoriesSection />
       <BenefitsSection />
       <BrandsSection />
       <JoinUsSection />
       <HospitalitySection />
       <ValuesSection />
       <ConnectSection />
       <ReviewsSection />
       <CommunitySection />
       <Footer />
      </div>
    );
  }
}

export default App;
