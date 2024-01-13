import styled from "@emotion/styled";
import type { DividerRenderProps } from "./types";
import { useValidTheme } from "../theme";
import { ComponentToken, DividerClassToken, withDot } from "../../utils/class-name";
import { type CSSProperties } from "react";
import { useClassNames } from "../config";

export const StyledDivider = styled.div<DividerRenderProps>(({ hasChildren, offset, ...props }) => {
  const classNames = useClassNames(ComponentToken.Divider);
  const theme = useValidTheme(props.theme);

  const layoutStyle: CSSProperties = {
    width: "100%",
  };
  const dividerStyle: CSSProperties = {
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
