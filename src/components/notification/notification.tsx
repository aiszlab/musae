import stylex from "@stylexjs/stylex";
import React, { CSSProperties, useEffect } from "react";
import { useAnimate, usePresence } from "framer-motion";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { NotificationProps, Placement, Direction } from "./types";
import { useTimeout } from "@aiszlab/relax";

const ENTER_DIRECTIONS: Readonly<Record<Placement, Direction>> = {
  top: "top",
  topLeft: "left",
  topRight: "right",
  bottom: "bottom",
  bottomLeft: "left",
  bottomRight: "right",
};

const styles = stylex.create({
  notification: (props: { background: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({
    backgroundColor: props.background,
    color: props.color,
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

const Notification = ({ placement, duration = 3000, onClose }: NotificationProps) => {
  const theme = useTheme();
  const [isPresent, safeToRemove] = usePresence();
  const enterDirection = ENTER_DIRECTIONS[placement];
  const [scope, animate] = useAnimate<HTMLDivElement>();

  /// after duration, message will auto destory
  useTimeout(async () => {
    await animate(scope.current, { opacity: 0, marginBlockStart: scope.current.getBoundingClientRect().height * -1 });
    onClose?.();
  }, duration);

  const styled = stylex.props(
    styles.notification({
      background: theme.colors[ColorToken.SurfaceContainer],
      color: theme.colors[ColorToken.OnSurface],
    }),
    styles[enterDirection]
  );

  useEffect(() => {
    if (!isPresent) {
      safeToRemove();
      return;
    }

    // appear animation
    animate(scope.current, { opacity: 1, transform: "translateY(0px)" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);

  return (
    <div className={styled.className} style={styled.style} ref={scope}>
      展示消息
    </div>
  );
};

export default Notification;
