import styles from "./styles";
import React from "react";
import type { ActionSheetProps, ActionItem } from "../../types/action-sheet";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useEvent } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { Sheet } from "../sheet";
import { useLocale } from "../../locale";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";
import { $body, $title, $label } from "../theme/theme";
import { CLASS_NAMES } from "./context";

/**
 * @zh ActionSheet 组件。基于 Sheet 的移动端底部操作面板，
 * 支持操作列表和二次确认场景，同时提供声明式和指令式 API。
 * @en ActionSheet component. A mobile bottom action panel built on Sheet,
 * supporting action lists and confirmation scenarios, with both declarative and imperative APIs.
 */
const ActionSheet = ({
  open,
  onClose,
  actions,
  title,
  description,
  cancelText,
  height,
  className,
  style,
}: ActionSheetProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const [locale] = useLocale("action-sheet");
  const themeColorVars = useThemeColorVars([
    "on-surface-variant",
    "surface-container",
    "outline-variant",
  ]);

  const styled = {
    handle: $props(styles.handle),
    panel: $props(styles.panel),
    header: $props(styles.header),
    title: $props(styles.title, $title.medium),
    description: $props(styles.description, $body.medium),
    actions: $props(styles.actions),
    action: $props(styles.action),
    actionText: $props(styles.actionText, $body.large),
    actionDesc: $props(styles.actionDesc, $body.small),
    cancel: $props(styles.cancel, $label.large),
  };

  /**
   * @zh 处理操作项点击：先执行回调，再关闭面板。
   * @en Handle action click: execute callback first, then close the panel.
   */
  const handleAction = useEvent((action: ActionItem) => {
    try {
      action.onClick?.();
    } catch {
      // noop — close the panel regardless of onClick result
    } finally {
      onClose();
    }
  });

  /**
   * @zh 头部区域：拖拽手柄 + 标题 + 描述。
   * @en Header area: drag handle + title + description.
   */
  const header = (
    <div
      className={stringify(classNames.header, styled.header.className)}
      style={styled.header.style}
    >
      <div
        className={stringify(styled.handle.className)}
        style={{ ...styled.handle.style, ...themeColorVars }}
      />
      {!!title && (
        <div
          className={stringify(classNames.title, styled.title.className)}
          style={styled.title.style}
        >
          {title}
        </div>
      )}
      {!!description && (
        <div
          className={stringify(classNames.description, styled.description.className)}
          style={styled.description.style}
        >
          {description}
        </div>
      )}
    </div>
  );

  return (
    <Sheet
      visible={open}
      placement="bottom"
      size={height ?? "fit-content"}
      onClose={onClose}
      header={header}
      className={stringify(classNames.sheet, className)}
      panelClassName={styled.panel.className}
      panelStyle={{ ...styled.panel.style, ...themeColorVars, ...style }}
    >
      {/* 操作项列表 */}
      {actions.length > 0 && (
        <div
          className={stringify(classNames.actions, styled.actions.className)}
          style={styled.actions.style}
        >
          {actions.map((action) => (
            <div
              key={action.key}
              className={stringify(classNames.action, styled.action.className)}
              style={styled.action.style}
              onClick={() => handleAction(action)}
            >
              <span
                className={stringify(classNames.actionText, styled.actionText.className)}
                style={styled.actionText.style}
              >
                {action.text}
              </span>
              {!!action.description && (
                <span
                  className={stringify(classNames.actionDesc, styled.actionDesc.className)}
                  style={styled.actionDesc.style}
                >
                  {action.description}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 取消按钮 */}
      <div
        className={stringify(classNames.cancel, styled.cancel.className)}
        style={styled.cancel.style}
        onClick={onClose}
      >
        {cancelText ?? locale.cancel}
      </div>
    </Sheet>
  );
};

export default ActionSheet;
