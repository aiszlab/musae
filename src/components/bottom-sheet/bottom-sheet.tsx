import React from "react";
import type { BottomSheetProps } from "../../types/bottom-sheet";
import { Sheet } from "../sheet";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useThemeColorVars, type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { spacing, sizes } from "../theme/tokens.stylex";
import { CLASS_NAMES } from "./context";

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

/**
 * @zh BottomSheet 组件。从底部滑入的模态面板，带有拖拽手柄指示器。
 * 基于共享的 Sheet 基础组件构建。
 * @en BottomSheet component. A modal panel that slides up from the bottom
 * with a drag handle indicator. Built on the shared Sheet base component.
 */
const BottomSheet = ({
  open,
  height = "50vh",
  closable = true,
  modal = true,
  ...props
}: BottomSheetProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const themeColorVars = useThemeColorVars(["on-surface-variant"]);

  const styled = {
    handle: $props(styles.handle),
    panel: $props(styles.panel),
  };

  /**
   * @zh BottomSheet 专用头部：居中的拖拽手柄条。
   * @en BottomSheet-specific header: a centered drag handle pill.
   */
  const header = (
    <div
      className={stringify(classNames.handle, styled.handle.className)}
      style={{ ...styled.handle.style, ...themeColorVars }}
    />
  );

  return (
    <Sheet
      visible={open}
      placement="bottom"
      size={height}
      closable={closable}
      modal={modal}
      onClose={props.onClose}
      className={classNames.sheet}
      header={header}
      panelClassName={styled.panel.className}
    >
      {props.children}
    </Sheet>
  );
};

export default BottomSheet;
