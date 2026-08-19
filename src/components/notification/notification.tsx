import styles from "./styles";
import { props as $props } from "@stylexjs/stylex";
import React, { type FC, createElement, forwardRef, useRef } from "react";
import { usePresence, animate } from "motion/react";
import { useTheme } from "../theme";
import type { NotificationProps, Placement, Axis, Type } from "../../types/notification";
import { useAsyncEffect, useComposedRef, useTimeout } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import {
  IconCheckCircle,
  IconClose,
  IconLoading,
  IconError,
  IconNotificationImportant,
  IconWarning,
} from "../icon/icons";
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
  ["success", IconCheckCircle],
  ["error", IconError],
  ["loading", IconLoading],
  ["info", IconNotificationImportant],
  ["warning", IconWarning],
]);

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
      notification: $props(styles.notification.default, !title && styles.notification.simple),
      leading: $props(
        styles.leading.default,
        type === "success" && styles.leading.success,
        type === "warning" && styles.leading.warning,
        type === "error" && styles.leading.error,
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

      animate(_notification, { opacity: 1, transform: _placement.at(1) });
    }, [isPresent]);

    return (
      <div
        ref={_composedRef}
        className={stringify(classNames.notification, styled.notification.className)}
        style={{
          ...styled.notification.style,
          "--color-surface-container-lowest": theme.colors["surface-container-lowest"],
          "--color-on-surface": theme.colors["on-surface"],
          "--placement": _placement.at(0),
          "--color-success": theme.colors.success,
          "--color-warning": theme.colors.warning,
          "--color-error": theme.colors.error,
          "--color-primary": theme.colors.primary,
        }}
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
          <IconClose
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
