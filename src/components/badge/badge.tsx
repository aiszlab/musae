import styles from "./styles";
import React from "react";
import { useClassNames } from "../../hooks/use-class-names";
import type { BadgeProps } from "../../types/badge";
import { props as $props } from "@stylexjs/stylex";
import { $label } from "../theme/theme";
import { useTheme } from "../theme";
import { isVoid } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";

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
