import { Dialog, type DialogProps } from '@several-ui/dialog';

import { CharacterAvatarEmblems } from '~/components/character/CharacterAvatarEmblems';
import { type ItemInformation } from '~/fetchers/neople/fetchItemInformation';
import { type Avatar } from '~/types/neople';

export type CharacterAvatarDialogProps = Pick<DialogProps, 'onOpenChange' | 'open'> & {
  avatar: Avatar;
  avatarInformation?: ItemInformation;
};

export const CharacterAvatarDialog = ({
  avatar,
  avatarInformation,
  onOpenChange,
  open,
}: CharacterAvatarDialogProps) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={open} title={`${avatar.itemName} details`}>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <div className='text-sm font-medium text-slate-12'>{avatar.itemName}</div>

          <div className='text-xs text-slate-11'>{avatar.optionAbility}</div>

          {!!avatarInformation?.itemExplainDetail && (
            <div className='text-xs text-slate-11'>{avatarInformation.itemExplainDetail}</div>
          )}

          {!!avatarInformation?.itemStatus && (
            <div className='flex flex-col gap-1'>
              {avatarInformation.itemStatus.map((status, index) => (
                <div className='text-xs text-green-11' key={index}>
                  {status.value} {status.name}
                </div>
              ))}
            </div>
          )}
        </div>
        {avatar?.emblems && <CharacterAvatarEmblems emblems={avatar.emblems} />}
      </div>
    </Dialog>
  );
};
