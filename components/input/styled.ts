import styled from "@emotion/styled";
import { useValidTheme } from "../theme";
import { ComponentToken, InputClassToken } from "../../utils/class-name";
import { useContext } from "react";
import Context from "../config/context";

export const StyledWrapper = styled.div((props) => {
  const theme = useValidTheme(props.theme);
  const classNames = useContext(Context).classNames[ComponentToken.Input];

  return {
    [`:where(&).${classNames[InputClassToken.Wrapper]}`]: {
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

      [`& > .${classNames[InputClassToken.Input]}`]: {
        backgroundColor: "transparent",
        minWidth: 0,
        outline: "none",
        border: "none",
        height: "auto",
        flex: 1,
      },

      [`&.${classNames[InputClassToken.Focused]}`]: {
        borderWidth: 2,
        borderColor: theme.colorRole.primary,
      },

      [`&.${classNames[InputClassToken.Invalid]}`]: {
        borderColor: theme.colorRole.error,
      },
    },
  };
});
