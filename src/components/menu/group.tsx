import React, { forwardRef } from "react";
import type { MenuGroupProps } from "../../types/menu";
import Item from "./item";
import { useMenuContext } from "./hooks";
import { useComposedRef, useUpdateEffect } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useExpandable } from "../../hooks/use-expandable";
import { useTheme } from "../theme";
import { stringify } from "@aiszlab/relax/class-name";

const styles = {
  group: $create({
    default: {
      // reset ul styles
      margin: spacing.none,
      padding: spacing.none,
      listStyleType: "none",
      color: "var(--color-on-surface)",
      overflow: "auto",
    },

    horizontal: {
      display: "flex",
      flexDirection: "row",
      gap: spacing.xxsmall,
    },

    vertical: {},

    inline: {},

    hidden: {
      display: "none",
    },
  }),

  subgroup: $create({
    inline: {
      marginBlockStart: spacing.xxxxxsmall,
    },

    vertical: {},

    horizontal: {},
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
    const { collect, expandedKeys, classNames } = useMenuContext();
    const theme = useTheme();
    const isInline = mode === "inline";

    const { ref: _groupRef, expand, collapse } = useExpandable<HTMLUListElement>();
    const groupRef = useComposedRef(ref, _groupRef);

    useUpdateEffect(async () => {
      if (expanded) {
        await expand();
        return;
      }
      await collapse();
    }, [expanded]);

    const styled = {
      group: $props(styles.group.default, styles.group[mode], !expanded && styles.group.hidden),
      subgroup: $props(styles.subgroup[mode]),
    };

    return (
      <ul
        ref={groupRef}
        className={stringify(
          classNames.group,
          !expand && classNames.hidden,
          className,
          styled.group.className,
        )}
        style={{
          ...styled.group.style,
          ...style,
          "--color-on-surface": theme.colors["on-surface"],
        }}
      >
        {items.map(({ children = [], key, ...item }) => {
          return (
            <Item
              key={key}
              value={key}
              level={level}
              className={item.className}
              style={item.style}
              label={item.label}
              prefix={item.prefix}
              onClick={item.onClick}
              mode={mode}
              ref={(_ref) => {
                collect(key, _ref);
              }}
            >
              {children.length > 0 && (
                <Group
                  items={children}
                  expanded={!isInline || expandedKeys.has(key)}
                  level={!isInline ? 0 : level + 1}
                  mode="inline"
                  className={styled.subgroup.className}
                  style={styled.subgroup.style}
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
