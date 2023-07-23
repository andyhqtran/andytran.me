import { AdvancementCard } from '~/components/ranking/AdvancementCard';
import { ADVANCEMENTS } from '~/constants/advancements';
import { CHARACTERS } from '~/constants/Characters';

export const AdvancementList = () => {
  return (
    <div className='flex flex-col gap-8'>
      {CHARACTERS.map((character) => {
        return (
          <section className='flex flex-col gap-4' key={character.id}>
            <div className='flex flex-col gap-1' id={character.id}>
              <h2 className='text-sm text-slate-12'>{character.name}</h2>
              <p className='text-xs text-slate-11'>{character.description}</p>
            </div>

            <div className='grid grid-cols-5 gap-x-4'>
              {ADVANCEMENTS.filter((advancement) => advancement.characterId === character.id).map((advancement) => {
                return <AdvancementCard id={advancement.id} key={advancement.id} />;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};
