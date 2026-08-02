---
"musae": minor
---

重构 Card 组件，将其拆分为独立的子组件，支持组合式使用：

- **Actions** (`Card.Actions`) — 卡片操作区域
- **Body** (`Card.Body`) — 卡片主体容器，支持 `size` 属性控制内边距
- **Content** (`Card.Content`) — 内容区域，支持 `overflow` 属性显示/隐藏溢出内容
- **Header** (`Card.Header`) — 卡片头部，支持 `actions` 属性放置操作按钮
- **Headline** (`Card.Headline`) — 标题组合，包含 Title、Subhead 和 Actions
- **Media** (`Card.Media`) — 媒体区域，支持 `src` 图片和 `overlay` 覆盖层
- **Subhead** (`Card.Subhead`) — 副标题
- **Title** (`Card.Title`) — 标题

同时更新了 `CardProps` 类型定义和设计令牌。
