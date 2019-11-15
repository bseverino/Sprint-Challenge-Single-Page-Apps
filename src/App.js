import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

const NavBar = styled.nav`
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

const NavBtn = styled.div`
  width: 100px;
  padding: 10px 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000080;
  color: #FFF;

  :hover {
    background: #FFF;
    color: #000080;
  }
`;

export default function App(props) {
  return (
    <main>
      <Header />
      <NavBar>
        <Link to='/'>
          <NavBtn>Home</NavBtn>
        </Link>
        <Link to='/characters'>
          <NavBtn>Characters</NavBtn>
        </Link>
      </NavBar>

      <Route exact path='/' render={props => <WelcomePage {...props} />} />
      <Route path='/characters' render={props => <CharacterList {...props} />} />
    </main>
  );
}
