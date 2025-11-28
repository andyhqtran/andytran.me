import { atom } from "recoil";

import { nextCookieEffect } from "~/recoil/effects/nextCookieEffect";

export type ProjectPanels =
  | "assets"
  | "components"
  | "layers"
  | "pages"
  | "settings"
  | "tokens";

export type ProjectPanelState = {
  active: ProjectPanels | null;
  size: number;
};

export const PROJECT_PANEL_STATE_KEY = "projectPanelState";

export const projectPanelState = atom<ProjectPanelState>({
  default: {
    active: null,
    size: 256,
  },
  effects: [nextCookieEffect(PROJECT_PANEL_STATE_KEY)],
  key: PROJECT_PANEL_STATE_KEY,
});
