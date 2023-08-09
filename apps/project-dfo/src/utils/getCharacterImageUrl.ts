import { Character } from '~/data/getCharacters';

export const getCharacterImageUrl = (characterId: Character['characterId']) => {
  return `https://img-api.dfoneople.com/df/severs/cain/characters/${characterId}`;
};
