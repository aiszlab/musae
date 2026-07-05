# BottomSheet Component Design

## Overview

Add a Material 3 Modal Bottom Sheet component that slides up from the bottom of the screen with a scrim overlay, drag handle indicator, and swipe-to-dismiss gesture.

## Type

Modal Bottom Sheet — has a full-screen scrim overlay, renders in a Portal, light-dismiss on overlay click and Esc key.

## Props

```ts
interface BottomSheetProps {
  /** Controls open/close state */
  open: boolean;
  /** Called when the sheet requests to close (overlay click, Esc, swipe) */
  onClose: VoidFunction;
  /** Sheet content */
  children?: ReactNode;
  /** Sheet height, defaults to "50vh" */
  height?: number | string;
  /** Whether the sheet can be closed by overlay click or Esc. Defaults to true. */
  closable?: boolean | Closable[];
  /** Additional class name */
  className?: string;
}
```

## File Structure

```
src/components/bottom-sheet/
├── index.ts              # re-export BottomSheet
├── bottom-sheet.tsx      # outer shell: Portal lifecycle
├── sheet.tsx             # panel: drag handle, animations, gesture
└── context.ts            # BEM class name constants

src/types/
└── bottom-sheet.ts       # type definitions
```

## Component Architecture

Follows the existing Drawer pattern: `BottomSheet → Portal → Sheet`.

```
BottomSheet (bottom-sheet.tsx)
  └─ Portal (open, lockable)
       └─ Sheet (sheet.tsx)
            ├─ overlay              — opacity animation, click to close
            └─ panel
                 ├─ drag-handle     — visual indicator, centered pill
                 └─ body            — {children}
```

### BottomSheet (outer shell)

- Manages a `_isVisible` boolean to keep Portal mounted during exit animation (same pattern as Drawer).
- Renders Portal with `lockable` (prevents body scroll when open).

### Sheet (panel)

- Renders overlay + panel with drag handle + body.
- Overlay uses opacity animation (0 → 0.8 on enter, reverse on exit).
- Panel transforms from `translateY(100%)` to `translateY(0)` on enter.
- Drag handle is a 32px × 4px pill, centered, 8px from top edge.
- Uses `motion/react` `animate()` for animations (same as Drawer).
- Uses `useClosable` hook for Esc key and overlay-click dismiss.
- Uses `useClassNames` hook for prefixed BEM class names.

## Visual Spec

| Element | Style |
|---------|-------|
| Panel top corners | `border-radius: 28px 28px 0 0` |
| Panel background | `var(--color-surface-container)` |
| Drag handle width | 32px |
| Drag handle height | 4px |
| Drag handle border-radius | 2px |
| Drag handle color | `var(--color-on-surface-variant)` |
| Drag handle top spacing | 8px (from panel top) |
| Overlay opacity (enter) | 0.8 |
| Overlay background | `var(--color-surface-dim)` |

## Animation

- **Enter**: panel `translateY(100%)` → `translateY(0)`, overlay opacity 0 → 0.8, both ~300ms
- **Exit**: reverse, ~200ms. On animation complete, call `onClosed` → Portal unmounts.
- Uses `motion/react` `animate()` and `Promise.all()` for parallel animations.

## Interaction

- Click overlay → close (when `closable` includes `"overlay"` or `closable === true`)
- Press Escape → close (when `closable` includes `"keyboard"` or `closable === true`)
- Reuses the existing `useClosable` hook from `src/hooks/use-closable.tsx`

## Dependencies

- Reuses: `Portal`, `useClosable`, `useClassNames`, `useThemeColorVars`, `useLocale`
- External: `@stylexjs/stylex` (styles), `motion/react` (animate), `@aiszlab/relax/class-name` (stringify), `@aiszlab/relax` (useBoolean, useAsyncEffect)

## Export

```ts
// From src/index.ts
export { BottomSheet } from "./components/bottom-sheet";
```

## Testing

- Component renders with `open={true}` and `open={false}`
- Overlay click triggers `onClose`
- Escape key triggers `onClose`
- Custom height is applied to panel
- Children render correctly
- Snapshot test for drag handle and panel structure
