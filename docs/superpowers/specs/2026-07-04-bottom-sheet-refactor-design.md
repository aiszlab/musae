# BottomSheet Refactor — Extract shared Sheet base from Drawer

## Motivation / 动机

BottomSheet (`sheet.tsx`) and Drawer (`popup.tsx`) share ~80% of their implementation:

| Concern / 关注点 | Drawer | BottomSheet | Duplicated? / 重复? |
|---|---|---|---|
| Portal + lockable + visibility lifecycle | `drawer.tsx` | `bottom-sheet.tsx` | ✅ identical / 一致 |
| Fixed container + overlay + panel layout | `popup.tsx` | `sheet.tsx` | ✅ identical / 一致 |
| Open/close animations (fade + slide) | `popup.tsx` | `sheet.tsx` | ✅ identical pattern / 一致模式 |
| Keyboard (Escape) + overlay click dismiss | `popup.tsx` | `sheet.tsx` | ✅ both use `useClosable` / 都用 useClosable |
| Focus management | `popup.tsx` | `sheet.tsx` | ✅ identical / 一致 |
| Placement-based transforms | `hooks.ts` | hardcoded `translateY` | ✅ Drawer already supports "bottom" |
| Header / 头部区域 | Title + closer + confirm | Drag handle | ✅ slot pattern required / 需要插槽 |

Extract a shared `Sheet` base component so both Drawer and BottomSheet reuse the same infrastructure, with only their header/content customization differing.

提取共享的 `Sheet` 基础组件，Drawer 和 BottomSheet 复用同一套基础设施，仅头部/内容定制有所区别。

---

## Architecture / 架构

### Before / 重构前

```
Drawer (drawer.tsx)                  BottomSheet (bottom-sheet.tsx)
  ├── Portal lockable                   ├── Portal lockable          ← 重复
  └── Popup (popup.tsx)                 └── Sheet (sheet.tsx)       ← 重复
       ├── Container (fixed, inset:0)        ├── Container (fixed, inset:0)
       ├── Overlay (fade)                    ├── Overlay (fade)
       ├── Panel (slide, placement)          ├── Panel (slide, hardcoded bottom)
       │   ├── Header                        │   ├── DragHandle
       │   └── Body                          │   └── Body
       └── StackLevelContext
```

### After / 重构后

```
Sheet (new: src/components/sheet/)
  ├── Portal + lockable + visibility lifecycle
  ├── Container (fixed, inset:0) + Overlay (fade) + Panel (slide)
  ├── Placement-driven animation (from drawer/hooks.ts)
  ├── StackLevelContext
  ├── Header slot (render prop or ReactNode)
  └── Body (scrollable, overscroll-behavior: contain)

        Drawer (drawer.tsx)              BottomSheet (bottom-sheet.tsx)
        └── <Sheet                        └── <Sheet
              placement={placement}             placement="bottom"
              size={size}                       size={height}
              closable={closable}               closable={closable}
              header={<Header />}               header={<DragHandle />}
              overlayOpacity={0.8}              overlayOpacity={0.8}
            />                                />
```

---

## File Changes / 文件变更

```
新增:
  src/components/sheet/
    ├── index.ts                  # 导出 Sheet
    ├── sheet.tsx                 # 核心: Portal + overlay + panel + 动画 + placement
    ├── context.ts                # 共享 BEM class names
    └── hooks.ts                  # PLACEMENTS 移入此处

  src/types/sheet.ts              # SheetProps, Placement 类型定义

修改:
  src/components/drawer/
    ├── drawer.tsx                # 薄封装: 使用 <Sheet>，组装 Header
    └── context.ts                # 保留 drawer 特定 class names

  src/components/bottom-sheet/
    ├── bottom-sheet.tsx          # 薄封装: 使用 <Sheet>，组装 DragHandle
    └── context.ts                # 保留 bottom-sheet 特定 class names

删除:
  src/components/drawer/popup.tsx     # 逻辑合并到 drawer.tsx
  src/components/drawer/hooks.ts      # PLACEMENTS 移入 sheet/hooks.ts
  src/components/bottom-sheet/sheet.tsx  # 逻辑由 Sheet 基座替代

不变:
  src/types/drawer.ts                 # DrawerProps 公共 API 不变
  src/types/bottom-sheet.ts           # BottomSheetProps 公共 API 不变
  src/components/drawer/index.ts      # 导出不变
  src/components/bottom-sheet/index.ts # 导出不变
  src/components/bottom-sheet/__test__/ # 测试逻辑不变，导入路径可能调整
```

---

## Sheet Base Component / Sheet 基础组件

### Props (`src/types/sheet.ts`)

```ts
import type { ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { Closable } from "../hooks/use-closable";

/**
 * @description
 * Panel placement direction / 面板弹出方向
 */
export type Placement = "right" | "left" | "top" | "bottom";

/**
 * @description
 * Props for the shared Sheet base component / 共享 Sheet 基础组件的属性
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
   * Body content rendered below the header.
   * 渲染在头部下方的主体内容。
   */
  children?: ReactNode;
}
```

### Sheet component responsibilities / Sheet 组件职责

- **Portal lifecycle / Portal 生命周期**: wraps children in `<Portal lockable>`, manages `isVisible` state to keep the portal mounted during exit animation
- **Container / 容器**: `position: fixed; inset: 0; pointerEvents: none` — full-screen hit area that doesn't block clicks on elements behind it
- **Overlay / 遮罩层**: `position: absolute; inset: 0` with fade animation (opacity 0 → 0.8)
- **Panel / 面板**: `position: absolute` with placement-driven positioning and slide animation, using `motion/react` `animate()`
- **Placement system / 方位系统**: `PLACEMENTS` map from `hooks.ts` — `[hiddenTransform, visibleTransform]` for each direction
- **Keyboard & overlay dismiss / 键盘和遮罩关闭**: delegates to `useClosable` hook
- **Focus management / 焦点管理**: focuses the container on open to receive keyboard events
- **StackLevelContext / 层级上下文**: provides z-index stacking for nested overlay components
- **Scroll lock / 滚动锁定**: via Portal's `lockable` prop — locks `document.body` when open

### Placement transforms / 方位变换 (`src/components/sheet/hooks.ts`)

```ts
import type { Placement } from "../../types/sheet";

/**
 * @description
 * Hidden and visible transform values for each placement direction.
 * 每个弹出方向的隐藏和显示变换值。
 * [hidden, visible]
 */
export const PLACEMENTS: Record<Placement, [hidden: string, visible: string]> = {
  right: ["translateX(100%)", "translateX(0)"],
  left: ["translateX(-100%)", "translateX(0)"],
  bottom: ["translateY(100%)", "translateY(0)"],
  top: ["translateY(-100%)", "translateY(0)"],
};
```

### Context / 上下文 (`src/components/sheet/context.ts`)

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

---

## Drawer Changes / Drawer 变更

`drawer.tsx` becomes a thin wrapper around `<Sheet>`:

```tsx
import React from "react";
import type { DrawerProps } from "../../types/drawer";
import { Sheet } from "../sheet";
import { Button } from "../button";
import { Space } from "../space";
import { useLocale } from "../../locale";
import { useClosable } from "../../hooks/use-closable";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useThemeColorVars, type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { $body } from "../theme/theme";
import { CLASS_NAMES } from "./context";

// Drawer-specific header styles / Drawer 专用头部样式
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

const Drawer = ({
  open,
  size = 400,
  closable = true,
  placement = "right",
  ...props
}: DrawerProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const [locale] = useLocale("drawer");
  const themeColorVars = useThemeColorVars(["outline-variant"]);
  const { closer } = useClosable({ closable, onClose: props.onClose });

  const styled = {
    header: $props($body.large, styles.header),
    actions: $props(styles.actions),
  };

  /**
   * @description
   * Drawer-specific header: closer icon + title + confirm button.
   * Drawer 专用头部：关闭图标 + 标题 + 确认按钮。
   */
  const header = (
    <div
      className={stringify(classNames.header, styled.header.className)}
      style={{ ...styled.header.style, ...themeColorVars }}
    >
      {closer}
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
      className={props.className}
      header={header}
    >
      {props.children}
    </Sheet>
  );
};

export default Drawer;
```

Changes:
- `popup.tsx` — **deleted**, header rendering moves into `drawer.tsx`
- `hooks.ts` — **deleted**, `PLACEMENTS` moves into `sheet/hooks.ts`
- `drawer.tsx` — **rewritten** as thin wrapper, assembles its own header
- `context.ts` — keeps `drawer`, `drawer__overlay`, `drawer__panel`, `drawer__header`, `drawer__body` class names (used for Drawer-specific header and for CSS customization hooks)

---

## BottomSheet Changes / BottomSheet 变更

`bottom-sheet.tsx` becomes a thin wrapper around `<Sheet>`:

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

// BottomSheet-specific drag handle style / BottomSheet 专用拖拽手柄样式
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

const BottomSheet = ({
  open,
  height = "50vh",
  closable = true,
  ...props
}: BottomSheetProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const themeColorVars = useThemeColorVars(["on-surface-variant"]);

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
      className={props.className}
      header={header}
    >
      {props.children}
    </Sheet>
  );
};

export default BottomSheet;
```

Changes:
- `sheet.tsx` — **deleted**, replaced by `<Sheet>` base
- `bottom-sheet.tsx` — **rewritten** as thin wrapper, assembles its own drag handle
- `context.ts` — keeps `bottom-sheet`, `bottom-sheet__overlay`, `bottom-sheet__panel`, `bottom-sheet__drag-handle`, `bottom-sheet__body` class names

---

## Panel Styling / 面板样式

Drawer and BottomSheet have different panel styling (background color, border radius). The `<Sheet>` base uses neutral defaults, and callers customize via:

1. **Panel background**: Sheet base panel uses `var(--color-surface-container)` as default. Drawer can override via `className` + custom StyleX style with `backgroundColor: "var(--color-on-primary)"`.
2. **Border radius**: Sheet base panel has no border radius by default. BottomSheet adds `borderTopLeftRadius` + `borderTopRightRadius` via `className` + custom StyleX style.
3. **`overscrollBehavior: "contain"`** on the body to prevent scroll chaining — applied in the Sheet base.

These overrides are composed via the `className` prop that Sheet applies to the panel element.

---

## Backward Compatibility / 向后兼容

- **Drawer public API** (`DrawerProps`) — unchanged
- **BottomSheet public API** (`BottomSheetProps`) — unchanged
- **Exports** from `src/index.ts` — unchanged
- **CSS class names** — Drawer and BottomSheet retain their existing BEM prefixes
- **Tests** — existing test suites remain in their current locations, assertions unchanged

---

## Implementation Order / 实施顺序

1. Create `src/components/sheet/` (context, hooks, sheet.tsx, index.ts)
2. Create `src/types/sheet.ts`
3. Rewrite `src/components/drawer/drawer.tsx` to use `<Sheet>`, delete `popup.tsx` and `hooks.ts`
4. Rewrite `src/components/bottom-sheet/bottom-sheet.tsx` to use `<Sheet>`, delete `sheet.tsx`
5. Run all existing tests, fix any issues
6. Verify build
