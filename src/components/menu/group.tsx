import React, { CSSProperties, forwardRef } from "react";
import type { MenuGroupProps } from "./types";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import clsx from "clsx";
import Item from "./item";
import { useMenuContext } from "./hooks";
import { useRefs } from "@aiszlab/relax";
import * as stylex from "@stylexjs/stylex";
import { elevations, sizes, spacing } from "../theme/tokens.stylex";
import { useExpandEffect } from "../../hooks/use-expand-effect";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = {
  group: stylex.create({
    default: (props: { backgroundColor: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({
      /// reset ul styles
      margin: spacing.none,
      padding: spacing.none,
      listStyle: "none",
      backgroundColor: props.backgroundColor,
      color: props.color,
      overflow: "auto",
    }),

    hidden: {
      display: "none",
    },
  }),

  submenu: stylex.create({
    inline: {},

    horizontal: {
      boxShadow: elevations.small,
      borderRadius: sizes.xxxxsmall,
      minWidth: 200,
      padding: spacing.xxsmall,
      marginTop: spacing.xsmall,
    },

    vertical: {
      boxShadow: elevations.small,
      borderRadius: sizes.xxxxsmall,
      minWidth: 200,
      padding: spacing.xxsmall,
    },
  }),
};

/**
 * @author murukal
 *
 * @description
 * menu group
 */
const Group = forwardRef<HTMLUListElement, MenuGroupProps>(
  ({ items = [], level = 0, expanded = true, className, style, mode, ...props }, ref) => {
    const classNames = useClassNames(ComponentToken.Menu);
    const [scope, animate] = useAnimate<HTMLUListElement>();
    const { collect, expandedKeys } = useMenuContext();
    const groupRef = useRefs<HTMLUListElement>(ref, scope);
    const theme = useTheme();
    const isInline = mode === "inline";

    useExpandEffect({
      animate,
      target: scope,
      expanded,
    });

    const styled = {
      group: stylex.props(
        styles.group.default({
          backgroundColor: theme.colors[ColorToken.SurfaceContainerLowest],
          color: theme.colors[ColorToken.OnSurface],
        }),
        !expanded && styles.group.hidden
      ),
      submenu: stylex.props(styles.submenu[mode]),
    };

    return (
      <ul
        ref={groupRef}
        className={clsx(
          classNames[MenuClassToken.Group],
          {
            [classNames[MenuClassToken.GroupHidden]]: !expanded,
          },
          className,
          styled.group.className
        )}
        style={{
          ...styled.group.style,
          ...style,
        }}
      >
        {items.map(({ children = [], ...item }) => {
          return (
            <Item
              key={item.key}
              value={item.key}
              level={level}
              className={item.className}
              style={item.style}
              label={item.label}
              mode={mode}
              ref={(_ref) => {
                if (!_ref) return;
                collect(item.key, _ref);
              }}
            >
              {children.length > 0 && (
                <Group
                  items={children}
                  expanded={!isInline || expandedKeys.has(item.key)}
                  level={!isInline ? 0 : level + 1}
                  mode="inline"
                  className={styled.submenu.className}
                  style={styled.submenu.style}
                />
              )}
            </Item>
          );
        })}
      </ul>
    );
  }
);

export default Group;
