---
"musae": minor
---

- **Theme**: 新增 `ToggleOptions` 支持自定义动画时长，`toggle` 方法接受可选的 `duration` 参数替代硬编码的 300ms
- **Icon**: 全量修复 SVG path 数据格式和 `clipPath` 填充色（`currentColor` → `white`）问题，确保裁剪路径正确渲染；修复多个图标（pets、plagiarism、troubleshoot、try、perm-data-setting、remove-shopping-cart、satellite-alt、speaker-notes-off、thumbs-up-down 等）缺失的 SVG paths；优化 SVG path 数据可读性，统一去除冗余空格格式；修复 7 个 av 分类图标（forward-5、games、hd、hearing、hearing-disabled、high-quality、interpreter-mode）无效 path 数据及 30fps-select、60fps-select 的 Vector 占位符
