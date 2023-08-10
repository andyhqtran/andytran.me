'use client';
import { CharacterList } from '~/components/character/CharacterList';

export const CharacterSearchList = () => {
  return (
    <CharacterList
      characters={[]}
      rowHeight={() => 96 + 16}
      rowRenderer={({ style }) => <div style={style}>div</div>}
    />
  );
};
