import React, { CSSProperties } from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { BadgeClassToken, ComponentToken } from "../../utils/class-name";
import { BadgeProps } from "./types";
import stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { typography } from "../theme/theme";
import { sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  badge: {
    position: "relative",
    display: "inline-flex",
  },

  tail: (props: { backgroundColor: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translateX(50%) translateY(-50%)",
    borderRadius: sizes.infinity,
    minWidth: sizes.xxxsmall,
    textAlign: "center",

    backgroundColor: props.backgroundColor,
    color: props.color,
  }),
});

const Badge = ({ className, style, children, content }: BadgeProps) => {
  const classNames = useClassNames(ComponentToken.Badge);
  const theme = useTheme();

  const styled = {
    badge: stylex.props(styles.badge),
    tail: stylex.props(
      styles.tail({
        backgroundColor: theme.colors[ColorToken.Primary],
        color: theme.colors[ColorToken.OnPrimary],
      }),
      typography.label.small,
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
