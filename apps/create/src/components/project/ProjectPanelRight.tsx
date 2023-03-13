'use client';
import { Resizer } from '~/components/Resizer';
import { useProjectContext } from '~/context/ProjectContext';
import { ProjectTypes } from '~/hooks/useProjectReducer';

const MIN_PANEL_SIZE = 200;

const MAX_PANEL_SIZE = 360;

export const ProjectPanelRight = () => {
  const { projectDispatch, projectState } = useProjectContext();

  return (
    <div className='project-panel-size-right relative shrink-0 border-l border-l-slate-4 bg-slate-1'>
      <Resizer
        initialSize={projectState.panelSizeRight}
        onSizeChange={(value) => {
          if (value <= MIN_PANEL_SIZE) {
            projectDispatch({ type: ProjectTypes.SetPanelSizeRight, payload: { value: MIN_PANEL_SIZE } });
          } else if (value >= MAX_PANEL_SIZE) {
            projectDispatch({ type: ProjectTypes.SetPanelSizeRight, payload: { value: MAX_PANEL_SIZE } });
          } else {
            projectDispatch({ type: ProjectTypes.SetPanelSizeRight, payload: { value } });
          }
        }}
        position='left'
      />
    </div>
  );
};
