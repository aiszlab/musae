import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import { useClassNames } from "../chip/hooks";
import type { DropdownWrapperRenderProps } from "./types";
import { withDot } from "../../utils/class-name";

/**
 * @description
 * selector
 */
export const StyledSelector = styled.div(() => {
  const classNames = useClassNames();

  return {
    [`${withDot(classNames.chip)}:not(:last-of-type)`]: {
      marginRight: 4,
    },
  };
});

/**
 * @description
 * dropdown wrapper
 */
export const StyledDropdownWrapper = styled.div<DropdownWrapperRenderProps>(({ width, ...props }) => {
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
