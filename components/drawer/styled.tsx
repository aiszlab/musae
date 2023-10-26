import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

/**
 * @description
 * wrapper
 */
export const StyledWrapper = styled.div({
  position: "fixed",
  inset: 0,
  pointerEvents: "none",
  zIndex: 1000,
});

/**
 * @description
 * mask
 */
export const StyledMask = styled.div({
  position: "absolute",
  inset: 0,
  pointerEvents: "auto",
  zIndex: 1000,
  backgroundColor: "rgba(0, 0, 0, 0.45)",
});

/**
 * @description
 * panel
 */
export const StyledPanel = styled.div((props) => {
  const theme = useValidTheme(props.theme);

  return {
    width: 400,
    backgroundColor: theme.palettes.primary[100],
    top: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    zIndex: 1000,
    transform: "translateX(100%)",
    willChange: "transform",
  };
});
