import stylex from "@stylexjs/stylex";
import React, { type CSSProperties, useEffect, type FC, createElement, forwardRef } from "react";
import { useAnimate, usePresence } from "framer-motion";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import type { NotificationProps, Placement, Direction, Type } from "./types";
import { useRefs, useTimeout } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, NotificationClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { elevations, sizes, spacing } from "../theme/tokens.stylex";
import { Button } from "../button";
import { CheckCircle, Close, Loading, Error, NotificationImportant, Warning } from "../icon/icons";
import { typography } from "../theme/theme";
import type { IconProps } from "../icon";

const DIRECTIONS: Readonly<Record<Placement, Direction>> = {
  top: "top",
  "top-left": "left",
  "top-right": "right",
  bottom: "bottom",
  "bottom-left": "left",
  "bottom-right": "right",
};

export const PLACEMENTS: Record<Direction, [hidden: string, appeared: string]> = {
  right: ["translateX(100%)", "translateX(0)"],
  left: ["translateX(-100%)", "translateX(0)"],
  bottom: ["translateY(100%)", "translateY(0)"],
  top: ["translateY(-100%)", "translateY(0)"],
};

const LEADINGS = new Map<Type, FC<IconProps>>([
  ["success", CheckCircle],
  ["error", Error],
  ["loading", Loading],
  ["info", NotificationImportant],
  ["warning", Warning],
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
      borderRadius: sizes.xxxxxsmall,
      boxShadow: elevations.xsmall,
      maxWidth: sizes.full,
      pointerEvents: "all",
      overflow: "hidden",
      transitionProperty: "margin-top, transform",
      transitionDuration: "0.2s",
      // hidden styles
      transform: props.transform,
      opacity: 0,
      marginTop: 0,
      // layout
      display: "grid",
      gap: spacing.small,
      grid: "'leading title closer' '. description description'",
      // padding
      paddingBlock: spacing.large,
      paddingInline: spacing.large,
    }),

    simple: {
      grid: "'leading description closer'",
      // padding
      paddingBlock: spacing.small,
      paddingInline: spacing.medium,
    },
  }),

  leading: stylex.create({
    default: (props: { color: CSSProperties["color"] }) => ({
      gridArea: "leading",
      alignSelf: "center",
      display: "inline-flex",
      color: props.color,
    }),
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
      justifySelf: "flex-end",
    },
  }),
};

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({ placement, duration = 3000, onClose, description, title, type, closable = true }, ref) => {
    const theme = useTheme();
    const [isPresent, safeToRemove] = usePresence();
    const direction = DIRECTIONS[placement];
    const [scope, animate] = useAnimate<HTMLDivElement>();
    const _placement = PLACEMENTS[direction];
    const classNames = useClassNames(ComponentToken.Notification);
    const notificationRef = useRefs(scope, ref);

    // after duration, `Notification` will auto destroy
    useTimeout(async () => {
      switch (placement) {
        case "bottom":
        case "bottom-left":
        case "bottom-right":
          await animate(scope.current, {
            opacity: 0,
            marginBottom: scope.current.getBoundingClientRect().height * -1,
          });
          break;
        default:
          await animate(scope.current, {
            opacity: 0,
            marginTop: scope.current.getBoundingClientRect().height * -1,
          });
          break;
      }
      onClose?.();
    }, duration);

    const styled = {
      notification: stylex.props(
        styles.notification.default({
          backgroundColor: theme.colors[ColorToken.SurfaceContainerLowest],
          color: theme.colors[ColorToken.OnSurface],
          transform: _placement[0],
        }),
        !title && styles.notification.simple,
      ),
      leading: stylex.props(
        styles.leading.default({
          color:
            type === "success"
              ? theme.colors[ColorToken.Success]
              : type === "warning"
              ? theme.colors[ColorToken.Warning]
              : type === "error"
              ? theme.colors[ColorToken.Error]
              : theme.colors[ColorToken.Primary],
        }),
      ),
      title: stylex.props(typography.title.medium, styles.title.default),
      description: stylex.props(
        typography.body.medium,
        styles.description.default,
        !title && styles.description.simple,
      ),
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

    return (
      <div
        className={clsx(classNames[NotificationClassToken.Notification], styled.notification.className)}
        style={styled.notification.style}
        ref={notificationRef}
      >
        {LEADINGS.has(type) && (
          <div className={styled.leading.className} style={styled.leading.style}>
            {createElement(LEADINGS.get(type)!)}
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
  },
);

export default Notification;
