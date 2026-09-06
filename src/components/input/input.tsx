import styles, { textFieldMarker } from "./styles.stylex";
import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { useInputEvents, useInputorEvents } from "./hooks";
import type { InputProps, InputRef } from "../../types/input";
import { useControlledState, useFocus, useIdentity } from "@aiszlab/relax";
import { props as $props } from "@stylexjs/stylex";
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
      variant = "outlined",
      shaped = false,
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
      onInputorClick,
      label,
      ...inputProps
    },
    ref,
  ) => {
    const inputorRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const classNames = useClassNames(CLASS_NAMES);
    const hasPlaceholder = !!inputProps.placeholder;
    const hasLabel = !!label;
    const [id] = useIdentity();

    const _themeColorVars = useThemeColorVars([
      "primary",
      "outline",
      "error",
      "surface-container-high",
      "on-surface-variant",
      ["on-surface", OPACITY.thickest],
      ["on-surface", OPACITY.medium],
      ["on-surface", OPACITY.thin],
    ]);

    // controlled value
    const [_value, _setValue] = useControlledState<string>(valueInProps, { defaultState: "" });

    useImperativeHandle<InputRef, InputRef>(
      ref,
      () => ({
        focus: () => {
          inputRef.current?.focus();
        },
        blur: () => {
          inputRef.current?.blur();
        },
        select: () => {
          inputRef.current?.select();
        },
        getBoundingClientRect: () => {
          return inputorRef.current!.getBoundingClientRect();
        },
        contextElement: inputorRef.current ?? undefined,
        getValue: () => {
          return inputRef.current?.value ?? "";
        },
      }),
      [],
    );

    // input events
    const inputEvents = useInputEvents({
      setValue: _setValue,
      onBlur,
      onChange,
      onClick,
      onFocus,
    });
    // inputor events
    const inputorEvents = useInputorEvents({
      inputRef,
      onClick: disabled ? undefined : onInputorClick,
    });

    // is focused
    const [isFocused, focusProps] = useFocus({
      onBlur: inputEvents.blur,
      onFocus: inputEvents.focus,
    });

    const styled = {
      root: $props(
        $body.medium,
        styles.root.base,
        disabled && styles.root.disabled,
        !disabled && textFieldMarker,
      ),
      input: $props(
        styles.input.base,
        !!leading && styles.input.hasLeading,
        !!trailing && styles.input.hasTrailing,
        disabled && styles.input.disabled,
      ),
      leading: $props(styles.leading.base),
      trailing: $props(styles.trailing.base),
      outline: $props(styles.outline.base),
      outlineLeading: $props(
        styles.outlineLeading.base,
        disabled && styles.outlineLeading.disabled,
        invalid && styles.outlineLeading.invalid,
        shaped && styles.outlineLeading.shaped,
      ),
      outlineNotch: $props(
        styles.outlineNotch.base,
        $body.small,
        hasLabel && styles.outlineNotch.withLabel,
        hasLabel && hasPlaceholder && styles.outlineNotch.withLabelAndPlaceholder,
        disabled && styles.outlineNotch.disabled,
        invalid && styles.outlineNotch.invalid,
      ),
      outlineTrailing: $props(
        styles.outlineTrailing.base,
        disabled && styles.outlineTrailing.disabled,
        invalid && styles.outlineTrailing.invalid,
        shaped && styles.outlineTrailing.shaped,
      ),
      floatingLabel: $props(
        styles.floatingLabel.base,
        hasPlaceholder && styles.floatingLabel.placeholder,
        disabled && styles.floatingLabel.disabled,
        invalid && styles.floatingLabel.invalid,
      ),
    };

    return (
      <div
        ref={inputorRef}
        className={stringify(
          classNames.inputor,
          {
            [classNames.focused]: isFocused,
            [classNames.invalid]: !!invalid,
          },
          className,
          styled.root.className,
        )}
        style={{
          ...styled.root.style,
          ...style,
          ..._themeColorVars,
        }}
        onClick={inputorEvents.click}
        {...(!disabled && {
          tabIndex: -1,
        })}
      >
        {/* leading */}
        {!!leading && (
          <div
            className={stringify(classNames.leading, styled.leading.className)}
            style={styled.leading.style}
          >
            {leading}
          </div>
        )}

        {/* input */}
        <input
          id={id}
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
          {hasLabel && (
            <label htmlFor={id} className={stringify(styled.floatingLabel.className)}>
              {label}
            </label>
          )}
        </div>

        {/* trailing */}
        {!!trailing && (
          <div
            className={stringify(classNames.trailing, styled.trailing.className)}
            style={styled.trailing.style}
          >
            {trailing}
          </div>
        )}
      </div>
    );
  },
);

export default Input;
