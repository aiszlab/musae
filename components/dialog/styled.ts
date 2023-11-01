import styled from "@emotion/styled";
import { withDot } from "../../utils/class-name";
import { useClassNames } from "./hooks";

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
  opacity: 1,
  backgroundColor: "rgba(0, 0, 0, 0.45)",
});

/**
 * @description
 * popup
 */
export const StyledPanel = styled.div(() => {
  const classNames = useClassNames();

  return {
    display: "flex",
    flexDirection: "column",

    // rect
    minWidth: 480,
    maxWidth: 960,
    minHeight: 320,
    maxHeight: "calc(100% - 64px)",

    // space
    margin: 32,

    borderRadius: 8,
    pointerEvents: "auto",
    backgroundColor: "white",
    zIndex: 1000,

    [withDot(classNames.body)]: {
      padding: 20,
      flex: 1,
      wordBreak: "break-word",
      overflow: "auto",
    },

    [withDot(classNames.footer)]: {
      padding: 12,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  };
});
