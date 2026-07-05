import React, { useRef } from "react";
import { animate } from "motion/react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useAsyncEffect, useBoolean } from "@aiszlab/relax";
import { contains } from "@aiszlab/relax/dom";
import { at } from "@aiszlab/relax";
import type { SheetProps } from "../../types/sheet";
import { useClassNames } from "../../hooks/use-class-names";
import { useClosable } from "../../hooks/use-closable";
import { useThemeColorVars, type ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { positions } from "../theme/tokens.stylex";
import Portal from "../portal/portal";
import StackLevelContext from "../../contexts/stack-level.context";
import { PLACEMENTS } from "./hooks";
import { CLASS_NAMES } from "./context";
import { flushSync } from "react-dom";

const styles = $create({
  stackLevel: {
    zIndex: positions.drawer,
  },

  container: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
  },

  modal: {
    overscrollBehavior: "contain",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    pointerEvents: "auto",
    opacity: 0,
    backgroundColor: "var(--color-surface-dim)" satisfies ThemeColorVariable,
  },

  panel: {
    position: "absolute",
    pointerEvents: "auto",
    willChange: "transform",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    transform: "var(--default-position)",
  },

  right: {
    right: 0,
    top: 0,
    bottom: 0,
    width: "var(--size)",
  },

  left: {
    left: 0,
    top: 0,
    bottom: 0,
    width: "var(--size)",
  },

  bottom: {
    bottom: 0,
    left: 0,
    right: 0,
    height: "var(--size)",
  },

  top: {
    top: 0,
    left: 0,
    right: 0,
    height: "var(--size)",
  },

  body: {
    flex: 1,
    overflow: "auto",
    overscrollBehavior: "contain",
  },
});

/**
 * @zh 共享的 Sheet 基础组件。渲染带遮罩层的模态面板，支持方位驱动的滑动动画、
 * 焦点管理和 body 滚动锁定。Drawer 和 BottomSheet 是围绕此组件的薄封装。
 * @en Shared Sheet base component. Renders a modal panel with overlay,
 * placement-driven slide animation, focus management, and body scroll lock.
 * Drawer and BottomSheet are thin wrappers around this component.
 */
const Sheet = ({
  visible,
  onClose,
  placement,
  size = 400,
  closable = true,
  header,
  className,
  panelClassName,
  panelStyle,
  modal = true,
  children,
}: SheetProps) => {
  // `Sheet` should disappear after disappear animation completely
  const [_isVisible, { turnOn, turnOff }] = useBoolean(false);
  const classNames = useClassNames(CLASS_NAMES);
  const _placement = PLACEMENTS[placement];
  const ref = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  /**
   * @zh 发出遮罩层、面板和头部使用的所有主题 CSS 变量。
   * 包含 Drawer 和 BottomSheet 所需颜色的超集。
   * @en Emit theme CSS variables for all colors used by overlay, panel, and header.
   * Includes the superset of colors needed by Drawer and BottomSheet.
   */
  const themeColorVars = useThemeColorVars([
    "surface-dim",
    "surface-container",
    "on-primary",
    "on-surface-variant",
    "outline-variant",
  ]);

  const { onOverlayClick, onKeyDown } = useClosable({
    closable,
    onClose,
  });

  /**
   * @zh 处理进入/退出动画。
   * @en Handle enter/exit animations.
   */
  useAsyncEffect(async () => {
    const _popup = ref.current;
    if (!_popup) return;

    if (visible) {
      flushSync(() => {
        turnOn();
      });

      // Focus the container when visible to receive keyboard events.
      if (!contains(ref.current, document.activeElement)) {
        _popup.focus();
      }

      _popup.style.display = "block";
      await Promise.all([
        panelRef.current && animate(panelRef.current, { transform: at(_placement, 1) }),
        overlayRef.current && animate(overlayRef.current, { opacity: 0.8 }),
      ]);
      return;
    }

    await Promise.all([
      panelRef.current && animate(panelRef.current, { transform: at(_placement, 0) }),
      overlayRef.current && animate(overlayRef.current, { opacity: 0 }),
    ]);
    _popup.style.display = "none";
    turnOff();
  }, [visible, ..._placement]);

  const styled = {
    stackLevel: $props(styles.stackLevel),
    container: $props(styles.stackLevel, styles.container, modal && styles.modal),
    overlay: $props(styles.overlay),
    panel: $props(styles.panel, styles[placement]),
    body: $props(styles.body),
  };

  return (
    <Portal open={visible || _isVisible} modal={modal}>
      <StackLevelContext
        value={{
          className: styled.stackLevel.className,
          style: styled.stackLevel.style,
        }}
      >
        <div
          ref={ref}
          tabIndex={-1}
          className={stringify(classNames.sheet, className, styled.container.className)}
          style={{
            ...styled.container.style,
            ...themeColorVars,
            "--default-position": at(_placement, 0),
            "--size": `${size}px`,
          }}
          onKeyDown={onKeyDown}
        >
          {/* 遮罩层 */}
          <div
            ref={overlayRef}
            className={stringify(classNames.overlay, styled.overlay.className)}
            style={styled.overlay.style}
            onClick={onOverlayClick}
          />

          {/* 面板 */}
          <div
            ref={panelRef}
            className={stringify(classNames.panel, panelClassName, styled.panel.className)}
            style={{ ...styled.panel.style, ...panelStyle }}
          >
            {/* 头部插槽 */}
            {header}

            {/* 主体 */}
            <div
              className={stringify(classNames.body, styled.body.className)}
              style={styled.body.style}
            >
              {children}
            </div>
          </div>
        </div>
      </StackLevelContext>
    </Portal>
  );
};

export default Sheet;
