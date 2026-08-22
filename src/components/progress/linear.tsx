import styles from "./styles";
import React, { useContext } from "react";
import { props as $props } from "@stylexjs/stylex";
import type { LinearProps } from "../../types/progress";
import { stringify } from "@aiszlab/relax/class-name";
import { useValue } from "./hooks";
import Context from "./context";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

const Linear = ({ value: _value, className, style }: LinearProps) => {
  const { classNames } = useContext(Context);
  const { value } = useValue({ value: _value });
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
        ...style,
        ..._themeColorVars,
        "--width": value + "%",
      }}
    >
      <div
        className={stringify(classNames.segment, styled.segment.className)}
        style={styled.segment.style}
      />
    </div>
  );
};

export default Linear;
