'use client';
import type { ProviderProps } from 'react';

import { ProjectCSSVariables } from '~/components/project/ProjectCSSVariables';
import { ProjectContext } from '~/context/ProjectContext';
import type { ProjectState } from '~/hooks/useProjectReducer';
import { useProjectReducer } from '~/hooks/useProjectReducer';

export type ProjectContextProviderProps = Pick<ProviderProps<ProjectState>, 'children'>;

export const ProjectContextProvider = ({ children }: ProjectContextProviderProps) => {
  const [state, dispatch] = useProjectReducer();

  return (
    <ProjectContext.Provider value={{ projectDispatch: dispatch, projectState: state }}>
      <ProjectCSSVariables />
      {children}
    </ProjectContext.Provider>
  );
};
