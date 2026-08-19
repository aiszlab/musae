import { create as $create } from "@stylexjs/stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { spacing, sizes } from "../theme/tokens.stylex";

/**
 * @zh BottomSheet 专用样式：居中的拖拽手柄条，以及面板背景和圆角。
 * @en BottomSheet-specific styles: a centered drag handle pill, and panel background/border-radius.
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
});

export default styles;
