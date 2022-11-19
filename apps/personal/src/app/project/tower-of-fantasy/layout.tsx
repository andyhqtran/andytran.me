import Link from 'next/link';
import type { ReactNode } from 'react';

import { ProjectHeader } from '~/components/ProjectHeader';
import { TowerOfFantasyRoutes } from '~/constants/routes';

export default function TowerOfFantasyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ProjectHeader
        navigation={[
          {
            label: 'Simulacra',
            href: TowerOfFantasyRoutes.Simulacra,
          },
          {
            label: 'Matrices',
            href: TowerOfFantasyRoutes.Matrices,
          },
          {
            label: 'Relics',
            href: TowerOfFantasyRoutes.Relics,
          },
          {
            label: 'Calculator',
            href: TowerOfFantasyRoutes.Calculator,
          },
        ]}
        title={
          <Link className='hover:underline' href={TowerOfFantasyRoutes.Root}>
            Tower of Fantasy
          </Link>
        }
      />
      {children}
    </>
  );
}
