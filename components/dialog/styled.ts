import styled from "@emotion/styled";
import { withDot } from "../../utils/class-name";
import { useClassNames } from "./hooks";
import { useValidTheme } from "../theme/hooks";

/**
 * @description
 * wrapper
 */
export const StyledPopup = styled.div((props) => {
  const classNames = useClassNames();
  const theme = useValidTheme(props.theme);

  return {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1000,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    /// mask
    [withDot(classNames.mask)]: {
      position: "absolute",
      inset: 0,
      pointerEvents: "auto",
      zIndex: 1000,
      backgroundColor: theme.colorRole.surfaceDim,

      // initial style
      opacity: 0,
    },

    /// panel
    [withDot(classNames.panel)]: {
      display: "flex",
      flexDirection: "column",
      gap: 16,

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

      // initial style
      opacity: 0,

      [withDot(classNames.header)]: {
        // typography
        ...theme.typography.headline.small,
      },

      [withDot(classNames.body)]: {
        paddingInline: 24,
        flex: 1,
        wordBreak: "break-word",
        overflow: "auto",

        // typography
        ...theme.typography.body.medium,
      },

      [withDot(classNames.footer)]: {
        paddingInline: 24,
        paddingBottom: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      },
    },
  };
});
