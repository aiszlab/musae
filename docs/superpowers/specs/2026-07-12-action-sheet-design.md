# ActionSheet Component Design

## Overview

移动端底部操作面板组件（ActionSheet），基于 `Sheet` 基础组件构建，支持操作列表展示和二次确认场景。同时提供声明式组件和指令式 API 两种调用方式。

## API Design

### Declarative

```tsx
const [open, setOpen] = useState(false);

<ActionSheet
  open={open}
  onClose={() => setOpen(false)}
  actions={[
    { key: "edit", text: "编辑", onClick: () => {} },
    { key: "delete", text: "删除", onClick: () => {} },
  ]}
  title="操作"
  description="请选择你要执行的操作"
/>
```

### Imperative

```tsx
ActionSheet.show({
  title: "操作",
  description: "请选择你要执行的操作",
  actions: [
    { key: "photo", text: "拍照", onClick: () => {} },
    { key: "album", text: "从相册选择", onClick: () => {} },
  ],
});
```

- `ActionSheet.show(config)` 返回 `Promise<void>`，面板关闭时 resolve。
- 取消按钮自动追加到 actions 列表末尾，默认文案通过 locale 系统提供（中文 "取消"，英文 "Cancel"）。

## Types

```ts
import type { ReactNode } from "react";
import type { ComponentProps } from "./element";

interface ActionItem {
  /**
   * @zh 操作项唯一标识
   * @en Unique identifier for the action item
   */
  key: string;

  /**
   * @zh 操作项显示文本
   * @en Display text for the action item
   */
  text: ReactNode;

  /**
   * @zh 点击操作项时的回调
   * @en Callback when the action item is clicked
   */
  onClick?: () => void;

  /**
   * @zh 操作项描述文本（可选副标题），显示在 text 下方
   * @en Optional description text displayed below the main text
   */
  description?: ReactNode;
}

interface ActionSheetProps extends ComponentProps {
  /**
   * @zh 控制 ActionSheet 的可见状态
   * @en Controls the visibility state of the ActionSheet
   */
  open: boolean;

  /**
   * @zh 当 ActionSheet 请求关闭时的回调
   * @en Called when the ActionSheet requests to close
   */
  onClose: VoidFunction;

  /**
   * @zh 操作项列表
   * @en List of action items
   */
  actions: ActionItem[];

  /**
   * @zh 顶部标题（可选）
   * @en Optional title displayed at the top
   */
  title?: ReactNode;

  /**
   * @zh 标题下方的描述文本（可选）
   * @en Optional description text displayed below the title
   */
  description?: ReactNode;

  /**
   * @zh 取消按钮文本。默认使用 locale 中的 cancel 文案
   * @en Cancel button text. Uses locale cancel text by default
   */
  cancelText?: ReactNode;

  /**
   * @zh 面板高度。接受数字（px）或任意 CSS 高度值
   * @en Height of the panel. Accepts number (px) or any CSS height value
   * @default "fit-content"
   */
  height?: number | string;
}

interface ActionSheetShowConfig
  extends Omit<ActionSheetProps, "open" | "onClose"> {}
```

### 声明式与指令式的关系

| 特性 | 声明式 | 指令式 |
|------|--------|--------|
| 适用场景 | 组件内有明确的状态管理 | 事件回调、跨组件调用 |
| 使用方式 | `<ActionSheet open={...} />` | `ActionSheet.show({...})` |
| 返回值 | — | `Promise<void>` |

## Component Architecture

### 组件结构

```
src/components/action-sheet/
  action-sheet.tsx    -- 声明式组件（主体）
  notifier.tsx         -- 指令式 API（Notifier + Holder）
  context.ts           -- BEM class 名称常量
  index.ts             -- 统一导出
```

### 组件层次

```
ActionSheet (声明式入口)
  └── Sheet (placement="bottom")
        ├── Header: drag handle + title + description
        ├── Body: action items list
        │     └── ActionItem (×N, 全宽点击区域)
        └── Footer: cancel button (与操作区分隔)
```

### 指令式 API 层次

```
ActionSheet.show(config)
  └── ActionSheetNotifier.singleton
        └── createRoot → ActionSheetHolder (管理 open/close 状态)
              └── ActionSheet (声明式)
```

## Style Design

### BEM Class Names

```
musae-action-sheet               -- 根容器（面板）
musae-action-sheet__header       -- 头部区域（drag handle + title）
musae-action-sheet__title        -- 标题
musae-action-sheet__description  -- 描述
musae-action-sheet__actions      -- 操作列表容器
musae-action-sheet__action       -- 单个操作项
musae-action-sheet__action-text  -- 操作项文本
musae-action-sheet__action-desc  -- 操作项描述
musae-action-sheet__cancel       -- 取消按钮容器
```

### StyleX 样式要点

- 操作项：全宽点击区域，垂直 padding，水平居中文字
- 操作项之间：1px 分隔线（使用 `outline-variant` 颜色）
- 取消按钮：与操作列表之间有视觉分隔（`surface-container-low` 背景或更宽的间距）
- Drag handle：复用 BottomSheet 的 handle 样式
- 使用 `tokens.stylex.ts` 中的 token 值，不硬编码尺寸

## Interaction Behavior

1. **打开**：面板从底部滑入，遮罩层渐显
2. **点击操作项**：先执行 `onClick` 回调（如果存在），无论回调是否抛错都关闭面板
3. **点击取消**：关闭面板，不执行任何操作项的回调
4. **点击遮罩层**：关闭面板（与取消逻辑一致）
5. **点击取消/遮罩层**：`onClose` 回调触发（声明式），或 Promise resolve（指令式）
6. **动画**：复用 Sheet 的 `placement="bottom"` 动画

## Locale

在 `src/types/locale.ts` 的 `Locale` 接口中新增：

```ts
"action-sheet": {
  cancel: string;
};
```

- `zh_CN`: `{ cancel: "取消" }`
- `en_US`: `{ cancel: "Cancel" }`

## Files to Create / Modify

| 操作 | 文件 |
|------|------|
| 新建 | `src/types/action-sheet.ts` |
| 新建 | `src/components/action-sheet/context.ts` |
| 新建 | `src/components/action-sheet/action-sheet.tsx` |
| 新建 | `src/components/action-sheet/notifier.tsx` |
| 新建 | `src/components/action-sheet/index.ts` |
| 修改 | `src/index.ts` — 添加 ActionSheet 导出 |
| 修改 | `src/types/locale.ts` — 添加 action-sheet locale 类型 |
| 修改 | `src/locale/locales/zh_CN.ts` — 添加中文文案 |
| 修改 | `src/locale/locales/en_US.ts` — 添加英文文案 |

## Testing Strategy

- 单元测试：`src/components/action-sheet/__test__/` 下添加 Jest 测试
- 测试覆盖：
  - 声明式渲染：open/close 状态切换
  - 操作项点击：onClick 触发 + 面板关闭
  - 取消按钮：面板关闭
  - 指令式 API：`ActionSheet.show()` 调用和 Promise resolve
  - 快照测试
