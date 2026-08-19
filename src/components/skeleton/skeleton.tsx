import styles from "./styles";
import { props as $props } from "@stylexjs/stylex";
import type { SkeletonProps } from "../../types/skeleton";
import React from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { OPACITY } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

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
