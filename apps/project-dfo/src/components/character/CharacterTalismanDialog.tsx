import { Dialog, type DialogProps } from '@several-ui/dialog';

import { CharacterTalismanRunes } from '~/components/character/CharacterTalismanRune';
import { type ItemInformation } from '~/fetchers/neople/fetchItemInformation';
import { type Talisman } from '~/types/neople';

export type CharacterTalismanDialogProps = Pick<DialogProps, 'onOpenChange' | 'open'> & {
  talisman: Talisman;
  talismanInformation?: ItemInformation;
};

export const CharacterTalismanDialog = ({
  talisman,
  talismanInformation,
  onOpenChange,
  open,
}: CharacterTalismanDialogProps) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={open} title={`${talisman.talisman.itemName} details`}>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <div className='text-sm font-medium text-slate-12'>{talisman.talisman.itemName}</div>

          {!!talismanInformation?.itemExplainDetail && (
            <div className='text-xs text-slate-11'>{talismanInformation.itemExplainDetail}</div>
          )}

          {!!talismanInformation?.itemStatus && (
            <div className='flex flex-col gap-1'>
              {talismanInformation.itemStatus.map((status, index) => (
                <div className='text-xs text-green-11' key={index}>
                  {status.value} {status.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <CharacterTalismanRunes runes={talisman.runes} />
      </div>
    </Dialog>
  );
};
