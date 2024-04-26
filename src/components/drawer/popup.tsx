import React, { type CSSProperties, useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";
import type { PopupProps } from "./types";
import { PLACEMENTS } from "./hooks";
import { ComponentToken, DrawerClassToken } from "../../utils/class-name";
import { useClassNames } from "../config";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";
import { typography } from "../theme/theme";
import { contains } from "@aiszlab/relax/dom";
import { useDismissable } from "../../hooks/use-dismissable";

const styles = stylex.create({
  popup: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1000,
  },

  mask: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    position: "absolute",
    inset: 0,
    pointerEvents: "auto",
    zIndex: 1000,
    opacity: 0,
    backgroundColor: props.backgroundColor,
  }),

  panel: (props: { backgroundColor: CSSProperties["backgroundColor"]; transform: CSSProperties["transform"] }) => ({
    backgroundColor: props.backgroundColor,
    position: "absolute",
    zIndex: 1000,
    pointerEvents: "auto",
    willChange: "transform",
    display: "flex",
    flexDirection: "column",
    transform: props.transform,
  }),

  right: {
    right: 0,
    top: 0,
    bottom: 0,
    width: 400,
  },

  left: {
    left: 0,
    top: 0,
    bottom: 0,
    width: 400,
  },

  bottom: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 400,
  },

  top: {
    top: 0,
    left: 0,
    right: 0,
    height: 400,
  },

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

const Popup = ({ open, onClose, placement = "right", dismissable = true, onClosed, ...props }: PopupProps) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const classNames = useClassNames(ComponentToken.Drawer);
  const _placement = PLACEMENTS[placement];
  const theme = useTheme();
  const panelRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  /// children render hooks
  const { closer, onKeyDown, onMaskClick } = useDismissable({ dismissable, onClose });

  useEffect(() => {
    (async () => {
      if (open) {
        scope.current.attributeStyleMap.set("display", "block");
        await Promise.all([
          panelRef.current && animate(panelRef.current, { transform: _placement.at(1) }),
          maskRef.current && animate(maskRef.current, { opacity: 0.8 }),
        ]);
        return;
      }

      await Promise.all([
        panelRef.current && animate(panelRef.current, { transform: _placement.at(0) }),
        maskRef.current && animate(maskRef.current, { opacity: 0 }),
      ]);
      scope.current.attributeStyleMap.set("display", "none");
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
    mask: stylex.props(
      styles.mask({
        backgroundColor: theme.colors[ColorToken.SurfaceDim],
      })
    ),
    panel: stylex.props(
      styles.panel({
        backgroundColor: theme.colors[ColorToken.OnPrimary],
        transform: _placement.at(0),
      }),
      styles[placement]
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
      {/* mask */}
      <div
        className={clsx(classNames[DrawerClassToken.Mask], styled.mask.className)}
        onClick={onMaskClick}
        style={styled.mask.style}
        ref={maskRef}
      />

      {/* panel */}
      <div
        className={clsx(classNames[DrawerClassToken.Panel], styled.panel.className)}
        style={styled.panel.style}
        ref={panelRef}
      >
        {closer}

        {/* header */}
        <div className={clsx(classNames[DrawerClassToken.Header], styled.header.className)} style={styled.header.style}>
          {props.title}
        </div>

        {/* body */}
        <div className={clsx(classNames[DrawerClassToken.Body], styled.body.className)} style={styled.body.style}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
