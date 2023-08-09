import { Badge } from '@several-ui/badge';
import { CollapsibleCard } from '@several-ui/collapsible-card';

import { CHANGELOG } from '~/constants/changelog';

export const Changelog = () => {
  return (
    <CollapsibleCard defaultOpen title='Changelog'>
      <div className='flex flex-col gap-4'>
        {CHANGELOG.length ? (
          CHANGELOG.map((changelog, index) => {
            return (
              <div
                className='flex flex-col gap-1 border-b border-b-slate-4 pb-4 last-of-type:border-b-0 last-of-type:pb-0'
                key={index}
              >
                <h4 className='flex items-center gap-2 text-xs text-slate-12'>
                  {changelog.type === 'bugfix' ? (
                    <Badge color='yellow' size='sm'>
                      Bugfix
                    </Badge>
                  ) : changelog.type === 'feature' ? (
                    <Badge color='blue' size='sm'>
                      Feature
                    </Badge>
                  ) : changelog.type === 'improvement' ? (
                    <Badge color='green' size='sm'>
                      Improvement
                    </Badge>
                  ) : (
                    <Badge color='default' size='sm'>
                      Other
                    </Badge>
                  )}
                  {changelog.title}
                </h4>
                <p className='text-xs text-slate-11'>{changelog.description}</p>
              </div>
            );
          })
        ) : (
          <p className='text-xs text-slate-11'>No changelog entries yet.</p>
        )}
      </div>
    </CollapsibleCard>
  );
};
