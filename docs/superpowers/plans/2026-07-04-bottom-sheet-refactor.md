# BottomSheet Refactor — Extract Shared Sheet Base Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract a shared `Sheet` base component from Drawer's `popup.tsx`, then rewrite both Drawer and BottomSheet as thin wrappers around it, eliminating ~80% code duplication.

**Architecture:** New `src/components/sheet/` contains the core (Portal + lockable + overlay + panel + placement animation + StackLevelContext). Drawer and BottomSheet become thin wrappers that inject their own header (title+closer+confirm vs drag handle) and panel styling (background, border radius).

**Tech Stack:** TypeScript, React 19, StyleX (`@stylexjs/stylex`), `motion/react` for animations, `@aiszlab/relax` for utilities.

## Global Constraints

- Follow existing component patterns: separate `types/`, `context.ts` for class names, StyleX `$create`/`$props` for styling, `useClassNames` for BEM prefixing.
- Use `@stylexjs/stylex` `create as $create` and `props as $props` naming conventions.
- Use `motion/react` `animate()` for enter/exit animations.
- All comments MUST be bilingual (English + Chinese).
- Public APIs (`DrawerProps`, `BottomSheetProps`) MUST remain unchanged.
- Existing tests MUST continue to pass.
- Peer deps: `react >=18`, `react-dom >=18`.

---

### Task 1: Sheet type definitions

**Files:**
- Create: `src/types/sheet.ts`

**Interfaces:**
- Produces: `Placement` type, `SheetProps` interface — consumed by Task 4 (Sheet component), Task 6 (Drawer), Task 7 (BottomSheet)

- [ ] **Step 1: Write the type definitions**

```ts
import type { CSSProperties, ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { Closable } from "../hooks/use-closable";

/**
 * @description
 * Panel placement direction.
 * 面板弹出方向。
 */
export type Placement = "right" | "left" | "top" | "bottom";

/**
 * @description
 * Props for the shared Sheet base component.
 * 共享 Sheet 基础组件的属性。
 */
export interface SheetProps extends ComponentProps {
  /**
   * @description
   * Controls open/close state of the sheet.
   * 控制 sheet 的打开/关闭状态。
   */
  open: boolean;

  /**
   * @description
   * Called when the sheet requests to close (overlay click, Esc key).
   * 当 sheet 请求关闭时的回调（点击遮罩层或按下 Esc 键）。
   */
  onClose?: VoidFunction;

  /**
   * @description
   * The direction from which the panel appears.
   * 面板出现的方向。
   * @default "right"
   */
  placement: Placement;

  /**
   * @description
   * Panel size. For horizontal placements (left/right), this is width.
   * For vertical placements (top/bottom), this is height.
   * Accepts number (px) or any CSS dimension string.
   * 面板尺寸。水平方向为宽度，垂直方向为高度。
   * 接受数字（px）或任意 CSS 尺寸字符串。
   * @default 400
   */
  size?: number | string;

  /**
   * @description
   * Whether the sheet can be closed by clicking on the overlay or pressing the Esc key.
   * Pass an array of `Closable` values to enable specific close triggers.
   * 是否可以通过点击遮罩层或按 Esc 键关闭。
   * 传入 `Closable` 数组以启用特定的关闭触发器。
   * @default true
   */
  closable?: boolean | Closable[];

  /**
   * @description
   * Content rendered in the header area of the panel.
   * Use this slot to inject a title bar, drag handle, or any custom header.
   * 渲染在面板头部区域的内容。
   * 使用此插槽注入标题栏、拖拽手柄或任意自定义头部。
   */
  header?: ReactNode;

  /**
   * @description
   * Additional class name applied to the panel element.
   * Used by callers to apply custom StyleX styles (e.g., background color, border radius).
   * 应用到面板元素上的额外类名。
   * 供调用方应用自定义 StyleX 样式（如背景色、圆角）。
   */
  panelClassName?: string;

  /**
   * @description
   * Additional inline styles applied to the panel element.
   * Used by callers to override panel styles (e.g., background color).
   * 应用到面板元素上的额外内联样式。
   * 供调用方覆盖面板样式（如背景色）。
   */
  panelStyle?: CSSProperties;

  /**
   * @description
   * Body content rendered below the header.
   * 渲染在头部下方的主体内容。
   */
  children?: ReactNode;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/types/sheet.ts
git commit -m "feat(sheet): add SheetProps and Placement type definitions

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 2: Sheet context (BEM class names)

**Files:**
- Create: `src/components/sheet/context.ts`

**Interfaces:**
- Produces: `CLASS_NAMES` const — consumed by Task 4 (Sheet component)

- [ ] **Step 1: Write the context file**

```ts
/**
 * @description
 * Shared BEM class names for the Sheet base component.
 * 共享的 Sheet 基础组件 BEM 类名。
 */
export const CLASS_NAMES = {
  sheet: "sheet",
  overlay: "sheet__overlay",
  panel: "sheet__panel",
  body: "sheet__body",
} as const;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sheet/context.ts
git commit -m "feat(sheet): add BEM class name constants

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 3: Sheet hooks (placement transforms)

**Files:**
- Create: `src/components/sheet/hooks.ts`

**Interfaces:**
- Produces: `PLACEMENTS` const — consumed by Task 4 (Sheet component)
- Note: This moves the `PLACEMENTS` map from `src/components/drawer/hooks.ts` and adds bilingual comments.

- [ ] **Step 1: Write the hooks file**

```ts
import type { Placement } from "../../types/sheet";

/**
 * @description
 * Hidden and visible transform values for each placement direction.
 * Used by the Sheet base to compute enter/exit animations.
 * 每个弹出方向的隐藏和显示变换值。
 * 供 Sheet 基座计算进入/退出动画使用。
 *
 * [hidden, visible]
 */
export const PLACEMENTS: Record<Placement, [hidden: string, visible: string]> = {
  right: ["translateX(100%)", "translateX(0)"],
  left: ["translateX(-100%)", "translateX(0)"],
  bottom: ["translateY(100%)", "translateY(0)"],
  top: ["translateY(-100%)", "translateY(0)"],
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sheet/hooks.ts
git commit -m "feat(sheet): add PLACEMENTS transform map

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 4: Sheet base component

**Files:**
- Create: `src/components/sheet/sheet.tsx`

**Interfaces:**
- Consumes: `SheetProps` from `../../types/sheet`, `PLACEMENTS` from `./hooks`, `CLASS_NAMES` from `./context`
- Produces: `Sheet` component — the shared base for Drawer and BottomSheet

This is the core of the refactoring. It merges:
- Portal + lockable + visibility lifecycle (from `drawer.tsx` / `bottom-sheet.tsx`)
- Container + overlay + panel + body rendering (from `popup.tsx` / `sheet.tsx`)
- Placement-driven animation (from `popup.tsx`)
- Focus management, useClosable, StackLevelContext (from `popup.tsx`)

- [ ] **Step 1: Write the Sheet component**

```tsx
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { animate } from "motion/react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useAsyncEffect, useBoolean } from "@aiszlab/relax";
import { contains } from "@aiszlab/relax/dom";
import { at } from "@aiszlab/relax";
import type { SheetProps } from "../../types/sheet";
import { useClassNames } from "../../hooks/use-class-names";
import { useClosable } from "../../hooks/use-closable";
import { useThemeColorVars, type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { positions } from "../theme/tokens.stylex";
import { useContainer } from "../../hooks/use-container";
import StackLevelContext from "../../contexts/stack-level.context";
import { PLACEMENTS } from "./hooks";
import { CLASS_NAMES } from "./context";

const ANIMATION_OPTIONS = {
  enter: { duration: 0.3 },
  exit: { duration: 0.2 },
} as const;

const styles = $create({
  stackLevel: {
    zIndex: positions.drawer,
  },

  container: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
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
    pointerEvents: "auto",
    willChange: "transform",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    transform: "var(--default-position)",
  },

  right: {
    right: 0,
    top: 0,
    bottom: 0,
    width: "var(--size)",
  },

  left: {
    left: 0,
    top: 0,
    bottom: 0,
    width: "var(--size)",
  },

  bottom: {
    bottom: 0,
    left: 0,
    right: 0,
    height: "var(--size)",
  },

  top: {
    top: 0,
    left: 0,
    right: 0,
    height: "var(--size)",
  },

  body: {
    flex: 1,
    overflow: "auto",
    overscrollBehavior: "contain",
  },
});

/**
 * @description
 * Shared Sheet base component. Renders a modal panel with overlay,
 * placement-driven slide animation, focus management, and body scroll lock.
 * Drawer and BottomSheet are thin wrappers around this component.
 * 共享的 Sheet 基础组件。渲染带遮罩层的模态面板，
 * 支持方位驱动的滑动动画、焦点管理和 body 滚动锁定。
 * Drawer 和 BottomSheet 是围绕此组件的薄封装。
 */
const Sheet = ({
  open,
  onClose,
  placement,
  size = 400,
  closable = true,
  header,
  className,
  panelClassName,
  panelStyle,
  children,
}: SheetProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const _placement = PLACEMENTS[placement];
  const ref = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { container } = useContainer({});

  /**
   * @description
   * Keep Portal mounted during exit animation.
   * 在退出动画期间保持 Portal 挂载。
   */
  const [isVisible, { turnOn, turnOff }] = useBoolean(false);

  useEffect(() => {
    if (open) {
      turnOn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  /**
   * @description
   * Emit theme CSS variables for all colors used by overlay, panel, and header.
   * Includes the superset of colors needed by Drawer and BottomSheet.
   * 发出遮罩层、面板和头部使用的所有主题 CSS 变量。
   * 包含 Drawer 和 BottomSheet 所需颜色的超集。
   */
  const themeColorVars = useThemeColorVars([
    "surface-dim",
    "surface-container",
    "on-primary",
    "on-surface-variant",
    "outline-variant",
  ]);

  const { onOverlayClick, onKeyDown } = useClosable({
    closable,
    onClose,
  });

  /**
   * @description
   * Focus the container when open to receive keyboard events.
   * 打开时将焦点移到容器以接收键盘事件。
   */
  useEffect(() => {
    if (!open) return;
    if (contains(ref.current, document.activeElement)) return;
    ref.current?.focus();
  }, [open]);

  /**
   * @description
   * Handle enter/exit animations.
   * 处理进入/退出动画。
   */
  useAsyncEffect(async () => {
    const popup = ref.current;
    if (!popup) return;

    if (open) {
      popup.style.display = "block";
      await Promise.all([
        panelRef.current &&
          animate(panelRef.current, { transform: at(_placement, 1) }, ANIMATION_OPTIONS.enter),
        overlayRef.current &&
          animate(overlayRef.current, { opacity: 0.8 }, ANIMATION_OPTIONS.enter),
      ]);
      return;
    }

    await Promise.all([
      panelRef.current &&
        animate(panelRef.current, { transform: at(_placement, 0) }, ANIMATION_OPTIONS.exit),
      overlayRef.current &&
        animate(overlayRef.current, { opacity: 0 }, ANIMATION_OPTIONS.exit),
    ]);
    popup.style.display = "none";
    turnOff();
  }, [open, ..._placement]);

  const styled = {
    stackLevel: $props(styles.stackLevel),
    container: $props(styles.stackLevel, styles.container),
    overlay: $props(styles.overlay),
    panel: $props(styles.panel, styles[placement]),
    body: $props(styles.body),
  };

  if (!(open || isVisible)) return null;
  if (!container) return null;

  /**
   * @description
   * Compute the size CSS value. Numbers are treated as px.
   * 计算尺寸 CSS 值。数字视为 px。
   */
  const sizeValue = typeof size === "number" ? `${size}px` : size;

  return createPortal(
    <StackLevelContext
      value={{
        className: styled.stackLevel.className,
        style: styled.stackLevel.style,
      }}
    >
      <div
        ref={ref}
        tabIndex={-1}
        className={stringify(classNames.sheet, className, styled.container.className)}
        style={{
          ...styled.container.style,
          ...themeColorVars,
          "--default-position": at(_placement, 0),
          "--size": sizeValue,
        }}
        onKeyDown={onKeyDown}
      >
        {/* overlay / 遮罩层 */}
        <div
          ref={overlayRef}
          className={stringify(classNames.overlay, styled.overlay.className)}
          style={styled.overlay.style}
          onClick={onOverlayClick}
        />

        {/* panel / 面板 */}
        <div
          ref={panelRef}
          className={stringify(classNames.panel, panelClassName, styled.panel.className)}
          style={{ ...styled.panel.style, ...panelStyle }}
        >
          {/* header slot / 头部插槽 */}
          {header}

          {/* body / 主体 */}
          <div
            className={stringify(classNames.body, styled.body.className)}
            style={styled.body.style}
          >
            {children}
          </div>
        </div>
      </div>
    </StackLevelContext>,
    container,
  );
};

export default Sheet;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sheet/sheet.tsx
git commit -m "feat(sheet): add Sheet base component with Portal, overlay, panel, and placement animations

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 5: Sheet index (barrel export)

**Files:**
- Create: `src/components/sheet/index.ts`

**Interfaces:**
- Consumes: `Sheet` from `./sheet`
- Produces: `Sheet` export — consumed by Task 6 (Drawer) and Task 7 (BottomSheet)

- [ ] **Step 1: Write the index file**

```ts
import Sheet from "./sheet";

export { Sheet };
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sheet/index.ts
git commit -m "feat(sheet): add barrel export

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 6: Rewrite Drawer as thin Sheet wrapper

**Files:**
- Modify: `src/components/drawer/drawer.tsx` — rewrite to use `<Sheet>`
- Modify: `src/components/drawer/context.ts` — remove unused class names (keep drawer-specific)
- Delete: `src/components/drawer/popup.tsx` — logic moved to Sheet base and drawer.tsx
- Delete: `src/components/drawer/hooks.ts` — PLACEMENTS moved to sheet/hooks.ts

**Interfaces:**
- Consumes: `Sheet` from `../sheet`, `DrawerProps` from `../../types/drawer`
- Produces: `Drawer` component — public API unchanged

- [ ] **Step 1: Update drawer context**

Remove unused class names. The `drawer` class is kept for the root container (applied via `className` on Sheet). Header and body classes are now on elements inside the Drawer wrapper, not inside Sheet.

```ts
/**
 * @description
 * class names for Drawer
 * Drawer 的 class 名称
 */
export const CLASS_NAMES = {
  drawer: "drawer",
  header: "drawer__header",
  body: "drawer__body",
  actions: "drawer__actions",
} as const;
```

Rewrite `src/components/drawer/context.ts` with the above content.

- [ ] **Step 2: Rewrite drawer.tsx**

```tsx
import React from "react";
import type { DrawerProps } from "../../types/drawer";
import { Sheet } from "../sheet";
import { Button } from "../button";
import { IconButton } from "../icon-button";
import { Space } from "../space";
import { Close } from "../icon/icons";
import { useLocale } from "../../locale";
import { useClosable } from "../../hooks/use-closable";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useThemeColorVars, type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { $body } from "../theme/theme";
import { CLASS_NAMES } from "./context";

/**
 * @description
 * Drawer-specific styles: header bar with closer, title, and confirm button.
 * Panel background override via panelStyle prop on Sheet.
 * Drawer 专用样式：包含关闭按钮、标题和确认按钮的头部栏。
 * 面板背景通过 Sheet 的 panelStyle 属性覆盖。
 */
const styles = $create({
  header: {
    display: "flex",
    paddingInline: spacing.large,
    paddingBlock: spacing.large,
    alignItems: "center",
    gap: spacing.xxxsmall,
    borderBottomWidth: sizes.smallest,
    borderBottomStyle: "solid",
    borderBottomColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
  },

  actions: {
    marginInlineStart: "auto",
  },
});

/**
 * @description
 * Drawer component. A modal panel that slides in from any screen edge.
 * Built on the shared Sheet base component.
 * Drawer 组件。从屏幕任意边缘滑入的模态面板。
 * 基于共享的 Sheet 基础组件构建。
 */
const Drawer = ({
  open,
  size = 400,
  closable = true,
  placement = "right",
  ...props
}: DrawerProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const [locale] = useLocale("drawer");
  const themeColorVars = useThemeColorVars(["on-primary", "outline-variant"]);

  const { closer: closeButton } = useClosable({
    closable,
    onClose: props.onClose,
  });

  const styled = {
    header: $props($body.large, styles.header),
    actions: $props(styles.actions),
  };

  /**
   * @description
   * Drawer-specific header: close icon + title + confirm button.
   * Drawer 专用头部：关闭图标 + 标题 + 确认按钮。
   */
  const header = (
    <div
      className={stringify(classNames.header, styled.header.className)}
      style={{ ...styled.header.style, ...themeColorVars }}
    >
      {closeButton}
      {props.title}

      {props.onConfirm && (
        <Space className={styled.actions.className} style={styled.actions.style}>
          <Button onClick={props.onConfirm}>{locale.confirm}</Button>
        </Space>
      )}
    </div>
  );

  return (
    <Sheet
      open={open}
      placement={placement}
      size={size}
      closable={closable}
      onClose={props.onClose}
      className={classNames.drawer}
      header={header}
      panelStyle={{ backgroundColor: "var(--color-on-primary)" }}
    >
      {props.children}
    </Sheet>
  );
};

export default Drawer;
```

- [ ] **Step 3: Delete old files**

```bash
git rm src/components/drawer/popup.tsx
git rm src/components/drawer/hooks.ts
```

- [ ] **Step 4: Commit**

```bash
git add src/components/drawer/drawer.tsx src/components/drawer/context.ts
git commit -m "refactor(drawer): rewrite as thin Sheet wrapper, extract shared logic

- Replace popup.tsx with Sheet base component
- Move PLACEMENTS to sheet/hooks.ts
- Drawer now assembles its own header (title + closer + confirm)
- Public API unchanged

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 7: Rewrite BottomSheet as thin Sheet wrapper

**Files:**
- Modify: `src/components/bottom-sheet/bottom-sheet.tsx` — rewrite to use `<Sheet>`
- Modify: `src/components/bottom-sheet/context.ts` — remove unused class names (keep bottom-sheet-specific)
- Delete: `src/components/bottom-sheet/sheet.tsx` — logic replaced by Sheet base

**Interfaces:**
- Consumes: `Sheet` from `../sheet`, `BottomSheetProps` from `../../types/bottom-sheet`
- Produces: `BottomSheet` component — public API unchanged

- [ ] **Step 1: Update bottom-sheet context**

```ts
/**
 * @description
 * class names for BottomSheet
 * BottomSheet 的 class 名称
 */
export const CLASS_NAMES = {
  sheet: "bottom-sheet",
  handle: "bottom-sheet__drag-handle",
} as const;
```

Rewrite `src/components/bottom-sheet/context.ts` with the above content.

- [ ] **Step 2: Rewrite bottom-sheet.tsx**

```tsx
import React from "react";
import type { BottomSheetProps } from "../../types/bottom-sheet";
import { Sheet } from "../sheet";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useThemeColorVars, type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { spacing, sizes } from "../theme/tokens.stylex";
import { CLASS_NAMES } from "./context";

/**
 * @description
 * BottomSheet-specific style: a centered drag handle pill.
 * Panel background and border-radius are passed via panelStyle prop on Sheet.
 * BottomSheet 专用样式：居中的拖拽手柄条。
 * 面板背景和圆角通过 Sheet 的 panelStyle 属性传入。
 */
const styles = $create({
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
});

/**
 * @description
 * BottomSheet component. A modal panel that slides up from the bottom
 * with a drag handle indicator. Built on the shared Sheet base component.
 * BottomSheet 组件。从底部滑入的模态面板，带有拖拽手柄指示器。
 * 基于共享的 Sheet 基础组件构建。
 */
const BottomSheet = ({
  open,
  height = "50vh",
  closable = true,
  ...props
}: BottomSheetProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const themeColorVars = useThemeColorVars(["surface-container", "on-surface-variant"]);

  const styled = {
    handle: $props(styles.handle),
  };

  /**
   * @description
   * BottomSheet-specific header: a centered drag handle pill.
   * BottomSheet 专用头部：居中的拖拽手柄条。
   */
  const header = (
    <div
      className={stringify(classNames.handle, styled.handle.className)}
      style={{ ...styled.handle.style, ...themeColorVars }}
    />
  );

  return (
    <Sheet
      open={open}
      placement="bottom"
      size={height}
      closable={closable}
      onClose={props.onClose}
      className={classNames.sheet}
      header={header}
      panelStyle={{
        backgroundColor: "var(--color-surface-container)",
        borderTopLeftRadius: "28px",
        borderTopRightRadius: "28px",
        maxHeight: "100vh",
      }}
    >
      {props.children}
    </Sheet>
  );
};

export default BottomSheet;
```

- [ ] **Step 3: Delete old sheet.tsx**

```bash
git rm src/components/bottom-sheet/sheet.tsx
```

- [ ] **Step 4: Commit**

```bash
git add src/components/bottom-sheet/bottom-sheet.tsx src/components/bottom-sheet/context.ts
git commit -m "refactor(bottom-sheet): rewrite as thin Sheet wrapper, remove independent implementation

- Replace sheet.tsx with Sheet base component
- BottomSheet now only owns the drag handle + panel styling
- overscroll-behavior: contain moved to Sheet base body
- Public API unchanged

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 8: Verify tests and build

**Files:**
- Existing tests: `src/components/bottom-sheet/__test__/index.test.tsx`
- Existing tests: `src/components/drawer/__test__/` (if any)

**Interfaces:**
- Consumes: `BottomSheet` from `../bottom-sheet`, `Drawer` from `../drawer`
- Note: The bottom-sheet tests reference class names like `.musae-bottom-sheet__overlay`, `.musae-bottom-sheet__panel`, `.musae-bottom-sheet__drag-handle`. After the refactor, the overlay and panel elements use Sheet's class names (`musae-sheet__overlay`, `musae-sheet__panel`), while the drag handle class is still applied by the BottomSheet wrapper.

- [ ] **Step 1: Update BottomSheet tests for new class names**

The overlay and panel are now rendered by Sheet base, so their BEM classes come from `sheet/context.ts` (prefixed with `musae-sheet`). Update the test selectors accordingly:

```tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BottomSheet } from "../index";

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

    const overlay = document.querySelector(".musae-sheet__overlay");
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
    const panel = document.querySelector(".musae-sheet__panel");
    expect(panel).toBeInTheDocument();
    expect(panel).toHaveStyle({ height: "300px" });
  });

  it("respects closable prop — does not close on overlay click when closable excludes overlay", async () => {
    const onClose = jest.fn();
    render(<TestBottomSheet onClose={onClose} closable={["esc"]} />);

    const overlay = document.querySelector(".musae-sheet__overlay");
    await userEvent.click(overlay!);
    expect(onClose).not.toHaveBeenCalled();
  });
});
```

- [ ] **Step 2: Run BottomSheet tests**

```bash
npx jest src/components/bottom-sheet/__test__/index.test.tsx --no-coverage
```

Expected: All 7 tests PASS.

- [ ] **Step 3: Find and run Drawer tests**

```bash
find src/components/drawer -name "*.test.*" 2>/dev/null && npx jest src/components/drawer --no-coverage || echo "No drawer tests found"
```

- [ ] **Step 4: Run full test suite**

```bash
pnpm run test
```

Expected: All existing tests pass.

- [ ] **Step 5: Verify build**

```bash
pnpm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/bottom-sheet/__test__/index.test.tsx
git commit -m "test(bottom-sheet): update selectors to match shared Sheet base class names

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 9: Verify Storybook

**Files:**
- Existing: `stories/bottom-sheet.stories.tsx`

**Interfaces:**
- Consumes: `BottomSheet` from `musae`

- [ ] **Step 1: Build and check Storybook**

```bash
pnpm run build-storybook 2>&1 | tail -20
```

Expected: Build succeeds. If there are import errors related to the refactoring, fix them.

- [ ] **Step 2: Fix any issues and commit**

```bash
git add -A
git commit -m "chore: fix storybook build after sheet refactor

Co-Authored-By: Claude <noreply@anthropic.com>"
```
