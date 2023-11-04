import styled from "@emotion/styled";
import type { LabelRenderProps, WrapperRenderProps } from "./types";
import { useValidTheme } from "../theme/hooks";
import { useClassNames } from "./hooks";
import { withDot } from "../../utils/class-name";

export const StyledWrapper = styled.fieldset<WrapperRenderProps>((props) => {
  const theme = useValidTheme(props.theme);
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
    borderColor: theme.colorRole.outline,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    boxSizing: "border-box",

    // if input is focused, change the border
    [`&${withDot(classNames.focusedWrapper)}`]: {
      borderColor: theme.colorRole.primary,
      borderWidth: 2,
    },

    // if is invalid, display as error
    [`&${withDot(classNames.invalidWrapper)}`]: {
      borderColor: theme.colorRole.error,
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
export const StyledLabel = styled.legend<LabelRenderProps>(({ focused, ...props }) => {
  const theme = useValidTheme(props.theme);

  return {
    // typography
    ...theme.typography.body.small,

    // layout
    paddingInlineStart: 4,
    paddingInlineEnd: 4,

    // if input is focused
    ...(focused && {
      color: theme.colorRole.primary,
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
