import stylex from "@stylexjs/stylex";
import type { SkeletonProps } from "./types";
import React from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, SkeletonClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { sizes } from "../theme/tokens.stylex";

const animation = stylex.keyframes({
  from: {
    backgroundPosition: "100% 50%",
  },

  "100%": {
    backgroundPosition: "0 50%",
  },
});

const styles = stylex.create({
  title: {
    width: sizes.xxxxxlarge,
    height: sizes.xxsmall,
    borderRadius: sizes.xxxxxsmall,
  },

  button: {
    width: sizes.xxxlarge,
    height: sizes.xxsmall,
    borderRadius: sizes.infinity,
  },

  avatar: {
    width: sizes.xxsmall,
    height: sizes.xxsmall,
    borderRadius: sizes.infinity,
  },

  skeleton: {
    background: "rgba(0, 0, 0, 0.06)",
  },

  animation: {
    background: "linear-gradient(90deg, rgba(0, 0, 0, 0.06) 25%, rgba(0, 0, 0, 0.15) 37%, rgba(0, 0, 0, 0.06) 63%)",
    backgroundSize: "400% 100%",
    animationName: animation,
    animationDuration: "1.5s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
  },
});

const Skeleton = ({ animation = false, variant, className, style }: SkeletonProps) => {
  const classNames = useClassNames(ComponentToken.Skeleton);

  const styled = stylex.props(!!variant && styles[variant], animation && styles.animation);

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
