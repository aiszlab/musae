import { create as $create } from "@stylexjs/stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { spacing, sizes } from "../theme/tokens.stylex";

/**
 * @zh ActionSheet 专用样式：面板背景、拖拽手柄、操作项和取消按钮的样式。
 * @en ActionSheet-specific styles: panel background, drag handle, action items and cancel button.
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

  panel: {
    backgroundColor: "var(--color-surface-container)" satisfies ThemeColorVariable,
    borderTopLeftRadius: sizes.small,
    borderTopRightRadius: sizes.small,
    maxHeight: sizes.full,
  },

  header: {
    paddingTop: spacing.none,
    paddingBottom: spacing.xxsmall,
  },

  title: {
    paddingInline: spacing.large,
    paddingTop: spacing.xsmall,
    textAlign: "center",
  },

  description: {
    paddingInline: spacing.large,
    paddingTop: spacing.xsmall,
    textAlign: "center",
  },

  actions: {
    paddingTop: spacing.xxsmall,
  },

  action: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBlock: spacing.large,
    paddingInline: spacing.large,
    cursor: "pointer",
    minHeight: sizes.xxxlarge,
    borderTopWidth: sizes.smallest,
    borderTopStyle: "solid",
    borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
    userSelect: "none",
  },

  actionText: {
    textAlign: "center",
  },

  actionDesc: {
    textAlign: "center",
    marginTop: spacing.xxxxxsmall,
  },

  cancel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBlock: spacing.large,
    paddingInline: spacing.large,
    cursor: "pointer",
    minHeight: sizes.xxxlarge,
    borderTopWidth: sizes.xxsmall,
    borderTopStyle: "solid",
    borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
    marginTop: spacing.xxsmall,
    userSelect: "none",
  },
});

export default styles;
