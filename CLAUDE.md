# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Global Constraints

- **Never auto-commit.** Always ask for explicit confirmation before running `git commit`, `git merge`, or any other git command that modifies the repository history. Staging (`git add`) is fine without confirmation, but committing is not.
- **Run prettier after tasks.** After completing any task that modifies source files, run `pnpm run prettier` (or the appropriate prettier script) to ensure code formatting is consistent before considering the task done.
- **Bilingual JSDoc comments.** All JSDoc comments must include both Chinese (`@zh`) and English (`@en`) with the corresponding language tag. Do NOT use `@description`. Follow the existing pattern in `src/types/tabs.ts`:

```ts
/**
 * @zh 中文描述
 * @en English description
 */
```

## Project Overview

`musae` is a React UI component library (~60+ components) built on Material Design 3 principles. It uses **StyleX** (Meta's CSS-in-JS) for styling, **Rollup** for bundling, and **RxJS** for internal reactive state management.

## Commands

```bash
# Development (watch mode with hot rebuild)
pnpm run dev

# Production build (cleans dist/ first)
pnpm run build

# Run all tests
pnpm run test

# Run a single test file
pnpm run test -- --testPathPattern="button"

# Run tests with coverage
pnpm run test:coverage

# Lint
pnpm run lint

# Storybook (builds first, then serves on port 6006)
pnpm run storybook

# Build Storybook static site
pnpm run build-storybook

# Versioning (uses changesets)
pnpm run changesets
pnpm run version
```

## Architecture

### Component Structure

Each component lives in `src/components/<name>/` with this pattern:

| File | Purpose |
|------|---------|
| `index.ts` | Public re-export |
| `<name>.tsx` | Main component implementation |
| `styles.ts` | StyleX styles (`$create(...)`) |
| `hooks.ts` (or `hooks/`) | Component-specific hooks |
| `context.ts` | React context and BEM class name constants |
| `__test__/` | Jest tests with snapshots |

All component prop types are defined separately in `src/types/<name>.ts`.

### Styling System (StyleX)

- Styles are created with `$create({...})` and applied via `$props(...)` which returns `{ className, style }` objects.
- Class name strings are combined using `stringify()` from `@aiszlab/relax/class-name`.
- The `useClassNames` hook prefixes BEM class names with the configurable prefix (default `"musae"`), producing names like `musae-button`.
- Tokens (spacing, sizing, positions, opacity) are defined in `src/components/theme/tokens.stylex.ts`.
- **Must use token values for all StyleX styles.** Never hardcode pixel values, percentages, or other CSS dimension values directly — always reference the corresponding token from `tokens.stylex.ts` (e.g., `sizes.small` instead of `"28px"`, `sizes.full` instead of `"100%"`).
- StyleX CSS is extracted at build time by the Rollup plugin. In dev/test, the Babel plugin handles it.

### Theme System

- **Material Design 3** color system: a `Palette` (tone scale 0–100 per color) is mapped to semantic `ColorRole`s (e.g., `primary`, `on-primary-container`, `surface-container`) via `toColorRoles()` in `src/utils/color-role.ts`.
- `ThemeProvider` wraps children with a merged theme context (user theme merged into the default palette).
- Light/dark mode toggle uses the **View Transition API** with a circular reveal animation.
- Components access theme via `useTheme()` hook which returns `{ colors, mode, toggle }`.
- Theme color CSS variables are consumed via `useThemeColorVars()` hook.

### ConfigProvider & Locale

- `ConfigProvider` sets up: notification holder ref, class name prefix, and locale context.
- Locale system in `src/locale/`: `LocaleContext` provides translations. Components call `useLocale(componentName)` to get localized strings. Currently supports `zh_CN` (default) and `en_US`.
- The default locale is merged with any user-provided overrides using `merge()` from `@aiszlab/relax`.

### Form System (RxJS-based)

The form system in `src/utils/form.ts` uses a `Form<T>` class that internally manages state with a `BehaviorSubject`:

- Fields **register** with the form, receiving state updates via Observable subscription.
- `Form.change()` triggers both value update and validation.
- `Form.validate()` runs all registered field rules concurrently with `Promise.race`.
- Public API: `useForm()`, `Form.Item`, `Form.List`, `Form.useWatch()`, `Form.useFormContext()`.
- Supports both controlled (`value`/`onChange`) and uncontrolled (`defaultValue`) modes.

### Popover/Popper Architecture

Layered positioning system:
- **`Popper`** — base layer: renders children in a `<Portal>`, delegates positioning to `Dropdown`.
- **`Dropdown`** — uses `@floating-ui/dom` hooks for positioning logic.
- **`Popover`** — higher-level component built on `Popper` with trigger, content, and interaction management.
- **`Tooltip`**, **`Picker`** (select/cascader dropdown), **`Drawer`** (side panel) — all built on this popper foundation.

### Imperative APIs

`Message` and `Notification` expose static methods for imperative use:
```ts
Message.info({ content: "Hello" });
Notification.open({ content: "Saved", type: "success" });
```
They use a `Holder` component rendered inside `ConfigProvider` that manages the notification stack via a ref.

### StackLevelContext

Located in `src/contexts/stack-level.context.ts`, this context provides z-index stacking for nested overlay components (drawers, pickers) to ensure correct layering.

### Key External Libraries

| Library | Role |
|---------|------|
| `@stylexjs/stylex` | CSS-in-JS styling (`$create`, `$props`) |
| `@aiszlab/relax` | Internal utility library — `merge` (deep merge), `useEvent`, `useDefault`, `useMounted`, `stringify`/`normalize` (class names), `toArray`, `at`, `contains`, `isFunction` |
| `@aiszlab/fuzzy` | Fuzzy search and color utilities (`hexToRgba`) |
| `@floating-ui/dom` | Positioning for popovers, tooltips, dropdowns |
| `motion` (formerly framer-motion) | Animations (`animate()`) |
| `rxjs` | Reactive state (Form, Theme mode switching) |
| `@tanstack/react-table` | Headless table for the `Table` component |
| `lexical` | Rich text editor framework for `RichTextEditor` |
| `dayjs` | Date manipulation |

### Build Output

Rollup produces dual-format output (`.mjs` ESM + `.cjs` CJS) with `preserveModules: true`. Multiple entry points:
- `musae` — main component exports
- `musae/styles.css` — extracted StyleX CSS
- `musae/locales` — locale strings
- `musae/icons` — icon components (also by category: `musae/icons/action`, etc.)
- `musae/rich-text-editor` — rich text editor standalone
- `musae/types/*` — TypeScript type declarations

All `dependencies` and `peerDependencies` are externalized (not bundled) via RegExp matching.

### Icon System

Icons are organized by category in `src/components/icon/icons/<category>/`. Each icon is its own component. The Rollup config creates separate entry points per category for tree-shakeable imports.

## Testing

- **Jest** with `jsdom` environment, `babel-jest` transform.
- Transform ignore pattern allows `@aiszlab/relax` to be transformed (it's shipped as ESM).
- Tests are co-located in `__test__/` directories within component folders.
- Use `@testing-library/react` for component tests.
