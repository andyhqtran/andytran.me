'use client';
import { Collapsible, Separator } from '@several/primitives';

export const SimulacraSkills = ({ skills }) => {
  return (
    <section className='rounded border border-slate-4 bg-slate-2 p-6'>
      <h3 className='text-lg font-semibold text-slate-12'>Skills</h3>
      <Separator />
      {skills.map((skill) => (
        <Collapsible key={skill.id} title={`${skill.name} (${skill.type})`}>
          <div className='flex flex-col gap-3 py-4 pl-8'>
            <div className='flex flex-col gap-1'>
              <h5 className='text-sm font-semibold text-slate-12'>Activation sequence</h5>
              <div className='flex gap-2'>
                {skill.activationSequence.map((step, index) => (
                  <div
                    className='flex h-5 items-center rounded border border-slate-7 bg-slate-3 px-1 text-[8px] font-bold uppercase tracking-widest text-slate-11'
                    key={index}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <h5 className='text-sm font-semibold text-slate-12'>Description</h5>
              <p className='text-sm text-slate-11'>{skill.description}</p>
            </div>
          </div>
        </Collapsible>
      ))}
    </section>
  );
};
