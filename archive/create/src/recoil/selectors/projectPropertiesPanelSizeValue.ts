import { DefaultValue, selector } from "recoil";

import { projectPropertiesPanelState } from "~/recoil/atoms/projectPropertiesPanelState";

export const projectPropertiesPanelSizeValue = selector({
  get: ({ get }) => {
    const { size } = get(projectPropertiesPanelState);

    return size;
  },
  key: "projectPropertiesPanelSizeValue",
  set: ({ set }, newValue) => {
    set(
      projectPropertiesPanelState,
      newValue instanceof DefaultValue
        ? newValue
        : (prevState) => ({ ...prevState, size: newValue }),
    );
  },
});
