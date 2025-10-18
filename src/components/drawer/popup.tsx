import React, { useEffect, useRef } from "react";
import { animate } from "motion/react";
import type { PopupProps } from "../../types/drawer";
import { PLACEMENTS } from "./hooks";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { positions, sizes, spacing } from "../theme/tokens.stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { contains } from "@aiszlab/relax/dom";
import { useClosable } from "../../hooks/use-closable";
import { Space } from "../space";
import { Button } from "../button";
import { useLocale } from "../../locale";
import { CLASS_NAMES } from "./context";
import { at, useAsyncEffect } from "@aiszlab/relax";
import { $body } from "../theme/theme";
import { useThemeColorVars, type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const styles = $create({
  popup: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: positions.drawer,
  },

  overlay: {
    position: "absolute",
    inset: 0,
    pointerEvents: "auto",
    zIndex: positions.drawer,
    opacity: 0,
    backgroundColor: "var(--color-surface-dim)" satisfies ThemeColorVariable,
  },

  panel: {
    backgroundColor: "var(--color-on-primary)" satisfies ThemeColorVariable,
    position: "absolute",
    zIndex: positions.drawer,
    pointerEvents: "auto",
    willChange: "transform",
    display: "flex",
    flexDirection: "column",
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

  body: {
    flex: 1,
    padding: spacing.xxxlarge,
    overflow: "auto",
  },

  actions: {
    marginInlineStart: "auto",
  },
});

const Popup = ({
  open,
  onClose,
  placement,
  closable,
  onClosed,
  size,
  className,
  onConfirm,
  ...props
}: PopupProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const _placement = PLACEMENTS[placement];
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [locale] = useLocale("drawer");
  const ref = useRef<HTMLDivElement>(null);
  const themeColorVars = useThemeColorVars(["on-primary", "surface-dim", "outline-variant"]);

  // children render hooks
  const { closer, onKeyDown, onOverlayClick } = useClosable({
    closable,
    onClose,
  });

  useAsyncEffect(async () => {
    const _popup = ref.current;
    if (!_popup) return;

    if (open) {
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
    onClosed?.();
  }, [open, ..._placement]);

  // when open, try focus dialog
  useEffect(() => {
    if (!open) return;
    if (contains(ref.current, document.activeElement)) return;
    ref.current?.focus();
  }, [open]);

  const styled = {
    popup: $props(styles.popup),
    overlay: $props(styles.overlay),
    panel: $props(styles.panel, styles[placement]),
    header: $props($body.large, styles.header),
    body: $props(styles.body),
    actions: $props(styles.actions),
  };

  return (
    <div
      tabIndex={-1}
      ref={ref}
      className={stringify(classNames.drawer, className, styled.popup.className)}
      style={{
        ...styled.popup.style,
        ...themeColorVars,
        "--default-position": at(_placement, 0),
        "--size": `${size}px`,
      }}
      onKeyDown={onKeyDown}
    >
      {/* overlay */}
      <div
        className={stringify(classNames.overlay, styled.overlay.className)}
        onClick={onOverlayClick}
        style={styled.overlay.style}
        ref={overlayRef}
      />

      {/* panel */}
      <div
        className={stringify(classNames.panel, styled.panel.className)}
        style={styled.panel.style}
        ref={panelRef}
      >
        {/* header */}
        <div
          className={stringify(classNames.header, styled.header.className)}
          style={styled.header.style}
        >
          {closer}
          {props.title}

          <Space className={styled.actions.className} style={styled.actions.style}>
            <Button onClick={onConfirm}>{locale.confirm}</Button>
          </Space>
        </div>

        {/* body */}
        <div
          className={stringify(classNames.body, styled.body.className)}
          style={styled.body.style}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
