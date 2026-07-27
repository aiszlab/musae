# musae

## 1.1.0

### Minor Changes

- ### 🆕 新增组件
  - **Search** — 新增搜索组件，支持图标和输入功能，提供通用组件属性
  - **BottomSheet** — 新增底部弹出面板组件，支持拖拽手柄和动画效果
  - **ActionSheet** — 新增移动端底部操作面板组件
  - **CategoryPicker** — 新增分类选择器组件

  ### ✨ 功能增强
  - **Icon** — 新增 CalendarToday、Add、Remove、LocationOn、Share 等多个图标；重构图标命名为 `Icon` 前缀和 kebab-case 文件名；新增 av、communication、device、file、home、maps、notification、places、search、social 图标分类入口
  - **Tabs** — 新增 `size` 属性、`onChange` 回调，增强面板功能，优化导航和样式
  - **Tag** — 新增 `size` 和 `variant` 属性、`onClick` 事件处理，优化内边距样式
  - **Calendar** — 新增 `disabledDate` 属性，修复边距和日期单元格间距问题
  - **Select / Input / Picker** — 新增 `disabled` 属性支持
  - **Switch** — 新增 `onClick` 事件处理
  - **Form** — `getFieldValue` 新增泛型类型参数支持；新增 Reset 示例
  - **Theme** — 新增 `defaultMode` 属性、深色模式切换功能；颜色变量改用 CSS 计算代替 JS 计算
  - **Pagination** — 条件渲染尺寸选择器
  - **Checkbox** — 引入主题色样式变量

  ### 🐛 修复
  - **Progress** — 修复进度条宽度展示问题
  - **Image** — 修复图片全尺寸样式 `maxHeight` 改为 `height`
  - **Input / Search** — 更新 `boxShadow` 样式添加 `inset` 属性
  - **RichTextEditor** — 优化状态管理

  ### 🔧 工程
  - **StyleX** — 从 0.18.3 升级至 0.19.0
  - **Prettier** — 新增格式化脚本并格式化所有 ts/tsx 文件
  - **Sheet** — 提取共享 Sheet 组件，重构 BottomSheet 和 Drawer

## 1.0.15

### Patch Changes

- - `Button`组件回调优化: 同步点击回调事件不触发`loading`状态
  - `Tabs`组件游标的宽度计算 Bug 修复
- 0ab62ed: improve components apis

## 1.0.6

### Patch Changes

- fix: add pixel units to margin styles in Divider component

## 1.0.5

### Patch Changes

- refactor: move isInClient prop to MarkdownProps interface for better type management

## 1.0.4

### Patch Changes

- chore: remove debug log for selectedKeys in useContextValue

## 1.0.3

### Patch Changes

- chore: upgrade relax utils

## 1.0.2

### Patch Changes

- fix(progress): radius var invalid

## 1.0.1

### Patch Changes

- refactor

## 1.0.0

### Major Changes

- version release

## 0.5.15

### Patch Changes

- 2991257: add styles.css exports
- d2e5401: refactor: update TypeScript error comments to specify style variable context
- 266eff5: `Button` shape enhancement
- 4723c76: refactor: update CSS variable names to include 'color-' prefix for consistency
- 9572414: refactor: update Popover and Tooltip types for improved type safety and consistency

## 0.5.14

### Patch Changes

- chore: update package.json exports and remove unused banner function from rollup.config.js

## 0.5.13

### Patch Changes

- feature: split panel component

## 0.4.0

### Minor Changes

- use layer css & add reset styles

## 0.3.14

### Patch Changes

- improve components

## 0.3.13

### Patch Changes

- chore: upgrade deps

## 0.3.12

### Patch Changes

- 536b0b3: - `textarea` use wrapper render
  - `dialog` & `drawer` closer button placement

## 0.3.11

### Patch Changes

- 7144eb6: - `fab` add click callback
  - new `textarea` component
  - `fab` add class name
  - `space` change default gap to 8
  - add `password-input` component
  - add func declaration
  - `image` add `crossOrigin`、`referrerPolicy` props
  - `upload` uploaded list render

## 0.3.10

### Patch Changes

- refactor components

## 0.3.9

### Patch Changes

- refactor: popover & form & .etc components

## 0.3.8

### Patch Changes

- dd78a71: - Update dependencies(devDependencies) patch version
  - `Portal` remove no-use React import

## 0.3.7

### Patch Changes

- 4e1c676: - add `AccountCircle` icon
  - `RichTextEditor` class name refactor

## 0.3.6

### Patch Changes

- `Avatar` add loading display
- `Image` add `previewable` to disable preview
- `Image` add `overlay` close api

## 0.3.5

### Patch Changes

- update deps

## 0.3.4

### Patch Changes

- refactor

## 0.3.3

### Patch Changes

- button unit test snapshot reuse

## 0.3.2

### Patch Changes

- `pagination`.`API` adding

## 0.3.1

### Patch Changes

- refactor picker components

## 0.3.0

### Minor Changes

- refactor exports

## 0.2.26

### Patch Changes

- add components props

## 0.2.25

### Patch Changes

- - improve rich-text-editor component
  - improve use controlled state api

## 0.2.24

### Patch Changes

- avatar add styles prop

## 0.2.21

### Patch Changes

- - add `quote` component

## 0.2.19

### Patch Changes

- chore(deps): upgrade deps

## 0.2.18

### Patch Changes

- chore(deps): upgrade relax & use jarvis

## 0.2.17

### Patch Changes

- feat(i18n): all components use locale insteadof hard code
