import { DefaultValue, selector } from "recoil";

import { projectPanelState } from "~/recoil/atoms/projectPanelState";

export const projectPanelActiveValue = selector({
  get: ({ get }) => {
    const { active } = get(projectPanelState);

    return active;
  },
  key: "projectPanelActiveValue",
  set: ({ set }, newValue) => {
    set(
      projectPanelState,
      newValue instanceof DefaultValue
        ? newValue
        : (prevState) => ({ ...prevState, active: newValue }),
    );
  },
});
