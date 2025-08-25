import React from "react";
import type { SwitchProps } from "../../types/switch";
import { useControlledState, useEvent } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration, OPACITY, opacity, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { Close, Check } from "../icon/icons";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import { type ThemeColorVariable, useThemeColorVars } from "src/hooks/use-theme-color-vars";

const styles = {
  switch: {
    default: $create({
      default: {
        minWidth: sizes.xxxlarge,
        width: "fit-content",
        height: sizes.medium,
        display: "flex",
        alignItems: "center",
        position: "relative",

        transitionProperty: "all",
        transitionDuration: duration.short,
        borderRadius: sizes.infinity,
        borderWidth: sizes.xxxxxxxxxxsmall,
        borderStyle: "solid",
        borderColor: "var(--color-outline)",
        backgroundColor: "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
        color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,

        // reset styles
        padding: spacing.none,
      },

      checked: {
        borderColor: "transparent",
        backgroundColor: "var(--color-primary)" satisfies ThemeColorVariable,
        color: "var(--color-on-primary)" satisfies ThemeColorVariable,
      },
    }),

    disabled: $create({
      default: {
        cursor: "not-allowed",
        borderColor: "var(--color-on-surface-opacity-12)" satisfies ThemeColorVariable,
        backgroundColor: "var(--color-surface-variant-opacity-12)" satisfies ThemeColorVariable,
        color: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,
      },

      checked: {
        backgroundColor: "var(--color-on-surface-opacity-12)" satisfies ThemeColorVariable,
        color: "var(--color-surface)" satisfies ThemeColorVariable,
      },
    }),
  },

  slider: {
    default: $create({
      default: {
        borderRadius: sizes.infinity,
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: duration.short,

        backgroundColor: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
        color: "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
        height: sizes.xxxxsmall,
        width: sizes.xxxxsmall,
        insetInlineStart: spacing.xxxsmall,

        // layout
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },

      // in slider, if icon show, change default layout
      icon: {
        height: sizes.xsmall,
        width: sizes.xsmall,
        insetInlineStart: spacing.xxxxxxsmall,
      },

      checked: {
        backgroundColor: "var(--color-on-primary)" satisfies ThemeColorVariable,
        color: "var(--color-on-primary-container)" satisfies ThemeColorVariable,
        height: sizes.xsmall,
        width: sizes.xsmall,
        opacity: null,
        // `switch width` - `slider width` - `slider padding width`
        insetInlineStart: `calc(100% - ${sizes.xsmall} - ${spacing.xxxxxxsmall})`,
      },
    }),

    disabled: $create({
      default: {
        opacity: opacity.thicker,
        backgroundColor: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,
        color: "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
      },

      checked: {
        backgroundColor: "var(--color-surface)" satisfies ThemeColorVariable,
        color: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,
      },
    }),
  },

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

      paddingInlineStart: `calc(${sizes.xsmall} + ${sizes.xxxxxxxxxxsmall} * 4)`,
      paddingInlineEnd: `calc(${spacing.xxxxxxlarge} / 2 - ${sizes.xxxxxxxxxxsmall})`,
    },

    // if checked, change padding styles, for slider has been right
    checked: {
      paddingInlineStart: `calc(${spacing.xxxxxxlarge} / 2 - ${sizes.xxxxxxxxxxsmall})`,
      paddingInlineEnd: `calc(${sizes.xsmall} + ${sizes.xxxxxxxxxxsmall} * 4)`,
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
      marginInlineStart: `calc(-100% - ${sizes.xsmall} - ${sizes.xxxxxxxxxxsmall} * 4 - ${sizes.xxxxxxxxxxsmall})`,
      marginInlineEnd: `calc(100% + ${sizes.xsmall} + ${sizes.xxxxxxxxxxsmall} * 4 + ${sizes.xxxxxxxxxxsmall})`,
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
      marginInlineEnd: `calc(-100% - ${sizes.xsmall} - ${sizes.xxxxxxxxxxsmall} * 4 - ${sizes.xxxxxxxxxxsmall})`,
      marginInlineStart: `calc(100% + ${sizes.xsmall} + ${sizes.xxxxxxxxxxsmall} * 4 + ${sizes.xxxxxxxxxxsmall})`,
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

  const _themeColorVars = useThemeColorVars([
    "outline",
    "surface-container-highest",
    "on-surface-variant",
    "primary",
    "on-primary",
    "surface",
    "on-primary-container",
    ["on-surface", OPACITY.medium],
    ["surface-variant", OPACITY.medium],
    ["on-surface", OPACITY.thickest],
  ]);

  const styled = {
    switch: $props(
      styles.switch.default.default,
      isChecked && styles.switch.default.checked,
      disabled && styles.switch.disabled.default,
      disabled && isChecked && styles.switch.disabled.checked,
    ),
    slider: $props(
      styles.slider.default.default,
      icon && styles.slider.default.icon,
      isChecked && styles.slider.default.checked,
      disabled && styles.slider.disabled.default,
      disabled && isChecked && styles.slider.disabled.checked,
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
        ..._themeColorVars,
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
