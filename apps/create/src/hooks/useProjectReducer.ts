'use client';
import { useReducer } from 'react';

export type ProjectState = {
  panelSizeLeft: number;
  panelSizeRight: number;
};

export const PROJECT_INITIAL_STATE: ProjectState = {
  panelSizeLeft: 256,
  panelSizeRight: 256,
};

export enum ProjectTypes {
  SetPanelSizeLeft = 'SET_PANEL_SIZE_LEFT',
  SetPanelSizeRight = 'SET_PANEL_SIZE_RIGHT',
  UpdatePanelSizeLeft = 'UPDATE_PANEL_SIZE_LEFT',
  UpdatePanelSizeRight = 'UPDATE_PANEL_SIZE_RIGHT',
}

export type ProjectPayload = {
  [ProjectTypes.SetPanelSizeLeft]: {
    value: number;
  };
  [ProjectTypes.SetPanelSizeRight]: {
    value: number;
  };
  [ProjectTypes.UpdatePanelSizeLeft]: {
    value: number;
  };
  [ProjectTypes.UpdatePanelSizeRight]: {
    value: number;
  };
};

export type ProjectActions = ActionMap<ProjectPayload>[keyof ActionMap<ProjectPayload>];

export const projectReducer = (state: ProjectState, action: ProjectActions) => {
  switch (action.type) {
    case ProjectTypes.SetPanelSizeLeft:
      return { ...state, panelSizeLeft: action.payload.value };
    case ProjectTypes.SetPanelSizeRight:
      return { ...state, panelSizeRight: action.payload.value };
    case ProjectTypes.UpdatePanelSizeLeft:
      return { ...state, panelSizeLeft: state.panelSizeLeft + action.payload.value };
    case ProjectTypes.UpdatePanelSizeRight:
      return { ...state, panelSizeRight: state.panelSizeRight + action.payload.value };
    default:
      return state;
  }
};

export const useProjectReducer = () => {
  return useReducer(projectReducer, PROJECT_INITIAL_STATE);
};
