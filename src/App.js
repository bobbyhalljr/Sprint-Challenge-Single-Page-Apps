import React, { useState } from "react";
import { Route } from 'react-router-dom';

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard';
import CharacterList from './components/CharacterList';
import LocationCard from './components/LocationCard';
import WelcomePage from './components/WelcomePage';


export default function App() {
const [char, setChar] = useState([])
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path='/' 
        render={props => <WelcomePage {...props} char={char} />} />
      < CharacterList />
    </main>
  );
}
