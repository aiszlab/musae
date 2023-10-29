import styled from "@emotion/styled";
import type { LabelRenderProps, WrapperRenderProps } from "./types";
import { useValidTheme } from "../theme/hooks";
import { useClassNames } from "./hooks";
import { withDot } from "../../utils/class-name";

export const StyledWrapper = styled.fieldset<WrapperRenderProps>(({ focused, invalid, theme }) => {
  const _theme = useValidTheme(theme);
  const classNames = useClassNames();

  return {
    height: 36,
    minWidth: 0,
    width: 240,
    textAlign: "start",
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    display: "flex",
    alignItems: "center",
    borderColor: _theme.palettes.neutral[50],
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    boxSizing: "border-box",

    // if input is focused, change the border
    [`&${withDot(classNames.focusedWrapper)}`]: {
      borderColor: _theme.palettes.primary[40],
      borderWidth: 2,
    },

    // if is invalid, display as error
    [`&${withDot(classNames.invalidWrapper)}`]: {
      borderColor: _theme.palettes.error[40],
    },
  };
});

export const StyledInput = styled.input(() => {
  return {
    paddingInline: 12,
    backgroundColor: "transparent",
    minWidth: 0,
    outline: "none",
    border: "none",
    height: "auto",
    flex: 1,
  };
});

/**
 * @description
 * styled label
 */
export const StyledLabel = styled.legend<LabelRenderProps>(({ focused, theme }) => {
  const _theme = useValidTheme(theme);

  return {
    // typography
    ..._theme.typography.body.small,

    // layout
    paddingInlineStart: 4,
    paddingInlineEnd: 4,

    // if input is focused
    ...(focused && {
      color: _theme.palettes.primary[40],
    }),
  };
});

/**
 * @description
 * styled addition
 */
export const StyledAddition = styled.span({
  paddingInlineStart: 12,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
});
