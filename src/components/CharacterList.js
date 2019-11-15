import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res.data);
        setChars(res.data.results);
      })
      .catch(err => {
        console.log('Data could not be returned!', err);
      })
  }, []);

  return (
    <section className="character-list">
      {chars.map(char => (
        <CharacterCard key={char.id} name={char.name} image={char.image} gender={char.gender} species={char.species} status={char.status} />
      ))}
    </section>
  );
}
