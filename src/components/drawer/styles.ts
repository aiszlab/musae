import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

/**
 * @zh Drawer 专用样式：包含关闭按钮、标题和确认按钮的头部栏，以及面板背景。
 * @en Drawer-specific styles: header bar with closer, title, confirm button, and panel background.
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

  panel: {
    backgroundColor: "var(--color-on-primary)" satisfies ThemeColorVariable,
  },
});

export default styles;
