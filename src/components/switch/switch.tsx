import React, { CSSProperties, useCallback } from "react";
import type { SwitchProps } from "./types";
import { useControlledState } from "@aiszlab/relax";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";

const styles = stylex.create({
  chip: (props: { borderColor: CSSProperties["borderColor"] }) => ({
    width: sizes.large,
    height: 20,
    borderRadius: sizes.xsmall,
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: props.borderColor,
    backgroundColor: "transparent",
    transition: "all 200ms",

    "::before": {
      content: "''",
      display: "block",
      margin: spacing.xxxsmall,
      height: "12px",
      width: "12px",
      borderRadius: sizes.infinity,
      backgroundColor: "black",
      transition: "all 200ms",
    },
  }),

  selected: (props: {
    backgroundColor: CSSProperties["backgroundColor"];
    thumbColor: CSSProperties["backgroundColor"];
  }) => ({
    borderColor: props.backgroundColor,
    backgroundColor: props.backgroundColor,

    "::before": {
      translate: "20px",
      backgroundColor: props.thumbColor,
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
    styles.chip({
      borderColor: theme.colors[ColorToken.Outline],
    }),
    isSelected &&
      styles.selected({
        backgroundColor: theme.colors[ColorToken.Primary],
        thumbColor: theme.colors[ColorToken.SurfaceContainerLow],
      })
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
