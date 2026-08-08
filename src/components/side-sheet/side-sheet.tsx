import React from "react";
import type { SideSheetProps } from "../../types/side-sheet";
import { Sheet } from "../sheet";
import { Divider } from "../divider";
import { IconButton } from "../icon-button";
import { IconArrowBack } from "../icon/icons";
import { useClosable } from "../../hooks/use-closable";
import { useClassNames } from "../../hooks/use-class-names";
import { useThemeColorVars, type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";
import { $title } from "../theme/theme";
import { CLASS_NAMES } from "./context";

/**
 * @zh SideSheet 专用样式：包含头部栏（返回按钮、标题、关闭按钮）、底部操作区，
 * 以及两种类型的面板容器（模态圆角面板、标准内嵌面板）。
 * @en SideSheet-specific styles: header bar (back button, headline, closer),
 * footer actions, and the two panel containers (rounded modal panel, inline standard panel).
 */
const styles = $create({
  panel: {
    backgroundColor: "var(--color-surface-container-low)" satisfies ThemeColorVariable,
    paddingBottom: spacing.xxxlarge,
  },

  panelRight: {
    borderTopLeftRadius: sizes.xxxxsmall,
    borderBottomLeftRadius: sizes.xxxxsmall,
  },

  panelLeft: {
    borderTopRightRadius: sizes.xxxxsmall,
    borderBottomRightRadius: sizes.xxxxsmall,
  },

  standard: {
    display: "flex",
    flexDirection: "column",
    width: "var(--size)",
    height: sizes.full,
    flexShrink: 0,
    backgroundColor: "var(--color-surface)" satisfies ThemeColorVariable,
    paddingBottom: spacing.xxxlarge,
  },

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

  header: {
    display: "flex",
    alignItems: "flex-start",
    paddingTop: spacing.medium,
    paddingBottom: spacing.large,
    paddingInlineEnd: spacing.medium,
  },

  headerWithTitle: {
    paddingInlineStart: spacing.xxxlarge,
  },

  headerWithBack: {
    paddingInlineStart: spacing.xxxxxsmall,
  },

  title: {
    flex: 1,
    minWidth: 0,
    paddingTop: spacing.medium,
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
  },

  content: {
    flex: 1,
    minHeight: 0,
    overflow: "auto",
    overscrollBehavior: "contain",
  },

  actions: {
    display: "flex",
    flexDirection: "column",
  },

  actionsRow: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xxsmall,
    paddingTop: spacing.large,
    paddingInline: spacing.xxxlarge,
  },
});

/**
 * @zh SideSheet 组件。Material Design 3 侧边栏：承载补充内容或操作的面板。
 * `modal` 类型基于共享的 Sheet 基础组件构建（遮罩层 + 滑入动画），
 * `standard` 类型内嵌在布局中展示（无遮罩层，停靠边缘带分割线）。
 * @en SideSheet component. A Material Design 3 side sheet: a surface for supplementary
 * content or actions. The `modal` type is built on the shared Sheet base component
 * (scrim + slide animation); the `standard` type renders inline in the layout
 * (no scrim, with a divider on the anchored edge).
 */
const SideSheet = ({
  open,
  type = "modal",
  title,
  onBack,
  closable = true,
  onClose,
  actions,
  size = 320,
  placement = "right",
  className,
  style,
  children,
}: SideSheetProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const themeColorVars = useThemeColorVars([
    "surface",
    "surface-container-low",
    "on-surface-variant",
    "outline-variant",
  ]);

  const { closer } = useClosable({
    closable,
    onClose,
  });

  const styled = {
    panel: $props(styles.panel, placement === "right" ? styles.panelRight : styles.panelLeft),
    standard: $props(
      styles.standard,
      placement === "right" ? styles.standardRight : styles.standardLeft,
    ),
    header: $props(styles.header, onBack ? styles.headerWithBack : styles.headerWithTitle),
    title: $props($title.large, styles.title),
    content: $props(styles.content),
    actions: $props(styles.actions),
    actionsRow: $props(styles.actionsRow),
  };

  /**
   * @zh 头部栏：可选的返回按钮、标题和关闭按钮。
   * 三者都不存在时不渲染头部，避免空置的占位空间。
   * @en Header bar: optional back button, headline, and closer.
   * Not rendered when all three are absent, avoiding empty placeholder space.
   */
  const hasHeader = !!title || !!onBack || !!closer;

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

      {closer}
    </div>
  ) : null;

  /**
   * @zh 底部操作区：分割线 + 操作按钮行。
   * @en Footer actions: a divider above the actions row.
   */
  const footer = actions ? (
    <div
      className={stringify(classNames.actions, styled.actions.className)}
      style={styled.actions.style}
    >
      <Divider margin={0} />
      <div className={styled.actionsRow.className} style={styled.actionsRow.style}>
        {actions}
      </div>
    </div>
  ) : null;

  /**
   * @zh 标准类型：内嵌在布局中展示，无遮罩层，停靠边缘带分割线。
   * @en Standard type: rendered inline in the layout, without a scrim,
   * with a divider on the anchored edge.
   */
  if (type === "standard") {
    if (!open) return null;

    return (
      <div
        className={stringify(classNames.sideSheet, className, styled.standard.className)}
        style={{
          ...styled.standard.style,
          ...themeColorVars,
          "--size": typeof size === "number" ? `${size}px` : size,
          ...style,
        }}
      >
        {header}

        <div
          className={stringify(classNames.content, styled.content.className)}
          style={styled.content.style}
        >
          {children}
        </div>

        {footer}
      </div>
    );
  }

  /**
   * @zh 模态类型：基于共享的 Sheet 基础组件，带遮罩层和滑入动画。
   * @en Modal type: built on the shared Sheet base component, with a scrim
   * and slide animation.
   */
  return (
    <Sheet
      visible={open}
      placement={placement}
      size={size}
      closable={closable}
      onClose={onClose}
      className={classNames.sideSheet}
      header={header}
      footer={footer}
      panelClassName={styled.panel.className}
      panelStyle={{ ...themeColorVars, ...styled.panel.style }}
    >
      {children}
    </Sheet>
  );
};

export default SideSheet;
