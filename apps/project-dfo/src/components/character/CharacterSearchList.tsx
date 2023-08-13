'use client';
import { CharacterCard } from '~/components/character/character-card/CharacterCard';
import { CharacterList } from '~/components/character/CharacterList';
import { type Character } from '~/fetchers/neople/fetchCharacters';

export type CharacterSearchListProps = {
  characters: Character[];
};

export const CharacterSearchList = ({ characters }: CharacterSearchListProps) => {
  return (
    <CharacterList
      characters={characters}
      getEstimateSize={() => 100 + 16}
      renderCharacter={({ character, index }) => (
        <CharacterCard
          className='mb-4'
          fame={character.fame || 0}
          id={character.characterId}
          index={index + 1}
          label='Result'
          level={character.level}
          job={character.jobGrowName}
          name={character.characterName}
          serverId={character.serverId}
        />
      )}
    />
  );
};
