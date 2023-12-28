import styled from "@emotion/styled";
import { useValidTheme } from "../theme";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken, withDot, withSelf } from "../../utils/class-name";
import type { WithLevel } from "../../types/element";

/**
 * @author murukal
 *
 * @description
 * styled menu item wrapper
 */
export const StyledMenuItem = styled.div<
  WithLevel<{
    isSelected: boolean;
  }>
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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 4,
    },
  };
});

/**
 * @author murukal
 *
 * @description
 * styled collapser
 */
export const StyledCollapser = styled.span<{ isExpanded: boolean }>(({ isExpanded }) => {
  const classNames = useClassNames(ComponentToken.Menu);

  return {
    [withSelf(classNames[MenuClassToken.Collapser])]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: isExpanded ? "rotateX(0)" : "rotateX(180deg)",
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
      listStyle: "none",
      padding: 0,

      [`> ${withDot(classNames[MenuClassToken.GroupItem])}`]: {
        marginBlock: 2,
      },

      [`&${withDot(classNames[MenuClassToken.GroupHidden])}`]: {
        display: "none",
      },
    },
  };
});
