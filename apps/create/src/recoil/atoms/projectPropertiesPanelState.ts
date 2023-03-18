import { atom } from 'recoil';

import { localStorageEffect } from '~/recoil/effects/localStorageEffects';

export type ProjectPropertiesPanelState = {
  size: number;
};
export const PROJECT_PROPERTIES_PANEL_STATE_KEY = 'projectPropertiesPanelState';

export const projectPropertiesPanelState = atom<ProjectPropertiesPanelState>({
  key: PROJECT_PROPERTIES_PANEL_STATE_KEY,
  default: {
    size: 256,
  },
  effects: [localStorageEffect(PROJECT_PROPERTIES_PANEL_STATE_KEY)],
});
