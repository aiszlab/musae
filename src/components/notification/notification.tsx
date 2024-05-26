import stylex from "@stylexjs/stylex";
import React, { type CSSProperties, useEffect } from "react";
import { useAnimate, usePresence } from "framer-motion";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { NotificationProps, Placement, Direction } from "./types";
import { useTimeout } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, NotificationClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { elevations, sizes, spacing } from "../theme/tokens.stylex";
import { Button } from "../button";
import { Close } from "../icon/icons";
import { typography } from "../theme/theme";

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

const styles = stylex.create({
  notification: (props: {
    backgroundColor: CSSProperties["backgroundColor"];
    color: CSSProperties["color"];
    transform: CSSProperties["transform"];
  }) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
    paddingBlock: spacing.small,
    paddingInline: spacing.medium,
    borderRadius: sizes.xxxxxsmall,
    boxShadow: elevations.xsmall,
    alignItems: "flex-start",
    columnGap: spacing.xsmall,
    maxWidth: sizes.full,
    pointerEvents: "all",
    overflow: "hidden",
    marginBlockStart: 0,

    // hidden styles
    transform: props.transform,
    opacity: 0,
    height: 0,

    // layout
    display: "grid",
    grid: "'leading title closer' 'leading description description'",
  }),

  simple: {
    grid: "'leading description closer'",
  },

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

  leading: {
    gridArea: "leading",
  },

  title: {
    gridArea: "title",
  },

  description: {
    gridArea: "description",
    display: "inline-block",
    wordBreak: "break-word",
  },

  closer: {
    gridArea: "closer",
  },
});

const Notification = ({ placement, duration = 3000, onClose, description, title }: NotificationProps) => {
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
        backgroundColor: theme.colors[ColorToken.OnPrimary],
        color: theme.colors[ColorToken.OnPrimaryContainer],
        transform: _placement[0],
      }),
      styles[direction]
    ),
    title: stylex.props(typography.title.small, styles.title),
    description: stylex.props(typography.body.small, styles.description),
    closer: stylex.props(styles.closer),
  };

  useEffect(() => {
    if (!isPresent) {
      safeToRemove();
      return;
    }

    // appear animation
    const appear = async () => {
      await animate(scope.current, { height: "auto" });
      await animate(scope.current, { opacity: 1, transform: _placement[1] });
    };
    appear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);

  return (
    <div
      className={clsx(classNames[NotificationClassToken.Notification], styled.notification.className)}
      style={styled.notification.style}
      ref={scope}
    >
      {!!title && (
        <div
          className={clsx(classNames[NotificationClassToken.Title], styled.title.className)}
          style={styled.title.style}
        >
          {title}
        </div>
      )}

      <div
        className={clsx(classNames[NotificationClassToken.Description], styled.description.className)}
        style={styled.description.style}
      >
        {description}
      </div>

      <Button
        className={clsx(classNames[NotificationClassToken.Closer], styled.closer.className)}
        shape="circular"
        variant="text"
        prefix={<Close />}
        onClick={onClose}
        size="small"
      />
    </div>
  );
};

export default Notification;
