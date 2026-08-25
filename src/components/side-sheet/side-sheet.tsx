import React from "react";
import type { SideSheetProps } from "../../types/side-sheet";
import { Sheet } from "../sheet";
import { Divider } from "../divider";
import { Button } from "../button";
import { IconButton } from "../icon-button";
import { IconArrowBack } from "../icon/icons";
import { useClosable } from "../../hooks/use-closable";
import { useClassNames } from "../../hooks/use-class-names";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";
import { useLocale } from "../../locale";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { $title } from "../theme/theme";
import { CLASS_NAMES } from "./context";
import { styles } from "./styles";
import { isNumber } from "@aiszlab/relax";

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
  const classNames = useClassNames(CLASS_NAMES);
  const themeColorVars = useThemeColorVars([
    "surface",
    "surface-container-low",
    "on-surface-variant",
    "outline-variant",
  ]);

  const [locale] = useLocale("drawer");

  const { closer } = useClosable({
    closable,
    onClose,
  });

  const styled = {
    panel: $props(styles.panel.base),
    standard: $props(styles.standard.base, styles.standard[placement]),
    header: $props(
      styles.header.base,
      !!onBack && styles.header["with-back"],
      !onBack && styles.header["with-title"],
    ),
    title: $props($title.large, styles.title.base),
    content: $props(styles.content.base),
    actions: $props(styles.actions.base),
    buttons: $props(styles.buttons.base),
  };

  /**
   * @zh 头部栏：可选的返回按钮、标题和关闭按钮。
   * 三者都不存在时不渲染头部，避免空置的占位空间。
   * @en Header bar: optional back button, headline, and closer.
   * Not rendered when all three are absent, avoiding empty placeholder space.
   */
  const hasHeader = !!title || !!onBack || !!onConfirm || !!closer;

  const header = hasHeader && (
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

      {onConfirm && <Button onClick={onConfirm}>{locale.confirm}</Button>}

      {closer}
    </div>
  );

  /**
   * @zh 底部操作区：分割线 + 操作按钮行。
   * @en Footer actions: a divider above the actions row.
   */
  const footer = !!actions && (
    <div
      className={stringify(classNames.actions, styled.actions.className)}
      style={styled.actions.style}
    >
      <Divider margin={0} />

      <div
        className={stringify(classNames.buttons, styled.buttons.className)}
        style={styled.buttons.style}
      >
        {actions}
      </div>
    </div>
  );

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
          ...style,
          ...themeColorVars,
          "--size": isNumber(size) ? `${size}px` : size,
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
      panelStyle={{ ...styled.panel.style, ...themeColorVars }}
    >
      <div
        className={stringify(classNames.content, styled.content.className)}
        style={styled.content.style}
      >
        {children}
      </div>
    </Sheet>
  );
};

export default SideSheet;
