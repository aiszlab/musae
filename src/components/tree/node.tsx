import React, { useContext } from "react";
import type { TreeNodeProps } from "../../types/tree";
import Context from "./context";
import { Checkbox } from "../checkbox";
import { KeyboardArrowRight } from "../icon/icons";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useEvent } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import { type ThemeColorVariable, useThemeColorVars } from "src/hooks/use-theme-color-vars";

const styles = {
  node: $create({
    default: {
      display: "flex",
      alignItems: "center",
      gap: spacing.xxxxxsmall,

      paddingBlock: spacing.xxsmall,
      paddingLeft: `calc(${spacing.medium} + var(--level) * ${spacing.xxxlarge})`,
    },
  }),

  expander: $create({
    default: {
      width: 24,
      height: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "transform 0.3s",
      userSelect: "none",
    },

    expanded: {
      transform: "rotate(90deg)",
    },
  }),

  title: $create({
    default: {
      paddingInline: spacing.xxxxxsmall,
      borderRadius: 4,
      backgroundColor: {
        ":hover": "var(--color-surface-container)" satisfies ThemeColorVariable,
      },
      cursor: "default",
    },

    selected: {
      backgroundColor: "var(--color-surface-container)" satisfies ThemeColorVariable,
      color: "var(--color-primary)" satisfies ThemeColorVariable,
    },

    selectable: {
      cursor: "pointer",
    },
  }),
};

const Node = ({ value, children, level, onExpand, ...props }: TreeNodeProps) => {
  const { checkedKeys, onCheck, expandedKeys, onSelect, selectedKeys, selectable, classNames } =
    useContext(Context);
  const isChecked = checkedKeys.has(value);
  const isExpanded = expandedKeys.has(value);
  const isSelected = selectedKeys.has(value);
  const _themeColorVars = useThemeColorVars(["surface-container", "primary"]);

  const styled = {
    node: $props(styles.node.default),
    title: $props(
      styles.title.default,
      isSelected && styles.title.selected,
      selectable && styles.title.selectable,
    ),
    expander: $props(styles.expander.default, isExpanded && styles.expander.expanded),
  };

  const check = useEvent(() => {
    onCheck?.(value);
  });

  const expand = useEvent(() => {
    onExpand?.(value);
  });

  const select = useEvent(() => {
    // no action when `selectable` is false
    if (!selectable) return;
    onSelect?.(value);
  });

  return (
    <li className={classNames.holder} style={{ "--level": level, ..._themeColorVars }}>
      <div className={stringify(classNames.node, styled.node.className)} style={styled.node.style}>
        <span
          className={stringify(classNames.expander, styled.expander.className)}
          style={styled.expander.style}
          onClick={expand}
        >
          {!!children && <KeyboardArrowRight />}
        </span>

        <Checkbox className={stringify(classNames.checkbox)} checked={isChecked} onChange={check} />

        <span
          className={stringify(classNames.title, styled.title.className)}
          style={styled.title.style}
          onClick={select}
        >
          {props.title}
        </span>
      </div>

      {children}
    </li>
  );
};

export default Node;
