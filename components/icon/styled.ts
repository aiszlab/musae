import styled from "@emotion/styled";
import { useContext } from "react";
import { Context } from "../config";
import { ComponentToken, IconClassToken, withSelf } from "../../utils/class-name";

/**
 * @description
 * styled icon
 */
export const StyledIcon = styled.span(() => {
  const classNames = useContext(Context).classNames[ComponentToken.Icon];

  return {
    [withSelf(classNames[IconClassToken.Icon])]: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",

      svg: {
        display: "inline",
      },
    },
  };
});
