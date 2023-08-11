import { type Equipment } from '~/types/neople';

export type EquipmentCardOptionsProps = {
  buff?: number;
  damage?: number;
  level: number;
  options: Equipment['growInfo']['options'];
};

export const EquipmentCardOptions = ({ buff, damage, level, options }: EquipmentCardOptionsProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <div className='text-sm font-medium text-slate-12'>Growth options</div>

        <div className='flex flex-col gap-1'>
          {damage && (
            <div className='text-xs text-slate-11'>
              Total damage value: <span className='text-blue-9'>{damage}</span>
            </div>
          )}
          {buff && (
            <div className='text-xs text-slate-11'>
              Total buff value: <span className='text-blue-9'>{buff}</span>
            </div>
          )}
          <div className='text-xs text-slate-11'>
            Total growth option levels: <span className='text-blue-9'>{level}</span>
          </div>
        </div>
      </div>

      {options && (
        <div className='flex flex-col gap-2'>
          {options.map((option, index) => (
            <div className='flex flex-col gap-1' key={index}>
              <div className='text-xs font-medium text-slate-12'>
                Option {index + 1} - Lv{option.level} (<span className='text-blue-9'>{option.expRate}%</span>)
              </div>
              <div className='text-xs text-slate-11'>{option.explainDetail}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
