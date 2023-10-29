import styled from "@emotion/styled";

/**
 * @description
 * wrapper
 */
export const StyledWrapper = styled.div({
  position: "fixed",
  inset: 0,
  pointerEvents: "none",
  zIndex: 1000,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
  opacity: 0,
  backgroundColor: "rgba(0, 0, 0, 0.45)",
});

/**
 * @description
 * popup
 */
export const StyledPanel = styled.div(() => {
  return {
    pointerEvents: "auto",
    backgroundColor: "white",
    width: 200,
    height: 200,
  };
});
