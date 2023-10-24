import styled, { type CSSObject } from "@emotion/styled";
import type { DividerRenderProps } from "./types";
import { useClassNames } from "./hooks";
import { useValidTheme } from "../theme/hooks";

export const StyledWrapper = styled.div<DividerRenderProps>(({ hasChildren, offset, ...props }) => {
  const classNames = useClassNames();
  const theme = useValidTheme(props.theme);

  const layoutStyle: CSSObject = {
    width: "100%",
  };
  const dividerStyle: CSSObject = {
    height: 1,
    backgroundColor: "#cac4d0",
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

    [`.${classNames.content}`]: {
      marginInline: 8,
      whiteSpace: "nowrap",
      ...theme.typography.body.small,
    },
  };
});
