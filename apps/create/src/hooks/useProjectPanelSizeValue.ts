'use client';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { projectPanelSizeValue } from '~/recoil/selectors/projectPanelSizeValue';

export const useProjectPanelSizeValue = () => {
  return {
    projectPanelSizeValue: useRecoilValue(projectPanelSizeValue),
    setProjectPanelSizeValue: useSetRecoilState(projectPanelSizeValue),
  };
};
