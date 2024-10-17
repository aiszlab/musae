import React, { ChangeEvent } from "react";
import { styles as inputStyles } from "../input";
import { useTheme } from "../theme";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { clsx, useControlledState, useEvent, useFocus } from "@aiszlab/relax";
import { TextareaProps } from "musae/types/textarea";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken } from "../../utils/component-token";
import { TextareaClassToken } from "../../utils/class-name";

const styles = stylex.create({
  textarea: {
    // reset
    display: null,
    alignItems: null,
    cursor: null,
    minHeight: null,
    minWidth: null,

    // css
    outline: "none",
    border: "none",
    width: sizes.full,
  },
});

const Textarea = ({ onChange, value, className, style, invalid = false }: TextareaProps) => {
  const theme = useTheme();
  const [isFocused, focusProps] = useFocus();
  const classNames = useClassNames(ComponentToken.Textarea);

  const [_value, _setValue] = useControlledState(value, { defaultState: "" });

  const _onChange = useEvent((event: ChangeEvent<HTMLTextAreaElement>) => {
    _setValue(event.target.value);
    onChange?.(event.target.value);
  });

  const styled = {
    textarea: stylex.props(
      inputStyles.inputor({
        outlineColor: theme.colors.outline,
      }),
      styles.textarea,
      isFocused &&
        inputStyles.focused({
          outlineColor: theme.colors.primary,
        }),
      invalid &&
        inputStyles.invalid({
          outlineColor: theme.colors.error,
        }),
    ),
  };

  return (
    <div className={clsx(classNames[TextareaClassToken.Textarea])}>
      <textarea
        className={clsx(classNames[TextareaClassToken.Input], className, styled.textarea.className)}
        style={{
          ...styled.textarea.style,
          ...style,
        }}
        {...focusProps}
        value={_value}
        onChange={_onChange}
      />
    </div>
  );
};

export default Textarea;
