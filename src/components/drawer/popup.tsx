import React, { type CSSProperties, useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";
import type { PopupProps } from "./types";
import { PLACEMENTS } from "./hooks";
import { DrawerClassToken } from "../../utils/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import * as stylex from "@stylexjs/stylex";
import { positions, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";
import { typography } from "../theme/theme";
import { contains } from "@aiszlab/relax/dom";
import { useClosable } from "../../hooks/use-closable";
import { ComponentToken } from "../../utils/component-token";

const styles = stylex.create({
  popup: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: positions.drawer,
  },

  overlay: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    position: "absolute",
    inset: 0,
    pointerEvents: "auto",
    zIndex: positions.drawer,
    opacity: 0,
    backgroundColor: props.backgroundColor,
  }),

  panel: (props: {
    backgroundColor: CSSProperties["backgroundColor"];
    transform: CSSProperties["transform"];
  }) => ({
    backgroundColor: props.backgroundColor,
    position: "absolute",
    zIndex: positions.drawer,
    pointerEvents: "auto",
    willChange: "transform",
    display: "flex",
    flexDirection: "column",
    transform: props.transform,
  }),

  right: (props: { size: number }) => ({
    right: 0,
    top: 0,
    bottom: 0,
    width: props.size,
  }),

  left: (props: { size: number }) => ({
    left: 0,
    top: 0,
    bottom: 0,
    width: props.size,
  }),

  bottom: (props: { size: number }) => ({
    bottom: 0,
    left: 0,
    right: 0,
    height: props.size,
  }),

  top: (props: { size: number }) => ({
    top: 0,
    left: 0,
    right: 0,
    height: props.size,
  }),

  header: {
    display: "flex",
    paddingInline: spacing.large,
    paddingBlock: spacing.xlarge,
  },

  body: {
    flex: 1,
    padding: spacing.xlarge,
  },
});

const Popup = ({ open, onClose, placement, closable, onClosed, size, ...props }: PopupProps) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const classNames = useClassNames(ComponentToken.Drawer);
  const _placement = PLACEMENTS[placement];
  const theme = useTheme();
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  /// children render hooks
  const { closer, onKeyDown, onOverlayClick } = useClosable({ closable, onClose });

  useEffect(() => {
    (async () => {
      if (open) {
        scope.current.style.display = "block";
        await Promise.all([
          panelRef.current && animate(panelRef.current, { transform: _placement.at(1) }),
          overlayRef.current && animate(overlayRef.current, { opacity: 0.8 }),
        ]);
        return;
      }

      await Promise.all([
        panelRef.current && animate(panelRef.current, { transform: _placement.at(0) }),
        overlayRef.current && animate(overlayRef.current, { opacity: 0 }),
      ]);
      scope.current.style.display = "none";
      onClosed?.();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, ..._placement]);

  /// when open, try focus dialog
  useEffect(() => {
    if (!open) return;
    if (contains(scope.current, document.activeElement)) return;
    scope.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const styled = {
    popup: stylex.props(styles.popup),
    overlay: stylex.props(
      styles.overlay({
        backgroundColor: theme.colors[ColorToken.SurfaceDim],
      }),
    ),
    panel: stylex.props(
      styles.panel({
        backgroundColor: theme.colors[ColorToken.OnPrimary],
        transform: _placement.at(0),
      }),
      styles[placement]({ size }),
    ),
    header: stylex.props(typography.body.large, styles.header),
    body: stylex.props(styles.body),
  };

  return (
    <div
      tabIndex={-1}
      ref={scope}
      className={clsx(classNames[DrawerClassToken.Drawer], styled.popup.className)}
      style={styled.popup.style}
      onKeyDown={onKeyDown}
    >
      {/* overlay */}
      <div
        className={clsx(classNames[DrawerClassToken.Overlay], styled.overlay.className)}
        onClick={onOverlayClick}
        style={styled.overlay.style}
        ref={overlayRef}
      />

      {/* panel */}
      <div
        className={clsx(classNames[DrawerClassToken.Panel], styled.panel.className)}
        style={styled.panel.style}
        ref={panelRef}
      >
        {closer}

        {/* header */}
        <div
          className={clsx(classNames[DrawerClassToken.Header], styled.header.className)}
          style={styled.header.style}
        >
          {props.title}
        </div>

        {/* body */}
        <div
          className={clsx(classNames[DrawerClassToken.Body], styled.body.className)}
          style={styled.body.style}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
