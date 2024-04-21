import React, { CSSProperties, useCallback } from "react";
import type { SwitchProps } from "./types";
import { useControlledState } from "@aiszlab/relax";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";
import { useClassNames } from "../config";
import { ComponentToken, SwitchClassToken } from "../../utils/class-name";

const styles = stylex.create({
  switch: (props: {
    borderColor: CSSProperties["borderColor"];
    thumbColor: CSSProperties["color"];
    backgroundColor: CSSProperties["backgroundColor"];
  }) => ({
    width: `calc(${sizes.xlarge} + ${spacing.xxxsmall} * 2)`,
    height: sizes.medium,
    display: "flex",
    alignItems: "center",

    borderRadius: sizes.infinity,
    borderWidth: sizes.xxxxsmall,
    borderStyle: "solid",
    borderColor: props.borderColor,

    backgroundColor: "transparent",
    transition: "all 0.2s",

    "::before": {
      content: "''",
      display: "block",
      height: sizes.xsmall,
      width: sizes.xsmall,
      transform: `translateX(${spacing.xsmall})`,
      borderRadius: sizes.infinity,
      backgroundColor: props.thumbColor,
      transition: "all 0.2s",
    },
  }),

  selected: (props: {
    backgroundColor: CSSProperties["backgroundColor"];
    thumbColor: CSSProperties["backgroundColor"];
  }) => ({
    borderColor: props.backgroundColor,
    backgroundColor: props.backgroundColor,

    "::before": {
      transform: `translateX(calc(${sizes.xlarge} - 100% - ${spacing.xxxsmall}))`,
      height: sizes.small,
      width: sizes.small,
      backgroundColor: props.thumbColor,
    },
  }),
});

const Switch = ({ value, style, className }: SwitchProps) => {
  const classNames = useClassNames(ComponentToken.Switch);
  const [isSelected, setIsSelected] = useControlledState(value);
  const theme = useTheme();

  const toggle = useCallback(() => {
    setIsSelected((isSelected) => !isSelected);
  }, [setIsSelected]);

  const styled = stylex.props(
    styles.switch({
      borderColor: theme.colors[ColorToken.Outline],
      thumbColor: theme.colors[ColorToken.Outline],
      backgroundColor: theme.colors[ColorToken.SurfaceContainerHighest],
    }),
    isSelected &&
      styles.selected({
        backgroundColor: theme.colors[ColorToken.Primary],
        thumbColor: theme.colors[ColorToken.OnPrimary],
      })
  );

  return (
    <div
      aria-selected={isSelected}
      onClick={toggle}
      className={clsx(classNames[SwitchClassToken.Switch], className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    />
  );
};

export default Switch;
