import React from 'react';
import ListItem from './ListItem';
import { useListGenerator } from '../hooks/useListGenerator';

const List = () => {
  const { characters, loading } = useListGenerator();

  if (loading)
    return (
      <img
        src="https://thumbs.gfycat.com/SoftEarnestGyrfalcon-max-1mb.gif"
        alt="loading spinner"
      />
    );

  return (
    <ul aria-label="character-list">
      {characters.map((character) => (
        <li key={character.id}>
          <ListItem image={character.image} name={character.name} />
        </li>
      ))}
    </ul>
  );
};

export default List;
