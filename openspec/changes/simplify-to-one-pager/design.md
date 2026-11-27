# Design

## Context

See proposal.md - Why. Today `apps/personal` imports everything from `@several/components`, whose barrel `index.ts` starts with `"use client"`. That marks every exported component as a client component, including `Logo`, `Footer`, and `IconButton`, which use no hooks. The app also needs `transpilePackages` for the `@several/*` packages and an `@source "../../../../packages"` line so Tailwind v4 scans their classes.

The home page's component graph after the move:

```
layout.tsx (server)
  +-- ThemeProviderWrapper   "use client" (next-themes)
  +-- Footer                 server
  |     +-- ThemeSwitcher    "use client" (useTheme, useState)
  |           +-- IconButton (client by import)
  +-- AnalyticsWrapper       "use client"
page.tsx (server)
  +-- Header                 "use client" (useInView)
  |     +-- Logo             (client by import)
  +-- Hero                   server
```

## Goals / Non-Goals

**Goals:**
- Keep the home page's rendered output and theme behavior unchanged.
- Rely on per-file `"use client"` directives, not a barrel-level one, so server/client boundaries are explicit.
- Leave `apps/personal` able to compile without any workspace packages or cross-directory Tailwind sources.

**Non-Goals:**
- Restyling, renaming components, or changing their props.
- Introducing a new component library or folder convention beyond `src/components/`.
- Removing turbo or the pnpm workspace.

## Decisions

**Flat `src/components/` with direct imports, no barrel.**
Move each kept file into `apps/personal/src/components/<Name>.tsx` (next to the existing `Hero.tsx` and `AnalyticsWrapper.tsx`) and import it as `~/components/<Name>`. Without a barrel, no file accidentally becomes a client component, and unused code is easy to spot.
*Alternative:* keep an `index.ts` barrel. Rejected: a `"use client"` barrel recreates today's problem, and a plain barrel brings nothing for six files.

**Keep the existing per-file `"use client"` directives as they are.**
`Header`, `ThemeSwitcher`, and `ThemeProviderWrapper` already declare it. `Footer`, `Logo`, and `IconButton` become server-compatible modules; they still run on the client wherever a client parent imports them.
*Alternative:* mark every moved file `"use client"`. Rejected: it hides which components actually need the client.

**Inline the theme into `apps/personal/src/app/globals.css`.**
Paste `theme.css` after `@import "tailwindcss";` and drop the `@source` line, because Tailwind auto-detects the app's own `src/`. `@tailwindcss/forms`, `tailwindcss-radix`, and `@radix-ui/colors` become `apps/personal` dependencies. Drop `@tailwindcss/forms` and `tailwindcss-radix` if no kept file uses form or `radix-*` classes. (`radix-*` variants were only used by `Separator` and `Collapsible`.)
*Alternative:* keep a local `theme.css` imported from `globals.css`. Fine either way; one file is simpler while the theme is this small.

**Inline the tsconfig presets.**
Merge `packages/tsconfig/base.json` and `nextjs.json` into `apps/personal/tsconfig.json`, keeping the TypeScript 7–compatible settings from the upgrade (`moduleResolution: bundler`, `target: ES2017`, `paths` with no `baseUrl`).

**Remove rather than archive.**
`archive/`, `apps/storybook`, and the unused components are deleted outright. Git history is the archive.

## Risks / Trade-offs

- [Unused-looking Tailwind classes or plugins are still needed] → After moving the files, grep the kept files for `radix-`, `form-`, and `animate-`. Keep only the plugins and keyframes that are still referenced. Then compare the page with screenshots in light and dark mode.
- [Client/server boundary change breaks rendering] → `next build` fails on hooks used inside server components; also check that the browser console has no hydration warnings.
- [Leftover references to deleted paths] → Grep for `@several/`, `storybook`, and `packages/` across config files (`turbo.json`, `biome.json`, `lint-staged.config.mjs`, `.github/`) before finishing.
- [Expanding later needs shared packages again] → It doesn't, as long as there is one app. Reintroduce packages only when a second consumer exists.

## Migration Plan

This is a single PR with no data migration or deploy-time steps. Roll back by reverting the commit.
