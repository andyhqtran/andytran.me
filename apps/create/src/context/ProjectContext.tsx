'use client';
import type { Dispatch } from 'react';
import { createContext } from 'react';

import type { ProjectActions, ProjectState } from '~/hooks/useProjectReducer';
import { PROJECT_INITIAL_STATE } from '~/hooks/useProjectReducer';

export const ProjectContext = createContext<{
  projectDispatch: Dispatch<ProjectActions>;
  projectState: ProjectState;
}>({
  projectDispatch: () => null,
  projectState: PROJECT_INITIAL_STATE,
});
