# Drawer 合并进 SideSheet 设计文档

## 概述

将 `Drawer` 组件功能合并到 `SideSheet` 组件中，移除 `Drawer`，由 `SideSheet` 统一承载所有边缘滑出面板场景。同时引入 CSS 媒体查询实现响应式行为：mobile（`< 905px`）下 SideSheet 全屏展示，tablet（`>= 905px`）保持现有 Drawer 行为。

## 动机

- `Drawer` 和 `SideSheet` 功能高度重叠，两者都是基于 `Sheet` 基座的薄封装
- 维护两个独立组件增加不必要的复杂度
- 需要统一 API 并支持 mobile 全屏响应式行为

## SideSheet API 变更

### Props

| Prop | 变更前 | 变更后 |
|------|--------|--------|
| `placement` | `"left" \| "right"` | `"left" \| "right" \| "top" \| "bottom"` |
| `onConfirm` | — | `VoidFunction`（可选，header 右侧渲染确认按钮） |
| `size` 默认值 | `320` | `400` |
| `type` | `"standard" \| "modal"` | 不变 |
| `title` | `ReactNode` | 不变 |
| `onBack` | `VoidFunction` | 不变 |
| `closable` | `boolean \| Closable[]` | 不变 |
| `onClose` | `VoidFunction` | 不变 |
| `actions` | `ReactNode` | 不变 |

### Header 渲染逻辑

Header 仅当 `title`、`onBack`、`onConfirm` 或 `closable` 存在时渲染：

- 返回按钮（`onBack` 存在时）→ 左侧
- 标题 → 中间
- 确认按钮（`onConfirm` 存在时，文案使用 `locale.Drawer.confirm`）→ 右侧
- 关闭按钮 → 右侧（确认按钮之后）

### 类型定义

```ts
// src/types/side-sheet.ts
type SideSheetType = "standard" | "modal";
type SideSheetPlacement = "left" | "right" | "top" | "bottom";

interface SideSheetProps extends ComponentProps {
  open: boolean;
  type?: SideSheetType; // 默认 "modal"
  title?: ReactNode;
  onBack?: VoidFunction;
  closable?: boolean | Closable[]; // 默认 true
  onClose?: VoidFunction;
  onConfirm?: VoidFunction; // 新增
  actions?: ReactNode;
  size?: number | string; // 默认 400（从 320 变更）
  placement?: SideSheetPlacement; // 默认 "right"（4 方向）
  children?: ReactNode;
}
```

## 响应式行为

### 断点

在 `src/components/theme/tokens.stylex.ts` 中定义：

```ts
const breakpoints = {
  mobile: "@media (max-width: 904px)",
};
```

### mobile 模式（`< 905px`）

仅对 `type="modal"` 生效：

- Panel 全屏：`width: 100vw; height: 100vh`
- 圆角：`borderRadius: 0`
- 动画：从 placement 方向滑入（与 tablet 一致，仅尺寸不同）
- Overlay 仍然渲染，但被 panel 完全覆盖

### tablet 模式（`>= 905px`）

与当前 Drawer 行为完全一致：

- Panel 宽度 = `--size` CSS 变量（由 `size` prop 控制）
- 圆角保留在锚定边缘
- 从 placement 方向滑入

### `standard` 类型

不受媒体查询影响，始终保持内联渲染。

## Sheet 基座变更

`src/components/sheet/sheet.tsx` 的 panel 样式新增移动端全屏覆盖：

```tsx
// 在 styles.ts 或 sheet.tsx 中
const panelFullscreen = $create({
  [breakpoints.mobile]: {
    width: "100vw",
    height: "100vh",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
```

Panel 组件应用此样式与现有 panel 样式合并。

动画逻辑（`PLACEMENTS` map、`animate()` 调用）**不变** — mobile 全屏仅改变 CSS 尺寸，transform 动画从边缘滑入保持一致。

## 文件变更清单

| 操作 | 文件 | 说明 |
|------|------|------|
| ✏️ 修改 | `src/components/side-sheet/side-sheet.tsx` | 合并 Drawer 功能 |
| ✏️ 修改 | `src/types/side-sheet.ts` | 合并类型：4 方向、`onConfirm` |
| ✏️ 修改 | `src/components/sheet/sheet.tsx` | 新增 mobile 全屏 panel 样式 |
| ✏️ 修改 | `src/components/theme/tokens.stylex.ts` | 新增 `breakpoints` token |
| ✏️ 修改 | `src/index.ts` | 移除 `Drawer` 导出 |
| ✏️ 修改 | `stories/side-sheet.stories.tsx` | 新增 placement、onConfirm、mobile 预览 story |
| ✏️ 修改 | `src/components/side-sheet/__test__/index.test.tsx` | 新增测试用例 |
| ❌ 删除 | `src/components/drawer/` | 整个目录 |
| ❌ 删除 | `src/types/drawer.ts` | 类型已合并 |
| ❌ 删除 | `stories/drawer.stories.tsx` | 关键 story 迁移到 side-sheet |

## 向后兼容

**破坏性变更：** `Drawer` 组件直接移除，不做 deprecated 别名。消费者需将 `import { Drawer }` 替换为 `import { SideSheet }`，并按新 API 调整 props。

## 测试策略

在现有 12 个 SideSheet 测试用例基础上新增：

### 新增测试用例

1. **`top` placement** — 面板从顶部滑入
2. **`bottom` placement** — 面板从底部滑入
3. **`onConfirm` prop** — 传入后渲染确认按钮，点击触发回调
4. **确认按钮文案** — 使用 `locale.Drawer.confirm`
5. **mobile 全屏 — modal 类型** — mock `matchMedia("(max-width: 904px)")` 返回 true，验证 panel 全屏样式
6. **mobile 全屏 — standard 类型不受影响** — mock matchMedia 后 standard 类型仍为内联渲染
7. **header 全部元素** — `onBack` + `title` + `onConfirm` + closer 同时存在时布局正确

### matchMedia Mock

Jest/jsdom 环境下 `window.matchMedia` 默认不可用，测试需 mock：

```ts
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: query === "(max-width: 904px)",
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
```

## 相关组件

- **`Sheet`**（`src/components/sheet/`）— 共享基座，提供 Portal、定位、动画、overlay、焦点管理、滚动锁定
- **`BottomSheet`**（`src/components/bottom-sheet/`）— Sheet 的另一个薄封装，不受影响
- **`ActionSheet`**（`src/components/action-sheet/`）— 基于 Sheet，不受影响
