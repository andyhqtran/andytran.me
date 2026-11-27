# Tasks

## 1. Baseline

- [x] 1.1 Run `pnpm --filter personal dev` and save screenshots of `/` in light and dark mode for later comparison. Verify both screenshots show the header, hero, and footer with the theme switcher.

## 2. Remove unrelated apps and folders

- [x] 2.1 Delete `archive/` and verify `git status` shows only deletions under `archive/`
- [x] 2.2 Delete `apps/storybook` and remove its references (`storybook-static/**` in `turbo.json` outputs, `!storybook-static` and the `.storybook/**` and `*.stories.*` override entries in `biome.json`). Verify `grep -rni storybook --exclude-dir=node_modules --exclude-dir=openspec .` finds nothing outside the lockfile.

## 3. Move home-page components into the app

- [x] 3.1 Move `Header`, `Logo`, `Footer`, `ThemeSwitcher`, and `ThemeProviderWrapper` from `packages/components/src/` into `apps/personal/src/components/`. Keep each file's existing `"use client"` directive, and don't add a barrel.
- [x] 3.2 Move `IconButton` from `packages/primitives/src/` into `apps/personal/src/components/`, and point `ThemeSwitcher` at `./IconButton`.
- [x] 3.3 Update `layout.tsx` and `page.tsx` to import from `~/components/<Name>`. Move the runtime deps the kept files use (`@radix-ui/react-icons`, `next-themes`, `react-intersection-observer`) into `apps/personal/package.json`. Verify `pnpm --filter personal build` succeeds.

## 4. Inline shared config

- [x] 4.1 Inline `packages/tailwind-config/theme.css` into `apps/personal/src/app/globals.css` and remove the `@source` line. Move `@radix-ui/colors` into the app. Grep the kept components for `radix-` and `form-` classes and keep `tailwindcss-radix` / `@tailwindcss/forms` only if they're referenced. Verify the build's CSS still contains `justify-between`, `w-10`, and `text-slate-12`.
- [x] 4.2 Merge `packages/tsconfig/base.json` and `nextjs.json` into `apps/personal/tsconfig.json` (no `extends`). Verify `pnpm -C apps/personal exec tsc -p tsconfig.json --noEmit` passes.
- [x] 4.3 Remove `transpilePackages` from `apps/personal/next.config.js`. Verify `pnpm --filter personal build` succeeds.

## 5. Delete packages and unused dependencies

- [x] 5.1 Delete `packages/` entirely, remove the `@several/*` entries from `apps/personal/package.json`, and drop `packages/**` from `pnpm-workspace.yaml`. Verify `grep -rn "@several/" --exclude-dir=node_modules --exclude-dir=openspec .` finds nothing.
- [x] 5.2 Remove `next-sitemap` and any other `apps/personal` dependency with no remaining import, then run `pnpm install`. Verify the lockfile no longer contains `@tanstack/react-table`, `@radix-ui/react-collapsible`, `@radix-ui/react-progress`, `@radix-ui/react-separator`, or `storybook`.

## 6. Integration check

- [x] 6.1 Run `pnpm build` and `pnpm lint` from the repo root and verify both pass.
- [x] 6.2 Run the dev server and compare `/` against the task 1.1 screenshots in light and dark mode. Toggle the theme switcher, and verify it works with no console errors or hydration warnings.
