'use client';
import { Resizer } from '~/components/Resizer';
import { useProjectPropertiesPanelSizeValue } from '~/hooks/useProjectPropertiesPanelSizeValue';

const MIN_PANEL_SIZE = 200;

const MAX_PANEL_SIZE = 360;

export const ProjectPropertiesPanel = () => {
  const { projectPropertiesPanelSizeValue, setProjectPropertiesPanelSizeValue } = useProjectPropertiesPanelSizeValue();

  return (
    <div
      className='relative shrink-0 border-l border-l-slate-4 bg-slate-1'
      style={{ width: projectPropertiesPanelSizeValue }}
    >
      <Resizer
        initialSize={projectPropertiesPanelSizeValue}
        onSizeChange={(value) => {
          if (value <= MIN_PANEL_SIZE) {
            setProjectPropertiesPanelSizeValue(MIN_PANEL_SIZE);
          } else if (value >= MAX_PANEL_SIZE) {
            setProjectPropertiesPanelSizeValue(MAX_PANEL_SIZE);
          } else {
            setProjectPropertiesPanelSizeValue(value);
          }
        }}
        position='left'
      />
    </div>
  );
};
