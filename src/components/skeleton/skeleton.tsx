import stylex from "@stylexjs/stylex";
import type { SkeletonProps } from "./types";
import React, { CSSProperties } from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { SkeletonClassToken } from "../../utils/class-name";
import { clsx } from "@aiszlab/relax";
import { OPACITY, sizes } from "../theme/tokens.stylex";
import { ComponentToken } from "../../utils/component-token";
import { useTheme } from "../theme";
import { toRgba } from "../../utils/colors";

const animation = stylex.keyframes({
  from: {
    backgroundPosition: "100% 50%",
  },

  "100%": {
    backgroundPosition: "0 50%",
  },
});

const styles = stylex.create({
  variables: (props: {
    shadow: CSSProperties["color"];
    lighterShadow: CSSProperties["color"];
  }) => ({
    "--shadow": props.shadow,
    "--lighter-shadow": props.lighterShadow,
  }),

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
    background: "var(--shadow)",
  },

  animation: {
    background:
      "linear-gradient(90deg, var(--shadow) 25%, var(--lighter-shadow) 37%, var(--shadow) 63%)",
    backgroundSize: "400% 100%",
    animationName: animation,
    animationDuration: "1.5s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
  },
});

const Skeleton = ({ animation = false, variant, className, style }: SkeletonProps) => {
  const classNames = useClassNames(ComponentToken.Skeleton);
  const theme = useTheme();

  const styled = stylex.props(
    styles.variables({
      shadow: toRgba(theme.colors.shadow, OPACITY.thin),
      lighterShadow: toRgba(theme.colors.shadow, OPACITY.thick),
    }),
    !!variant && styles[variant],
    animation && styles.animation,
  );

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
