import React, { CSSProperties, useCallback } from "react";
import type { SwitchProps } from "./types";
import { useControlledState } from "@aiszlab/relax";
import { stylex } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";

const styles = stylex.create({
  chip: (borderColor: CSSProperties["borderColor"]) => ({
    width: "28px",
    height: "16px",
    borderRadius: "16px",

    borderWidth: "2px",
    borderStyle: "solid",
    borderColor,
    backgroundColor: "transparent",
    transition: "all 200ms",

    "::before": {
      content: "''",
      display: "block",
      margin: spacing.xxxsmall,
      height: "12px",
      width: "12px",
      borderRadius: Infinity,
      backgroundColor: "black",
      transition: "all .2s",
    },
  }),

  selected: (
    borderColor: CSSProperties["borderColor"],
    backgroundColor: CSSProperties["backgroundColor"],
    thumbBackgroundColor: CSSProperties["backgroundColor"]
  ) => ({
    borderColor,
    backgroundColor,

    "::before": {
      translate: "100%",
      backgroundColor: thumbBackgroundColor,
    },
  }),
});

const Switch = ({ value, ...props }: SwitchProps) => {
  const [isSelected, setIsSelected] = useControlledState(value);
  const theme = useTheme();

  const toggle = useCallback(() => {
    setIsSelected((isSelected) => !isSelected);
  }, [setIsSelected]);

  const styled = stylex.props(
    styles.chip(theme.colors[ColorToken.Outline]),
    isSelected &&
      styles.selected(
        theme.colors[ColorToken.Primary],
        theme.colors[ColorToken.Primary],
        theme.colors[ColorToken.SurfaceContainerLowest]
      )
  );

  return (
    <div
      aria-selected={isSelected}
      onClick={toggle}
      className={clsx(styled.className, props.className)}
      style={{
        ...styled.style,
        ...props.style,
      }}
    />
  );
};

export default Switch;
