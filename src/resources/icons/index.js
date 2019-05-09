import React from 'react';
import Culinary from './culinary';
import Food from './food';
import GuestService from './guestService';
import Home from './home';
import Manager from './manager';
import Revenue from './revenue';
import Spa from './spa';

import BackArrow from './backArrow';
import NextArrow from './nextArrow';

import Decoration from './elements/decoration';
import Play from './elements/playIcon';
import Search from './search';

import TravelSectionIcon from './travelSectionIcon';

import Invest from './benefits/invest';
import Pension from './benefits/pension';
import Current from './benefits/current';
import LearnAndGrow from './benefits/learnAndGrow';

import Facebook from './socialIcons/facebook';
import Twitter from './socialIcons/twitter';
import Instagram from './socialIcons/instagram';
import Pinterest from './socialIcons/pinterest';
import Linkdn from './socialIcons/linkdn';

const Icon = props => {
  switch(props.name) {
    case "culinary":
      return <Culinary {...props} />;
    case "food":
      return <Food {...props} />;
    case "guestService":
      return <GuestService {...props} />;
    case "home":
      return <Home {...props} />;
    case "manager":
      return <Manager {...props} />;
    case "revenue":
      return <Revenue {...props} />;
    case "spa":
      return <Spa {...props} />;
    case "backArrow":
      return <BackArrow {...props} />;
    case "nextArrow":
      return <NextArrow {...props} />;
    case "invest":
      return <Invest {...props} />;
    case "pension":
      return <Pension {...props} />;
    case "current":
      return <Current {...props} />;
    case "learnAndGrow":
      return <LearnAndGrow {...props} />;
    case "decoration":
      return <Decoration {...props}/>;
    case "play":
      return <Play {...props}/>;
    case "travelSectionIcon":
      return <TravelSectionIcon {...props}/>;
    case "facebook":
      return <Facebook {...props}/>;
    case "twitter":
      return <Twitter {...props}/>;
    case "instagram":
      return <Instagram {...props}/>;
    case "pinterest":
      return <Pinterest {...props}/>;
    case "linkdn":
      return <Linkdn {...props}/>;
    case "search":
      return <Search {...props} />;
    default:
      return <div />;
  }
}
export default Icon;