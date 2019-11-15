import React from 'react';
import { Route, Link } from 'react-router-dom';

import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

export default function App(props) {
  return (
    <main>
      <Header />
      <Link to='/'>Home</Link>
      <Link to='/characters'>Characters</Link>

      <Route exact path='/' render={props => <WelcomePage {...props} />} />
      <Route path='/characters' render={props => <CharacterList {...props} />} />
    </main>
  );
}
