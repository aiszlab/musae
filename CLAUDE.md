# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Global Constraints

- **Never auto-commit.** Always ask for explicit confirmation before running `git commit`, `git merge`, or any other git command that modifies the repository history. Staging (`git add`) is fine without confirmation, but committing is not.
- **Run prettier after tasks.** After completing any task that modifies source files, run `npx prettier --write .` to ensure code formatting is consistent before considering the task done. Prettier config is in `package.json` (singleQuote: false, printWidth: 100, trailingComma: "all").
- **JSDoc comments.** All JSDoc comments on component props and types use `@description`:
  ```ts
  /**
   * @description
   * variant
   * @default "filled"
   */
  variant?: Variant;
  ```
  For props that need bilingual descriptions (e.g., callbacks with Chinese + English documentation), use `@zh` and `@en`:
  ```ts
  /**
   * @zh 修改`activeKey`时触发的回调函数
   * @en Callback function triggered when `activeKey` changes
   */
  onChange?: (key: Key) => void;
  ```
- **Storybook comments exception.** Storybook story files (`stories/*.stories.ts`) do NOT need `@zh`/`@en` JSDoc comments. Use `/** */` block comments with plain single-language text instead.

## Project Overview

`musae` is a React UI component library (~75 components) built on Material Design 3 principles. It uses **StyleX** (Meta's CSS-in-JS) for styling, **Rollup** for bundling, and **RxJS** for internal reactive state management. Requires Node >=22 and pnpm >=10.

Design specs and implementation plans are tracked in `docs/superpowers/specs/` and `docs/superpowers/plans/`.

CI publishes to npm on GitHub release via `.github/workflows/npm-publish.yml`.

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

# Format code
npx prettier --write .
```

## Architecture

### Component Structure

Each component lives in `src/components/<name>/` with this pattern:

| File                     | Purpose                                    |
| ------------------------ | ------------------------------------------ |
| `index.ts`               | Public re-export                           |
| `<name>.tsx`             | Main component implementation              |
| `styles.ts`              | StyleX styles (`$create(...)`)             |
| `hooks.ts` (or `hooks/`) | Component-specific hooks                   |
| `context.ts`             | React context and BEM class name constants |
| `__test__/`              | Jest tests with snapshots                  |

All component prop types are defined separately in `src/types/<name>.ts`. Every component props interface extends `ComponentProps` from `src/types/element.ts`, which provides `className?: string` and `style?: CSSProperties`.

`src/env.d.ts` augments React's `CSSProperties` to allow CSS custom properties (`--${string}`).

**Storybook stories import from `dist/`**, not `src/`. After source changes, run a build before starting Storybook to see the latest code reflected. Storybook uses `@storybook/react-vite` v10.

Some component directories are internal/sub-components not exported from the main entry point (e.g., `button-group`, `button-toggle`, `category-picker`, `kbd`, `popper`, `portal`, `ripple`, `sheet`, `slider`, `guideline`). Check `src/index.ts` for the public API surface.

### Styling System (StyleX)

- Styles are created with `$create({...})` and applied via `$props(...)` which returns `{ className, style }` objects.
- Class name strings are combined using `stringify()` from `@aiszlab/relax/class-name`.
- The `useClassNames` hook (from `src/hooks/use-class-names.ts`) prefixes BEM class names with the configurable prefix (default `"musae"`), producing names like `musae-button`.
- StyleX generates CSS class names with the prefix `musaex-` (configured in `rollup.config.js`).
- CSS Layers are enabled (`useCSSLayers: true`) for style isolation.
- Tokens are defined in `src/components/theme/tokens.stylex.ts` via `defineVars`. Includes: `spacing` (named scale from `none` to `xxxxxlarge`), `sizes` (component dimensions: `small=28px`, `medium=32px`, `large=36px`, plus `full`, `half`, `auto`), `elevations` (M3 shadow levels 0–4), `tracking` (letter-spacing), `positions` (z-index scale: popper=60, dialog/drawer/tour/overlay=1080, notification=1200, max=9999), `duration` (0.1s–1s), and `breakpoints` (single `mobile` breakpoint: `@media (max-width: 904px)`). A plain `OPACITY` const object holds opacity stops (`thin: 0.08`, `medium: 0.12`, `thick: 0.16`, etc.) used by `useThemeColorVars`.
- **Must use token values for all StyleX styles.** Never hardcode pixel values, percentages, or other CSS dimension values directly — always reference the corresponding token from `tokens.stylex.ts` (e.g., `sizes.small` instead of `"28px"`, `sizes.full` instead of `"100%"`).
- **StyleX styles must live in `styles.ts`.** Each logical group gets its own `$create` call assembled into a `styles` object. Every group's base style is named `default`, variants named by condition — never use compound flat names. (Note: older components may define styles inline in the `.tsx` file; new components should follow the `styles.ts` pattern as seen in `button/styles.ts`.)
- **Theme colors reach the DOM through inline `style` props**, NOT through StyleX directly. `useThemeColorVars()` returns CSS custom property key-value pairs (e.g., `--color-primary`, `--color-primary-opacity-08`) that are spread onto the element's `style` prop. StyleX styles then reference these via `var(--color-primary)`. Never hardcode color values — always use this CSS variable bridge.

**Babel config** (`babel.config.cjs`) handles StyleX transformation differently per environment:

- **test**: `api.cache.never()` + StyleX plugin with `test: true`
- **development**: StyleX plugin with `dev: true` (injects debug class names)
- **production**: StyleX plugin is disabled — Rollup's `@stylexjs/rollup-plugin` handles extraction instead, outputting extracted CSS to `dist/styles.css`

### Theme System

- **Material Design 3** color system: a `Palette` (tone scale 0–100 per color: primary, secondary, tertiary, error, neutral, neutralVariant, success, warning) is mapped to semantic `ColorRole`s (e.g., `primary`, `on-primary-container`, `surface-container`) via `toColorRoles()` in `src/utils/color-role.ts`.
- `ThemeProvider` wraps children with a merged theme context (user theme merged into the default palette).
- Light/dark mode toggle uses the **View Transition API** with a circular reveal animation.
- Components access theme via `useTheme()` hook which returns `{ colors, mode, toggle }`.
- Theme color CSS variables are consumed via `useThemeColorVars()` hook from `src/hooks/use-theme-color-vars.ts`.
- Typography tokens are defined in `src/components/theme/theme.ts` as StyleX styles: `$display` (small/medium/large), `$headline` (small/medium/large), `$title` (small/medium/large), `$body` (small/medium/large), `$label` (small/medium/large).

### ConfigProvider & Locale

- `ConfigProvider` (in `src/components/config/`) sets up: notification holder ref, class name prefix, and locale context. Access via `useConfiguration()` hook.
- Locale system in `src/locale/`: `LocaleContext` provides translations (default context value is `en_US`). Components call `useLocale(componentName)` to get a `[strings, localeCode]` tuple. Locale values can be functions (e.g., pagination size label).
- Currently supports `zh_CN` and `en_US`. Locale files are in `src/locale/locales/`. `DEFAULT_LOCALE` = `zh_CN`.
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

- **`Popper`** — base layer: renders children in a `<Portal>`, delegates positioning logic.
- **`Popover`** — higher-level component built on `Popper` with trigger, content, and interaction management.
- **`Tooltip`**, **`Picker`** (select/cascader dropdown), **`SideSheet`** — all built on this popper foundation using `@floating-ui/dom` for positioning.

### Imperative APIs

`Message` and `Notification` expose static methods for imperative use:

```ts
Message.info({ content: "Hello" });
Notification.open({ content: "Saved", type: "success" });
```

Architecture: `Message` → `Notification` → `Notifier` (singleton) → `Holder` (ref-managed). The `Notifier` singleton lazily creates a `createRoot(document.createDocumentFragment())` fallback if no `ConfigProvider` holder exists, so these APIs work with zero setup. Both `Message` and `Notification` use `Object.assign(baseComponent, { open, info, error, ... })` to attach static methods — the same pattern `Form` uses to attach `Form.Item`, `Form.List`, `Form.useWatch`, and `Form.useFormContext`.

### StackLevelContext

Located in `src/contexts/stack-level.context.ts`, this context provides z-index stacking for nested overlay components (side sheets, pickers) to ensure correct layering.

### Recurring Patterns

- **Controlled/uncontrolled bridge**: `useControlledState` from `@aiszlab/relax` bridges `value`/`onChange` (controlled) and `defaultValue` (uncontrolled) props. Used by virtually every interactive component.
- **Generic components**: `const Component = <T,>(props: Props<T>) => ...` — used by Select, Table, Form, and others typed over value types.
- **Trigger/cloneElement**: Popover injects interaction handlers by cloning the trigger child with `cloneElement(child, { ref: mergedRef, onMouseEnter: chained, ... })`. Requires the trigger be a single element (`isValidElement` check).
- **Portal exit pattern**: Dialogs and overlays keep the Portal mounted during exit animations by passing `open || _isVisible` and using `onClosed={turnOff}` so the DOM is preserved until the animation completes.
- **Native attribute picking**: Components pick specific native HTML attributes via `Pick<...HTMLAttributes<...>, "type" | "onFocus" | ...>` rather than spreading all native props.
- **`context.ts` convention**: Each component's `context.ts` exports a React context AND a `CLASS_NAMES` const of unprefixed BEM names. The `useClassNames(CLASS_NAMES)` hook prefixes them via `ConfigProvider`'s `prefix` (default `"musae"`), producing names like `musae-button__icon`. Class strings are combined with `stringify(...)` from `@aiszlab/relax/class-name`.
- **`Object.assign` statics**: `Form`, `Message`, and `Notification` are built as `Object.assign(baseComponent, { staticMethod, ... })` to attach static methods to the component export. Follow this pattern when a component needs both render behavior and static API methods.

### Shared Hooks

Located in `src/hooks/`:

| Hook                | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| `useClassNames`     | Prefixes BEM class names with configurable prefix  |
| `useClosable`       | Manages open/close state with `Closable` interface |
| `useContainer`      | Gets the container element for portals             |
| `useExpandable`     | Manages expand/collapse state                      |
| `useGutters`        | Computes gutter/spacing values                     |
| `useLazyBoolean`    | Lazily initializes boolean state                   |
| `useResizeObserver` | Observes element resize with `ResizeObserver`      |
| `useThemeColorVars` | Consumes theme color CSS custom properties         |

### Key External Libraries

| Library                           | Role                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@stylexjs/stylex`                | CSS-in-JS styling (`$create`, `$props`)                                                                                                                                                                                                                                                                                                           |
| `@aiszlab/relax`                  | Internal utility library — `merge` (deep merge), `useEvent` (stable handler refs), `useDefault`, `useMounted`, `useControlledState` (controlled/uncontrolled bridge), `useBoolean`, `useTimer`, `useComposedRef`, `useScrollLocker`, `chain`, `mountRef`, `replaceAt`, `stringify`/`normalize` (class names), `toArray`, `contains`, `isFunction` |
| `@aiszlab/fuzzy`                  | Fuzzy search and color utilities (`hexToRgba`)                                                                                                                                                                                                                                                                                                    |
| `@floating-ui/dom`                | Positioning for popovers, tooltips, dropdowns                                                                                                                                                                                                                                                                                                     |
| `motion` (formerly framer-motion) | Animations (`animate()`)                                                                                                                                                                                                                                                                                                                          |
| `rxjs`                            | Reactive state (Form, Theme mode switching)                                                                                                                                                                                                                                                                                                       |
| `@tanstack/react-table`           | Headless table for the `Table` component                                                                                                                                                                                                                                                                                                          |
| `lexical`                         | Rich text editor framework for `RichTextEditor`                                                                                                                                                                                                                                                                                                   |
| `dayjs`                           | Date manipulation                                                                                                                                                                                                                                                                                                                                 |

### Build Output

Rollup produces dual-format output (`.mjs` ESM + `.cjs` CJS) with `preserveModules: true` for tree-shaking. The `package.json` `exports` field maps multiple entry points:

- `musae` — main component exports
- `musae/styles.css` — extracted StyleX CSS
- `musae/locales` — locale strings
- `musae/icons` — icon components (also by category: `musae/icons/action`, etc.)
- `musae/rich-text-editor` — rich text editor standalone
- `musae/types/*` — TypeScript type declarations

All `dependencies` and `peerDependencies` are externalized (not bundled) via RegExp matching in the Rollup config.

### Icon System

Icons are organized by category in `src/components/icon/icons/<category>/` (action, alert, av, communication, content, device, editor, file, hardware, home, image, maps, mock, navigation, notification, places, search, social, toggle). Each icon is its own component. The Rollup config creates separate entry points per category for tree-shakeable imports.

## Testing

- **Jest** (v30) with `jsdom` environment, `babel-jest` transform.
- Transform ignore pattern allows `@aiszlab/relax` to be transformed (it's shipped as ESM).
- Tests are co-located in `__test__/` directories within component folders.
- Use `@testing-library/react` for component tests.
- Snapshot testing is used for StyleX style output.

## TypeScript

- Target: `esnext`, module: `preserve`, moduleResolution: `bundler`.
- `emitDeclarationOnly: true` — declarations are emitted to `dist/`.
- Strict mode enabled, skipLibCheck enabled.
