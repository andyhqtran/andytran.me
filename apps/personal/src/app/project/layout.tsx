import type { ReactNode } from 'react';

import { Header } from '~/components/Header';
import { ProjectHeader } from '~/components/project/ProjectHeader';

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
