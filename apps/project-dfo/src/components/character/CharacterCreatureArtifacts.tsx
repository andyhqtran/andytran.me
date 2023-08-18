import { twMerge } from 'tailwind-merge';

import { type Artifact } from '~/types/neople';

export type CharacterCreatureArtifactsProps = {
  artifacts: Artifact[];
};

export const CharacterCreatureArtifacts = ({ artifacts }: CharacterCreatureArtifactsProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-sm font-medium text-slate-12'>Artifacts</div>

      <div className='flex flex-col gap-1'>
        {artifacts?.map((artifact, index) => (
          <div
            className={twMerge(
              'text-xs text-slate-11',
              artifact.slotColor === 'RED' && 'text-red-11',
              artifact.slotColor === 'BLUE' && 'text-blue-11',
              artifact.slotColor === 'GREEN' && 'text-green-11',
            )}
            key={index}
          >
            {artifact.itemName}
          </div>
        ))}
      </div>
    </div>
  );
};
