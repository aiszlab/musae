import React, { type CSSProperties } from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { BadgeClassToken, ComponentToken } from "../../utils/class-name";
import type { BadgeProps } from "./types";
import stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { typography } from "../theme/theme";
import { sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { isVoid } from "@aiszlab/relax";

const styles = {
  badge: stylex.create({
    default: {
      position: "relative",
      display: "inline-flex",
    },
  }),

  tail: stylex.create({
    default: (props: { backgroundColor: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({
      position: "absolute",
      top: 0,
      right: 0,
      transform: "translateX(50%) translateY(-50%)",
      borderRadius: sizes.infinity,
      minWidth: sizes.xxxsmall,
      textAlign: "center",
      boxShadow: `0 0 0 ${sizes.smallest} ${props.color}`,

      backgroundColor: props.backgroundColor,
      color: props.color,
    }),

    dot: {
      minWidth: null,
    },

    invisible: {
      display: "none",
    },
  }),
};

const Badge = ({ className, style, children, content, invisible = false }: BadgeProps) => {
  const classNames = useClassNames(ComponentToken.Badge);
  const theme = useTheme();
  const isDot = isVoid(content);

  const styled = {
    badge: stylex.props(styles.badge.default),
    tail: stylex.props(
      styles.tail.default({
        backgroundColor: theme.colors[ColorToken.Primary],
        color: theme.colors[ColorToken.OnPrimary],
      }),
      isDot && styles.tail.dot,
      typography.label.small,
      invisible && styles.tail.invisible,
    ),
  };

  return (
    <span
      className={clsx(classNames[BadgeClassToken.Badge], className, styled.badge.className)}
      style={{
        ...styled.badge.style,
        ...style,
      }}
    >
      {children}

      <span className={clsx(classNames[BadgeClassToken.Tail], styled.tail.className)} style={styled.tail.style}>
        {content}
      </span>
    </span>
  );
};

export default Badge;
