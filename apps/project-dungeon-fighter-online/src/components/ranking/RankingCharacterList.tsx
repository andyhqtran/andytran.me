import slugify from 'slugify';

import { RankingCharacterCard } from '~/components/ranking/RankingCharacterCard';
import { CHARACTERS } from '~/constants/Characters';
import { SUB_ADVANCEMENTS } from '~/constants/SubAdvancement';

export const RankingCharacterList = () => {
  return (
    <div className='flex flex-col gap-8'>
      {CHARACTERS.map((character) => {
        return (
          <div className='flex flex-col gap-4' key={character.id}>
            <div className='flex flex-col gap-1' id={slugify(character.id)}>
              <h2 className='text-sm text-slate-12'>{character.name}</h2>
              <p className='text-xs text-slate-11'>{character.description}</p>
            </div>

            <div className='grid grid-cols-5 gap-x-4'>
              {SUB_ADVANCEMENTS.filter((subAdvancement) => subAdvancement.characterId === character.id).map(
                (subAdvancement) => {
                  return (
                    <RankingCharacterCard
                      characterId={subAdvancement.characterId}
                      key={subAdvancement.id}
                      subAdvancementId={subAdvancement.id}
                      subAdvancementName={subAdvancement.name}
                    />
                  );
                },
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
