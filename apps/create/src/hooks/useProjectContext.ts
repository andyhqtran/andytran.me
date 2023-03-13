'use client';
import { useContext } from 'react';

import { ProjectContext } from '~/context/ProjectContext';

export const useProjectContext = () => {
  const projectContext = useContext(ProjectContext);

  if (!projectContext) {
    throw new Error('useProjectContext must be used within a ProjectContextProvider');
  }

  return projectContext;
};
