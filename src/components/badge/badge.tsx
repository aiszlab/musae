import React from "react";
import { useClassNames } from "../../hooks/use-class-names";
import type { BadgeProps } from "../../types/badge";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { $label } from "../theme/theme";
import { sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { isVoid } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";

const styles = {
  badge: $create({
    default: {
      position: "relative",
      display: "inline-flex",
    },
  }),

  tail: $create({
    default: {
      position: "absolute",
      borderRadius: sizes.infinity,
      minWidth: sizes.xxxxsmall,
      textAlign: "center",
      boxShadow: `0 0 0 ${sizes.smallest} var(--color-on-primary)`,
      backgroundColor: "var(--color-primary)",
      color: "var(--color-on-primary)",
    },

    dot: {
      minWidth: null,
      width: sizes.xxxxxxxsmall,
      height: sizes.xxxxxxxsmall,
    },

    invisible: {
      display: "none",
    },

    "top-right": {
      top: 0,
      right: 0,
      transform: "translateX(50%) translateY(-50%)",
    },

    "top-left": {
      top: 0,
      left: 0,
      transform: "translateX(-50%) translateY(-50%)",
    },

    "bottom-right": {
      bottom: 0,
      right: 0,
      transform: "translateX(50%) translateY(50%)",
    },

    "bottom-left": {
      bottom: 0,
      left: 0,
      transform: "translateX(-50%) translateY(50%)",
    },
  }),
};

const Badge = ({
  className,
  style,
  children,
  content,
  invisible = false,
  placement = "top-right",
}: BadgeProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const theme = useTheme();
  const isDot = isVoid(content);

  const styled = {
    badge: $props(styles.badge.default),
    tail: $props(
      styles.tail.default,
      isDot && styles.tail.dot,
      $label.small,
      invisible && styles.tail.invisible,
      styles.tail[placement],
    ),
  };

  return (
    <span
      className={stringify(classNames.badge, className, styled.badge.className)}
      style={{
        ...styled.badge.style,
        ...style,
        // @ts-expect-error style vars
        "--color-primary": theme.colors.primary,
        "--color-on-primary": theme.colors["on-primary"],
      }}
    >
      {children}

      <span className={stringify(classNames.tail, styled.tail.className)} style={styled.tail.style}>
        {content}
      </span>
    </span>
  );
};

export default Badge;
