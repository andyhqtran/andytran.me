import { Progress } from '@several-ui/progress';

export type EquipmentStatisticsItemProps = {
  count: number;
  label: string;
  maxCount: number;
};

export const EquipmentStatisticsItem = ({ count = 1, label, maxCount = 2 }: EquipmentStatisticsItemProps) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='h-8 w-8 rounded bg-slate-2' />

      <div className='flex grow flex-col gap-1'>
        <div className='flex justify-between'>
          <div className='text-xs font-medium text-slate-12'>{label}</div>

          <div className='text-xs text-slate-11'>
            {count}/{maxCount}
          </div>
        </div>

        <Progress className='grow' color='blue' value={(10 / 20) * 100} />
      </div>
    </div>
  );
};
