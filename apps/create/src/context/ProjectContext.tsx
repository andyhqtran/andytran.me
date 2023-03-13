'use client';
import type { Dispatch, ProviderProps } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

import { ProjectCSSVariables } from '~/components/project/ProjectCSSVariables';
import { PROJECT_INITIAL_STATE, ProjectActions, ProjectState, useProjectReducer } from '~/hooks/useProjectReducer';

export const ProjectContext = createContext<{
  projectDispatch: Dispatch<ProjectActions>;
  projectState: ProjectState;
}>({
  projectDispatch: () => null,
  projectState: PROJECT_INITIAL_STATE,
});

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

export const useProjectContext = () => {
  const projectContext = useContext(ProjectContext);

  if (!projectContext) {
    throw new Error('useProjectContext must be used within a ProjectContextProvider');
  }

  return projectContext;
};
