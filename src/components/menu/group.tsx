import React, { type CSSProperties, forwardRef } from "react";
import type { MenuGroupProps } from "musae/types/menu";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../../hooks/use-class-names";
import { MenuClassToken } from "../../utils/class-name";
import Item from "./item";
import { useMenuContext } from "./hooks";
import { useComposedRef, useUpdateEffect, clsx } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useExpandable } from "../../hooks/use-expandable";
import { useTheme } from "../theme";

const styles = {
  group: stylex.create({
    default: (props: { color: CSSProperties["color"] }) => ({
      /// reset ul styles
      margin: spacing.none,
      padding: spacing.none,
      listStyleType: "none",
      color: props.color,
      overflow: "auto",
    }),

    horizontal: {
      display: "flex",
      flexDirection: "row",
      gap: spacing.xsmall,
    },

    vertical: {},

    inline: {},

    hidden: {
      display: "none",
    },
  }),

  submenu: stylex.create({
    inline: {
      marginBlockStart: spacing.xxxsmall,
    },

    horizontal: {
      minWidth: 200,
      paddingInline: spacing.xxxsmall,
    },

    vertical: {
      minWidth: 200,
      paddingInline: spacing.xxxsmall,
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
  ({ items, level = 0, expanded = true, className, style, mode }, ref) => {
    const classNames = useClassNames("menu");
    const [scope, animate] = useAnimate<HTMLUListElement>();
    const { collect, expandedKeys } = useMenuContext();
    const groupRef = useComposedRef<HTMLUListElement>(ref, scope);
    const theme = useTheme();
    const isInline = mode === "inline";

    const { expand, collapse } = useExpandable();

    useUpdateEffect(async () => {
      if (expanded) {
        await expand([scope, animate]);
        return;
      }
      await collapse([scope, animate]);
    }, [expanded]);

    const styled = {
      group: stylex.props(
        styles.group.default({
          color: theme.colors["on-surface"],
        }),
        styles.group[mode],
        !expanded && styles.group.hidden,
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
          styled.group.className,
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
              prefix={item.prefix}
              onClick={item.onClick}
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
  },
);

export default Group;
