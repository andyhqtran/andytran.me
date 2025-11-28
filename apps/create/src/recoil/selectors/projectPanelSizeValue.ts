import { DefaultValue, selector } from "recoil";

import { projectPanelState } from "~/recoil/atoms/projectPanelState";

export const projectPanelSizeValue = selector({
  get: ({ get }) => {
    const { size } = get(projectPanelState);

    return size;
  },
  key: "projectPanelSizeValue",
  set: ({ set }, newValue) => {
    set(
      projectPanelState,
      newValue instanceof DefaultValue
        ? newValue
        : (prevState) => ({ ...prevState, size: newValue }),
    );
  },
});
