# Typography Component Design

**Date:** 2026-08-07
**Scope:** Mobile directory (`src/mobile/typography/`)

## Overview

提供一个 `Typography` 组件，封装 Material Design 3 字体排版体系。已有的 M3 字体样式（`$display`、`$headline`、`$title`、`$body`、`$label`）定义在 `src/components/theme/theme.ts` 中，本组件提供声明式的 React 组件接口来消费这些样式。

## API

### Compound Components

`Typography` 通过 `Object.assign` 挂载 5 个子组件，每个子组件映射到固定的语义 HTML 元素：

| 子组件 | HTML 元素 | 可用 size |
|--------|----------|-----------|
| `Typography.Display` | `<h1>` | large, medium, small |
| `Typography.Headline` | `<h2>` | large, medium, small |
| `Typography.Title` | `<h3>` | large, medium, small |
| `Typography.Label` | `<span>` | large, medium, small |
| `Typography.Body` | `<p>` | large, medium, small |

### Props

每个子组件接受相同的 props 接口：

```ts
interface TypographyProps extends ComponentProps {
  /**
   * @zh 字体尺寸等级
   * @en Font size level
   * @default "medium"
   */
  size?: "large" | "medium" | "small";
  children?: ReactNode;
}
```

- `className` 和 `style` 继承自 `ComponentProps`，透传给底层 HTML 元素
- `size` 默认值为 `"medium"`

### 使用示例

```tsx
<Typography.Display size="large">Display Large</Typography.Display>
<Typography.Headline size="medium">Headline Medium</Typography.Headline>
<Typography.Title size="small">Title Small</Typography.Title>
<Typography.Label size="large">Label</Typography.Label>
<Typography.Body size="medium">Body text</Typography.Body>
```

## Implementation

### 文件结构

```
src/mobile/typography/
  index.ts         # Public re-export
  typography.tsx    # Main component implementation
  context.ts        # BEM class name constants
src/types/typography.ts  # Type definition for TypographyProps
```

### 核心逻辑

1. 创建 `TypographyVariant` 内部组件，接收 `variant`（display/headline/title/label/body）、`size`、`element` 和常规 props
2. 根据 `variant` 从 `theme.ts` 中选择对应的 StyleX 样式对象（`$display`、`$headline` 等）
3. 通过 `$props()` 应用对应 size 的样式
4. 使用 `createElement` 渲染对应的 HTML 元素
5. 通过 `Object.assign` 创建 5 个具名子组件，组装成 `_Typography`

### 样式复用

直接消费 `src/components/theme/theme.ts` 中已有的样式，不创建新的 StyleX 样式：

- `$display.small` / `$display.medium` / `$display.large`
- `$headline.small` / `$headline.medium` / `$headline.large`
- `$title.small` / `$title.medium` / `$title.large`
- `$body.small` / `$body.medium` / `$body.large`
- `$label.small` / `$label.medium` / `$label.large`

### 导出

- 在 `src/mobile/index.ts` 中新增 `export { Typography } from "./typography"`
- 不在主 `src/index.ts` 中导出（mobile 独立打包入口）

## Testing

- 渲染测试：验证 5 种 variant × 3 种 size 共 15 种组合都能正确渲染
- Props 测试：验证 `className`、`style` 正确透传
- 快照测试：关键变体的快照

## Constraints

- 必须使用 `tokens.stylex.ts` 中的 token 值（虽然当前直接复用 `theme.ts` 样式，不涉及新的 token 使用）
- JSDoc 必须中英双语（`@zh` / `@en`）
- 遵循现有组件文件结构模式（`context.ts` + `typography.tsx` + `index.ts`）
- Prettier 格式化
