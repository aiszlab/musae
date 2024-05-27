import stylex from "@stylexjs/stylex";
import React, { type CSSProperties, useEffect, type FC, createElement } from "react";
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
import { Cancel, CheckCircle, Close } from "../icon/icons";
import { typography } from "../theme/theme";
import type { IconProps } from "../icon";

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

const SIGNALS = new Map<NotificationProps["type"], FC<IconProps>>([
  ["success", CheckCircle],
  ["error", Cancel],
]);

const styles = {
  notification: stylex.create({
    default: (props: {
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
      marginTop: 0,
      transitionProperty: "margin-top, transform",
      transitionDuration: "0.2s",
      // hidden styles
      transform: props.transform,
      opacity: 0,
      // layout
      display: "grid",
      grid: "'leading title closer' 'leading description description'",
    }),

    simple: {
      grid: "'leading description closer'",
    },
  }),

  leading: stylex.create({
    default: {
      gridArea: "leading",
      alignSelf: "center",
      display: "inline-flex",
    },
  }),

  title: stylex.create({
    default: {
      gridArea: "title",
    },
  }),

  description: stylex.create({
    default: {
      gridArea: "description",
      display: "inline-block",
      wordBreak: "break-word",
    },

    simple: {
      alignSelf: "center",
    },
  }),

  closer: stylex.create({
    default: {
      gridArea: "closer",
    },
  }),
};

const Notification = ({
  placement,
  duration = 3000,
  onClose,
  description,
  title,
  type,
  closable = false,
}: NotificationProps) => {
  const theme = useTheme();
  const [isPresent, safeToRemove] = usePresence();
  const direction = DIRECTIONS[placement];
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const _placement = PLACEMENTS[direction];
  const classNames = useClassNames(ComponentToken.Notification);

  // after duration, `Notification` will auto destory
  useTimeout(async () => {
    await animate(scope.current, { opacity: 0, marginTop: scope.current.getBoundingClientRect().height * -1 });
    onClose?.();
  }, duration);

  const styled = {
    notification: stylex.props(
      styles.notification.default({
        backgroundColor: theme.colors[ColorToken.OnPrimary],
        color: theme.colors[ColorToken.OnPrimaryContainer],
        transform: _placement[0],
      }),
      !title && styles.notification.simple
    ),
    leading: stylex.props(styles.leading.default),
    title: stylex.props(typography.title.small, styles.title.default),
    description: stylex.props(typography.body.small, styles.description.default, !title && styles.description.simple),
    closer: stylex.props(styles.closer.default),
  };

  useEffect(() => {
    if (!isPresent) {
      safeToRemove();
      return;
    }

    // appear animation
    animate(scope.current, { opacity: 1, transform: _placement[1] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);

  const leading = SIGNALS.get(type);

  return (
    <div
      className={clsx(classNames[NotificationClassToken.Notification], styled.notification.className)}
      style={styled.notification.style}
      ref={scope}
    >
      {leading && (
        <div className={styled.leading.className} style={styled.leading.style}>
          {createElement(leading)}
        </div>
      )}

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

      {closable && (
        <Button
          className={clsx(classNames[NotificationClassToken.Closer], styled.closer.className)}
          shape="circular"
          variant="text"
          prefix={<Close />}
          onClick={onClose}
          size="small"
        />
      )}
    </div>
  );
};

export default Notification;
