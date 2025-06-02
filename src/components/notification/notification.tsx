import { create as $create, props as $props } from "@stylexjs/stylex";
import React, { type CSSProperties, type FC, createElement, forwardRef, useRef } from "react";
import { usePresence, animate } from "motion/react";
import { useTheme } from "../theme";
import type { NotificationProps, Placement, Axis, Type } from "../../types/notification";
import { useAsyncEffect, useComposedRef, useTimeout } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { duration, elevations, sizes, spacing } from "../theme/tokens.stylex";
import { CheckCircle, Close, Loading, Error, NotificationImportant, Warning } from "../icon/icons";
import type { IconProps } from "../../types/icon";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";
import { $body, $title } from "../theme/theme";

const AXIS: Readonly<Record<Placement, Axis>> = {
  top: "top",
  "top-left": "left",
  "top-right": "right",
  bottom: "bottom",
  "bottom-left": "left",
  "bottom-right": "right",
};

export const PLACEMENTS: Record<Axis, [hidden: string, appeared: string]> = {
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
  notification: $create({
    default: (props: {
      backgroundColor: CSSProperties["backgroundColor"];
      color: CSSProperties["color"];
      transform: CSSProperties["transform"];
    }) => ({
      backgroundColor: props.backgroundColor,
      color: props.color,
      borderRadius: sizes.xxxxxxxsmall,
      boxShadow: elevations.xsmall,
      maxWidth: sizes.full,
      pointerEvents: "auto",
      overflow: "hidden",
      transitionProperty: "margin-top, transform",
      transitionDuration: duration.short,
      // hidden styles
      transform: props.transform,
      opacity: 0,
      marginBlockStart: spacing.none,
      // layout
      display: "grid",
      gap: spacing.xxsmall,
      gridTemplateAreas: "'leading title closer' '. description description'",
      // padding
      paddingBlock: spacing.large,
      paddingInline: spacing.large,
    }),

    simple: {
      gridTemplateAreas: "'leading description closer'",
      // padding
      paddingBlock: spacing.xxsmall,
      paddingInline: spacing.medium,
    },
  }),

  leading: $create({
    default: (props: { color: CSSProperties["color"] }) => ({
      gridArea: "leading",
      alignSelf: "center",
      display: "inline-flex",
      color: props.color,
    }),
  }),

  title: $create({
    default: {
      gridArea: "title",
    },
  }),

  description: $create({
    default: {
      gridArea: "description",
      display: "inline-block",
      wordBreak: "break-word",
    },

    simple: {
      alignSelf: "center",
    },
  }),

  closer: $create({
    default: {
      gridArea: "closer",
      alignSelf: "center",
      justifySelf: "flex-end",
    },
  }),
};

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({ placement, duration = 3000, onClose, description, title, type, closable = true }, ref) => {
    const theme = useTheme();
    const [isPresent, safeToRemove] = usePresence();
    const axis = AXIS[placement];
    const _placement = PLACEMENTS[axis];
    const classNames = useClassNames(CLASS_NAMES);
    const notificationRef = useRef<HTMLDivElement>(null);
    const _composedRef = useComposedRef(ref, notificationRef);

    // after duration, `Notification` will auto destroy
    useTimeout(async () => {
      const _notification = notificationRef.current;
      if (!_notification) return;

      switch (placement) {
        case "bottom":
        case "bottom-left":
        case "bottom-right":
          await animate(_notification, {
            opacity: 0,
            marginBlockEnd: _notification.getBoundingClientRect().height * -1,
          });
          break;
        default:
          await animate(_notification, {
            opacity: 0,
            marginBlockStart: _notification.getBoundingClientRect().height * -1,
          });
          break;
      }
      onClose?.();
    }, duration);

    const styled = {
      notification: $props(
        styles.notification.default({
          backgroundColor: theme.colors["surface-container-lowest"],
          color: theme.colors["on-surface"],
          transform: _placement[0],
        }),
        !title && styles.notification.simple,
      ),
      leading: $props(
        styles.leading.default({
          color:
            type === "success"
              ? theme.colors.success
              : type === "warning"
              ? theme.colors.warning
              : type === "error"
              ? theme.colors.error
              : theme.colors.primary,
        }),
      ),
      title: $props($title.medium, styles.title.default),
      description: $props(
        $body.medium,
        styles.description.default,
        !title && styles.description.simple,
      ),
      closer: $props(styles.closer.default),
    };

    useAsyncEffect(async () => {
      if (!isPresent) {
        safeToRemove();
        return;
      }

      // appear animation
      const _notification = notificationRef.current;
      if (!_notification) return;

      animate(_notification, { opacity: 1, transform: _placement[1] });
    }, [isPresent]);

    return (
      <div
        className={stringify(classNames.notification, styled.notification.className)}
        style={styled.notification.style}
        ref={_composedRef}
      >
        {LEADINGS.has(type) && (
          <div className={styled.leading.className} style={styled.leading.style}>
            {createElement(LEADINGS.get(type)!)}
          </div>
        )}

        {!!title && (
          <div
            className={stringify(classNames.title, styled.title.className)}
            style={styled.title.style}
          >
            {title}
          </div>
        )}

        <div
          className={stringify(classNames.description, styled.description.className)}
          style={styled.description.style}
        >
          {description}
        </div>

        {closable && (
          <Close
            className={stringify(classNames.closer, styled.closer.className)}
            onClick={onClose}
            color={theme.colors.primary}
          />
        )}
      </div>
    );
  },
);

export default Notification;
