import stylex from "@stylexjs/stylex";
import React, { CSSProperties, useEffect } from "react";
import { useAnimate, usePresence } from "framer-motion";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { NotificationProps, Placement, Direction } from "./types";
import { useTimeout } from "@aiszlab/relax";
import { PLACEMENTS } from "./hooks";
import { useClassNames } from "../config";
import { ComponentToken, NotificationClassToken } from "../../utils/class-name";
import clsx from "clsx";

const DIRECTIONS: Readonly<Record<Placement, Direction>> = {
  top: "top",
  topLeft: "left",
  topRight: "right",
  bottom: "bottom",
  bottomLeft: "left",
  bottomRight: "right",
};

const styles = stylex.create({
  notification: (props: {
    background: CSSProperties["backgroundColor"];
    color: CSSProperties["color"];
    transform: CSSProperties["transform"];
  }) => ({
    backgroundColor: props.background,
    color: props.color,
    transform: props.transform,
  }),

  top: {
    transform: "translateY(-100%)",
  },

  right: {
    transform: "translateX(100%)",
  },

  left: {
    transform: "translateX(-100%)",
  },

  bottom: {
    transform: "translateY(100%)",
  },
});

const Notification = ({ placement, duration = 3000, onClose, children }: NotificationProps) => {
  const theme = useTheme();
  const [isPresent, safeToRemove] = usePresence();
  const direction = DIRECTIONS[placement];
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const _placement = PLACEMENTS[direction];
  const classNames = useClassNames(ComponentToken.Notification);

  /// after duration, `Notification` will auto destory
  useTimeout(async () => {
    await animate(scope.current, { opacity: 0, marginBlockStart: scope.current.getBoundingClientRect().height * -1 });
    onClose?.();
  }, duration);

  const styled = stylex.props(
    styles.notification({
      background: theme.colors[ColorToken.SurfaceContainer],
      color: theme.colors[ColorToken.OnSurface],
      transform: _placement[0],
    }),
    styles[direction]
  );

  useEffect(() => {
    if (!isPresent) {
      safeToRemove();
      return;
    }

    // appear animation
    animate(scope.current, { opacity: 1, transform: _placement[1] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);

  return (
    <div
      className={clsx(classNames[NotificationClassToken.Notification], styled.className)}
      style={styled.style}
      ref={scope}
    >
      <div className={clsx(classNames[NotificationClassToken.Title])}></div>
      <div className={clsx(classNames[NotificationClassToken.Description])}>{children}</div>
    </div>
  );
};

export default Notification;
