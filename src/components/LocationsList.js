import React, { useEffect, useState } from "react";
import axios from 'axios';

import LocationCard from './LocationCard'; 

const LocationList = props => {
    const [locations, setLocations] = useState([])
    
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
        .then(res => {
          console.log(res)
          setLocations(res.data.results)
        })
        .catch(err => console.log(err))
      }, []);
    
      console.log(locations)
    
      return (
        <section>
            <h2>Locations</h2>
            {locations && locations.map((location, i) => <LocationCard location={location} key={i} />)}
        </section>
    )

}

export default LocationList;