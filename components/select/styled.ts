import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import { useClassNames } from "./hooks";
import type { DropdownWrapperRenderProps } from "./types";

/**
 * @description
 * selector
 */
export const StyledSelector = styled.div(({ theme }) => {
  const _theme = useValidTheme(theme);
  const classNames = useClassNames();

  return {
    [`.${classNames.dropdown}`]: {
      width: 10,
      height: 20,
      backgroundColor: "red",
    },
  };
});

/**
 * @description
 * dropdown wrapper
 */
export const StyledDropdownWrapper = styled.div<DropdownWrapperRenderProps>(({ theme, width }) => {
  const _theme = useValidTheme(theme);

  return {
    marginTop: 4,
    borderRadius: 8,
    backgroundColor: _theme.palettes.neutral[95],
    maxHeight: 300,
    minWidth: width,
    overflow: "auto",
    padding: 4,
  };
});
