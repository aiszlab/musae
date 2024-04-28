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
import { layer } from "../../utils/layer";

const styles = {
  switch: stylex.create({
    normal: (props: {
      borderColor: CSSProperties["borderColor"];
      backgroundColor: CSSProperties["backgroundColor"];
    }) => ({
      minWidth: sizes.xlarge,
      height: sizes.medium,
      display: "flex",
      alignItems: "center",
      position: "relative",

      borderRadius: sizes.infinity,
      borderWidth: sizes.xxxxsmall,
      borderStyle: "solid",
      borderColor: props.borderColor,
      backgroundColor: props.backgroundColor,

      transition: "all 0.2s",
    }),

    checked: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      borderColor: props.backgroundColor,
      backgroundColor: props.backgroundColor,
    }),
  }),

  slider: stylex.create({
    normal: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      borderRadius: sizes.infinity,
      backgroundColor: props.backgroundColor,
      position: "absolute",
      transition: "all 0.2s",

      height: sizes.xsmall,
      width: sizes.xsmall,
      insetInlineStart: spacing.xsmall,
    }),

    // in slider, if icon show, change default layout
    icon: (props: { color: CSSProperties["color"] }) => ({
      height: sizes.small,
      width: sizes.small,
      color: props.color,
      insetInlineStart: spacing.xxxsmall,
    }),

    checked: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      height: sizes.small,
      width: sizes.small,
      backgroundColor: props.backgroundColor,
      // `switch width` - `slider width` - `slider padding width`
      insetInlineStart: `calc(100% - ${sizes.small} - ${spacing.xxxsmall})`,
    }),
  }),

  // supporting container styles
  supporting: stylex.create({
    default: (props: { color: CSSProperties["color"] }) => ({
      height: sizes.full,
      width: sizes.full,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "all 0.2s",

      color: props.color,
      paddingInlineStart: `calc(${sizes.small} + ${sizes.xxxxsmall} * 4)`,
      paddingInlineEnd: `calc(${spacing.xxlarge} / 2 - ${sizes.xxxxsmall})`,
    }),

    // if checked, change padding styles, for slider has been right
    checked: (props: { color: CSSProperties["color"] }) => ({
      color: props.color,
      paddingInlineStart: `calc(${spacing.xxlarge} / 2 - ${sizes.xxxxsmall})`,
      paddingInlineEnd: `calc(${sizes.small} + ${sizes.xxxxsmall} * 4)`,
    }),

    child: {
      minHeight: sizes.full,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      transition: "all 0.2s",
    },
  }),

  leading: stylex.create({
    default: {
      // - `self width` - `slider width` - `slider padding width * 4` - `border width`
      marginInlineStart: `calc(-100% - ${sizes.small} - ${sizes.xxxxsmall} * 4 - ${sizes.xxxxsmall})`,
      marginInlineEnd: `calc(100% + ${sizes.small} + ${sizes.xxxxsmall} * 4 + ${sizes.xxxxsmall})`,
    },

    checked: {
      marginInlineStart: 0,
      marginInlineEnd: 0,
    },
  }),

  trailing: stylex.create({
    default: {
      marginTop: "-100%",
      marginInlineEnd: 0,
      marginInlineStart: 0,
    },

    checked: {
      // + `self width` + `slider width` + `slider padding width * 2` + `border width`
      marginInlineEnd: `calc(100% + ${sizes.small} + ${sizes.xxxxsmall} * 4 + ${sizes.xxxxsmall})`,
      marginInlineStart: `calc(-100% - ${sizes.small} - ${sizes.xxxxsmall} * 4 - ${sizes.xxxxsmall})`,
    },
  }),
};

const Switch = ({
  value,
  style,
  className,
  icon = false,
  checkedChildren,
  uncheckedChildren,
  disabled = false,
}: SwitchProps) => {
  const classNames = useClassNames(ComponentToken.Switch);
  const [isChecked, setIsChecked] = useControlledState(value);
  const theme = useTheme();

  const toggle = useCallback(() => {
    setIsChecked((_isChecked) => !_isChecked);
  }, [setIsChecked]);

  const styled = {
    switch: stylex.props(
      styles.switch.normal({
        borderColor: disabled ? layer(theme.colors[ColorToken.OnSurface], "medium") : theme.colors[ColorToken.Outline],
        backgroundColor: disabled
          ? layer(theme.colors[ColorToken.SurfaceVariant], "medium")
          : theme.colors[ColorToken.SurfaceContainerHighest],
      }),
      isChecked &&
        styles.switch.checked({
          backgroundColor: disabled
            ? layer(theme.colors[ColorToken.OnSurface], "medium")
            : theme.colors[ColorToken.Primary],
        })
    ),
    slider: stylex.props(
      styles.slider.normal({
        backgroundColor: theme.colors[ColorToken.OnSurfaceVariant],
      }),
      icon &&
        styles.slider.icon({
          color: isChecked
            ? theme.colors[ColorToken.OnPrimaryContainer]
            : theme.colors[ColorToken.SurfaceContainerHighest],
        }),
      isChecked &&
        styles.slider.checked({
          backgroundColor: theme.colors[ColorToken.OnPrimary],
        })
    ),
    supporting: stylex.props(
      styles.supporting.default({
        color: theme.colors[ColorToken.OnSurfaceVariant],
      }),
      isChecked && styles.supporting.checked({ color: theme.colors[ColorToken.OnPrimary] })
    ),
    leading: stylex.props(styles.supporting.child, styles.leading.default, isChecked && styles.leading.checked),
    trailing: stylex.props(styles.supporting.child, styles.trailing.default, isChecked && styles.trailing.checked),
  };

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
      <div className={clsx(classNames[SwitchClassToken.Slider], styled.slider.className)} style={styled.slider.style}>
        {icon && (isChecked ? <Check /> : <Close />)}
      </div>

      <span className={styled.supporting.className} style={styled.supporting.style}>
        <span className={styled.leading.className} style={styled.leading.style}>
          {checkedChildren}
        </span>
        <span className={styled.trailing.className} style={styled.trailing.style}>
          {uncheckedChildren}
        </span>
      </span>
    </button>
  );
};

export default Switch;
