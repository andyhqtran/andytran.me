import { atom } from 'recoil';

import { localForageEffect } from '~/recoil/effects/localForageEffect';

export type ProjectPanels = 'assets' | 'components' | 'layers' | 'pages' | 'settings' | 'tokens';

export type ProjectPanelState = {
  active: ProjectPanels | null;
  size: number;
};

export const PROJECT_PANEL_STATE_KEY = 'projectPanelState';

export const projectPanelState = atom<ProjectPanelState>({
  key: PROJECT_PANEL_STATE_KEY,
  default: {
    active: null,
    size: 256,
  },
  effects: [localForageEffect(PROJECT_PANEL_STATE_KEY)],
});
