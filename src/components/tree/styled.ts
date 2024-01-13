import styled from "@emotion/styled";
import { ComponentToken, TreeClassToken, withDot, withSelf } from "../../utils/class-name";
import { useClassNames } from "../config";
import { TreeNodeRenderProps } from "./types";
import { useValidTheme } from "../theme";

/**
 * @description
 * styled tree list
 */
export const StyledTreeList = styled.ul(() => {
  const classNames = useClassNames(ComponentToken.Tree);

  return {
    [withSelf(classNames[TreeClassToken.List])]: {
      margin: 0,
      listStyleType: "none",
      padding: 0,
    },
  };
});

/**
 * @description
 * styled tree node
 */
export const StyledTreeNode = styled.div<TreeNodeRenderProps>(({ level, isExpanded, isDefaultExpanded, ...props }) => {
  const classNames = useClassNames(ComponentToken.Tree);
  const theme = useValidTheme(props.theme);

  return {
    [withSelf(classNames[TreeClassToken.Node])]: {
      display: "flex",
      alignItems: "center",
      paddingBlock: 8,
      paddingLeft: 12 + (level ?? 0) * 24,

      [withDot(classNames[TreeClassToken.Expander])]: {
        width: 24,
        height: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",

        svg: {
          transition: "transform 300ms",
          ...(isExpanded && {
            transform: "rotate(90deg)",
          }),
        },
      },

      [withDot(classNames[TreeClassToken.Checkbox])]: {
        marginRight: 4,
      },

      [withDot(classNames[TreeClassToken.Title])]: {
        paddingInline: 4,
        borderRadius: 4,

        ...(props.isSelected && {
          backgroundColor: theme.colorRole.surfaceContainer,
          color: theme.colorRole.primary,
        }),

        ...theme.typography.label.large,

        ":hover": {
          backgroundColor: theme.colorRole.surfaceContainer,
        },
      },

      [`& + ${withDot(classNames[TreeClassToken.List])}`]: {
        height: isDefaultExpanded ? "auto" : 0,
        overflow: "hidden",
      },
    },
  };
});
