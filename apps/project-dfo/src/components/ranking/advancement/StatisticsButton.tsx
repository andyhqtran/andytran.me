import { BarChartIcon } from '@radix-ui/react-icons';
import { Dialog } from '@several-ui/dialog';
import { IconButton } from '@several-ui/icon-button';
import { Tooltip } from '@several-ui/tooltip';
import { useState } from 'react';

import { trackClickedRankingStatisticsButton } from '~/analytics/trackClickedRankingStatisticsButton';
import { useFlags } from '~/flags/client';

export const StatisticsButton = () => {
  const { flags } = useFlags();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Tooltip label='View gear statistics'>
        <IconButton
          appearance='outline'
          color='slate'
          onClick={() => {
            setIsDialogOpen(true);
            trackClickedRankingStatisticsButton();
          }}
        >
          <BarChartIcon className='h-3 w-3' />
        </IconButton>
      </Tooltip>

      <Dialog onOpenChange={setIsDialogOpen} open={isDialogOpen} title='Statistics'>
        {flags?.rankingStatistics ? null : <p className='text-sm text-slate-11'>Coming soon</p>}
      </Dialog>
    </>
  );
};
