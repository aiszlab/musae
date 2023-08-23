import styled from "@emotion/styled";
import { WithLevel } from "./types";

/**
 * @author murukal
 *
 * @description
 * styled menu item
 */
export const StyledMenuItem = styled.li(({ level }: WithLevel) => {
  return {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 12,
    paddingLeft: 12 + level * 24,
  };
});

/**
 * @author murukal
 *
 * @description
 * styled menu group
 */
export const StyledMenuGroup = styled.ul(() => {
  return {};
});
