# Proposal

## Why

The site is a single home page, but the repo still carries a Storybook app with no stories, an `archive/` of a retired app, and shared workspace packages full of components the page never renders. Shrinking to exactly what `/` uses makes the repo cheap to maintain now and leaves one obvious place (`apps/personal`) to grow writing or project pages later.

## What Changes

- Remove `apps/storybook` and all Storybook dependencies and config references.
- Remove `archive/` (retired "create" app and UI kit; recoverable from git history).
- Move the components the home page uses (`Header`, `Logo`, `Footer`, `ThemeSwitcher`, `ThemeProviderWrapper`, `IconButton`) into `apps/personal/src/components/`.
- Delete unused components and hooks: `Article`, `ProjectNavigation`, `ScrollIndicator`, `Collapsible`, `Table`, `Progress`, `Separator`, `usePageScrollPercentage`.
- Inline the Tailwind theme from `packages/tailwind-config` into the app's `globals.css`, and the shared tsconfig presets into `apps/personal/tsconfig.json`.
- Delete `packages/` entirely (`components`, `primitives`, `hooks`, `tailwind-config`, `tsconfig`).
- Drop dependencies that only served removed code: `@tanstack/react-table`, `@radix-ui/react-collapsible`, `@radix-ui/react-progress`, `@radix-ui/react-separator`, `react-intersection-observer` (if unused after the move), and the unconfigured `next-sitemap`.
- Keep the pnpm workspace and turbo with a single app; flattening the repo is out of scope.

No user-visible change: the rendered home page must look and behave the same in light and dark themes.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

None. This is a structural cleanup with no change to site behavior, so the change sets `skip_specs: true`.

## Impact

- **Code**: `apps/personal` gains a `components/` set; `packages/`, `apps/storybook`, and `archive/` are deleted.
- **Config**: `next.config.js` loses `transpilePackages`; `globals.css` drops the cross-package `@source`; `pnpm-workspace.yaml`, `turbo.json` outputs, and `biome.json` ignores/overrides lose Storybook and `packages/**` entries.
- **Dependencies**: fewer packages in `pnpm-lock.yaml`; `@several/*` workspace packages no longer exist.
- **Out of scope**: restyling, new pages, sitemap/SEO work, removing turbo or the workspace.
