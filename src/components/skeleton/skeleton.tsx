import stylex from "@stylexjs/stylex";
import type { SkeletonProps } from "./types";
import React from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, SkeletonClassToken } from "../../utils/class-name";
import clsx from "clsx";

const animation = stylex.keyframes({
  from: {
    backgroundPosition: "100% 50%",
  },

  "100%": {
    backgroundPosition: "0 50%",
  },
});

const styles = stylex.create({
  skeleton: {},

  animation: {
    animationName: animation,
    animationDuration: "1.5s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
  },
});

const Skeleton = ({ animation = false, variant, className, style }: SkeletonProps) => {
  const classNames = useClassNames(ComponentToken.Skeleton);

  const styled = stylex.props(styles.skeleton, animation && styles.animation);

  return (
    <div
      className={clsx(classNames[SkeletonClassToken.Skeleton], className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    />
  );
};

export default Skeleton;
