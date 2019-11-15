import React from 'react';
import styled from 'styled-components';

const Card = styled.span`
  width: 400px;
  margin-top: 30px;
  padding-bottom: 20px;
  border-radius: 10px;
  background: #4B0082;
  color: #FF69B4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

const Image = styled.img`
  border: 1px solid #000;
  border-radius: 100%;
`;

const Info = styled.ul`
  list-style-type: none;
  margin: 10px 0 0 0;
  padding: 0;
`;

const Bullet = styled.li`
  font-size: 1.8rem;
  line-height: 4rem;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <h3>{props.name}</h3>
      <Image src={props.image} alt={props.name} />
      <Info>
        <Bullet>Gender: {props.gender}</Bullet>
        <Bullet>Species: {props.species}</Bullet>
        <Bullet>Status: {props.status}</Bullet>
      </Info>
    </Card>
  );
}
