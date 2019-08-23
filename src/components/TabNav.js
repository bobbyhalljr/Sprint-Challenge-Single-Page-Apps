import React from "react";
import { Navlink } from 'react-router-dom';
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterCard from './CharacterCard';
import LocationCard from './LocationCard';
import Episodes from './Episodes';

export default function TabNav() {
  const panes = [
    { menuItem: 'Home', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]
    
      return ( 
      <Tab panes={panes} />    
    )  
};
