import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Route } from 'react-router-dom';

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard';
import CharacterList from './components/CharacterList';
import LocationCard from './components/LocationCard';
import WelcomePage from './components/WelcomePage';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, data };
}


export default function App() {
  const { loading, data } = useFetch('https://rickandmortyapi.com/api/character/');
  console.log(data) 


  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path='/' 
        render={props => <WelcomePage {...props} data={data} />} />
      
      <Route exact path='/characters' 
        render={props => <CharacterCard {...props} data={data} />} />
    </main>
  );
}
