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
import { Close, Check } from "../icon/icons";

const styles = {
  switch: stylex.create({
    normal: (props: { borderColor: CSSProperties["borderColor"] }) => ({
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
    }),

    checked: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      borderColor: props.backgroundColor,
      backgroundColor: props.backgroundColor,
    }),
  }),

  handler: stylex.create({
    normal: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      height: sizes.xsmall,
      width: sizes.xsmall,
      transform: `translateX(${spacing.xsmall})`,
      borderRadius: sizes.infinity,
      backgroundColor: props.backgroundColor,
      transition: "all 0.2s",
    }),

    icon: (props: { color: CSSProperties["color"] }) => ({
      height: sizes.small,
      width: sizes.small,
      transform: `translateX(${spacing.xxxsmall})`,
      color: props.color,
    }),

    checked: (props: { backgroundColor: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({
      transform: `translateX(calc(${sizes.xlarge} - 100% - ${spacing.xxxsmall}))`,
      height: sizes.small,
      width: sizes.small,
      backgroundColor: props.backgroundColor,
      color: props.color,
    }),
  }),
};

const Switch = ({ value, style, className, icon = false, checkedChildren, uncheckedChildren }: SwitchProps) => {
  const classNames = useClassNames(ComponentToken.Switch);
  const [isChecked, setIsChecked] = useControlledState(value);
  const theme = useTheme();

  const toggle = useCallback(() => {
    setIsChecked((_isChecked) => !_isChecked);
  }, [setIsChecked]);

  const styled = {
    switch: stylex.props(
      styles.switch.normal({
        borderColor: theme.colors[ColorToken.Outline],
      }),
      isChecked &&
        styles.switch.checked({
          backgroundColor: theme.colors[ColorToken.Primary],
        })
    ),
    handle: stylex.props(
      styles.handler.normal({
        backgroundColor: theme.colors[ColorToken.Outline],
      }),
      icon &&
        styles.handler.icon({
          color: theme.colors[ColorToken.SurfaceContainerHighest],
        }),
      isChecked &&
        styles.handler.checked({
          backgroundColor: theme.colors[ColorToken.OnPrimary],
          color: theme.colors[ColorToken.OnPrimaryContainer],
        })
    ),
  };

  /// TODO display diff children in diff state

  return (
    <button
      role="switch"
      type="button"
      aria-checked={isChecked}
      onClick={toggle}
      className={clsx(classNames[SwitchClassToken.Switch], className, styled.switch.className)}
      style={{
        ...styled.switch.style,
        ...style,
      }}
    >
      <div className={clsx(classNames[SwitchClassToken.Handle], styled.handle.className)} style={styled.handle.style}>
        {icon && (isChecked ? <Check /> : <Close />)}
      </div>
    </button>
  );
};

export default Switch;
