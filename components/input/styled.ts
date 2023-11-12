import styled from "@emotion/styled";
import type { WrapperRenderProps } from "./types";
import { useValidTheme } from "../theme/hooks";
import { useClassNames } from "./hooks";
import { withDot } from "../../utils/class-name";

export const StyledWrapper = styled.div<WrapperRenderProps>((props) => {
  const theme = useValidTheme(props.theme);
  const classNames = useClassNames();
  const inputSelector = withDot(classNames.input);

  return {
    minHeight: 36,
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

    // ...theme.typography.body.small,

    // if input is focused, change the border
    [`&${withDot(classNames.focusedWrapper)}`]: {
      borderColor: theme.colorRole.primary,
    },

    // if is invalid, display as error
    [`&${withDot(classNames.invalidWrapper)}`]: {
      borderColor: theme.colorRole.error,
    },

    [withDot(classNames.selection)]: {
      paddingInlineStart: 12,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",

      [inputSelector]: {
        paddingInline: 0,
      },
    },

    [inputSelector]: {
      paddingInline: 12,
      backgroundColor: "transparent",
      minWidth: 0,
      outline: "none",
      border: "none",
      height: "auto",
      flex: 1,
    },
  };
});
