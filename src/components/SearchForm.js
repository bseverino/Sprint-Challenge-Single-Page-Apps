import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import CharacterCard from './CharacterCard';

const Search = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Input = styled.input`
  font-size: 1.6rem;
  padding: 0.5rem;
  border: none;
`;

const List = styled.section`
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = props.chars.filter(char => char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, props.chars]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
 
  return (
    <div>
      <Search className="search-form">
        <form>
          <Input id='name' type='text' name='searchField' placeholder='search' value={searchTerm} onChange={handleChange} />
        </form>
      </Search>
        <List>
          {searchResults.map(char => (
            <CharacterCard key={char.id} name={char.name} image={char.image} gender={char.gender} species={char.species} status={char.status} />
          ))}
        </List>
    </div>    
  );
}
