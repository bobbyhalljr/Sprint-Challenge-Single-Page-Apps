import React from "react";
import { Navlink } from 'react-router-dom';
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';
import WelcomePage from './WelcomePage';

// import './index.css';

export default function TabNav() {
  return (
    <>
    <nav className='navbar'>
    <NavLink exact to='/' component={WelcomePage}>Home</NavLink>
    <NavLink exact to='/characters'>Characters</NavLink>
    <NavLink to='/location'>Location</NavLink>
    <NavLink to='/episodes'>Episodes</NavLink>
    </nav>
    </>
  )
};
