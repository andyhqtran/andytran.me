import type { ReactNode } from 'react';

import { ScrollIndicator } from '~/components/ScrollIndicator';

export default function TowerOfFantasyTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollIndicator className='!top-14 !bg-transparent' />
      <div className='container py-6'>{children}</div>
    </>
  );
}
