import React, { CSSProperties, useEffect } from "react";
import type { PopupProps } from "./types";
import { useFooter } from "./hooks";
import { useAnimate } from "framer-motion";
import { ComponentToken, DialogClassToken, withDot } from "../../utils/class-name";
import { useClassNames } from "../config";
import { stylex } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { BODY, HEADLINE } from "../theme/theme";
import clsx from "clsx";

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

const Popup = ({ onCancel, isOpened, ...props }: PopupProps) => {
  const classNames = useClassNames(ComponentToken.Dialog);
  const footer = useFooter([props.footer, props.onConfirm, onCancel]);
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      if (isOpened) {
        await animate(scope.current, { display: "flex" }, { duration: 0 });
        animate(withDot(classNames[DialogClassToken.Panel]), { opacity: 1 });
        animate(withDot(classNames[DialogClassToken.Mask]), { opacity: 0.8 });
      } else {
        await Promise.all([
          animate(withDot(classNames[DialogClassToken.Panel]), { opacity: 0 }),
          animate(withDot(classNames[DialogClassToken.Mask]), { opacity: 0 }),
        ]);
        animate(scope.current, { display: "none" }, { duration: 0 });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened]);

  const styled = {
    popup: stylex.props(styles.popup),
    mask: stylex.props(styles.mask(theme.colors[ColorToken.SurfaceDim])),
    panel: stylex.props(styles.panel(theme.colors[ColorToken.SurfaceContainerLowest])),
    header: stylex.props(HEADLINE.small),
    body: stylex.props(BODY.medium, styles.body),
    footer: stylex.props(styles.footer),
  };

  return (
    <div ref={scope} className={styled.popup.className} style={styled.popup.style}>
      {/* mask */}
      <div
        className={clsx(styled.mask.className, classNames[DialogClassToken.Mask])}
        style={styled.mask.style}
        onClick={onCancel}
      />

      {/* panel */}
      <div className={clsx(styled.panel.className, classNames[DialogClassToken.Panel])} style={styled.panel.style}>
        <div
          className={clsx(styled.header.className, classNames[DialogClassToken.Header])}
          style={styled.header.style}
        ></div>
        <div className={clsx(styled.body.className, classNames[DialogClassToken.Body])} style={styled.body.style}>
          {props.children}
        </div>
        <div className={clsx(styled.footer.className, classNames[DialogClassToken.Footer])} style={styled.footer.style}>
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Popup;
