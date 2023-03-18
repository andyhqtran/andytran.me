'use client';
import { DefaultValue, selector } from 'recoil';

import { projectPanelState } from '~/recoil/atoms/projectPanelState';

export const projectPanelActiveValue = selector({
  key: 'projectPanelActiveValue',
  get: ({ get }) => {
    const { active } = get(projectPanelState);

    return active;
  },
  set: ({ set }, newValue) => {
    set(
      projectPanelState,
      newValue instanceof DefaultValue ? newValue : (prevState) => ({ ...prevState, active: newValue }),
    );
  },
});
