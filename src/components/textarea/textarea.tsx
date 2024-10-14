import React, { ChangeEvent } from "react";
import { styles as inputStyles } from "../input";
import { useTheme } from "../theme";
import stylex from "@stylexjs/stylex";
import { ColorToken } from "../../utils/colors";
import { sizes } from "../theme/tokens.stylex";
import { useControlledState, useEvent, useFocus } from "@aiszlab/relax";
import { TextareaProps } from "musae/types/textarea";

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

const Textarea = ({ onChange, value }: TextareaProps) => {
  const theme = useTheme();
  const [isFocused, focusProps] = useFocus();

  const [_value, _setValue] = useControlledState(value, { defaultState: "" });

  const _onChange = useEvent((event: ChangeEvent<HTMLTextAreaElement>) => {
    _setValue(event.target.value);
    onChange?.(event.target.value);
  });

  const styled = {
    textarea: stylex.props(
      inputStyles.inputor({
        outlineColor: theme.colors[ColorToken.Outline],
      }),
      styles.textarea,
      isFocused &&
        inputStyles.focused({
          outlineColor: theme.colors[ColorToken.Primary],
        }),
    ),
  };

  return (
    <textarea
      className={styled.textarea.className}
      style={styled.textarea.style}
      {...focusProps}
      value={_value}
      onChange={_onChange}
    />
  );
};

export default Textarea;
