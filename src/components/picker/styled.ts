import styled from "@emotion/styled";
import { useValidTheme } from "../theme";
import type { OptionsRenderProps } from "./types";
import { ComponentToken, PickerClassToken, withSelf } from "../../utils/class-name";
import { useContext } from "react";
import Context from "../config/context";

export const StyledPicker = styled.div((props) => {
  const classNames = useContext(Context).classNames[ComponentToken.Picker];
  const theme = useValidTheme(props.theme);

  return {
    [withSelf(classNames[PickerClassToken.Picker])]: {
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
    [withSelf(classNames[PickerClassToken.Focused])]: {
      borderWidth: 2,
      borderColor: theme.colorRole.primary,
    },

    // if is invalid, display as error
    [withSelf(classNames[PickerClassToken.Invalid])]: {
      borderColor: theme.colorRole.error,
    },
  };
});

/**
 * @description
 * dropdown wrapper
 */
export const StyledOptions = styled.div<OptionsRenderProps>(({ widthGetter, ...props }) => {
  const theme = useValidTheme(props.theme);
  const width = widthGetter();

  return {
    marginBlock: 4,
    padding: 4,
    borderRadius: 8,
    backgroundColor: theme.colorRole.surface,
    overflow: "auto",

    ...(width && {
      minWidth: width,
    }),
  };
});
