import React, { useContext } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import type { LinearProps } from "../../types/progress";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes } from "../theme/tokens.stylex";
import { useValue } from "./hooks";
import Context from "./context";
import { type ThemeColorVariable, useThemeColorVars } from "../../hooks/use-theme-color-vars";

const styles = $create({
  progress: {
    width: sizes.full,
    height: sizes.xxxxxxxxxsmall,
    backgroundColor: "var(--color-primary-container)" satisfies ThemeColorVariable,
    borderRadius: sizes.infinity,
  },

  segment: {
    width: "var(--flex)",
    height: sizes.full,
    borderRadius: sizes.infinity,
    backgroundColor: "var(--color-primary)" satisfies ThemeColorVariable,
  },
});

const Linear = ({ value: _value, className, style }: LinearProps) => {
  const { classNames } = useContext(Context);
  const { value } = useValue({ value: _value });
  const _themeColorVars = useThemeColorVars(["primary-container", "primary"]);

  const styled = {
    progress: $props(styles.progress),
    segment: $props(styles.segment),
  };

  return (
    <div
      className={stringify(classNames.progress, className, styled.progress.className)}
      style={{
        ...styled.progress.style,
        ...style,
        ..._themeColorVars,
        "--flex": value,
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
