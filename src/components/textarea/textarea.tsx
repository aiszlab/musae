import React, { forwardRef, useId, type ChangeEvent } from "react";
import { styles as inputStyles } from "../input";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useControlledState, useEvent } from "@aiszlab/relax";
import type { TextareaProps } from "../../types/textarea";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

const styles = {
  textarea: $create({
    default: {
      // reset
      paddingBlock: null,
      paddingInline: null,
      width: sizes.full,
      overflow: "hidden",
    },

    unbordered: {
      boxShadow: "none",
    },
  }),

  input: $create({
    default: {
      height: sizes.full,
      paddingBlock: spacing.xxxxxsmall,
      paddingInline: spacing.medium,
      flex: 1,
      backgroundColor: "transparent",
      resize: "none",
      borderStyle: "none",
      outline: "none",
    },

    resizable: {
      resize: null,
    },
  }),
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      onChange,
      value,
      className,
      style,
      invalid = false,
      onBlur,
      placeholder,
      resize = true,
      border = true,
    },
    ref,
  ) => {
    const id = useId();
    const classNames = useClassNames(CLASS_NAMES);
    const _themeColorVars = useThemeColorVars(["outline", "primary", "error"]);

    const [_value, _setValue] = useControlledState(value, { defaultState: "" });

    const _onChange = useEvent((event: ChangeEvent<HTMLTextAreaElement>) => {
      _setValue(event.target.value);
      onChange?.(event.target.value);
    });

    const styled = {
      textarea: $props(
        inputStyles.inputor,
        styles.textarea.default,
        invalid && inputStyles.invalid,
        !border && styles.textarea.unbordered,
      ),
      input: $props(styles.input.default, resize && styles.input.resizable),
    };

    return (
      <div
        className={stringify(classNames.textarea, className, styled.textarea.className)}
        style={{
          ...styled.textarea.style,
          ..._themeColorVars,
          ...style,
        }}
      >
        <textarea
          id={id}
          className={stringify(classNames.input, styled.input.className)}
          style={styled.input.style}
          value={_value}
          onChange={_onChange}
          aria-invalid={invalid}
          onBlur={onBlur}
          ref={ref}
          placeholder={placeholder}
        />
      </div>
    );
  },
);

export default Textarea;
