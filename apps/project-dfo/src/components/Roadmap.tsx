import { CollapsibleCard } from '@several-ui/collapsible-card';

import { ROADMAP } from '~/constants/roadmap';

export const Roadmap = () => {
  return (
    <CollapsibleCard defaultOpen title='Roadmap'>
      <div className='flex flex-col gap-4'>
        {ROADMAP.length ? (
          ROADMAP.map((roadmap, index) => {
            return (
              <div
                className='flex flex-col gap-1 border-b border-b-slate-4 pb-4 last-of-type:border-b-0 last-of-type:pb-0'
                key={index}
              >
                <h4 className='flex items-center gap-2 text-xs text-slate-12'>{roadmap.title}</h4>
                <p className='text-xs text-slate-11'>{roadmap.description}</p>
              </div>
            );
          })
        ) : (
          <p className='text-xs text-slate-11'>No roadmap entries yet.</p>
        )}
      </div>
    </CollapsibleCard>
  );
};
