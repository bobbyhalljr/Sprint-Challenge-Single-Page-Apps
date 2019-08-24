import React, { useEffect, useState } from "react";
import axios from 'axios';

import EpisodeCard from './EpisodeCard';

const EpisodeList = props => {
    const [episodes, setEpisodes] = useState([])
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
          console.log(res)
          setEpisodes(res.data.results)
        })
        .catch(err => console.log(err))
      }, []);
    
      console.log(episodes)

    return (
        <section>
            <h2>Episodes</h2>
            {episodes && episodes.map((epi, i) => <EpisodeCard epi={epi} key={i} />)}
        </section>
    )

}

export default EpisodeList;