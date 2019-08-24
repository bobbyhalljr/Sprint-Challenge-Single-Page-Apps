import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from './WelcomePage';
 import CharacterList from './CharacterList';
 import LocationList from './LocationsList';
import EpisodeList from './EpisodeList';

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    const panes = [
        { menuItem: 'Home', render: () => <Tab.Pane><WelcomePage /></Tab.Pane> },
        { menuItem: 'Characters', render: () => <Tab.Pane><CharacterList /></Tab.Pane> },
        { menuItem: 'Location', render: () => <Tab.Pane><LocationList /></Tab.Pane> },
        { menuItem: 'Episodes', render: () => <Tab.Pane><EpisodeList /></Tab.Pane> },
      ]

      return (
        <Tab panes={panes} />
      )
};

