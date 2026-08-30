# Material 3 Search redesign

## Summary

Reimplement `Search` as a complete Material 3 search experience while keeping it composed from
`Input`. The collapsed Search Bar opens an interconnected Search View on focus. The view renders as
a modal on wider viewports and full-screen on compact viewports, supports structured result items,
keyboard navigation, controlled state, and backward-compatible search actions.

The change also gives `Input` reusable filled and pill appearances. `Input`, rather than `Search`,
owns the visible input surface: background, shape, focus, hover, pressed, and disabled states.

## Goals

- Match the light and dark Material 3 Search Bar, modal Search View, and full-screen Search View in
  Figma node `52977:33809`.
- Continue to implement Search Bar and Search View inputs with the public `Input` component.
- Prevent Search styles from overriding or depending on `Input`'s outlined/notched implementation.
- Open Search View when Search Bar receives focus and keep input value and interaction state in sync.
- Render modal Search View at wide widths and full-screen Search View below the existing 905px
  mobile breakpoint, with an explicit override available.
- Provide a default accessible two-line result list and allow custom item rendering.
- Preserve existing Search behavior and props where they remain meaningful.

## Non-goals

- Search does not fetch, rank, or filter results. Consumers respond to `onChange` or `onSearch` and
  update `items`.
- The component does not introduce loading, error, or opinionated empty-state content that is not in
  the supplied design.
- Internal Search Bar, Search View, and result-list implementation components are not public exports.
- This work does not refactor unrelated Input consumers or existing overlay components.

## Chosen architecture

Keep one public `<Search />` component and split its implementation into private units with one clear
responsibility:

- `Search`: owns controlled/uncontrolled value and open state, determines the effective view mode,
  coordinates focus, selection, and public callbacks.
- Search Bar: renders the collapsed `Input` and translates focus into an open request.
- Search View: renders the modal or full-screen shell, the expanded `Input`, divider, and result area.
- Search result list: renders structured items, tracks the active option, and implements selection and
  keyboard semantics.

Both visible inputs receive the same value and change handler. Only one is interactive at a time.
Opening transfers focus from the bar input to the view input; closing restores focus to the bar.

This keeps ordinary usage compatible with the current single-component API. A compound-component or
separate Search Bar/Search View API would expose synchronization responsibilities to consumers and is
therefore rejected.

## Input appearance API

Extend `InputProps` with:

```ts
type Variant = "outlined" | "filled" | "standard";
type InputShape = "standard" | "pill";

interface InputProps {
  variant?: Variant;
  shape?: InputShape;
}
```

The existing `Variant` declaration already includes `filled` and `standard`; this work makes the
`filled` branch functional without removing or narrowing the existing `standard` value. Defaults
remain `variant="outlined"` and `shape="standard"`, preserving current rendering and style.

`variant="filled"` owns the input background and all surface interaction states. It uses theme roles
and opacity tokens, including `surface-container-high` and appropriate on-surface state layers. It
does not render the outlined/notched border treatment. `shape="pill"` applies the fully rounded
shape; it is independent from the variant so other Input consumers can reuse it.

The pre-existing `standard` variant retains its current rendering behavior in this change because it
is not represented in the supplied Search design. Defining a new standard-input visual treatment is
outside this feature's scope.

Search Bar and Search View use `variant="filled"` and `shape="pill"` as appropriate. Search does not
add a competing background around the Search Bar input.

## Search public API

Preserve the existing `value`, `defaultValue`, `onChange`, `placeholder`, `disabled`, `clearable`,
`searchButton`, `onSearch`, `onClear`, component styling props, and ref methods.

Add the following concepts:

```ts
type SearchView = "auto" | "modal" | "full-screen";

type SearchItem = {
  key: Key;
  value: string;
  label: ReactNode;
  supportingText?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
  disabled?: boolean;
};

type SearchProps = {
  view?: SearchView;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  items?: SearchItem[];
  renderItem?: (item: SearchItem) => ReactNode;
  onSelect?: (item: SearchItem) => void;
  closeOnSelect?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode | ReactNode[];
};
```

Defaults are `view="auto"`, `defaultOpen=false`, `items=[]`, and `closeOnSelect=true`.

`searchButton` remains supported and is placed in the trailing actions. `leading` and `trailing`
provide the general Figma icon/avatar slots. The automatically managed clear action remains separate
from consumer-provided trailing content.

The Search ref retains `focus`, `blur`, `clear`, and `getValue`. Focus targets the currently visible
input.

## State and event flow

### Opening

1. The Search Bar input receives focus.
2. Search requests `open=true` and fires `onOpenChange(true)` when the effective state changes.
3. `view="auto"` resolves to `full-screen` below 905px and `modal` otherwise. Explicit view values
   bypass responsive selection.
4. Once the Search View input mounts, focus moves to it without selecting or changing the value.

### Input

- Both inputs display the same controlled/uncontrolled value.
- A change updates internal state when uncontrolled and invokes `onChange(value)`.
- Enter with no active result invokes `onSearch(value)`.
- Clear updates the value to an empty string, invokes `onChange("")`, and then `onClear()`.
- Input blur alone never closes Search View; this allows pointer interaction with result items.

### Selection

1. Clicking an enabled item or pressing Enter on the active item writes `item.value` to the input.
2. Search invokes `onChange(item.value)` and `onSelect(item)`.
3. Search closes when `closeOnSelect` is true and remains open otherwise.
4. Disabled items cannot become active or selected.

### Closing

- Escape, the view's back action, or the modal scrim requests close.
- Full-screen mode has no click-away/scrim close path.
- Closing restores focus to the Search Bar unless Search itself became disabled or unmounted.
- Controlled `open` never mutates itself; actions only invoke `onOpenChange`. Uncontrolled mode
  updates internal state before invoking the callback.

## Layout and styling

### Search Bar

- Height: 56px.
- Fully rounded 28px visual shape via Input's pill shape.
- `surface-container-high` background via Input's filled variant.
- A 4px state-layer inset and 4px element gap.
- Leading and trailing targets use 48px slots with 24px icons.
- Text uses Material body-large typography and `on-surface-variant` when showing a placeholder.
- Width remains consumer-controlled, bounded by the design's 360px minimum and 720px maximum where
  the Search component owns layout.

### Modal Search View

- Render through `Portal` as a modal overlay with scroll locking.
- Use the design's 360px minimum, 720px maximum, 28px corners, 56px header, divider, and a minimum
  240px populated view height.
- Keep the view within viewport gutters using existing spacing tokens.
- Clicking the scrim closes the view.

### Full-screen Search View

- Fill the viewport through `Portal`, without rounded outer corners.
- Use the Figma full-screen header dimensions and a scrollable results region.
- Use the same theme roles and tokens as modal mode.

### Result items

- Default items are 72px two-line list options.
- Layout uses 16px between the leading element and content, 16px leading inset, 24px trailing inset,
  and 8px block padding, all mapped to repository tokens.
- Primary content uses body-large typography; supporting content uses body-medium and truncates to one
  line.
- Consumer `renderItem` replaces item contents while Search retains the option wrapper, semantics,
  active state, disabled state, and event handling.

All StyleX dimensions must use values from `tokens.stylex.ts`. Missing reusable dimensions should be
added as tokens rather than hard-coded in Search or Input styles.

## Accessibility and keyboard behavior

- The input exposes combobox semantics with `aria-expanded`, `aria-controls`, and
  `aria-activedescendant`.
- The result container uses `role="listbox"`; items use `role="option"` and stable DOM identifiers.
- Arrow Down and Arrow Up move the active option, wrapping across enabled items and skipping disabled
  items.
- Enter selects the active option; otherwise it performs the existing search action.
- Escape closes an open view. When only the collapsed bar is visible, Escape retains the current clear
  behavior for backward compatibility.
- Pointer and keyboard selection share the same selection function so callbacks and close behavior do
  not diverge.
- Icon-only controls have accessible labels, and focus remains visible in both themes.

## Error and edge-case handling

- An empty `items` array renders an empty result region at the design minimum height without invented
  copy.
- If controlled `open` remains true after a close request, the view stays visible and focus is not
  restored prematurely.
- If the responsive breakpoint changes while open in `auto` mode, the view changes layout without
  resetting value, active item, or focus.
- If an active item disappears after an `items` update, active state resets to the first enabled item
  only after the next navigation key; the component does not select implicitly.
- Disabling Search closes an uncontrolled view, prevents opening, disables both Input states, and
  removes result interactivity.

## Compatibility

- Existing Search use without new props continues to render a Search Bar and use the same value,
  clear, Enter-to-search, disabled, and imperative-ref behavior.
- Focusing a Search now opens the Search View. This is intentional behavior required by the redesign.
- Existing Input use remains outlined and standard-shaped by default.
- Existing `searchButton` content remains rendered and invokes `onSearch`; it is implemented through
  the new trailing layout rather than removed.

## Testing strategy

Follow test-driven development: each behavior starts with a focused failing test and the failure is
verified before implementation.

Input tests cover:

- unchanged default outlined rendering;
- filled background and absence of the notched outline treatment;
- pill shape;
- filled hover/focus/disabled token classes;
- label and existing controlled/uncontrolled behavior remaining intact.

Search tests cover:

- Search Bar composition through `Input` and absence of style conflicts;
- focus-driven opening and focus transfer;
- modal/full-screen responsive selection and explicit override;
- controlled and uncontrolled open state;
- modal scrim, Escape, and back-action close paths;
- value synchronization, clear, search, selection, and focus restoration;
- default result rendering and custom `renderItem`;
- mouse and keyboard option navigation, including disabled items;
- disabled Search behavior;
- existing Search props and ref methods;
- light/dark token use and updated snapshots.

After focused tests pass, run the relevant Input and Search suites, the full test suite where practical,
lint, build/type checking, and `pnpm run prettier` as required by repository instructions.

## Expected implementation areas

- `src/types/input.ts`
- `src/components/input/input.tsx`
- `src/components/input/styles.stylex.ts`
- Input tests and stories
- `src/types/search.ts`
- `src/components/search/` implementation, styles, hooks/context, and tests
- `stories/search.stories.ts`
- theme tokens only when an exact Figma dimension is not already represented

Existing uncommitted Input edits are user work and must be preserved. Implementation changes must be
layered on those edits without reverting or replacing them wholesale.
