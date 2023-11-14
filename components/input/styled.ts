import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import { useClassNames } from "./hooks";
import { withDot } from "../../utils/class-name";

export const StyledWrapper = styled.div((props) => {
  const theme = useValidTheme(props.theme);
  const classNames = useClassNames();

  return {
    [`&${withDot(classNames.wrapper)}`]: {
      minHeight: 36,
      minWidth: 0,
      width: 240,
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
      cursor: "text",

      // border
      borderColor: theme.colorRole.outline,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 4,

      // layout
      margin: 0,
      paddingBlock: 4,
      paddingInline: 12,

      ...theme.typography.body.small,
    },

    // if input is focused, change the border
    [`&${withDot(classNames.focusedWrapper)}`]: {
      borderWidth: 2,
      borderColor: theme.colorRole.primary,
    },

    // if is invalid, display as error
    [`&${withDot(classNames.invalidWrapper)}`]: {
      borderColor: theme.colorRole.error,
    },

    [`&${withDot(classNames.input)}`]: {
      backgroundColor: "transparent",
      minWidth: 0,
      outline: "none",
      border: "none",
      height: "auto",
      flex: 1,
    },
  };
});
