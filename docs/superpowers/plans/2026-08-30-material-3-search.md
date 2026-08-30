# Material 3 Search Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Figma-faithful Material 3 Search that composes `Input`, opens a responsive modal or full-screen Search View on focus, and supports accessible structured results.

**Architecture:** Keep one public `Search` orchestrator and split private Search Bar, Search View, and result-list rendering into focused files. `Input` owns the filled/pill input surface; `Search` owns open/value coordination, responsive view selection, focus transfer, overlay layout, and result selection.

**Tech Stack:** React 19, TypeScript, StyleX, `@aiszlab/relax`, Jest/jsdom, Testing Library, Storybook, Rollup

**Spec:** `docs/superpowers/specs/2026-08-30-material-3-search-design.md`

## Global Constraints

- Preserve all pre-existing staged and unstaged user changes, especially the staged Input label work and package version change.
- Never run `git commit`, `git merge`, or another history-modifying command without explicit user confirmation. Every commit step below is conditional on that confirmation.
- Keep the existing public `Variant = "outlined" | "filled" | "standard"`; do not remove or narrow `standard`.
- Default Input behavior remains outlined and standard-shaped. Only `filled` receives the new Search surface treatment; `standard` remains behavior-compatible with the current worktree.
- Every new or edited JSDoc block must use paired `@zh` and `@en` lines and must not use `@description`.
- Storybook story files use ordinary single-language `/** */` comments and do not require bilingual JSDoc.
- Before writing generic predicates or state/event helpers, check `@aiszlab/relax`; use its APIs such as `isFunction` and `isUndefined` instead of handwritten equivalents.
- Every StyleX dimension must come from `src/components/theme/tokens.stylex.ts`; add a named token there when an exact Figma dimension is missing.
- Follow strict red-green-refactor: write one behavioral test, run it and observe the expected failure, then write the minimum production code.
- After each source-editing task, format only touched files with `pnpm exec prettier --write ...`; the repository currently has no `prettier` package script.
- Use the existing project icons (`IconSearch`, `IconArrowBack`, `IconClose`) because their glyphs match the Figma assets; do not add temporary remote Figma assets.

## File structure

- Modify `src/types/input.ts`: document the existing variant API bilingually and add `InputShape`/`shape`.
- Modify `src/components/input/input.tsx`: consume `variant`/`shape`, apply filled theme variables, and omit the notched outline only for filled Input.
- Modify `src/components/input/styles.stylex.ts`: define filled surface states and pill shape.
- Create `src/components/input/__test__/input-appearance.test.tsx`: cover observable filled/pill/default behavior.
- Modify `stories/input.stories.ts`: add filled and filled-pill examples without overwriting staged label stories.
- Modify `src/components/theme/tokens.stylex.ts`: export the JS mobile query and missing Search View size tokens.
- Modify `src/types/search.ts`: define Search View, item, selection, slot, and open-state APIs.
- Modify `src/components/search/context.ts`: add BEM names for view, overlay, panel, results, and options.
- Create `src/components/search/hooks.ts`: resolve responsive view mode and calculate enabled-option navigation.
- Create `src/components/search/bar.tsx`: render the collapsed Input and its actions.
- Create `src/components/search/view.tsx`: render Portal, modal/full-screen shell, expanded Input, and dismissal controls.
- Create `src/components/search/result-list.tsx`: render semantic default/custom options.
- Modify `src/components/search/search.tsx`: orchestrate controlled state, focus, keyboard input, and selection.
- Modify `src/components/search/styles.ts`: map all Figma layout and state styles to tokens.
- Modify `src/components/search/index.tsx`: export Search public types.
- Modify `src/components/search/__test__/search.test.tsx`: replace outline-coupled assertions and cover the complete interaction.
- Update `src/components/search/__test__/__snapshots__/search.test.tsx.snap`: accept only reviewed structural snapshots.
- Modify `stories/search.stories.ts`: demonstrate responsive views, results, slots, and controlled state.

---

### Task 1: Implement Input filled and pill appearances

**Files:**

- Modify: `src/types/input.ts`
- Modify: `src/components/input/input.tsx`
- Modify: `src/components/input/styles.stylex.ts`
- Create: `src/components/input/__test__/input-appearance.test.tsx`
- Modify: `stories/input.stories.ts`

**Interfaces:**

- Consumes: existing `Variant = "outlined" | "filled" | "standard"`, `InputProps`, `InputRef`, `useThemeColorVars`, `styles.root`, and `textFieldMarker`.
- Produces: `InputShape = "standard" | "pill"`; `InputProps.shape?: InputShape`; functional `variant="filled"`; stable `styles__root.filled` and `styles__root.pill` classes consumed by Search tests.

- [ ] **Step 1: Write a failing test that names the style-conflict regression**

Create `input-appearance.test.tsx` with real Input rendering:

```tsx
import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Input } from "..";

describe("Input appearances", () => {
  test("filled pill owns its surface without rendering the notched outline", () => {
    const { container } = render(<Input variant="filled" shape="pill" placeholder="Search" />);
    const shell = container.querySelector(".musae-input__inputor");

    expect(shell).toHaveClass("styles__root.filled", "styles__root.pill");
    expect(container.querySelector(".musae-notched-outline")).not.toBeInTheDocument();
    expect(shell).toHaveStyle("background-color: var(--color-surface-container-high)");
  });

  test("default and standard Input retain the current outlined structure", () => {
    const { container, rerender } = render(<Input label="Name" />);
    expect(container.querySelector(".musae-notched-outline")).toBeInTheDocument();

    rerender(<Input variant="standard" label="Name" />);
    expect(container.querySelector(".musae-notched-outline")).toBeInTheDocument();
  });
});
```

Production mutation caught: rendering the notched outline for filled inputs or failing to apply the filled/pill surface makes the first test fail; accidentally changing default/standard rendering makes the second fail.

- [ ] **Step 2: Run the focused test and verify RED**

Run:

```bash
pnpm run test -- --runInBand src/components/input/__test__/input-appearance.test.tsx
```

Expected: TypeScript/Babel or assertion failure because `shape`, filled rendering, and filled/pill styles are not implemented.

- [ ] **Step 3: Add the typed appearance API and bilingual JSDoc**

In `src/types/input.ts`, retain `Variant` and add:

```ts
/**
 * @zh 输入框形状
 * @en Input shape
 */
export type InputShape = "standard" | "pill";

// Inside InputProps:
/**
 * @zh 输入框形状
 * @en Shape of the input shell
 * @default "standard"
 */
shape?: InputShape;
```

Convert the JSDoc blocks touched in `InputProps` from `@description` to paired `@zh`/`@en`. Remove the unused staged `label` import from `motion/react-client`; preserve the `label` prop, generated id, and staged label behavior.

- [ ] **Step 4: Implement the minimum filled/pill Input branch**

Destructure defaults in `input.tsx`:

```tsx
variant = "outlined",
shape = "standard",
```

Use `const hasNotchedOutline = variant !== "filled";`, add filled theme variables, and compose styles:

```tsx
const themeColorVars = useThemeColorVars([
  "primary",
  "outline",
  "error",
  "surface-container-high",
  "on-surface-variant",
  ["on-surface", OPACITY.thickest],
  ["on-surface", OPACITY.medium],
  ["on-surface", OPACITY.thin],
]);

root: $props(
  $body.medium,
  styles.root.base,
  variant === "filled" && styles.root.filled,
  shape === "pill" && styles.root.pill,
  invalid && styles.root.invalid,
  disabled && styles.root.disabled,
  !disabled && textFieldMarker,
),
```

Wrap the existing outline JSX without changing its staged label internals:

```tsx
{hasNotchedOutline && (
  <div className={stringify(classNames.outline, styled.outline.className)} ...>
    {/* existing leading, notch/label, and trailing nodes */}
  </div>
)}
```

Add the StyleX branches using existing variables and tokens:

```ts
filled: {
  backgroundColor: "var(--color-surface-container-high)" satisfies ThemeColorVariable,
  boxShadow: "none",
  paddingBlock: spacing.xxxxxsmall,
  paddingInline: spacing.xxxxxsmall,
  ":hover": {
    "@media (hover: hover)": {
      backgroundColor:
        `color-mix(in srgb, var(--color-on-surface) ${OPACITY.thin * 100}%, var(--color-surface-container-high))`,
    },
  },
  ":active": {
    backgroundColor:
      `color-mix(in srgb, var(--color-on-surface) ${OPACITY.medium * 100}%, var(--color-surface-container-high))`,
  },
},
pill: {
  borderRadius: sizes.infinity,
},
```

Add a separate `filledDisabled` style and compose it only when `variant === "filled" && disabled`;
use `var(--color-on-surface-opacity-12)` as its surface and retain the existing disabled
text/placeholder color. Keep `variant="standard"` on the existing outlined code path.

- [ ] **Step 5: Run Input tests and verify GREEN**

Run:

```bash
pnpm run test -- --runInBand src/components/input/__test__/input-appearance.test.tsx src/components/input/__test__/style-consumers.test.tsx
```

Expected: both suites PASS, including staged label and Picker consumer behavior.

- [ ] **Step 6: Add non-regression stories and format touched files**

Append without replacing the staged label stories:

```ts
/** Filled input */
export const Filled: Story = { args: { variant: "filled", placeholder: "Search" } };

/** Filled pill input */
export const FilledPill: Story = {
  args: { variant: "filled", shape: "pill", placeholder: "Search" },
};
```

Run:

```bash
pnpm exec prettier --write src/types/input.ts src/components/input/input.tsx src/components/input/styles.stylex.ts src/components/input/__test__/input-appearance.test.tsx stories/input.stories.ts
```

- [ ] **Step 7: Commit only after explicit approval**

Proposed commands, not authorized by this plan alone:

```bash
git add src/types/input.ts src/components/input/input.tsx src/components/input/styles.stylex.ts src/components/input/__test__/input-appearance.test.tsx stories/input.stories.ts
git commit -m "feat(input): add filled pill appearance"
```

---

### Task 2: Add Search types and responsive view resolution

**Files:**

- Modify: `src/components/theme/tokens.stylex.ts`
- Modify: `src/types/search.ts`
- Create: `src/components/search/hooks.ts`
- Create: `src/components/search/__test__/hooks.test.tsx`

**Interfaces:**

- Consumes: existing `breakpoints.mobile`, React `useSyncExternalStore`, `SearchProps`, and `ComponentProps`.
- Produces: `SearchView`, `ResolvedSearchView`, `SearchItem`, expanded `SearchProps`, `mediaQueries.mobile`, `searchViewSizes`, `useResolvedSearchView(view)`, and `getAdjacentEnabledKey(items, activeKey, direction)`.

- [ ] **Step 1: Write the failing responsive resolver test**

Create a complete `matchMedia` double and test the real hook:

```tsx
import { act, renderHook } from "@testing-library/react";
import { useResolvedSearchView } from "../hooks";

test("auto Search View follows the mobile media query and explicit views bypass it", () => {
  let matches = false;
  const listeners = new Set<() => void>();
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: jest.fn(() => ({
      matches,
      media: "(max-width: 904px)",
      onchange: null,
      addEventListener: (_type: string, listener: () => void) => listeners.add(listener),
      removeEventListener: (_type: string, listener: () => void) => listeners.delete(listener),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  const { result, rerender } = renderHook(
    ({ view }: { view: SearchView }) => useResolvedSearchView(view),
    {
      initialProps: { view: "auto" as SearchView },
    },
  );
  expect(result.current).toBe("modal");

  act(() => {
    matches = true;
    listeners.forEach((listener) => listener());
  });
  expect(result.current).toBe("full-screen");

  rerender({ view: "modal" });
  expect(result.current).toBe("modal");
});
```

Production mutation caught: a hard-coded modal view, wrong threshold, or missing media change subscription fails.

- [ ] **Step 2: Run the hook test and verify RED**

```bash
pnpm run test -- --runInBand src/components/search/__test__/hooks.test.tsx
```

Expected: FAIL because `hooks.ts` and the public view types do not exist.

- [ ] **Step 3: Add exact design tokens and public types**

In `tokens.stylex.ts`, split the existing query into a reusable JS/CSS pair and add only missing component dimensions:

```ts
/**
 * @zh 响应式媒体查询
 * @en Responsive media queries
 */
export const mediaQueries = { mobile: "(max-width: 904px)" } as const;

export const breakpoints = {
  mobile: `@media ${mediaQueries.mobile}`,
};

/**
 * @zh Material 3 Search View 尺寸
 * @en Material 3 Search View dimensions
 */
export const searchViewSizes = defineVars({
  minWidth: "360px",
  maxWidth: "720px",
  minHeight: "240px",
  fullScreenHeaderHeight: "72px",
  resultItemHeight: "72px",
});
```

In `src/types/search.ts`, import `Key` and define the approved API with bilingual JSDoc:

```ts
export type SearchView = "auto" | "modal" | "full-screen";
export type ResolvedSearchView = Exclude<SearchView, "auto">;

export type SearchItem = {
  key: Key;
  value: string;
  label: ReactNode;
  supportingText?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
  disabled?: boolean;
};
```

Add `view`, `open`, `defaultOpen`, `onOpenChange`, `items`, `renderItem`, `onSelect`, `closeOnSelect`, `leading`, and `trailing` exactly as approved in the spec.

- [ ] **Step 4: Implement the responsive hook and navigation helper**

Use a stable external-store subscription so viewport changes update an open view:

```ts
const subscribeToMobile = (listener: () => void) => {
  const media = window.matchMedia(mediaQueries.mobile);
  media.addEventListener("change", listener);
  return () => media.removeEventListener("change", listener);
};

const getMobileSnapshot = () => window.matchMedia(mediaQueries.mobile).matches;
const getServerMobileSnapshot = () => false;

export const useResolvedSearchView = (view: SearchView): ResolvedSearchView => {
  const isMobile = useSyncExternalStore(
    subscribeToMobile,
    getMobileSnapshot,
    getServerMobileSnapshot,
  );
  return view === "auto" ? (isMobile ? "full-screen" : "modal") : view;
};
```

Also define `getAdjacentEnabledKey(items, activeKey, direction)` as a pure wrap-around helper that filters disabled items, returns `undefined` for no enabled items, and never mutates `items`. Use `isUndefined` from `@aiszlab/relax` for absent keys.

- [ ] **Step 5: Verify GREEN and format**

```bash
pnpm run test -- --runInBand src/components/search/__test__/hooks.test.tsx
pnpm exec prettier --write src/components/theme/tokens.stylex.ts src/types/search.ts src/components/search/hooks.ts src/components/search/__test__/hooks.test.tsx
```

Expected: hook tests PASS.

- [ ] **Step 6: Commit only after explicit approval**

```bash
git add src/components/theme/tokens.stylex.ts src/types/search.ts src/components/search/hooks.ts src/components/search/__test__/hooks.test.tsx
git commit -m "feat(search): add responsive view contracts"
```

---

### Task 3: Rebuild the collapsed Search Bar from filled Input

**Files:**

- Create: `src/components/search/bar.tsx`
- Modify: `src/components/search/search.tsx`
- Modify: `src/components/search/styles.ts`
- Modify: `src/components/search/context.ts`
- Modify: `src/components/search/__test__/search.test.tsx`

**Interfaces:**

- Consumes: `Input variant="filled" shape="pill"`, existing Search value/clear/search props, `InputRef`, `IconSearch`, `IconClose`, and `Button`.
- Produces: private `SearchBarProps`, a Search Bar with default and custom slots, and the collapsed half of the Search orchestrator.

- [ ] **Step 1: Replace outline-coupled Search assertions with a failing composition test**

Retain existing value/search/clear tests, remove tests that assert disabled notched-outline internals, and add:

```tsx
test("composes the Search Bar from a filled pill Input without a notched outline", () => {
  const { container } = render(<Search placeholder="Search" />);
  const inputShell = container.querySelector(".musae-input__inputor");

  expect(inputShell).toHaveClass("styles__root.filled", "styles__root.pill");
  expect(container.querySelector(".musae-notched-outline")).not.toBeInTheDocument();
  expect(container.querySelector(".musae-search-leading")).toBeInTheDocument();
});

test("renders consumer leading and trailing slots while preserving the clear action", () => {
  const { getByText, getByRole } = render(
    <Search defaultValue="query" leading={<span>Menu</span>} trailing={<span>Avatar</span>} />,
  );
  expect(getByText("Menu")).toBeInTheDocument();
  expect(getByText("Avatar")).toBeInTheDocument();
  expect(getByRole("button", { name: "Clear search" })).toBeInTheDocument();
});
```

Production mutation caught: returning to CSS overrides on outlined Input or dropping either slot fails.

- [ ] **Step 2: Run Search tests and verify RED**

```bash
pnpm run test -- --runInBand src/components/search/__test__/search.test.tsx
```

Expected: new composition/slot tests FAIL against the current outlined Search.

- [ ] **Step 3: Extract a private Search Bar**

Create `bar.tsx` with this concrete contract:

```ts
export type SearchBarProps = Pick<
  SearchProps,
  "clearable" | "disabled" | "leading" | "placeholder" | "searchButton" | "trailing"
> & {
  inputRef: Ref<InputRef>;
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onFocus: FocusEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  onSearch: () => void;
};
```

Render one `Input` and put all Search-owned elements into its slots:

```tsx
<Input
  ref={inputRef}
  variant="filled"
  shape="pill"
  value={value}
  placeholder={placeholder}
  disabled={disabled}
  onChange={onChange}
  onFocus={onFocus}
  onKeyDown={onKeyDown}
  leading={<span className={...}>{leading ?? <IconSearch size={24} />}</span>}
  trailing={<span className={...}>{clearAction}{trailing}{searchButtonAction}</span>}
/>
```

Keep the existing accessible clear label and `Button`-backed `searchButton` callback.

- [ ] **Step 4: Simplify Search orchestration to use SearchBar without changing existing callbacks**

Replace the current wrapper-level Input/leading/clear/search-button JSX with `<SearchBar />`. Preserve controlled value, `onChange`, Enter-to-search, Escape-to-clear while collapsed, disabled behavior, and `SearchRef` methods. Keep `className` and `style` on the public Search root, not the internal Input.

- [ ] **Step 5: Map collapsed Figma layout to StyleX tokens**

Update Search styles so the public root only controls width/position, while Input controls the surface. Define 48px action targets with `sizes.xxxlarge`, 24px icons with existing icon props, 4px gap/padding with `spacing.xxxxxsmall`, and body-large typography. Remove Search's outline box-shadow and background rules entirely.

- [ ] **Step 6: Verify GREEN and format**

```bash
pnpm run test -- --runInBand src/components/search/__test__/search.test.tsx src/components/input/__test__/input-appearance.test.tsx
pnpm exec prettier --write src/components/search/bar.tsx src/components/search/search.tsx src/components/search/styles.ts src/components/search/context.ts src/components/search/__test__/search.test.tsx
```

Expected: all pre-existing Search behavior and new composition tests PASS.

- [ ] **Step 7: Commit only after explicit approval**

```bash
git add src/components/search/bar.tsx src/components/search/search.tsx src/components/search/styles.ts src/components/search/context.ts src/components/search/__test__/search.test.tsx
git commit -m "refactor(search): compose search bar from input"
```

---

### Task 4: Add controlled responsive Search View and focus lifecycle

**Files:**

- Create: `src/components/search/view.tsx`
- Modify: `src/types/input.ts`
- Modify: `src/components/search/search.tsx`
- Modify: `src/components/search/styles.ts`
- Modify: `src/components/search/context.ts`
- Modify: `src/components/search/__test__/search.test.tsx`

**Interfaces:**

- Consumes: `Portal`, `SearchBar`, `useResolvedSearchView`, `useControlledState`, `InputRef`, `SearchProps.open/defaultOpen/onOpenChange/view`, and matching navigation icons.
- Produces: private `SearchViewProps`; responsive modal/full-screen view; focus transfer/restore; overlay, back, and Escape dismissal.

- [ ] **Step 1: Write failing open/focus/dismiss tests**

Add behavioral tests using the real Portal:

```tsx
test("focus opens modal Search View, transfers focus, and Escape restores the bar", async () => {
  const onOpenChange = jest.fn();
  const { container } = render(<Search view="modal" onOpenChange={onOpenChange} />);
  const barInput = container.querySelector("input")!;

  fireEvent.focus(barInput);
  const dialog = await screen.findByRole("dialog", { name: "Search" });
  const viewInput = within(dialog).getByRole("combobox");
  expect(onOpenChange).toHaveBeenCalledWith(true);
  expect(viewInput).toHaveFocus();

  fireEvent.keyDown(viewInput, { key: "Escape" });
  await waitFor(() => expect(dialog).not.toBeInTheDocument());
  expect(onOpenChange).toHaveBeenLastCalledWith(false);
  expect(barInput).toHaveFocus();
});

test("controlled open emits close requests but stays visible until rerendered", () => {
  const onOpenChange = jest.fn();
  const { rerender } = render(<Search open view="modal" onOpenChange={onOpenChange} />);
  fireEvent.click(screen.getByTestId("search-view-overlay"));
  expect(onOpenChange).toHaveBeenCalledWith(false);
  expect(screen.getByRole("dialog", { name: "Search" })).toBeInTheDocument();

  rerender(<Search open={false} view="modal" onOpenChange={onOpenChange} />);
  expect(screen.queryByRole("dialog", { name: "Search" })).not.toBeInTheDocument();
});

test("explicit full-screen view has no dismissing overlay", () => {
  render(<Search defaultOpen view="full-screen" />);
  expect(screen.getByRole("dialog", { name: "Search" })).toHaveClass("styles__view.fullScreen");
  expect(screen.queryByTestId("search-view-overlay")).not.toBeInTheDocument();
});

test("imperative focus targets the visible input and disabled Search cannot open", async () => {
  const ref = createRef<SearchRef>();
  const onOpenChange = jest.fn();
  const onChange = jest.fn();
  const { container, rerender } = render(
    <Search
      ref={ref}
      defaultValue="query"
      view="modal"
      onChange={onChange}
      onOpenChange={onOpenChange}
    />,
  );
  act(() => ref.current?.focus());
  expect(
    (await screen.findByRole("dialog", { name: "Search" })).querySelector("input"),
  ).toHaveFocus();
  act(() => ref.current?.clear());
  expect(onChange).toHaveBeenCalledWith("");
  expect(ref.current?.getValue()).toBe("");

  rerender(<Search ref={ref} disabled view="modal" onOpenChange={onOpenChange} />);
  fireEvent.focus(container.querySelector("input")!);
  await waitFor(() =>
    expect(screen.queryByRole("dialog", { name: "Search" })).not.toBeInTheDocument(),
  );
});

test("auto view changes layout without losing value or focus", async () => {
  let matches = false;
  const listeners = new Set<() => void>();
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: jest.fn(() => ({
      matches,
      media: "(max-width: 904px)",
      onchange: null,
      addEventListener: (_type: string, listener: () => void) => listeners.add(listener),
      removeEventListener: (_type: string, listener: () => void) => listeners.delete(listener),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  render(<Search defaultOpen defaultValue="query" view="auto" />);
  const input = await screen.findByRole("combobox");
  expect(screen.getByRole("dialog", { name: "Search" })).toHaveClass("styles__view.modal");

  act(() => {
    matches = true;
    listeners.forEach((listener) => listener());
  });
  expect(screen.getByRole("dialog", { name: "Search" })).toHaveClass("styles__view.fullScreen");
  expect(input).toHaveValue("query");
  expect(input).toHaveFocus();
});
```

Production mutation caught: opening on click only, restoring focus before controlled close, rendering an overlay in full-screen, or failure to close on Escape breaks these tests.

- [ ] **Step 2: Run Search tests and verify RED**

```bash
pnpm run test -- --runInBand src/components/search/__test__/search.test.tsx
```

Expected: FAIL because Search View and open-state props are not rendered.

- [ ] **Step 3: Allow Input to forward combobox accessibility attributes**

Add `"role"`, `"aria-expanded"`, `"aria-controls"`, `"aria-activedescendant"`, and
`"aria-autocomplete"` to the `InputHTMLAttributes<HTMLInputElement>` keys picked by `InputProps`.
The existing `{...inputProps}` spread already forwards them to the native input. Add paired `@zh` and
`@en` JSDoc if a new explanatory block is introduced.

- [ ] **Step 4: Build the Search View shell from Portal and Input**

Create `view.tsx` with:

```ts
export type SearchViewProps = Pick<SearchProps, "clearable" | "disabled" | "placeholder"> & {
  inputRef: Ref<InputRef>;
  mode: ResolvedSearchView;
  open: boolean;
  value: string;
  activeDescendant?: string;
  listId: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onClose: () => void;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  children?: ReactNode;
};
```

Render `<Portal open={open} destroyable modal>`. For modal mode render a fixed overlay with a click handler and a centered panel. For full-screen render only the viewport panel. Both render:

```tsx
<Input
  ref={inputRef}
  variant="filled"
  shape={mode === "modal" ? "pill" : "standard"}
  role="combobox"
  aria-expanded={open}
  aria-controls={listId}
  aria-activedescendant={activeDescendant}
  value={value}
  onChange={onChange}
  onKeyDown={onKeyDown}
  leading={
    <button aria-label="Close search">
      <IconArrowBack size={24} />
    </button>
  }
  trailing={clearAction}
/>
```

The view shell uses `role="dialog"`, `aria-modal="true"`, and `aria-label="Search"`. Stop propagation inside the panel; only overlay clicks close modal mode.

- [ ] **Step 5: Orchestrate controlled open state and focus**

In `search.tsx`:

```tsx
const [isOpen, setOpen] = useControlledState(open, { defaultState: defaultOpen ?? false });
const resolvedView = useResolvedSearchView(view);
const barInputRef = useRef<InputRef>(null);
const viewInputRef = useRef<InputRef>(null);

const requestOpen = useEvent((nextOpen: boolean) => {
  if (disabled && nextOpen) return;
  if (nextOpen === isOpen) return;
  setOpen(nextOpen);
  onOpenChange?.(nextOpen);
});
```

Use an effect keyed to the effective `isOpen`: focus the view input after open mounts; restore bar focus only after effective state changes from true to false. On `disabled=true`, request close only for uncontrolled state and prevent future opening. Route collapsed focus to `requestOpen(true)` and open Escape/back/overlay actions to `requestOpen(false)`.

Update `SearchRef.focus/blur` to target `viewInputRef` while effectively open and `barInputRef`
otherwise. Keep `clear` and `getValue` driven by the shared value state so the imperative API does
not depend on which Input is mounted.

- [ ] **Step 6: Add modal/full-screen token styles**

Use `positions.dialog`, `sizes.full`, `spacing.xxxxxxlarge`, `searchViewSizes`, `surface-container-high`, and `outline` variables. Required structure:

```ts
view: $create({
  root: { position: "fixed", inset: sizes.none, zIndex: positions.dialog },
  overlay: {
    position: "absolute",
    inset: sizes.none,
    backgroundColor: "var(--color-surface-dim)",
    opacity: opacity.heavier,
  },
  modal: {
    width: sizes.full,
    minWidth: searchViewSizes.minWidth,
    maxWidth: searchViewSizes.maxWidth,
    minHeight: searchViewSizes.minHeight,
    borderRadius: sizes.small,
  },
  fullScreen: { width: sizes.full, height: sizes.full, borderRadius: sizes.none },
});
```

Use a 56px modal header (`sizes.xxxxlarge`), 72px full-screen header (`searchViewSizes.fullScreenHeaderHeight`), a 1px divider (`sizes.smallest`), and no hard-coded dimensions in Search styles.

- [ ] **Step 7: Verify GREEN and format**

```bash
pnpm run test -- --runInBand src/components/search/__test__/search.test.tsx src/components/search/__test__/hooks.test.tsx
pnpm exec prettier --write src/types/input.ts src/components/search/view.tsx src/components/search/search.tsx src/components/search/styles.ts src/components/search/context.ts src/components/search/__test__/search.test.tsx
```

Expected: responsive open, controlled close, full-screen, Escape, and focus tests PASS.

- [ ] **Step 8: Commit only after explicit approval**

```bash
git add src/types/input.ts src/components/search/view.tsx src/components/search/search.tsx src/components/search/styles.ts src/components/search/context.ts src/components/search/__test__/search.test.tsx
git commit -m "feat(search): add responsive search view"
```

---

### Task 5: Add accessible results, selection, and keyboard navigation

**Files:**

- Create: `src/components/search/result-list.tsx`
- Modify: `src/components/search/hooks.ts`
- Modify: `src/components/search/search.tsx`
- Modify: `src/components/search/view.tsx`
- Modify: `src/components/search/styles.ts`
- Modify: `src/components/search/context.ts`
- Modify: `src/components/search/__test__/hooks.test.tsx`
- Modify: `src/components/search/__test__/search.test.tsx`

**Interfaces:**

- Consumes: `SearchItem`, `renderItem`, `getAdjacentEnabledKey`, Search View `children`, and shared value/open callbacks.
- Produces: `SearchResultListProps`, listbox/option semantics, active-option state, click/keyboard selection, `closeOnSelect`, and `onSelect`.

- [ ] **Step 1: Add failing helper and integrated result tests**

Test wrap-around and disabled skipping with literal expectations:

```ts
test("navigation wraps across enabled Search items and skips disabled items", () => {
  const items = [
    { key: "a", value: "a", label: "A" },
    { key: "b", value: "b", label: "B", disabled: true },
    { key: "c", value: "c", label: "C" },
  ];
  expect(getAdjacentEnabledKey(items, undefined, 1)).toBe("a");
  expect(getAdjacentEnabledKey(items, "a", 1)).toBe("c");
  expect(getAdjacentEnabledKey(items, "c", 1)).toBe("a");
  expect(getAdjacentEnabledKey(items, "a", -1)).toBe("c");
  expect(getAdjacentEnabledKey(items, "removed", 1)).toBe("a");
});
```

Add integrated behavior:

```tsx
test("renders two-line options and selects the active result with Enter", async () => {
  const onChange = jest.fn();
  const onSelect = jest.fn();
  render(
    <Search
      defaultOpen
      view="modal"
      items={[
        { key: "alpha", value: "Alpha", label: "Alpha", supportingText: "First result" },
        { key: "disabled", value: "Disabled", label: "Disabled", disabled: true },
        { key: "beta", value: "Beta", label: "Beta", supportingText: "Second result" },
      ]}
      onChange={onChange}
      onSelect={onSelect}
    />,
  );
  const input = await screen.findByRole("combobox");
  expect(screen.getByText("First result")).toBeInTheDocument();

  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });

  expect(onChange).toHaveBeenCalledWith("Beta");
  expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ key: "beta", value: "Beta" }));
  expect(screen.queryByRole("dialog", { name: "Search" })).not.toBeInTheDocument();
});

test("custom item contents retain option semantics and closeOnSelect=false", () => {
  render(
    <Search
      defaultOpen
      view="modal"
      closeOnSelect={false}
      items={[{ key: "one", value: "One", label: "One" }]}
      renderItem={(item) => <strong>Custom {item.label}</strong>}
    />,
  );
  fireEvent.click(screen.getByRole("option", { name: "Custom One" }));
  expect(screen.getByRole("dialog", { name: "Search" })).toBeInTheDocument();
});
```

Production mutation caught: wrong navigation order, selecting disabled items, failure to write item value, dropping semantics in custom rendering, or unconditional close fails.

- [ ] **Step 2: Run result tests and verify RED**

```bash
pnpm run test -- --runInBand src/components/search/__test__/hooks.test.tsx src/components/search/__test__/search.test.tsx
```

Expected: helper/result assertions FAIL because result rendering and navigation are absent.

- [ ] **Step 3: Implement the pure enabled-item navigator**

In `hooks.ts`, build the enabled key list once per call, locate `activeKey`, wrap with modulo for `direction: 1 | -1`, and return `undefined` when no enabled item exists. Do not select an item merely because `items` changed.

- [ ] **Step 4: Implement semantic result rendering**

Create `result-list.tsx`:

```ts
export type SearchResultListProps = Pick<SearchProps, "items" | "renderItem"> & {
  id: string;
  activeKey?: Key;
  getOptionId: (key: Key) => string;
  onActiveKeyChange: (key: Key) => void;
  onSelect: (item: SearchItem) => void;
};
```

Render an always-present listbox at the design minimum height. Each enabled/disabled item is a real option wrapper with `aria-selected`, `aria-disabled`, stable id, pointer activation, and the default content:

```tsx
<div className={...}>
  {item.leading && <span className={...}>{item.leading}</span>}
  <span className={...}>
    <span className={...}>{item.label}</span>
    {item.supportingText && <span className={...}>{item.supportingText}</span>}
  </span>
  {item.trailing && <span className={...}>{item.trailing}</span>}
</div>
```

Use `isFunction(renderItem)` from `@aiszlab/relax` before invoking custom rendering. Keep the option wrapper even when content is custom.

- [ ] **Step 5: Connect active state, ARIA, keyboard, and selection in Search**

Use a stable list id and option-id function. Maintain `activeKey` in Search. Arrow keys call `getAdjacentEnabledKey`; Enter selects the active enabled item or calls the existing `onSearch` when none is active; Escape closes an open view and only clears when collapsed.

One shared `selectItem(item)` must:

```ts
setValue(item.value);
onChange?.(item.value);
onSelect?.(item);
if (closeOnSelect) requestOpen(false);
```

Pass `aria-activedescendant` to the expanded Input only when an active option exists. Clear active state when input text changes, Search closes, or the active key no longer exists.

- [ ] **Step 6: Add result item styles from the Figma measurements**

Use `searchViewSizes.resultItemHeight`, `spacing.large`, `spacing.xxxlarge`, `spacing.xxsmall`, `$body.large`, and `$body.medium`. Supporting text must use one-line ellipsis (`overflow: "hidden"`, `textOverflow: "ellipsis"`, `whiteSpace: "nowrap"`). Active hover/focus state uses on-surface opacity theme variables; disabled options do not receive pointer handlers.

- [ ] **Step 7: Verify GREEN and format**

```bash
pnpm run test -- --runInBand src/components/search/__test__/hooks.test.tsx src/components/search/__test__/search.test.tsx
pnpm exec prettier --write src/components/search/result-list.tsx src/components/search/hooks.ts src/components/search/search.tsx src/components/search/view.tsx src/components/search/styles.ts src/components/search/context.ts src/components/search/__test__/hooks.test.tsx src/components/search/__test__/search.test.tsx
```

Expected: navigation and integrated selection tests PASS.

- [ ] **Step 8: Commit only after explicit approval**

```bash
git add src/components/search/result-list.tsx src/components/search/hooks.ts src/components/search/search.tsx src/components/search/view.tsx src/components/search/styles.ts src/components/search/context.ts src/components/search/__test__/hooks.test.tsx src/components/search/__test__/search.test.tsx
git commit -m "feat(search): add accessible search results"
```

---

### Task 6: Complete public exports, stories, and snapshots

**Files:**

- Modify: `src/components/search/index.tsx`
- Modify: `src/components/search/__test__/__snapshots__/search.test.tsx.snap`
- Modify: `stories/search.stories.ts`

**Interfaces:**

- Consumes: all prior Search APIs and internal units.
- Produces: public type exports, representative Storybook cases, and reviewed snapshots.

- [ ] **Step 1: Export the public Search types**

Update `src/components/search/index.tsx`:

```ts
export { Search };
export type {
  ResolvedSearchView,
  SearchItem,
  SearchProps,
  SearchRef,
  SearchView,
} from "../../types/search";
```

- [ ] **Step 2: Add representative Storybook scenarios**

Keep existing stories and add:

- `WithResults`: avatar/leading element, two-line text, disabled item, and trailing content.
- `ModalView`: `view="modal"`.
- `FullScreenView`: `view="full-screen"`.
- `CustomSlots`: custom leading icon and trailing Avatar.
- `ControlledOpen`: a React render function controlling `open` through `onOpenChange`.

Use ordinary Storybook comments and no bilingual JSDoc requirement in this file.

- [ ] **Step 3: Review and update snapshots intentionally**

Run without update first:

```bash
pnpm run test -- --runInBand src/components/search/__test__/search.test.tsx
```

Inspect the diff to ensure snapshots contain filled Input, no notched outline in Search, and Portal Search View only for open fixtures. Then update:

```bash
pnpm run test -- --runInBand src/components/search/__test__/search.test.tsx -u
```

Re-run without `-u` and expect PASS.

- [ ] **Step 4: Format and run focused regression**

```bash
pnpm exec prettier --write src/components/search/index.tsx src/components/search/__test__/__snapshots__/search.test.tsx.snap stories/search.stories.ts
pnpm run test -- --runInBand src/components/input/__test__/input-appearance.test.tsx src/components/input/__test__/style-consumers.test.tsx src/components/search/__test__/hooks.test.tsx src/components/search/__test__/search.test.tsx
```

Expected: all focused suites PASS with no console warnings.

- [ ] **Step 5: Commit only after explicit approval**

```bash
git add src/components/search/index.tsx src/components/search/__test__/__snapshots__/search.test.tsx.snap stories/search.stories.ts
git commit -m "docs(search): add Material 3 search examples"
```

---

### Task 7: Full verification and Figma visual comparison

**Files:**

- Modify only if verification exposes a defect: files already listed in Tasks 1-6
- Verify: `docs/superpowers/specs/2026-08-30-material-3-search-design.md`
- Verify: `docs/superpowers/plans/2026-08-30-material-3-search.md`

**Interfaces:**

- Consumes: completed Input and Search implementation.
- Produces: formatted, linted, tested, built, and visually checked deliverable.

- [ ] **Step 1: Invoke verification-before-completion before making success claims**

Read and follow `superpowers:verification-before-completion`. Do not rely on earlier test output.

- [ ] **Step 2: Format every touched file with the available Prettier command**

```bash
pnpm exec prettier --write docs/superpowers/specs/2026-08-30-material-3-search-design.md docs/superpowers/plans/2026-08-30-material-3-search.md src/types/input.ts src/types/search.ts src/components/theme/tokens.stylex.ts src/components/input/input.tsx src/components/input/styles.stylex.ts src/components/input/__test__/input-appearance.test.tsx src/components/search/context.ts src/components/search/hooks.ts src/components/search/bar.tsx src/components/search/view.tsx src/components/search/result-list.tsx src/components/search/search.tsx src/components/search/styles.ts src/components/search/index.tsx src/components/search/__test__/hooks.test.tsx src/components/search/__test__/search.test.tsx stories/input.stories.ts stories/search.stories.ts
```

- [ ] **Step 3: Run focused and full automated verification**

```bash
pnpm run test -- --runInBand src/components/input/__test__/input-appearance.test.tsx src/components/input/__test__/style-consumers.test.tsx src/components/search/__test__/hooks.test.tsx src/components/search/__test__/search.test.tsx
pnpm run test -- --runInBand
pnpm run lint
pnpm run build
pnpm run build-storybook
```

Expected: every command exits 0. If the full suite has a pre-existing failure, capture the exact failing test and prove focused suites still pass; do not label it unrelated without evidence.

- [ ] **Step 4: Visually compare Storybook against Figma**

At implementation time, load the browser-control skill before browser automation. Check light and dark themes at widths 360px, 720px, 904px, and 905px. Compare:

- 56px Search Bar, 28px pill radius, 48px action targets, 24px icons;
- filled surface and 8%/12% hover/pressed layers;
- modal min/max sizing, 28px corners, divider, and result item spacing;
- 72px full-screen header and viewport-filling results;
- focus transfer, keyboard active state, disabled appearance, and scroll behavior.

Record any mismatch as a failing test when behavior can be automated, then repeat red-green-refactor before changing production code.

- [ ] **Step 5: Inspect the final diff for user-change preservation**

```bash
git status --short
git diff --check
git diff --cached -- src/components/input/input.tsx src/components/input/styles.stylex.ts src/types/input.ts stories/input.stories.ts package.json
git diff -- src/components/input/input.tsx src/components/input/styles.stylex.ts src/types/input.ts stories/input.stories.ts src/components/search src/types/search.ts src/components/theme/tokens.stylex.ts
```

Confirm the staged label/id work and package version were not reverted, unrelated files were not reformatted, all added JSDoc is bilingual, and no handwritten `typeof value === "function"` or undefined predicate was introduced.

- [ ] **Step 6: Commit final verification fixes only after explicit approval**

If verification required code changes, propose a focused commit and wait for approval before running it. Do not commit unchanged verification output.

## Execution notes

- The design and plan documents remain uncommitted until the user explicitly authorizes a commit.
- Do not use `git reset`, `git checkout --`, or any command that discards the staged Input work.
- If a task reveals that filled Input requires a new public behavior beyond this spec (for example a filled floating-label system), stop and return to design review instead of inventing it during implementation.
