import React, { useState } from "react";
import { Route } from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard'


export default function App() {
  let [char, setChar] = useState([])
  return (
    <main>
      <Header />
      <TabNav />

      <Route exact path='/' />
      <Route exact path='/characters' />
      <Route exact path='/locations' />
      <Route exact path='/episodes' />
    </main>
  );
}
