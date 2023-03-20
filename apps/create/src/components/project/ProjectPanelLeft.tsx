import { ProjectPanelLeftHeader } from '~/components/project/ProjectPanelLeftHeader';
import { Resizer } from '~/components/Resizer';
import { useProjectPanelActiveValue } from '~/hooks/useProjectPanelActiveValue';
import { useProjectPanelSizeValue } from '~/hooks/useProjectPanelSizeValue';

const MIN_PANEL_SIZE = 160;

const MAX_PANEL_SIZE = 360;

export const ProjectPanelLeft = () => {
  const { projectPanelSizeValue, setProjectPanelSizeValue } = useProjectPanelSizeValue();
  const { projectPanelActiveValue } = useProjectPanelActiveValue();

  if (projectPanelActiveValue === null) {
    return null;
  }

  return (
    <div
      className='relative shrink-0 border-r border-r-slate-4 bg-slate-1'
      style={{
        width: projectPanelSizeValue,
      }}
    >
      <ProjectPanelLeftHeader />
      <Resizer
        initialSize={projectPanelSizeValue}
        onSizeChange={(value) => {
          if (value <= MIN_PANEL_SIZE) {
            setProjectPanelSizeValue(MIN_PANEL_SIZE);
          } else if (value >= MAX_PANEL_SIZE) {
            setProjectPanelSizeValue(MAX_PANEL_SIZE);
          } else {
            setProjectPanelSizeValue(value);
          }
        }}
        position='right'
      />
    </div>
  );
};
