import styled from "@emotion/styled";
import type { WithLevel } from "./types";

/**
 * @author murukal
 *
 * @description
 * styled menu item wrapper
 */
export const StyledMenuItemWrapper = styled.div(({ level = 0 }: WithLevel) => {
  return {
    display: "flex",
    alignItems: "center",
    minHeight: 24,
    cursor: "pointer",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 12,
    paddingLeft: 12 + level * 24,
    borderRadius: 8,
    transition: "background-color 300ms",

    // ":hover": {
    //   backgroundColor: "#f5f7fa",
    // },
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
