import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function TabNav() {
    const panes = [
        {
          menuItem: 'Home Page',
          render: () => <Tab.Pane attached={false}>Home Page</Tab.Pane>,
        },
        {
          menuItem: 'Characters',
          render: () => <Tab.Pane attached={false}>Characters</Tab.Pane>,
        },
        {
          menuItem: 'Location',
          render: () => <Tab.Pane attached={false}>Location</Tab.Pane>,
        },
        {
            menuItem: 'Episodes',
            render: () => <Tab.Pane attached={false}>Episodes</Tab.Pane>,
        },
      ]
    
      return ( 
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    )  
};
