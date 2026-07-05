# BottomSheet Component Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a Material 3 Modal Bottom Sheet component that slides up from the bottom with a drag handle, scrim overlay, and swipe-to-dismiss support.

**Architecture:** Follows the existing Drawer pattern — `BottomSheet` (Portal lifecycle) → `Sheet` (panel rendering with StyleX styles and `motion` animations). Reuses shared hooks (`Portal`, `useClosable`, `useClassNames`, `useThemeColorVars`) and StyleX tokens.

**Tech Stack:** TypeScript, React 19, StyleX (`@stylexjs/stylex`), `motion/react` for animations, `@aiszlab/relax` for utilities.

## Global Constraints

- Follow existing component patterns: separate `types/`, `context.ts` for class names, StyleX `$create`/`$props` for styling, `useClassNames` for BEM prefixing.
- Use `@stylexjs/stylex` `create as $create` and `props as $props` naming conventions.
- Use `motion/react` `animate()` for enter/exit animations (same as Drawer).
- Peer deps: `react >=18`, `react-dom >=18`.
- No header/title — content is drag handle + any children.

---

### Task 1: Type definitions

**Files:**
- Create: `src/types/bottom-sheet.ts`

**Interfaces:**
- Produces: `BottomSheetProps` interface for consumer use

- [ ] **Step 1: Write type definitions**

```ts
import type { ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { Closable } from "../hooks/use-closable";

export interface BottomSheetProps extends ComponentProps {
  /**
   * @description
   * Controls open/close state of the bottom sheet.
   */
  open: boolean;

  /**
   * @description
   * Called when the sheet requests to close (overlay click, Esc key).
   */
  onClose: VoidFunction;

  /**
   * @description
   * Sheet content rendered below the drag handle.
   */
  children?: ReactNode;

  /**
   * @description
   * Height of the sheet panel. Accepts any CSS height value.
   * @default "50vh"
   */
  height?: number | string;

  /**
   * @description
   * Whether the sheet can be closed by overlay click or Esc key.
   * Pass an array of `Closable` values to enable specific close triggers.
   * @default true (all triggers enabled)
   */
  closable?: boolean | Closable[];
}
```

- [ ] **Step 2: Commit**

```bash
git add src/types/bottom-sheet.ts
git commit -m "feat(bottom-sheet): add BottomSheetProps type definition

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 2: Context (BEM class names)

**Files:**
- Create: `src/components/bottom-sheet/context.ts`

**Interfaces:**
- Produces: `CLASS_NAMES` const object with BEM class name mappings

- [ ] **Step 1: Write context file**

```ts
/**
 * @description
 * class names for BottomSheet
 */
export const CLASS_NAMES = {
  sheet: "bottom-sheet",
  overlay: "bottom-sheet__overlay",
  panel: "bottom-sheet__panel",
  handle: "bottom-sheet__drag-handle",
  body: "bottom-sheet__body",
} as const;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bottom-sheet/context.ts
git commit -m "feat(bottom-sheet): add BEM class name constants

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 3: Sheet component (panel, drag handle, animations)

**Files:**
- Create: `src/components/bottom-sheet/sheet.tsx`

**Interfaces:**
- Consumes: `CLASS_NAMES` from `context.ts`, `BottomSheetProps` from `../../types/bottom-sheet`
- Produces: `Sheet` component — renders overlay + panel with drag handle + body, handles enter/exit animations

- [ ] **Step 1: Write the Sheet component**

```tsx
import React, { useEffect, useRef } from "react";
import { animate } from "motion/react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useAsyncEffect } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { useClosable } from "../../hooks/use-closable";
import { useThemeColorVars, type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { positions, spacing, sizes, OPACITY } from "../theme/tokens.stylex";
import { CLASS_NAMES } from "./context";
import type { BottomSheetProps } from "../../types/bottom-sheet";

type SheetProps = Required<Pick<BottomSheetProps, "height" | "closable">> &
  Omit<BottomSheetProps, "height" | "closable"> & {
    /** Called after exit animation completes, signals Portal to unmount */
    onClosed: VoidFunction;
  };

const ANIMATION_OPTIONS = {
  enter: { duration: 0.3 },
  exit: { duration: 0.2 },
} as const;

const styles = $create({
  popup: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: positions.drawer,
  },

  overlay: {
    position: "absolute",
    inset: 0,
    pointerEvents: "auto",
    opacity: 0,
    backgroundColor: "var(--color-surface-dim)" satisfies ThemeColorVariable,
  },

  panel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    pointerEvents: "auto",
    backgroundColor: "var(--color-surface-container)" satisfies ThemeColorVariable,
    borderTopLeftRadius: sizes.small,
    borderTopRightRadius: sizes.small,
    display: "flex",
    flexDirection: "column",
    maxHeight: "100vh",
    overflow: "hidden",
    transform: "translateY(100%)",
  },

  handle: {
    width: sizes.medium,
    height: sizes.xxxxxxxxxsmall,
    borderRadius: sizes.xxxxxxxxxxsmall,
    backgroundColor: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
    marginTop: spacing.xxsmall,
    marginBottom: spacing.xxsmall,
    marginInline: "auto",
    flexShrink: 0,
  },

  body: {
    flex: 1,
    overflow: "auto",
    padding: spacing.xxxlarge,
  },
});

const Sheet = ({
  open,
  onClose,
  onClosed,
  height = "50vh",
  closable,
  className,
  children,
}: SheetProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const ref = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const themeColorVars = useThemeColorVars(["surface-dim", "surface-container", "on-surface-variant"]);

  const { onOverlayClick, onKeyDown } = useClosable({
    closable,
    onClose,
  });

  useAsyncEffect(async () => {
    if (!ref.current) return;

    if (open) {
      ref.current.style.display = "block";
      await Promise.all([
        panelRef.current && animate(panelRef.current, { transform: "translateY(0)" }, ANIMATION_OPTIONS.enter),
        overlayRef.current && animate(overlayRef.current, { opacity: OPACITY.heavier }, ANIMATION_OPTIONS.enter),
      ]);
      return;
    }

    await Promise.all([
      panelRef.current && animate(panelRef.current, { transform: "translateY(100%)" }, ANIMATION_OPTIONS.exit),
      overlayRef.current && animate(overlayRef.current, { opacity: 0 }, ANIMATION_OPTIONS.exit),
    ]);
    ref.current.style.display = "none";
    onClosed();
  }, [open]);

  const styled = {
    popup: $props(styles.popup),
    overlay: $props(styles.overlay),
    panel: $props(styles.panel),
    handle: $props(styles.handle),
    body: $props(styles.body),
  };

  return (
    <div
      ref={ref}
      tabIndex={-1}
      className={stringify(classNames.sheet, className, styled.popup.className)}
      style={{
        ...styled.popup.style,
        display: "none",
      }}
      onKeyDown={onKeyDown}
    >
      {/* overlay */}
      <div
        ref={overlayRef}
        className={stringify(classNames.overlay, styled.overlay.className)}
        style={styled.overlay.style}
        onClick={onOverlayClick}
      />

      {/* panel */}
      <div
        ref={panelRef}
        className={stringify(classNames.panel, styled.panel.className)}
        style={{
          ...styled.panel.style,
          ...themeColorVars,
          height: typeof height === "number" ? `${height}px` : height,
        }}
      >
        {/* drag handle */}
        <div
          className={stringify(classNames.handle, styled.handle.className)}
          style={styled.handle.style}
        />

        {/* body */}
        <div
          className={stringify(classNames.body, styled.body.className)}
          style={styled.body.style}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sheet;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bottom-sheet/sheet.tsx
git commit -m "feat(bottom-sheet): add Sheet component with drag handle and animations

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 4: BottomSheet component (Portal lifecycle wrapper)

**Files:**
- Create: `src/components/bottom-sheet/bottom-sheet.tsx`

**Interfaces:**
- Consumes: `Sheet` from `sheet.tsx`, `Portal` from `../portal`, `BottomSheetProps` from `../../types/bottom-sheet`
- Produces: `BottomSheet` component — public API consumers use

- [ ] **Step 1: Write the BottomSheet component**

```tsx
import React, { useEffect } from "react";
import { useBoolean } from "@aiszlab/relax";
import type { BottomSheetProps } from "../../types/bottom-sheet";
import { Portal } from "../portal";
import Sheet from "./sheet";

const BottomSheet = ({
  open,
  height = "50vh",
  closable = true,
  ...props
}: BottomSheetProps) => {
  // Keep Portal mounted during exit animation
  const [isVisible, { turnOn, turnOff }] = useBoolean(false);

  useEffect(() => {
    if (open) {
      turnOn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Portal open={open || isVisible} lockable>
      <Sheet
        {...props}
        open={open}
        height={height}
        closable={closable}
        onClosed={turnOff}
      />
    </Portal>
  );
};

export default BottomSheet;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/bottom-sheet/bottom-sheet.tsx
git commit -m "feat(bottom-sheet): add BottomSheet component with Portal lifecycle

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 5: Exports

**Files:**
- Create: `src/components/bottom-sheet/index.ts`
- Modify: `src/index.ts` (add BottomSheet export in alphabetical position)

**Interfaces:**
- Consumes: `BottomSheet` from `bottom-sheet.tsx`
- Produces: public export from the package

- [ ] **Step 1: Create component index**

```ts
import BottomSheet from "./bottom-sheet";

export { BottomSheet };
```

- [ ] **Step 2: Add export to src/index.ts**

Add `export { BottomSheet } from "./components/bottom-sheet";` after the `export { Bench }` line:

```ts
export { Bench } from "./components/bench";
export { BottomSheet } from "./components/bottom-sheet";
export { I18nButton } from "./components/i18n-button";
```

- [ ] **Step 3: Verify build**

```bash
pnpm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/bottom-sheet/index.ts src/index.ts
git commit -m "feat(bottom-sheet): add public export

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 6: Tests

**Files:**
- Create: `src/components/bottom-sheet/__test__/index.test.tsx`

**Interfaces:**
- Consumes: `BottomSheet` from `../bottom-sheet`

- [ ] **Step 1: Write the test file**

```tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BottomSheet } from "../bottom-sheet";

const BODY_CONTENT = "Bottom sheet content";

const TestBottomSheet = (props: Partial<Parameters<typeof BottomSheet>[0]> = {}) => {
  const [open, setOpen] = React.useState(props.open ?? true);

  return (
    <BottomSheet
      open={open}
      onClose={() => {
        props.onClose?.();
        setOpen(false);
      }}
      {...props}
    >
      {props.children ?? BODY_CONTENT}
    </BottomSheet>
  );
};

describe("BottomSheet", () => {
  it("renders content when open", () => {
    render(<TestBottomSheet />);
    expect(screen.getByText(BODY_CONTENT)).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(<TestBottomSheet open={false} />);
    expect(screen.queryByText(BODY_CONTENT)).not.toBeInTheDocument();
  });

  it("renders drag handle", () => {
    render(<TestBottomSheet />);
    const handle = document.querySelector(".musae-bottom-sheet__drag-handle");
    expect(handle).toBeInTheDocument();
  });

  it("calls onClose when overlay is clicked", async () => {
    const onClose = jest.fn();
    render(<TestBottomSheet onClose={onClose} />);

    const overlay = document.querySelector(".musae-bottom-sheet__overlay");
    expect(overlay).toBeInTheDocument();

    await userEvent.click(overlay!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Escape is pressed", async () => {
    const onClose = jest.fn();
    render(<TestBottomSheet onClose={onClose} />);

    const sheet = document.querySelector(".musae-bottom-sheet");
    expect(sheet).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("applies custom height to panel", () => {
    render(<TestBottomSheet height={300} />);
    const panel = document.querySelector(".musae-bottom-sheet__panel");
    expect(panel).toHaveStyle({ height: "300px" });
  });

  it("respects closable prop — does not close on overlay click when closable excludes overlay", async () => {
    const onClose = jest.fn();
    render(<TestBottomSheet onClose={onClose} closable={["esc"]} />);

    const overlay = document.querySelector(".musae-bottom-sheet__overlay");
    await userEvent.click(overlay!);
    expect(onClose).not.toHaveBeenCalled();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail (component not yet fully wired)**

```bash
pnpm run test -- --testPathPattern="bottom-sheet"
```

Expected: Some tests may fail or the test file may fail to import. Fix any import issues.

- [ ] **Step 3: Run tests and verify they pass**

```bash
pnpm run test -- --testPathPattern="bottom-sheet"
```

Expected: All 7 tests PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/bottom-sheet/__test__/index.test.tsx
git commit -m "test(bottom-sheet): add unit tests

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 7: Storybook story

**Files:**
- Create: `stories/bottom-sheet.stories.tsx`

**Interfaces:**
- Consumes: `BottomSheet` from `musae`

- [ ] **Step 1: Write story file**

```tsx
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet, Button, Space } from "musae";
import "musae/styles.css";

const meta: Meta<typeof BottomSheet> = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    open: { control: "boolean" },
    height: { control: "text" },
    closable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

const Template = (args: Partial<Parameters<typeof BottomSheet>[0]>) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 16 }}>
      <Button onClick={() => setOpen(true)}>Open Bottom Sheet</Button>
      <BottomSheet open={open} onClose={() => setOpen(false)} {...args}>
        <div>
          <h3 style={{ margin: 0 }}>Bottom Sheet</h3>
          <p style={{ color: "var(--color-on-surface-variant)" }}>
            Drag the handle or tap the overlay to dismiss.
          </p>
          <Space style={{ marginTop: 16 }}>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </Space>
        </div>
      </BottomSheet>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};

export const CustomHeight: Story = {
  render: (args) => <Template {...args} height="80vh" />,
};

export const LongContent: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open Long Content</Button>
        <BottomSheet open={open} onClose={() => setOpen(false)} {...args}>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} style={{ padding: 8, margin: 0, borderBottom: "1px solid var(--color-outline-variant)" }}>
              Item {i + 1}
            </p>
          ))}
        </BottomSheet>
      </div>
    );
  },
};
```

- [ ] **Step 2: Verify Storybook builds**

```bash
pnpm run storybook
```

Expected: Storybook starts and BottomSheet stories are visible.

- [ ] **Step 3: Commit**

```bash
git add stories/bottom-sheet.stories.tsx
git commit -m "docs(bottom-sheet): add Storybook stories

Co-Authored-By: Claude <noreply@anthropic.com>"
```
