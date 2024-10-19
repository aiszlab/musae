import React, { type CSSProperties } from "react";
import type { SwitchProps } from "musae/types/switch";
import { useControlledState, useEvent, clsx } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { OPACITY, opacity, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useClassNames } from "../../hooks/use-class-names";
import { SwitchClassToken } from "../../utils/class-name";
import { Close, Check } from "musae/icons";
import { hexToRgba } from "@aiszlab/fuzzy/color";

const styles = {
  switch: stylex.create({
    default: (props: {
      borderColor: CSSProperties["borderColor"];
      backgroundColor: CSSProperties["backgroundColor"];
      color: CSSProperties["color"];
    }) => ({
      minWidth: sizes.xxlarge,
      width: "fit-content",
      height: sizes.medium,
      display: "flex",
      alignItems: "center",
      position: "relative",

      transitionProperty: "all",
      transitionDuration: "0.2s",
      borderRadius: sizes.infinity,
      borderWidth: sizes.xxxxxxsmall,
      borderStyle: "solid",
      borderColor: props.borderColor,
      backgroundColor: props.backgroundColor,
      color: props.color,
    }),

    checked: (props: {
      backgroundColor: CSSProperties["backgroundColor"];
      color: CSSProperties["color"];
    }) => ({
      borderColor: "transparent",
      backgroundColor: props.backgroundColor,
      color: props.color,
    }),

    disabled: {
      cursor: "not-allowed",
    },
  }),

  slider: stylex.create({
    normal: (props: {
      backgroundColor: CSSProperties["backgroundColor"];
      color: CSSProperties["color"];
    }) => ({
      borderRadius: sizes.infinity,
      position: "absolute",
      transition: "all 0.2s",

      backgroundColor: props.backgroundColor,
      color: props.color,
      height: sizes.xxxsmall,
      width: sizes.xxxsmall,
      insetInlineStart: spacing.xsmall,

      // layout
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }),

    // in slider, if icon show, change default layout
    icon: {
      height: sizes.xsmall,
      width: sizes.xsmall,
      insetInlineStart: spacing.xxxsmall,
    },

    disabled: {
      opacity: opacity.thicker,
    },

    checked: (props: {
      backgroundColor: CSSProperties["backgroundColor"];
      color: CSSProperties["color"];
    }) => ({
      backgroundColor: props.backgroundColor,
      color: props.color,
      height: sizes.xsmall,
      width: sizes.xsmall,
      opacity: null,
      // `switch width` - `slider width` - `slider padding width`
      insetInlineStart: `calc(100% - ${sizes.xsmall} - ${spacing.xxxsmall})`,
    }),
  }),

  // supporting container styles
  supporting: stylex.create({
    default: {
      height: sizes.full,
      width: sizes.full,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      color: "inherit",
      transitionProperty: "padding-inline-start, padding-inline-end",
      transitionDuration: "0.2s",

      paddingInlineStart: `calc(${sizes.xsmall} + ${sizes.xxxxxxsmall} * 4)`,
      paddingInlineEnd: `calc(${spacing.xxlarge} / 2 - ${sizes.xxxxxxsmall})`,
    },

    // if checked, change padding styles, for slider has been right
    checked: {
      paddingInlineStart: `calc(${spacing.xxlarge} / 2 - ${sizes.xxxxxxsmall})`,
      paddingInlineEnd: `calc(${sizes.xsmall} + ${sizes.xxxxxxsmall} * 4)`,
    },

    child: {
      height: sizes.full,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      color: "inherit",

      transitionProperty: "margin-inline-start, margin-inline-end",
      transitionDuration: "0.2s",
    },
  }),

  leading: stylex.create({
    default: {
      // - `self width` - `slider width` - `slider padding width * 4` - `border width`
      marginInlineStart: `calc(-100% - ${sizes.xsmall} - ${sizes.xxxxxxsmall} * 4 - ${sizes.xxxxxxsmall})`,
      marginInlineEnd: `calc(100% + ${sizes.xsmall} + ${sizes.xxxxxxsmall} * 4 + ${sizes.xxxxxxsmall})`,
    },

    checked: {
      marginInlineStart: 0,
      marginInlineEnd: 0,
    },
  }),

  trailing: stylex.create({
    default: {
      marginBlockStart: `calc(-1 * ${sizes.small})`,
      marginInlineEnd: 0,
      marginInlineStart: 0,
    },

    checked: {
      // + `self width` + `slider width` + `slider padding width * 2` + `border width`
      marginInlineEnd: `calc(-100% - ${sizes.xsmall} - ${sizes.xxxxxxsmall} * 4 - ${sizes.xxxxxxsmall})`,
      marginInlineStart: `calc(100% + ${sizes.xsmall} + ${sizes.xxxxxxsmall} * 4 + ${sizes.xxxxxxsmall})`,
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
  onChange,
}: SwitchProps) => {
  const classNames = useClassNames("switch");
  const [isChecked, setIsChecked] = useControlledState(value);
  const theme = useTheme();

  const toggle = useEvent(() => {
    const _isChecked = !isChecked;
    setIsChecked(_isChecked);
    onChange?.(_isChecked);
  });

  const styled = {
    switch: stylex.props(
      styles.switch.default({
        borderColor: theme.colors.outline,
        backgroundColor: theme.colors["surface-container-highest"],
        color: theme.colors["on-surface-variant"],
        ...(disabled && {
          borderColor: hexToRgba(theme.colors["on-surface"], OPACITY.medium, true),
          backgroundColor: hexToRgba(theme.colors["surface-variant"], OPACITY.medium, true),
          color: hexToRgba(theme.colors["on-surface"], OPACITY.thicker, true),
        }),
      }),
      isChecked &&
        styles.switch.checked({
          backgroundColor: theme.colors.primary,
          color: theme.colors["on-primary"],
          ...(disabled && {
            backgroundColor: hexToRgba(theme.colors["on-surface"], OPACITY.medium, true),
            color: theme.colors.surface,
          }),
        }),
      disabled && styles.switch.disabled,
    ),
    slider: stylex.props(
      styles.slider.normal({
        backgroundColor: theme.colors["on-surface-variant"],
        color: theme.colors["surface-container-highest"],
        ...(disabled && {
          backgroundColor: hexToRgba(theme.colors["on-surface"], OPACITY.thicker, true),
          color: theme.colors["surface-container-highest"],
        }),
      }),
      icon && styles.slider.icon,
      disabled && styles.slider.disabled,
      isChecked &&
        styles.slider.checked({
          backgroundColor: theme.colors["on-primary"],
          color: theme.colors["on-primary-container"],
          ...(disabled && {
            backgroundColor: theme.colors.surface,
            color: hexToRgba(theme.colors["on-surface"], OPACITY.thicker, true),
          }),
        }),
    ),
    supporting: stylex.props(styles.supporting.default, isChecked && styles.supporting.checked),
    leading: stylex.props(
      styles.supporting.child,
      styles.leading.default,
      isChecked && styles.leading.checked,
    ),
    trailing: stylex.props(
      styles.supporting.child,
      styles.trailing.default,
      isChecked && styles.trailing.checked,
    ),
  };

  return (
    <button
      role="switch"
      type="button"
      disabled={disabled}
      aria-checked={isChecked}
      onClick={toggle}
      className={clsx(classNames[SwitchClassToken.Switch], className, styled.switch.className)}
      style={{
        ...styled.switch.style,
        ...style,
      }}
    >
      <div
        className={clsx(classNames[SwitchClassToken.Slider], styled.slider.className)}
        style={styled.slider.style}
      >
        {icon && (isChecked ? <Check /> : <Close />)}
      </div>

      <span
        className={clsx(classNames[SwitchClassToken.Supporting], styled.supporting.className)}
        style={styled.supporting.style}
      >
        <span
          className={clsx(classNames[SwitchClassToken.Leading], styled.leading.className)}
          style={styled.leading.style}
        >
          {checkedChildren}
        </span>
        <span
          className={clsx(classNames[SwitchClassToken.Trailing], styled.trailing.className)}
          style={styled.trailing.style}
        >
          {uncheckedChildren}
        </span>
      </span>
    </button>
  );
};

export default Switch;
