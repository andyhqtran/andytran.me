'use client';
import { Resizer } from '~/components/Resizer';
import { useProjectContext } from '~/hooks/useProjectContext';
import { ProjectTypes } from '~/hooks/useProjectReducer';

const MIN_PANEL_SIZE = 120;

const MAX_PANEL_SIZE = 480;

export const ProjectPanelLeft = () => {
  const { projectDispatch, projectState } = useProjectContext();

  return (
    <div className='project-panel-size-left relative shrink-0 border-r border-r-slate-4 bg-slate-1'>
      <Resizer
        initialSize={projectState.panelSizeLeft}
        onSizeChange={(value) => {
          if (value <= MIN_PANEL_SIZE) {
            projectDispatch({ type: ProjectTypes.SetPanelSizeLeft, payload: { value: MIN_PANEL_SIZE } });
          } else if (value >= MAX_PANEL_SIZE) {
            projectDispatch({ type: ProjectTypes.SetPanelSizeLeft, payload: { value: MAX_PANEL_SIZE } });
          } else {
            projectDispatch({ type: ProjectTypes.SetPanelSizeLeft, payload: { value } });
          }
        }}
        position='right'
      />
    </div>
  );
};
