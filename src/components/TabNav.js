import React from "react";
import { Route } from 'react-router-dom';
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterCard from './CharacterCard';
import LocationCard from './LocationCard';
import Episodes from './Episodes';

export default function TabNav() {
    const panes = [
        {
          menuItem: 'Home Page',
          render: () => <Tab.Pane attached={true}>{<WelcomePage />}</Tab.Pane>,
        },
        {
          menuItem: 'Characters',
          render: () => <Tab.Pane attached={false}>{<CharacterCard />}</Tab.Pane>,
        },
        {
          menuItem: 'Location',
          render: () => <Tab.Pane attached={false}>{<LocationCard />}</Tab.Pane>,
        },
        {
            menuItem: 'Episodes',
        render: () => <Tab.Pane attached={false}>{<Episodes />}</Tab.Pane>,
        },
      ]
    
      return ( 
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    )  
};
