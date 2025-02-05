import React, { type CSSProperties } from "react";
import { useClassNames } from "../../hooks/use-class-names.component";
import type { BadgeProps } from "../../types/badge";
import stylex from "@stylexjs/stylex";
import { typography } from "../theme/theme";
import { sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { isVoid } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";

const styles = {
  badge: stylex.create({
    default: {
      position: "relative",
      display: "inline-flex",
    },
  }),

  tail: stylex.create({
    default: (props: {
      backgroundColor: CSSProperties["backgroundColor"];
      color: CSSProperties["color"];
    }) => ({
      position: "absolute",
      borderRadius: sizes.infinity,
      minWidth: sizes.xxxxsmall,
      textAlign: "center",
      boxShadow: `0 0 0 ${sizes.smallest} ${props.color}`,
      backgroundColor: props.backgroundColor,
      color: props.color,
    }),

    dot: {
      minWidth: null,
      width: sizes.xxxxxxsmall,
      height: sizes.xxxxxxsmall,
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
    badge: stylex.props(styles.badge.default),
    tail: stylex.props(
      styles.tail.default({
        backgroundColor: theme.colors.primary,
        color: theme.colors["on-primary"],
      }),
      isDot && styles.tail.dot,
      typography.label.small,
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
