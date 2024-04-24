import React, { CSSProperties, useEffect } from "react";
import type { PopupProps } from "./types";
import { useFooter } from "./hooks";
import { useAnimate } from "framer-motion";
import { ComponentToken, DialogClassToken, withDot } from "../../utils/class-name";
import { useClassNames } from "../config";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { typography } from "../theme/theme";
import clsx from "clsx";
import { contains } from "@aiszlab/relax/dom";
import { useDismissable } from "../../hooks/use-dismissable";

const styles = stylex.create({
  header: {
    paddingInline: spacing.xlarge,
    paddingTop: spacing.large,
  },

  popup: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mask: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "auto",
    zIndex: 1000,
    backgroundColor: props.backgroundColor,
    opacity: 0,
  }),

  panel: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    display: "flex",
    flexDirection: "column",
    gap: spacing.large,
    minWidth: 480,
    maxHeight: `calc(100% - ${spacing.xxlarge} * 2)`,
    margin: spacing.xxlarge,
    borderRadius: 8,
    pointerEvents: "auto",
    backgroundColor: props.backgroundColor,
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

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

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
        backgroundColor: theme.colors[ColorToken.SurfaceContainerLowest],
      })
    ),
    header: stylex.props(styles.header, typography.headline.small),
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
      <div
        className={clsx(classNames[DialogClassToken.Panel], styled.panel.className)}
        style={{
          ...styled.panel.style,
          ...props.styles?.panel,
        }}
      >
        {closer}

        {/* header */}
        {!!props.title && (
          <div
            className={clsx(classNames[DialogClassToken.Header], styled.header.className)}
            style={styled.header.style}
          >
            {props.title}
          </div>
        )}

        {/* body */}
        <div
          className={clsx(classNames[DialogClassToken.Body], styled.body.className)}
          style={{
            ...styled.body.style,
            ...props.styles?.body,
          }}
        >
          {props.children}
        </div>

        {/* footer */}
        {!!footer && (
          <div
            className={clsx(classNames[DialogClassToken.Footer], styled.footer.className)}
            style={styled.footer.style}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
