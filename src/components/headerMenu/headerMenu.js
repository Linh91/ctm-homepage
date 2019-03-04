import React, { Component } from 'react';

import HeaderMenuButton from '../headerMenuButton/headerMenuButton';
import {
  VehiclesIcon,
  TravelIcon,
  LifeIcon,
  HouseIcon,
  HomePetIcon,
  FinancesIcon,
  BusinessIcon,
  MoreIcon,
} from '../../web/icons/index';
import './headerMenu.css';

class HeaderMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuCategories: [
        {name: '', icon: <HouseIcon />, id: 1}, 
        {name: 'Vehicles', icon: <VehiclesIcon />, id: 2}, 
        {name: 'Home & pet', icon: <HomePetIcon />, id: 3}, 
        {name: 'Finances', icon: <FinancesIcon />, id: 4}, 
        {name: 'Life', icon: <LifeIcon />, id: 5}, 
        {name: 'Business', icon: <BusinessIcon />, id: 6}, 
        {name: 'Travel', icon: <TravelIcon />, id: 7},
        {name: 'More', icon: <MoreIcon />, id: 8}
      ]
    }
  }

  render() {
    const menuOptions = (
      <div className="MenuOptionsContainer">
        {this.state.menuCategories.map(category => {
          return (
            <HeaderMenuButton
              key={category.id}
              icon={category.icon}
              name={category.name} />)
        })}
      </div>
    )

    return (
      <div className="HeaderContainer">
        {menuOptions}
      </div>
    )
  }
}
  
export default HeaderMenu;