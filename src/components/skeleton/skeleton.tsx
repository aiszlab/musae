import stylex from "@stylexjs/stylex";
import type { SkeletonProps } from "musae/types/skeleton";
import React, { type CSSProperties } from "react";
import { useClassNames } from "../../hooks/use-class-names";
import { SkeletonClassToken } from "../../utils/class-name";
import { clsx } from "@aiszlab/relax";
import { OPACITY } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { hexToRgba } from "@aiszlab/fuzzy/color";

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

const Skeleton = ({ animation = true, className, style }: SkeletonProps) => {
  const classNames = useClassNames("skeleton");
  const theme = useTheme();

  const styled = stylex.props(
    styles.variables({
      shadow: hexToRgba(theme.colors.shadow, OPACITY.thin, true),
      lighterShadow: hexToRgba(theme.colors.shadow, OPACITY.thick, true),
    }),
    styles.skeleton,
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
