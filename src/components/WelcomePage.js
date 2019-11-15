import React from 'react';
import styled from 'styled-components';

const WelcomeHeader = styled.h2`
  text-align: center;
`;

export default function WelcomePage() {
  return (
    <section className='welcome-page'>
      <header>
        <WelcomeHeader>Welcome to the ultimate fan site!</WelcomeHeader>
        <img
          className='main-img'
          src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          alt='rick'
        />
      </header>
    </section>
  );
}
