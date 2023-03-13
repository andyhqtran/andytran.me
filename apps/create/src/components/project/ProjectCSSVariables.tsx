import { memo } from 'react';

import { useProjectContext } from '~/hooks/useProjectContext';

export const ProjectCSSVariables = memo(() => {
  const { projectState } = useProjectContext();

  return (
    <style>
      {`
        :root {
          --project-panel-size-left: ${projectState.panelSizeLeft}px;
          --project-panel-size-right: ${projectState.panelSizeRight}px;
        }
      `}
    </style>
  );
});

ProjectCSSVariables.displayName = 'ProjectCSSVariables';
