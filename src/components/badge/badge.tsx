import React from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { BadgeClassToken, ComponentToken } from "../../utils/class-name";
import { BadgeProps } from "./types";
import stylex from "@stylexjs/stylex";
import clsx from "clsx";

const styles = stylex.create({
  badge: {
    position: "relative",
    display: "inline-flex",
  },

  tail: {
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translateX(50%) translateY(-50%)",
  },
});

const Badge = ({ className, style, children, content }: BadgeProps) => {
  const classNames = useClassNames(ComponentToken.Badge);

  const styled = {
    badge: stylex.props(styles.badge),
    tail: stylex.props(styles.tail),
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
