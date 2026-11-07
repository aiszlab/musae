import styles from "./styles";
import React, { useContext } from "react";
import { props as $props } from "@stylexjs/stylex";
import type { LinearProps } from "../../types/progress";
import { stringify } from "@aiszlab/relax/class-name";
import { useValue } from "./hooks";
import Context from "./context";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

const Linear = ({
  min = 0,
  max = 100,
  value = min,
  className,
  style,
  height,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: LinearProps) => {
  const { classNames } = useContext(Context);
  const { percentage } = useValue({ value, min, max });
  const _themeColorVars = useThemeColorVars(["primary-container", "primary"]);

  const styled = {
    progress: $props(styles.linear.progress),
    segment: $props(styles.linear.segment),
  };

  return (
    <div
      className={stringify(classNames.progress, className, styled.progress.className)}
      style={{
        ...styled.progress.style,
        ..._themeColorVars,
        height,
        "--width": percentage + "%",
        ...style,
      }}
      role="progressbar"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-valuemin={min}
      aria-valuemax={Math.max(min, max)}
      aria-valuenow={Math.min(Math.max(value, min), Math.max(min, max))}
    >
      <div
        className={stringify(classNames.segment, styled.segment.className)}
        style={styled.segment.style}
      />
    </div>
  );
};

export default Linear;
