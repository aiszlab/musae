import styled from "@emotion/styled";
import type { WithLevel } from "./types";
import { useValidTheme } from "../theme";

/**
 * @author murukal
 *
 * @description
 * styled menu item wrapper
 */
export const StyledMenuItemWrapper = styled.div<
  WithLevel & {
    isSelected: boolean;
  }
>((props) => {
  const theme = useValidTheme(props.theme);

  return {
    display: "flex",
    alignItems: "center",
    minHeight: 24,
    cursor: "pointer",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 12,
    paddingLeft: 12 + (props.level ?? 0) * 24,
    borderRadius: 8,
    transition: "all 300ms",

    ...(props.isSelected && {
      backgroundColor: theme.colorRole.surfaceContainer,
      color: theme.colorRole.primary,
    }),

    ...theme.typography.label.large,

    ":hover": {
      backgroundColor: theme.colorRole.surfaceContainer,
    },
  };
});

/**
 * @author murukal
 *
 * @description
 * styled menu item prefix
 */
export const StyledMenuItemPrefix = styled.span(() => {
  return {
    marginRight: "0.5rem",
  };
});

/**
 * @author murukal
 *
 * @description
 * styled menu collapser
 */
export const StyledMenuItemCollapser = styled.span(({ isCollapsed }: { isCollapsed: boolean }) => {
  return {
    marginLeft: "auto",
    transform: `rotate(90deg) ${isCollapsed ? "rotateY(180deg)" : "rotateY(0)"}`,
    transition: "transform 200ms",
  };
});

/**
 * @author murukal
 *
 * @description
 * styled menu group
 */
export const StyledMenuGroup = styled.ul({
  margin: 0,
  listStyleType: "none",
  padding: 0,
  overflow: "hidden",
});
