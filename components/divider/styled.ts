import styled, { type CSSObject } from "@emotion/styled";
import type { DividerRenderProps } from "./types";
import { useClassNames } from "./hooks";
import { useValidTheme } from "../theme/hooks";
import { withDot } from "../../utils/class-name";

export const StyledWrapper = styled.div<DividerRenderProps>(({ hasChildren, offset, ...props }) => {
  const classNames = useClassNames();
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

    [withDot(classNames.content)]: {
      marginInline: 8,
      whiteSpace: "nowrap",
      ...theme.typography.body.small,
    },
  };
});
