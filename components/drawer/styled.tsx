import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import { useClassNames, usePlacements } from "./hooks";
import { withDot } from "../../utils/class-name";
import type { PanelRenderProps } from "./types";

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
  opacity: 0,
  backgroundColor: "rgba(0, 0, 0, 0.45)",
});

/**
 * @description
 * panel
 */
export const StyledPanel = styled.div<PanelRenderProps>(({ placement, ...props }) => {
  const theme = useValidTheme(props.theme);
  const classNames = useClassNames();
  const [[initialPlacement], position] = usePlacements([placement]);

  return {
    backgroundColor: theme.palettes.primary[100],
    position: "absolute",
    zIndex: 1000,
    pointerEvents: "auto",
    willChange: "transform",
    display: "flex",
    flexDirection: "column",

    // layout
    ...position,
    transform: initialPlacement,

    // rect
    ...(["top", "bottom"].includes(placement) && {
      height: 400,
    }),
    ...(["left", "right"].includes(placement) && {
      width: 400,
    }),

    [withDot(classNames.header)]: {
      display: "flex",
      paddingInline: 16,
      paddingBlock: 24,
      ...theme.typography.body.large,
    },

    [withDot(classNames.body)]: {
      padding: 24,
      flex: 1,
    },
  };
});
