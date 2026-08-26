import styles from "./styles";
import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { useInputEvents, useInputorEvents } from "./hooks";
import type { InputProps, InputRef } from "../../types/input";
import { useControlledState, useFocus } from "@aiszlab/relax";
import { props as $props, defaultMarker } from "@stylexjs/stylex";
import { OPACITY } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";
import { $body } from "../theme/theme";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

/**
 * @author murukal
 * @zh 输入组件
 * @en Input component
 */
const Input = forwardRef<InputRef, InputProps>(
  (
    {
      className,
      style,
      type,
      invalid = false,
      disabled,
      maxLength,
      value: valueInProps,
      onBlur,
      onChange,
      onClick,
      onFocus,
      leading,
      trailing,
      ...inputProps
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const classNames = useClassNames(CLASS_NAMES);

    const _themeColorVars = useThemeColorVars([
      "primary",
      "outline",
      "error",
      "on-surface-variant",
      ["on-surface", OPACITY.thickest],
      ["on-surface", OPACITY.thin],
    ]);

    // controlled value
    const [_value, _setValue] = useControlledState<string>(valueInProps, { defaultState: "" });

    useImperativeHandle<InputRef, InputRef>(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      blur: () => {
        inputRef.current?.blur();
      },
      select: () => {
        inputRef.current?.select();
      },
      getValue: () => {
        return _value;
      },
    }));

    // input events
    const inputEvents = useInputEvents({
      setValue: _setValue,
      onBlur,
      onChange,
      onClick,
      onFocus,
    });
    // inputor events
    const inputorEvents = useInputorEvents({ inputRef });

    // is focused
    const [isFocused, focusProps] = useFocus({
      onBlur: inputEvents.blur,
      onFocus: inputEvents.focus,
    });

    const styled = {
      inputor: $props(
        $body.medium,
        styles.input.inputor,
        invalid && styles.input.invalid,
        disabled && styles.input.disabled,
        defaultMarker(),
      ),
      input: $props(styles.input.input),
      outline: $props(styles.outline.base),
      outlineLeading: $props(styles.outline.leading),
      outlineNotch: $props(styles.outline.notch, $body.small),
      outlineTrailing: $props(styles.outline.trailing),
      floatingLabel: $props(styles.floatingLabel.base),
    };

    return (
      <div
        className={stringify(
          classNames.inputor,
          {
            [classNames.focused]: isFocused,
            [classNames.invalid]: !!invalid,
          },
          className,
          styled.inputor.className,
        )}
        style={{
          ...styled.inputor.style,
          ...style,
          ..._themeColorVars,
        }}
        onClick={inputorEvents.click}
        {...(!disabled && {
          tabIndex: -1,
        })}
      >
        {/* leading */}
        {leading}

        {/* input */}
        <input
          value={_value}
          className={stringify(classNames.input, styled.input.className)}
          style={styled.input.style}
          type={type}
          ref={inputRef}
          aria-invalid={invalid}
          disabled={disabled}
          onChange={inputEvents.change}
          onClick={inputEvents.click}
          maxLength={maxLength}
          {...inputProps}
          {...focusProps}
        />

        <div
          className={stringify(classNames.outline, styled.outline.className)}
          style={styled.outline.style}
        >
          <div
            className={stringify(classNames.outlineLeading, styled.outlineLeading.className)}
            style={styled.outlineLeading.style}
          />
          <div
            className={stringify(classNames.outlineNotch, styled.outlineNotch.className)}
            style={styled.outlineNotch.style}
          >
            <label
              htmlFor="text-field-hero-input"
              className={stringify(styled.floatingLabel.className)}
            >
              Name
            </label>
          </div>
          <div
            className={stringify(classNames.outlineTrailing, styled.outlineTrailing.className)}
            style={styled.outlineTrailing.style}
          />
        </div>

        {/* trailing */}
        {trailing}
      </div>
    );
  },
);

export default Input;
