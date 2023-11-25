import styled, { type CSSObject } from "@emotion/styled";
import type { DividerRenderProps } from "./types";
import { useValidTheme } from "../theme";
import { ComponentToken, DividerClassToken, withDot } from "../../utils/class-name";
import { useContext } from "react";
import { Context } from "../config";

export const StyledWrapper = styled.div<DividerRenderProps>(({ hasChildren, offset, ...props }) => {
  const classNames = useContext(Context).classNames[ComponentToken.Divider];
  const theme = useValidTheme(props.theme);

  const layoutStyle: CSSObject = {
    width: "100%",
  };
  const dividerStyle: CSSObject = {
    height: 1,
    backgroundColor: theme.colorRole.outlineVariant,
  };

  if (!hasChildren) {
    return {
      ...layoutStyle,
      ...dividerStyle,
    };
  }

  return {
    ...layoutStyle,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    "::before": {
      ...dividerStyle,
      width: `${offset}%`,
      content: "''",
    },

    "::after": {
      ...dividerStyle,
      width: `${100 - offset}%`,
      content: "''",
    },

    [withDot(classNames[DividerClassToken.Content])]: {
      marginInline: 8,
      whiteSpace: "nowrap",
      ...theme.typography.body.small,
    },
  };
});
