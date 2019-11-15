import React from "react";

export default function CharacterCard(props) {
  return (
    <span>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <ul>
        <li>Gender: {props.gender}</li>
        <li>Species: {props.species}</li>
        <li>Status: {props.status}</li>
      </ul>
    </span>
  );
}
