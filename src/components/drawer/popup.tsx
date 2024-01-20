import React, { CSSProperties, useEffect } from "react";
import { useAnimate } from "framer-motion";
import type { PopupProps } from "./types";
import { PLACEMENTS } from "./hooks";
import { ComponentToken, DrawerClassToken, withDot } from "../../utils/class-name";
import { useClassNames } from "../config";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";
import { BODY } from "../theme/theme";

const styles = stylex.create({
  popup: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1000,
  },

  mask: (backgroundColor: CSSProperties["backgroundColor"]) => ({
    position: "absolute",
    inset: spacing.none,
    pointerEvents: "auto",
    zIndex: 1000,
    opacity: 0,
    backgroundColor,
  }),

  panel: (backgroundColor: CSSProperties["backgroundColor"], transform: CSSProperties["transform"]) => ({
    backgroundColor,
    position: "absolute",
    zIndex: 1000,
    pointerEvents: "auto",
    willChange: "transform",
    display: "flex",
    flexDirection: "column",
    transform,
  }),

  right: {
    right: 0,
    top: 0,
    bottom: 0,
    transform: "translateX(100%)",
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

const Popup = ({ isOpened, onClose, placement = "right", ...props }: PopupProps) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const classNames = useClassNames(ComponentToken.Drawer);
  const _placement = PLACEMENTS[placement];
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      if (isOpened) {
        await animate(scope.current, { display: "block" }, { duration: 0 });
        animate(withDot(classNames[DrawerClassToken.Panel]), { transform: _placement.at(1) });
        animate(withDot(classNames[DrawerClassToken.Mask]), { opacity: 0.8 });
      } else {
        await Promise.all([
          animate(withDot(classNames[DrawerClassToken.Panel]), { transform: _placement.at(0) }),
          animate(withDot(classNames[DrawerClassToken.Mask]), { opacity: 0 }),
        ]);
        animate(scope.current, { display: "none" }, { duration: 0 });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened, ..._placement]);

  const styled = {
    popup: stylex.props(styles.popup),
    mask: stylex.props(styles.mask(theme.colors[ColorToken.SurfaceDim])),
    panel: stylex.props(styles.panel(theme.colors[ColorToken.OnPrimary], _placement.at(0)), styles[placement]),
    header: stylex.props(BODY.large, styles.header),
    body: stylex.props(styles.body),
  };

  return (
    <div
      ref={scope}
      className={clsx(styled.popup.className, classNames[DrawerClassToken.Drawer])}
      style={styled.popup.style}
    >
      {/* mask */}
      <div
        className={clsx(styled.mask.className, classNames[DrawerClassToken.Mask])}
        onClick={onClose}
        style={styled.mask.style}
      />

      {/* panel */}
      <div className={clsx(styled.panel.className, classNames[DrawerClassToken.Panel])} style={styled.panel.style}>
        <div
          className={clsx(styled.header.className, classNames[DrawerClassToken.Header])}
          style={styled.header.style}
        />
        <div className={clsx(styled.body.className, classNames[DrawerClassToken.Body])} style={styled.body.style}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
