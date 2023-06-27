import { atom } from 'recoil';

import { nextCookieEffect } from '~/recoil/effects/nextCookieEffect';

export type ProjectPropertiesPanelState = {
  size: number;
};
export const PROJECT_PROPERTIES_PANEL_STATE_KEY = 'projectPropertiesPanelState';

export const projectPropertiesPanelState = atom<ProjectPropertiesPanelState>({
  key: PROJECT_PROPERTIES_PANEL_STATE_KEY,
  default: {
    size: 256,
  },
  effects: [nextCookieEffect(PROJECT_PROPERTIES_PANEL_STATE_KEY)],
});
