import Image from 'next/image';

import { PlayerList } from '~/components/player/PlayerList';
import { Toolbar } from '~/components/ranking/advancement/Toolbar';
import { Advancement, ADVANCEMENTS } from '~/constants/advancements';

type PageProps = {
  params: {
    id: Advancement['id'];
  };
};

export default function Page({ params }: PageProps) {
  const advancement = ADVANCEMENTS.find((advancement) => params.id === advancement.id);

  if (!advancement) return null;

  return (
    <div className='relative z-0 flex flex-col'>
      <div className='mb-8 flex flex-col gap-3 pb-6 pt-10'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-2xl text-slate-12'>{advancement.name} ranking</h1>
          <p className='text-base text-slate-11'>The top 100 players with the most fame for {advancement.name}.</p>
        </div>
      </div>

      <Toolbar className='mb-8' />

      <PlayerList />

      <Image
        alt={`Image of ${advancement.name}`}
        className='pointer-events-none fixed bottom-0 right-0 -z-10 max-w-[400px] object-cover opacity-5 grayscale'
        height={1200}
        priority
        src={`/assets/characters/${advancement.characterId}-${advancement.id}.jpeg`}
        width={1200}
      />
    </div>
  );
}

export async function generateStaticParams() {
  return ADVANCEMENTS.map((advancement) => ({
    id: advancement.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = params;

  const advancement = ADVANCEMENTS.find((advancement) => id === advancement.id);

  return {
    title: `${advancement.name} ranking | Dungeon Fighter Online Resources`,
  };
}
