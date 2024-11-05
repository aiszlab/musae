import React, { forwardRef, type ChangeEvent } from "react";
import { styles as inputStyles } from "../input";
import { useTheme } from "../theme";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useControlledState, useEvent } from "@aiszlab/relax";
import type { TextareaProps } from "musae/types/textarea";
import { useClassNames } from "../../hooks/use-class-names";
import { TextareaClassToken } from "../../utils/class-name";
import { stringify } from "@aiszlab/relax/class-name";

const styles = stylex.create({
  textarea: {
    // reset
    padding: null,
    width: sizes.full,
    overflow: "hidden",
  },

  input: {
    paddingBlock: spacing.xxxsmall,
    paddingInline: spacing.medium,
    outline: sizes.none,
    borderWidth: sizes.none,
    flex: 1,
    backgroundColor: "transparent",
    resize: "none",
  },

  resize: {
    resize: null,
  },
});

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { onChange, value, className, style, invalid = false, onBlur, placeholder, resize = true },
    ref,
  ) => {
    const theme = useTheme();
    const classNames = useClassNames("textarea");

    const [_value, _setValue] = useControlledState(value, { defaultState: "" });

    const _onChange = useEvent((event: ChangeEvent<HTMLTextAreaElement>) => {
      _setValue(event.target.value);
      onChange?.(event.target.value);
    });

    const styled = {
      textarea: stylex.props(
        inputStyles.inputor({
          outlineColor: theme.colors.outline,
          focusedOutlineColor: theme.colors.primary,
        }),
        styles.textarea,
        invalid &&
          inputStyles.invalid({
            outlineColor: theme.colors.error,
          }),
      ),
      input: stylex.props(styles.input, resize && styles.resize),
    };

    return (
      <div
        className={stringify(
          classNames[TextareaClassToken.Textarea],
          className,
          styled.textarea.className,
        )}
        style={{
          ...styled.textarea.style,
          ...style,
        }}
      >
        <textarea
          className={stringify(classNames[TextareaClassToken.Input], styled.input.className)}
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
