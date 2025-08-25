import { props as $props, create as $create, keyframes as $keyframes } from "@stylexjs/stylex";
import type { SkeletonProps } from "../../types/skeleton";
import React from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { OPACITY } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import { type ThemeColorVariable, useThemeColorVars } from "src/hooks/use-theme-color-vars";

const animation = $keyframes({
  from: {
    backgroundPosition: "100% 50%",
  },

  "100%": {
    backgroundPosition: "0 50%",
  },
});

const styles = $create({
  skeleton: {
    backgroundColor: "var(--color-shadow-opacity-08)" satisfies ThemeColorVariable,
  },

  animation: {
    backgroundColor: null,
    backgroundImage:
      "linear-gradient(90deg, var(--color-shadow-opacity-08) 25%, var(--color-shadow-opacity-16) 37%, var(--color-shadow-opacity-08) 63%)",
    backgroundSize: "400% 100%",
    animationName: animation,
    animationDuration: "1.5s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
  },
});

const Skeleton = ({ animation = true, className, style, children }: SkeletonProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const _themeColorVars = useThemeColorVars([
    ["shadow", OPACITY.thin],
    ["shadow", OPACITY.thick],
  ]);

  const styled = $props(styles.skeleton, animation && styles.animation);

  return (
    <div
      className={stringify(classNames.skeleton, className, styled.className)}
      style={{
        ...styled.style,
        ..._themeColorVars,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Skeleton;
