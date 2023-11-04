import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import { useClassNames, usePlacements } from "./hooks";
import { withDot } from "../../utils/class-name";
import type { PopupRenderProps } from "./types";

/**
 * @description
 * wrapper
 */
export const StyledPopup = styled.div<PopupRenderProps>(({ placement, ...props }) => {
  const theme = useValidTheme(props.theme);
  const classNames = useClassNames();
  const [[initialPlacement], position] = usePlacements([placement]);

  return {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1000,

    /// mask
    [withDot(classNames.mask)]: {
      position: "absolute",
      inset: 0,
      pointerEvents: "auto",
      zIndex: 1000,
      opacity: 0,
      backgroundColor: theme.colorRole.surfaceDim,
    },

    /// panel
    [withDot(classNames.panel)]: {
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
    },
  };
});
