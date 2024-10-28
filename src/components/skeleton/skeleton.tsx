import stylex from "@stylexjs/stylex";
import type { SkeletonProps } from "musae/types/skeleton";
import React, { type CSSProperties } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { OPACITY } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { hexToRgba } from "@aiszlab/fuzzy/color";
import { useClassNames } from "../../hooks/use-class-names.component";
import { CLASS_NAMES } from "./context";

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
    backgroundColor: "var(--shadow)",
  },

  animation: {
    backgroundColor: null,
    backgroundImage:
      "linear-gradient(90deg, var(--shadow) 25%, var(--lighter-shadow) 37%, var(--shadow) 63%)",
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

  const styled = stylex.props(
    styles.variables({
      shadow: hexToRgba(theme.colors.shadow, OPACITY.thin, "style"),
      lighterShadow: hexToRgba(theme.colors.shadow, OPACITY.thick, "style"),
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
