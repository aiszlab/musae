import React, { type CSSProperties } from "react";
import type { SwitchProps } from "../../types/switch";
import { useControlledState, useEvent } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration, OPACITY, opacity, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { Close, Check } from "../icon/icons";
import { hexToRgba } from "@aiszlab/fuzzy/color";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";

const styles = {
  switch: $create({
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
      transitionDuration: duration.short,
      borderRadius: sizes.infinity,
      borderWidth: sizes.xxxxxxxxsmall,
      borderStyle: "solid",
      borderColor: props.borderColor,
      backgroundColor: props.backgroundColor,
      color: props.color,

      // reset styles
      padding: spacing.none,
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

  slider: $create({
    normal: (props: {
      backgroundColor: CSSProperties["backgroundColor"];
      color: CSSProperties["color"];
    }) => ({
      borderRadius: sizes.infinity,
      position: "absolute",
      transitionProperty: "all",
      transitionDuration: duration.short,

      backgroundColor: props.backgroundColor,
      color: props.color,
      height: sizes.xxxxsmall,
      width: sizes.xxxxsmall,
      insetInlineStart: spacing.xxxsmall,

      // layout
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }),

    // in slider, if icon show, change default layout
    icon: {
      height: sizes.xsmall,
      width: sizes.xsmall,
      insetInlineStart: spacing.xxxxxxsmall,
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
      insetInlineStart: `calc(100% - ${sizes.xsmall} - ${spacing.xxxxxxsmall})`,
    }),
  }),

  // supporting container styles
  supporting: $create({
    default: {
      height: sizes.full,
      width: sizes.full,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      color: "inherit",
      transitionProperty: "padding-inline-start, padding-inline-end",
      transitionDuration: duration.short,

      paddingInlineStart: `calc(${sizes.xsmall} + ${sizes.xxxxxxxxsmall} * 4)`,
      paddingInlineEnd: `calc(${spacing.xxxxlarge} / 2 - ${sizes.xxxxxxxxsmall})`,
    },

    // if checked, change padding styles, for slider has been right
    checked: {
      paddingInlineStart: `calc(${spacing.xxxxlarge} / 2 - ${sizes.xxxxxxxxsmall})`,
      paddingInlineEnd: `calc(${sizes.xsmall} + ${sizes.xxxxxxxxsmall} * 4)`,
    },

    child: {
      height: sizes.full,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      color: "inherit",

      transitionProperty: "margin-inline-start, margin-inline-end",
      transitionDuration: duration.short,
    },
  }),

  leading: $create({
    default: {
      // - `self width` - `slider width` - `slider padding width * 4` - `border width`
      marginInlineStart: `calc(-100% - ${sizes.xsmall} - ${sizes.xxxxxxxxsmall} * 4 - ${sizes.xxxxxxxxsmall})`,
      marginInlineEnd: `calc(100% + ${sizes.xsmall} + ${sizes.xxxxxxxxsmall} * 4 + ${sizes.xxxxxxxxsmall})`,
    },

    checked: {
      marginInlineStart: 0,
      marginInlineEnd: 0,
    },
  }),

  trailing: $create({
    default: {
      marginBlockStart: `calc(-1 * ${sizes.small})`,
      marginInlineEnd: 0,
      marginInlineStart: 0,
    },

    checked: {
      // + `self width` + `slider width` + `slider padding width * 2` + `border width`
      marginInlineEnd: `calc(-100% - ${sizes.xsmall} - ${sizes.xxxxxxxxsmall} * 4 - ${sizes.xxxxxxxxsmall})`,
      marginInlineStart: `calc(100% + ${sizes.xsmall} + ${sizes.xxxxxxxxsmall} * 4 + ${sizes.xxxxxxxxsmall})`,
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
  const classNames = useClassNames(CLASS_NAMES);
  const [isChecked, setIsChecked] = useControlledState(value);
  const theme = useTheme();

  const toggle = useEvent(() => {
    const _isChecked = !isChecked;
    setIsChecked(_isChecked);
    onChange?.(_isChecked);
  });

  const styled = {
    switch: $props(
      styles.switch.default({
        borderColor: theme.colors.outline,
        backgroundColor: theme.colors["surface-container-highest"],
        color: theme.colors["on-surface-variant"],
        ...(disabled && {
          borderColor: hexToRgba(theme.colors["on-surface"], OPACITY.medium).toString(),
          backgroundColor: hexToRgba(theme.colors["surface-variant"], OPACITY.medium).toString(),
          color: hexToRgba(theme.colors["on-surface"], OPACITY.thickest).toString(),
        }),
      }),
      isChecked &&
        styles.switch.checked({
          backgroundColor: theme.colors.primary,
          color: theme.colors["on-primary"],
          ...(disabled && {
            backgroundColor: hexToRgba(theme.colors["on-surface"], OPACITY.medium).toString(),
            color: theme.colors.surface,
          }),
        }),
      disabled && styles.switch.disabled,
    ),
    slider: $props(
      styles.slider.normal({
        backgroundColor: theme.colors["on-surface-variant"],
        color: theme.colors["surface-container-highest"],
        ...(disabled && {
          backgroundColor: hexToRgba(theme.colors["on-surface"], OPACITY.thickest).toString(),
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
            color: hexToRgba(theme.colors["on-surface"], OPACITY.thickest).toString(),
          }),
        }),
    ),
    supporting: $props(styles.supporting.default, isChecked && styles.supporting.checked),
    leading: $props(
      styles.supporting.child,
      styles.leading.default,
      isChecked && styles.leading.checked,
    ),
    trailing: $props(
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
      className={stringify(classNames.switch, className, styled.switch.className)}
      style={{
        ...styled.switch.style,
        ...style,
      }}
    >
      <div
        className={stringify(classNames.slider, styled.slider.className)}
        style={styled.slider.style}
      >
        {icon && (isChecked ? <Check /> : <Close />)}
      </div>

      <span
        className={stringify(classNames.supporting, styled.supporting.className)}
        style={styled.supporting.style}
      >
        <span
          className={stringify(classNames.leading, styled.leading.className)}
          style={styled.leading.style}
        >
          {checkedChildren}
        </span>
        <span
          className={stringify(classNames.trailing, styled.trailing.className)}
          style={styled.trailing.style}
        >
          {uncheckedChildren}
        </span>
      </span>
    </button>
  );
};

export default Switch;
