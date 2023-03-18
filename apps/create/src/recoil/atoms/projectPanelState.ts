'use client';
import { atom } from 'recoil';

import { localStorageEffect } from '~/recoil/effects/localStorageEffects';

export type ProjectPanels = 'assets' | 'components' | 'layers' | 'pages' | 'settings' | 'tokens';

export type ProjectPanelState = {
  active: ProjectPanels | null;
  size: number;
};

export const PROJECT_PANEL_STATE_KEY = 'projectPanelState';

export const projectPanelState = atom<ProjectPanelState>({
  key: PROJECT_PANEL_STATE_KEY,
  default: {
    active: 'layers',
    size: 256,
  },
  effects: [localStorageEffect(PROJECT_PANEL_STATE_KEY)],
});
