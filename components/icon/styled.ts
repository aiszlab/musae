import styled from "@emotion/styled";
import { useContext } from "react";
import { Context } from "../config";
import { ComponentToken, IconClassToken, withSelf } from "../../utils/class-name";
import type { IconRenderProps } from "./types";

/**
 * @description
 * styled icon
 */
export const StyledIcon = styled.span<IconRenderProps>(({ isClickable }) => {
  const classNames = useContext(Context).classNames[ComponentToken.Icon];

  return {
    [withSelf(classNames[IconClassToken.Icon])]: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",

      ...(isClickable && {
        cursor: "pointer",
      }),

      svg: {
        display: "inline",
      },
    },
  };
});
