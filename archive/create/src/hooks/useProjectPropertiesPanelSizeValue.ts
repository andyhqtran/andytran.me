"use client";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { projectPropertiesPanelSizeValue } from "~/recoil/selectors/projectPropertiesPanelSizeValue";

export const useProjectPropertiesPanelSizeValue = () => {
  return {
    projectPropertiesPanelSizeValue: useRecoilValue(
      projectPropertiesPanelSizeValue,
    ),
    setProjectPropertiesPanelSizeValue: useSetRecoilState(
      projectPropertiesPanelSizeValue,
    ),
  };
};
