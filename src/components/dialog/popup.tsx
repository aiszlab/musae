import React, { CSSProperties, useEffect } from "react";
import type { PopupProps } from "./types";
import { useDismissable, useFooter } from "./hooks";
import { useAnimate } from "framer-motion";
import { ComponentToken, DialogClassToken, withDot } from "../../utils/class-name";
import { useClassNames } from "../config";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { typography } from "../theme/theme";
import clsx from "clsx";
import { useUpdateEffect } from "@aiszlab/relax";

const styles = stylex.create({
  popup: {
    position: "fixed",
    inset: spacing.none,
    pointerEvents: "none",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mask: (backgroundColor: CSSProperties["backgroundColor"]) => ({
    position: "absolute",
    inset: 0,
    pointerEvents: "auto",
    zIndex: 1000,
    backgroundColor,
    opacity: 0,
  }),

  panel: (backgroundColor: CSSProperties["backgroundColor"]) => ({
    display: "flex",
    flexDirection: "column",
    gap: spacing.large,
    minWidth: 480,
    maxWidth: 960,
    minHeight: 320,
    maxHeight: `calc(100% - ${spacing.xxxlarge})`,
    margin: spacing.xxlarge,
    borderRadius: 8,
    pointerEvents: "auto",
    backgroundColor,
    zIndex: 1000,
    opacity: 0,
    position: "relative",
  }),

  body: { paddingInline: spacing.xlarge, flex: 1, wordBreak: "break-word", overflow: "auto" },

  footer: {
    paddingInline: spacing.xlarge,
    paddingBottom: spacing.xlarge,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

const Popup = ({ onClose, open, dismissable = true, ...props }: PopupProps) => {
  const classNames = useClassNames(ComponentToken.Dialog);
  const footer = useFooter([props.footer, props.onConfirm, onClose]);
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const theme = useTheme();
  const { closer, onKeyDown, onMaskClick } = useDismissable({ dismissable, onClose });

  useUpdateEffect(() => {
    (async () => {
      if (open) {
        scope.current.attributeStyleMap.set("display", "flex");
        Promise.all([
          animate(withDot(classNames[DialogClassToken.Panel]), { opacity: 1 }),
          animate(withDot(classNames[DialogClassToken.Mask]), { opacity: 0.8 }),
        ]);
        return;
      }

      await Promise.all([
        animate(withDot(classNames[DialogClassToken.Panel]), { opacity: 0 }),
        animate(withDot(classNames[DialogClassToken.Mask]), { opacity: 0 }),
      ]);
      scope.current.attributeStyleMap.set("display", "none");
    })();
  }, [open]);

  /// when open, try focus dialog
  useUpdateEffect(() => {
    if (!open) return;
    scope.current.focus();
  }, [open]);

  const styled = {
    popup: stylex.props(styles.popup),
    mask: stylex.props(styles.mask(theme.colors[ColorToken.SurfaceDim])),
    panel: stylex.props(styles.panel(theme.colors[ColorToken.SurfaceContainerLowest])),
    header: stylex.props(typography.headline.small),
    body: stylex.props(typography.body.medium, styles.body),
    footer: stylex.props(styles.footer),
  };

  return (
    <div ref={scope} className={styled.popup.className} style={styled.popup.style} tabIndex={-1} onKeyDown={onKeyDown}>
      {/* mask */}
      <div
        className={clsx(classNames[DialogClassToken.Mask], styled.mask.className)}
        style={styled.mask.style}
        onClick={onMaskClick}
      />

      {/* panel */}
      <div className={clsx(classNames[DialogClassToken.Panel], styled.panel.className)} style={styled.panel.style}>
        {closer}
        <div
          className={clsx(classNames[DialogClassToken.Header], styled.header.className)}
          style={styled.header.style}
        ></div>
        <div className={clsx(classNames[DialogClassToken.Body], styled.body.className)} style={styled.body.style}>
          {props.children}
        </div>
        <div className={clsx(classNames[DialogClassToken.Footer], styled.footer.className)} style={styled.footer.style}>
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Popup;
