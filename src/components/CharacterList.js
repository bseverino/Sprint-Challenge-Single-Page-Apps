import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

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
      });
  }, []);

    return (
    <section>
      <SearchForm chars={chars} />
    </section>
  );
}
