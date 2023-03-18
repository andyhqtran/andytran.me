'use client';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { projectPanelActiveValue } from '~/recoil/selectors/projectPanelActiveValue';

export const useProjectPanelActiveValue = () => {
  return {
    projectPanelActiveValue: useRecoilValue(projectPanelActiveValue),
    setProjectPanelActiveValue: useSetRecoilState(projectPanelActiveValue),
  };
};
