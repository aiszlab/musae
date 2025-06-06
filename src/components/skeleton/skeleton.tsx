import { props as $props, create as $create, keyframes as $keyframes } from "@stylexjs/stylex";
import type { SkeletonProps } from "../../types/skeleton";
import React, { type CSSProperties } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { OPACITY } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { hexToRgba } from "@aiszlab/fuzzy/color";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";

const animation = $keyframes({
  from: {
    backgroundPosition: "100% 50%",
  },

  "100%": {
    backgroundPosition: "0 50%",
  },
});

const styles = $create({
  variables: (props: {
    shadow: CSSProperties["color"];
    lighterShadow: CSSProperties["color"];
  }) => ({
    "--color-shadow": props.shadow,
    "--lighter-shadow": props.lighterShadow,
  }),

  skeleton: {
    backgroundColor: "var(--color-shadow)",
  },

  animation: {
    backgroundColor: null,
    backgroundImage:
      "linear-gradient(90deg, var(--color-shadow) 25%, var(--lighter-shadow) 37%, var(--color-shadow) 63%)",
    backgroundSize: "400% 100%",
    animationName: animation,
    animationDuration: "1.5s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
  },
});

const Skeleton = ({ animation = true, className, style, children }: SkeletonProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const theme = useTheme();

  const styled = $props(
    styles.variables({
      shadow: hexToRgba(theme.colors.shadow, OPACITY.thin).toString(),
      lighterShadow: hexToRgba(theme.colors.shadow, OPACITY.thick).toString(),
    }),
    styles.skeleton,
    animation && styles.animation,
  );

  return (
    <div
      className={stringify(classNames.skeleton, className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Skeleton;
