import { Badge } from '@several-ui/badge';

export const Changelog = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h3 className='text-base text-slate-12'>Changelog</h3>

      <section className='flex flex-col gap-1'>
        <h4 className='flex items-center gap-2 text-sm'>
          <Badge size='md'>Feature</Badge>
          Rankings
        </h4>
        <p className='text-xs text-slate-11'>Added in rankings page that shows the top players for each advancement.</p>
      </section>
    </div>
  );
};
