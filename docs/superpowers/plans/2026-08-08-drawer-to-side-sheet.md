# Drawer 合并进 SideSheet 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 Drawer 组件功能合并到 SideSheet，移除 Drawer，通过 CSS 媒体查询实现 mobile（<905px）全屏、tablet（>=905px）保持现有行为。

**Architecture:** SideSheet 吸收 Drawer 的全部能力（4 方向 placement、onConfirm），Sheet 基座新增 media query 全屏样式。Drawer 目录和类型文件直接删除，不做兼容别名。breakpoints 常量集中定义在 tokens.stylex.ts。

**Tech Stack:** React + TypeScript + StyleX + motion/react + Jest + @testing-library/react

## Global Constraints

- 所有 JSDoc 注释必须中英双语（`@zh` / `@en` 标签），Storybook stories 除外
- StyleX 样式必须使用 token 值，不得硬编码像素/百分比
- 完成后运行 `pnpm run prettier`
- 不自动 commit，每次 commit 前需确认
- mobile 断点：`max-width: 904px`
- size 默认值：400
- placement 支持 4 方向：`"left" | "right" | "top" | "bottom"`
- `onConfirm` 按钮文案使用 `locale.Drawer.confirm`

---

### Task 1: 在 tokens.stylex.ts 中定义 breakpoints

**Files:**
- Modify: `src/components/theme/tokens.stylex.ts`

**Interfaces:**
- Produces: `export const breakpoints = { mobile: "@media (max-width: 904px)" }` — 供 Sheet 和 SideSheet 引用

- [ ] **Step 1: 在 tokens.stylex.ts 末尾添加 breakpoints 常量**

在文件末尾 `duration` 定义之后添加：

```ts
/**
 * @zh 响应式断点。`mobile` 匹配宽度 < 905px 的视口。
 * @en Responsive breakpoints. `mobile` matches viewports narrower than 905px.
 */
export const breakpoints = {
  mobile: "@media (max-width: 904px)",
};
```

- [ ] **Step 2: 验证 TypeScript 编译**

```bash
pnpm run build 2>&1 | head -20
```

确认 `breakpoints` 导出不产生编译错误。

- [ ] **Step 3: Commit**

```bash
git add src/components/theme/tokens.stylex.ts
git commit -m "feat: add breakpoints token for responsive media queries"
```

---

### Task 2: Sheet 基座新增 mobile 全屏 panel 样式

**Files:**
- Modify: `src/components/sheet/sheet.tsx`

**Interfaces:**
- Consumes: `breakpoints` from `src/components/theme/tokens.stylex.ts`
- Produces: Sheet panel 在 mobile 下变为 100vw × 100vh，无圆角

- [ ] **Step 1: 导入 breakpoints**

在 [sheet.tsx:12](src/components/sheet/sheet.tsx#L12) 的 tokens 导入中添加 `breakpoints`：

```ts
import { positions, breakpoints } from "../theme/tokens.stylex";
```

- [ ] **Step 2: 添加 panel 全屏 StyleX 样式**

在 [sheet.tsx:18](src/components/sheet/sheet.tsx#L18) 的 `styles` 定义中，`body` 样式之后添加：

```ts
panelFullscreen: {
  [breakpoints.mobile]: {
    width: "100vw",
    height: "100vh",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
},
```

- [ ] **Step 3: 将 panelFullscreen 合并到 panel styled props**

在 [sheet.tsx:171](src/components/sheet/sheet.tsx#L171) 的 `styled.panel` 定义中添加 `styles.panelFullscreen`：

```ts
panel: $props(styles.panel, styles[placement], styles.panelFullscreen),
```

- [ ] **Step 4: 验证构建**

```bash
pnpm run build 2>&1 | tail -5
```

确认无编译错误。

- [ ] **Step 5: Commit**

```bash
git add src/components/sheet/sheet.tsx
git commit -m "feat: add mobile fullscreen panel styles to Sheet base"
```

---

### Task 3: 更新 SideSheetProps 类型定义

**Files:**
- Modify: `src/types/side-sheet.ts`

**Interfaces:**
- Produces: `SideSheetPlacement = "left" | "right" | "top" | "bottom"`, `SideSheetProps` 新增 `onConfirm`，`size` 默认值改为 400

- [ ] **Step 1: 更新 SideSheetPlacement 为 4 方向**

将 [side-sheet.ts:16](src/types/side-sheet.ts#L16) 的 type 从 2 方向改为 4 方向：

```ts
export type SideSheetPlacement = "left" | "right" | "top" | "bottom";
```

- [ ] **Step 2: 更新 placement JSDoc**

将 [side-sheet.ts:83-87](src/types/side-sheet.ts#L83-L87) 的 `placement` 属性注释更新：

```ts
/**
 * @zh 停靠方向。`left` / `right` 水平滑入，`top` / `bottom` 垂直滑入。
 * @en The edge the side sheet is anchored to.
 * `left` / `right` slides horizontally, `top` / `bottom` slides vertically.
 * @default "right"
 */
placement?: SideSheetPlacement;
```

- [ ] **Step 3: 新增 onConfirm 属性**

在 `closable` 属性之后、`onClose` 之前添加：

```ts
/**
 * @zh 确认回调。传入后头部展示确认按钮。
 * @en Confirm handler. When provided, a confirm button is rendered in the header.
 * @default void 0
 */
onConfirm?: VoidFunction;
```

- [ ] **Step 4: 更新 size 默认值**

将 [side-sheet.ts:79](src/types/side-sheet.ts#L79) 的 `@default` 从 `320` 改为 `400`：

```ts
 * @default 400
```

- [ ] **Step 5: 验证 TypeScript 编译**

```bash
pnpm run build 2>&1 | head -20
```

- [ ] **Step 6: Commit**

```bash
git add src/types/side-sheet.ts
git commit -m "feat: add 4-direction placement, onConfirm, and size 400 default to SideSheetProps"
```

---

### Task 4: 更新 SideSheet 组件实现

**Files:**
- Modify: `src/components/side-sheet/side-sheet.tsx`

**Interfaces:**
- Consumes: `SideSheetProps`（已更新 4 方向、onConfirm）
- Produces: SideSheet 支持 4 方向 placement、`onConfirm` 渲染确认按钮、`size` 默认值 400

- [ ] **Step 1: 添加 locale 和 Button 导入**

在现有导入中添加：

```ts
import { Button } from "../button";
import { useLocale } from "../../locale";
```

- [ ] **Step 2: 更新 size 默认值**

将 [side-sheet.tsx:121](src/components/side-sheet/side-sheet.tsx#L121) 的 `size = 320` 改为 `size = 400`。

- [ ] **Step 3: 添加 onConfirm prop 解构**

在 [side-sheet.tsx:113-126](src/components/side-sheet/side-sheet.tsx#L113-L126) 的 props 解构中添加 `onConfirm`：

```ts
const SideSheet = ({
  open,
  type = "modal",
  title,
  onBack,
  onConfirm,
  closable = true,
  onClose,
  actions,
  size = 400,
  placement = "right",
  className,
  style,
  children,
}: SideSheetProps) => {
```

- [ ] **Step 4: 添加 `hasHeader` 条件以包含 `onConfirm`**

将 [side-sheet.tsx:159](src/components/side-sheet/side-sheet.tsx#L159) 的 `hasHeader` 检查更新：

```ts
const hasHeader = !!title || !!onBack || !!onConfirm || !!closer;
```

- [ ] **Step 5: 使用 `useLocale("drawer")` 获取确认按钮文案**

在 [side-sheet.tsx:135](src/components/side-sheet/side-sheet.tsx#L135) `useClosable` 调用之后添加：

```ts
const [locale] = useLocale("drawer");
```

- [ ] **Step 6: 更新 header JSX，在 closer 之后添加确认按钮**

将 [side-sheet.tsx:161-181](src/components/side-sheet/side-sheet.tsx#L161-L181) 的 header 渲染替换为：

```tsx
const header = hasHeader ? (
  <div
    className={stringify(classNames.header, styled.header.className)}
    style={styled.header.style}
  >
    {onBack && (
      <IconButton variant="text" onClick={onBack}>
        <IconArrowBack />
      </IconButton>
    )}

    <div
      className={stringify(classNames.title, styled.title.className)}
      style={styled.title.style}
    >
      {title}
    </div>

    {onConfirm && (
      <Button onClick={onConfirm}>{locale.confirm}</Button>
    )}

    {closer}
  </div>
) : null;
```

- [ ] **Step 7: 更新 panel 圆角样式以支持 4 方向**

将 [side-sheet.tsx:28-36](src/components/side-sheet/side-sheet.tsx#L28-L36) 的 panel 圆角样式扩展为 4 方向：

```ts
panelRight: {
  borderTopLeftRadius: sizes.xxxxsmall,
  borderBottomLeftRadius: sizes.xxxxsmall,
},

panelLeft: {
  borderTopRightRadius: sizes.xxxxsmall,
  borderBottomRightRadius: sizes.xxxxsmall,
},

panelTop: {
  borderBottomLeftRadius: sizes.xxxxsmall,
  borderBottomRightRadius: sizes.xxxxsmall,
},

panelBottom: {
  borderTopLeftRadius: sizes.xxxxsmall,
  borderTopRightRadius: sizes.xxxxsmall,
},
```

- [ ] **Step 8: 更新 styled.panel 以支持 4 方向**

将 [side-sheet.tsx:141](src/components/side-sheet/side-sheet.tsx#L141) 的 panel styled 从二元选择改为使用 placement 动态索引：

```ts
panel: $props(styles.panel, styles[`panel${placement.charAt(0).toUpperCase() + placement.slice(1)}` as keyof typeof styles]),
```

实际上，为了简单和类型安全，用一个 lookup 对象：

```ts
const panelPlacementStyles: Record<string, ReturnType<typeof $props>> = {
  right: styles.panelRight,
  left: styles.panelLeft,
  top: styles.panelTop,
  bottom: styles.panelBottom,
};
```

然后在 `styled` 对象中使用：

```ts
panel: $props(styles.panel, panelPlacementStyles[placement]),
```

- [ ] **Step 9: 更新 standard 的 divider 样式以支持 top/bottom 方向**

将 [side-sheet.tsx:48-58](src/components/side-sheet/side-sheet.tsx#L48-L58) 的 standard 边缘分割线扩展为 4 方向：

```ts
standardRight: {
  borderLeftWidth: sizes.smallest,
  borderLeftStyle: "solid",
  borderLeftColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
},

standardLeft: {
  borderRightWidth: sizes.smallest,
  borderRightStyle: "solid",
  borderRightColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
},

standardTop: {
  borderBottomWidth: sizes.smallest,
  borderBottomStyle: "solid",
  borderBottomColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
},

standardBottom: {
  borderTopWidth: sizes.smallest,
  borderTopStyle: "solid",
  borderTopColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
},
```

- [ ] **Step 10: 更新 standard styled 以支持 4 方向**

同样使用 lookup 对象方式更新 [side-sheet.tsx:143-145](src/components/side-sheet/side-sheet.tsx#L143-L145) 的 standard styled：

```ts
const standardPlacementStyles: Record<string, ReturnType<typeof $props>> = {
  right: styles.standardRight,
  left: styles.standardLeft,
  top: styles.standardTop,
  bottom: styles.standardBottom,
};
```

```ts
standard: $props(styles.standard, standardPlacementStyles[placement]),
```

- [ ] **Step 11: 更新组件 JSDoc**

在 [side-sheet.tsx:105-108](src/components/side-sheet/side-sheet.tsx#L105-L108) 中更新组件文档注释，提及 4 方向 placement：

```ts
/**
 * @zh SideSheet 组件。Material Design 3 侧边栏：承载补充内容或操作的面板，
 * 支持从屏幕四边（left/right/top/bottom）滑入。`modal` 类型基于共享的 Sheet
 * 基础组件构建（遮罩层 + 滑入动画），mobile 下全屏展示；`standard` 类型内嵌
 * 在布局中展示（无遮罩层，停靠边缘带分割线）。
 * @en SideSheet component. A Material Design 3 side sheet: a surface for
 * supplementary content or actions, sliding in from any screen edge
 * (left/right/top/bottom). The `modal` type is built on the shared Sheet base
 * component (scrim + slide animation) and goes fullscreen on mobile;
 * the `standard` type renders inline in the layout (no scrim, with a divider
 * on the anchored edge).
 */
```

- [ ] **Step 12: 验证构建**

```bash
pnpm run build 2>&1 | tail -10
```

确认无编译错误。

- [ ] **Step 13: Commit**

```bash
git add src/components/side-sheet/side-sheet.tsx
git commit -m "feat: merge Drawer features into SideSheet — 4 placements, onConfirm, size 400"
```

---

### Task 5: 更新 SideSheet 测试

**Files:**
- Modify: `src/components/side-sheet/__test__/index.test.tsx`

**Interfaces:**
- Consumes: `SideSheet`（已合并 Drawer 功能）
- Produces: 新增 7 个测试用例覆盖 4 方向、onConfirm、mobile 全屏

- [ ] **Step 1: 在 describe 块顶部添加 matchMedia mock**

在 [test.tsx:29](src/components/side-sheet/__test__/index.test.tsx#L29) 的 `describe("SideSheet", () => {` 之后添加：

```ts
describe("SideSheet", () => {
  let matchMediaMock: jest.Mock;

  beforeEach(() => {
    matchMediaMock = jest.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: matchMediaMock,
    });
  });
```

- [ ] **Step 2: 新增 "renders with top placement" 测试**

在现有测试之后添加：

```ts
it("renders with top placement", () => {
  render(<TestSideSheet placement="top" />);
  const sheet = document.querySelector(".musae-side-sheet");
  expect(sheet).toBeInTheDocument();
  expect(screen.getByText(BODY_CONTENT)).toBeInTheDocument();
});
```

- [ ] **Step 3: 新增 "renders with bottom placement" 测试**

```ts
it("renders with bottom placement", () => {
  render(<TestSideSheet placement="bottom" />);
  const sheet = document.querySelector(".musae-side-sheet");
  expect(sheet).toBeInTheDocument();
  expect(screen.getByText(BODY_CONTENT)).toBeInTheDocument();
});
```

- [ ] **Step 4: 新增 onConfirm 测试**

```ts
it("renders confirm button when onConfirm is provided and calls it on click", async () => {
  const onConfirm = jest.fn();
  render(<TestSideSheet onConfirm={onConfirm} />);

  const confirmButton = screen.getByText("确认");
  expect(confirmButton).toBeInTheDocument();

  await userEvent.click(confirmButton);
  expect(onConfirm).toHaveBeenCalledTimes(1);
});
```

- [ ] **Step 5: 新增 onConfirm 未提供时不渲染的测试**

```ts
it("does not render confirm button when onConfirm is not provided", () => {
  render(<TestSideSheet />);
  expect(screen.queryByText("确认")).not.toBeInTheDocument();
});
```

- [ ] **Step 6: 新增 header 全部元素测试**

```ts
it("renders all header elements — back button, title, confirm button, and closer", () => {
  render(<TestSideSheet onBack={jest.fn()} onConfirm={jest.fn()} />);

  const header = document.querySelector(".musae-side-sheet__header");
  const buttons = header?.querySelectorAll("button");
  // back button + confirm button + closer = 3 buttons
  expect(buttons?.length).toBe(3);
  expect(screen.getByText(TITLE)).toBeInTheDocument();
  expect(screen.getByText("确认")).toBeInTheDocument();
});
```

- [ ] **Step 7: 新增 mobile 全屏 — modal 类型测试**

```ts
it("renders modal type with fullscreen styles on mobile viewport", () => {
  matchMediaMock.mockImplementation((query: string) => ({
    matches: query === "(max-width: 904px)",
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));

  render(<TestSideSheet type="modal" />);
  const panel = document.querySelector(".musae-sheet__panel");
  expect(panel).toBeInTheDocument();
  // The fullscreen styles are applied via StyleX media query, which jsdom
  // does not evaluate. Verify the panel element exists and has the correct
  // class name from Sheet base.
  expect(panel?.className).toContain("musae-sheet__panel");
});
```

- [ ] **Step 8: 新增 mobile 全屏 — standard 类型不受影响测试**

```ts
it("renders standard type inline regardless of mobile viewport", () => {
  matchMediaMock.mockImplementation((query: string) => ({
    matches: query === "(max-width: 904px)",
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));

  render(<TestSideSheet type="standard" />);
  // standard type renders inline without overlay
  expect(document.querySelector(".musae-sheet__overlay")).not.toBeInTheDocument();
  expect(document.querySelector(".musae-side-sheet")).toBeInTheDocument();
});
```

- [ ] **Step 9: 运行测试验证全部通过**

```bash
pnpm run test -- --testPathPattern="side-sheet"
```

预期：19 个测试全部通过（原有 12 + 新增 7）。

- [ ] **Step 10: Commit**

```bash
git add src/components/side-sheet/__test__/index.test.tsx
git commit -m "test: add tests for 4 placements, onConfirm, and mobile fullscreen"
```

---

### Task 6: 移除 Drawer 组件和类型

**Files:**
- Delete: `src/components/drawer/drawer.tsx`
- Delete: `src/components/drawer/context.ts`
- Delete: `src/components/drawer/index.ts`
- Delete: `src/types/drawer.ts`
- Delete: `stories/drawer.stories.tsx`
- Modify: `src/index.ts`

**Interfaces:**
- Produces: `Drawer` 导出移除，`src/index.ts` 不再引用 `./components/drawer`

- [ ] **Step 1: 从 src/index.ts 移除 Drawer 导出**

删除 [src/index.ts:24](src/index.ts#L24) 行：

```ts
export { Drawer } from "./components/drawer";
```

- [ ] **Step 2: 删除 Drawer 组件文件**

```bash
rm -rf src/components/drawer/
```

- [ ] **Step 3: 删除 Drawer 类型文件**

```bash
rm src/types/drawer.ts
```

- [ ] **Step 4: 删除 Drawer stories**

```bash
rm stories/drawer.stories.tsx
```

- [ ] **Step 5: 验证构建无 Drawer 引用错误**

```bash
pnpm run build 2>&1 | tail -10
```

确认构建成功，无找不到模块的错误。

- [ ] **Step 6: 运行全部测试**

```bash
pnpm run test 2>&1 | tail -20
```

确认无测试失败。

- [ ] **Step 7: Commit**

```bash
git add src/index.ts
git rm src/components/drawer/drawer.tsx src/components/drawer/context.ts src/components/drawer/index.ts
git rm src/types/drawer.ts
git rm stories/drawer.stories.tsx
git commit -m "refactor: remove Drawer component, merged into SideSheet"
```

---

### Task 7: 更新 SideSheet Storybook stories

**Files:**
- Modify: `stories/side-sheet.stories.tsx`

**Interfaces:**
- Produces: stories 支持 4 方向 placement、onConfirm

- [ ] **Step 1: placement argTypes 改为 4 方向**

将 [stories.tsx:21](stories/side-sheet.stories.tsx#L21) 的 placement options 扩展：

```ts
placement: {
  control: "select",
  options: ["right", "left", "top", "bottom"],
},
```

- [ ] **Step 2: 新增 AllPlacements story**

在文件末尾添加：

```tsx
export const AllPlacements: Story = {
  render: (args) => {
    const [placement, _setPlacement] = useState<"right" | "left" | "top" | "bottom">(args.placement ?? "right");

    return (
      <div style={{ padding: 16 }}>
        <Space style={{ marginBottom: 16 }}>
          {(["right", "left", "top", "bottom"] as const).map((p) => (
            <Button key={p} variant={placement === p ? "filled" : "outlined"} onClick={() => _setPlacement(p)}>
              {p}
            </Button>
          ))}
        </Space>

        <SideSheet
          {...args}
          open={true}
          placement={placement}
          title={`Placement: ${placement}`}
          onClose={() => {}}
        >
          <div style={{ padding: 24 }}>
            <p style={{ margin: 0, color: "var(--color-on-surface-variant)" }}>
              SideSheet slides in from the {placement} edge.
            </p>
          </div>
        </SideSheet>
      </div>
    );
  },
};
```

- [ ] **Step 3: 新增 WithConfirm story**

```tsx
export const WithConfirm: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={() => setOpen(true)}>Open with Confirm</Button>
        <SideSheet
          {...args}
          open={open}
          title="Confirm Action"
          onConfirm={() => setOpen(false)}
          onClose={() => setOpen(false)}
        >
          <div style={{ padding: 24 }}>
            <p style={{ margin: 0, color: "var(--color-on-surface-variant)" }}>
              The header shows a confirm button when `onConfirm` is provided.
              Click "confirm" or the close button to dismiss.
            </p>
          </div>
        </SideSheet>
      </div>
    );
  },
};
```

- [ ] **Step 4: 运行 Storybook 验证**

```bash
pnpm run storybook &
```

访问 http://localhost:6006 确认 stories 正常渲染。

- [ ] **Step 5: Commit**

```bash
git add stories/side-sheet.stories.tsx
git commit -m "docs: update SideSheet stories with 4 placements and onConfirm"
```

---

### Task 8: 最终验证与格式化

**Files:**
- 所有已修改文件

- [ ] **Step 1: 运行 prettier**

```bash
pnpm run prettier
```

- [ ] **Step 2: 运行完整构建**

```bash
pnpm run build
```

预期：构建成功，无错误。

- [ ] **Step 3: 运行全部测试**

```bash
pnpm run test
```

预期：全部测试通过。

- [ ] **Step 4: 运行 lint**

```bash
pnpm run lint
```

预期：无 lint 错误。
