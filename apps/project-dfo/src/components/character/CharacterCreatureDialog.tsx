import { Dialog, type DialogProps } from '@several-ui/dialog';

import { CharacterCreatureArtifacts } from '~/components/character/CharacterCreatureArtifacts';
import { type ItemInformation } from '~/fetchers/neople/fetchItemInformation';
import { type Creature } from '~/types/neople';

export type CharacterCreatureDialogProps = Pick<DialogProps, 'onOpenChange' | 'open'> & {
  creature: Creature;
  creatureInformation?: ItemInformation;
};

export const CharacterCreatureDialog = ({
  creature,
  creatureInformation,
  onOpenChange,
  open,
}: CharacterCreatureDialogProps) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={open} title={`${creature.itemName} details`}>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <div className='text-sm font-medium text-slate-12'>{creature.itemName}</div>

          {!!creatureInformation?.itemExplainDetail && (
            <div className='text-xs text-slate-11'>{creatureInformation.itemExplainDetail}</div>
          )}

          {!!creatureInformation?.itemStatus && (
            <div className='flex flex-col gap-1'>
              {creatureInformation.itemStatus.map((status, index) => (
                <div className='text-xs text-green-11' key={index}>
                  {status.value} {status.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <CharacterCreatureArtifacts artifacts={creature.artifact} />
      </div>
    </Dialog>
  );
};
