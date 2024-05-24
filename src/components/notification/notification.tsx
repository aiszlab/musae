import stylex from "@stylexjs/stylex";
import React, { type CSSProperties, useEffect } from "react";
import { useAnimate, usePresence } from "framer-motion";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { NotificationProps, Placement, Direction } from "./types";
import { useTimeout } from "@aiszlab/relax";
import { useClassNames } from "../config/hooks";
import { ComponentToken, NotificationClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { elevations, sizes, spacing } from "../theme/tokens.stylex";

const DIRECTIONS: Readonly<Record<Placement, Direction>> = {
  top: "top",
  topLeft: "left",
  topRight: "right",
  bottom: "bottom",
  bottomLeft: "left",
  bottomRight: "right",
};

export const PLACEMENTS: Record<Direction, [hidden: string, appeared: string]> = {
  right: ["translateX(100%)", "translateX(0)"],
  left: ["translateX(-100%)", "translateX(0)"],
  bottom: ["translateY(100%)", "translateY(0)"],
  top: ["translateY(-100%)", "translateY(0)"],
};

// const SIGNALS = new Map<MessageProps["type"], FC<IconProps>>([
//   ["success", CheckCircle],
//   ["error", Cancel],
// ]);

// const styles = stylex.create({
//   message: (props: { backgroundColor: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({

//   }),

// });

const styles = stylex.create({
  notification: (props: {
    backgroundColor: CSSProperties["backgroundColor"];
    color: CSSProperties["color"];
    transform: CSSProperties["transform"];
  }) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
    transform: props.transform,

    paddingBlock: spacing.small,
    paddingInline: spacing.medium,
    borderRadius: sizes.xxxsmall,
    boxShadow: elevations.xsmall,
    display: "flex",
    alignItems: "flex-start",
    columnGap: spacing.xsmall,
    maxWidth: sizes.full,
    pointerEvents: "all",
    overflow: "hidden",
    opacity: 0,
    marginBlockStart: 0,
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

  content: {
    display: "inline-block",
    wordBreak: "break-word",
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

  const styled = {
    notification: stylex.props(
      styles.notification({
        backgroundColor: theme.colors[ColorToken.SurfaceContainer],
        color: theme.colors[ColorToken.OnSurface],
        transform: _placement[0],
      }),
      styles[direction]
    ),
    content: stylex.props(styles.content),
  };

  // const styled = {
  //   message: stylex.props(
  //     styles.message({
  //       backgroundColor: theme.colors[ColorToken.OnPrimary],
  //       color: theme.colors[ColorToken.OnPrimaryContainer],
  //     })
  //   ),
  //   content: stylex.props(typography.body.medium, styles.content),
  // };

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
      className={clsx(classNames[NotificationClassToken.Notification], styled.notification.className)}
      style={styled.notification.style}
      ref={scope}
    >
      <div className={clsx(classNames[NotificationClassToken.Title])}></div>
      <div className={clsx(classNames[NotificationClassToken.Description])}>{children}</div>
    </div>
  );
};

export default Notification;
