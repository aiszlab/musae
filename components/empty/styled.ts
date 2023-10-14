import styled from "@emotion/styled";
import { useClassNames } from "./hooks";
import { useValidTheme } from "../theme/hooks";

/**
 * @description
 * wrapper
 */
export const StyledWrapper = styled.div(({ theme }) => {
  const classNames = useClassNames();
  const _theme = useValidTheme(theme);

  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBlock: 32,
    marginInline: 8,

    [`.${classNames.description}`]: {
      marginTop: 8,
      ..._theme.typography.body.small,
    },
  };
});
