import React from "react";
import type { DrawerProps } from "../../types/drawer";
import { Sheet } from "../sheet";
import { Button } from "../button";
import { Space } from "../space";
import { useLocale } from "../../locale";
import { useClosable } from "../../hooks/use-closable";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useThemeColorVars, type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { $body } from "../theme/theme";
import { CLASS_NAMES } from "./context";

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

/**
 * @zh Drawer 组件。从屏幕任意边缘滑入的模态面板。基于共享的 Sheet 基础组件构建。
 * @en Drawer component. A modal panel that slides in from any screen edge.
 * Built on the shared Sheet base component.
 */
const Drawer = ({
  open,
  size = 400,
  closable = true,
  placement = "right",
  ...props
}: DrawerProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const [locale] = useLocale("drawer");
  const themeColorVars = useThemeColorVars(["outline-variant"]);

  const { closer } = useClosable({
    closable,
    onClose: props.onClose,
  });

  const styled = {
    header: $props($body.large, styles.header),
    actions: $props(styles.actions),
    panel: $props(styles.panel),
  };

  return (
    <Sheet
      visible={open}
      placement={placement}
      size={size}
      closable={closable}
      onClose={props.onClose}
      className={classNames.drawer}
      header={
        <div
          className={stringify(classNames.header, styled.header.className)}
          style={{ ...styled.header.style, ...themeColorVars }}
        >
          {closer}

          {props.title}

          {props.onConfirm && (
            <Space className={styled.actions.className} style={styled.actions.style}>
              <Button onClick={props.onConfirm}>{locale.confirm}</Button>
            </Space>
          )}
        </div>
      }
      panelClassName={styled.panel.className}
    >
      {props.children}
    </Sheet>
  );
};

export default Drawer;
