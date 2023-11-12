import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import type { OptionsRenderProps } from "./types";

/**
 * @description
 * dropdown wrapper
 */
export const StyledOptions = styled.div<OptionsRenderProps>(({ width, ...props }) => {
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
