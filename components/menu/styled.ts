import styled from "@emotion/styled";
import type { WithLevel } from "./types";
import { useValidTheme } from "../theme";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken, withDot, withSelf } from "../../utils/class-name";

/**
 * @author murukal
 *
 * @description
 * styled menu item wrapper
 */
export const StyledMenuItem = styled.div<
  WithLevel & {
    isSelected: boolean;
  }
>((props) => {
  const theme = useValidTheme(props.theme);
  const classNames = useClassNames(ComponentToken.Menu);

  return {
    [withSelf(classNames[MenuClassToken.Item])]: {
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

      [`& ${withDot(classNames[MenuClassToken.Collapser])}:last-child`]: {
        marginLeft: "auto",
      },
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
  const classNames = useClassNames(ComponentToken.Menu);

  return {
    [withSelf(classNames[MenuClassToken.ItemPrefix])]: {
      marginRight: "0.5rem",
    },
  };
});

/**
 * @author murukal
 *
 * @description
 * styled collapser
 */
export const StyledCollapser = styled.span<{ isCollapsed: boolean }>(({ isCollapsed }) => {
  const classNames = useClassNames(ComponentToken.Menu);

  return {
    [withSelf(classNames[MenuClassToken.Collapser])]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: isCollapsed ? "rotateX(180deg)" : "rotateX(0)",
      transition: "transform 200ms",
    },
  };
});

/**
 * @author murukal
 *
 * @description
 * styled menu group
 */
export const StyledMenuGroup = styled.ul(() => {
  const classNames = useClassNames(ComponentToken.Menu);

  return {
    [withSelf(classNames[MenuClassToken.Group])]: {
      margin: 0,
      listStyleType: "none",
      padding: 0,
      overflow: "hidden",
      position: "relative",
    },
  };
});
