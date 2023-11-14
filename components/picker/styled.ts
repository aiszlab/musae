import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import type { OptionsRenderProps } from "./types";
import { useClassNames } from "./hooks";
import { withDot } from "../../utils/class-name";

export const StyledPicker = styled.div((props) => {
  const classNames = useClassNames();
  const theme = useValidTheme(props.theme);

  return {
    [`&${withDot(classNames.picker)}`]: {
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
    [`&${withDot(classNames.focused)}`]: {
      borderWidth: 2,
      borderColor: theme.colorRole.primary,
    },

    // if is invalid, display as error
    [`&${withDot(classNames.invalid)}`]: {
      borderColor: theme.colorRole.error,
    },
  };
});

/**
 * @description
 * dropdown wrapper
 */
export const StyledOptions = styled.div<OptionsRenderProps>(({ width, ...props }) => {
  const theme = useValidTheme(props.theme);

  return {
    marginTop: 4,
    borderRadius: 8,
    backgroundColor: theme.colorRole.surface,
    maxHeight: 300,
    minWidth: width,
    overflow: "auto",
    padding: 4,
  };
});
