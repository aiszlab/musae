import React, { type CSSProperties, useContext } from "react";
import type { TreeNodeProps } from "../../types/tree";
import Context from "./context";
import { Checkbox } from "../checkbox";
import { KeyboardArrowRight } from "../icon/icons";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useEvent } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";

const styles = $create({
  node: (props: { level: number }) => ({
    display: "flex",
    alignItems: "center",
    gap: spacing.xxxxxsmall,

    paddingBlock: spacing.xxsmall,
    paddingLeft: 12 + props.level * 24,
  }),

  expander: (props: { isExpanded: boolean }) => ({
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 0.3s",
    transform: props.isExpanded ? "rotate(90deg)" : null,
    userSelect: "none",
  }),

  title: (props: {
    isSelected: boolean;
    backgroundColor: CSSProperties["backgroundColor"];
    hoveredBackgroundColor: CSSProperties["backgroundColor"];
    color: CSSProperties["color"];
  }) => ({
    paddingInline: spacing.xxxxxsmall,
    borderRadius: 4,
    backgroundColor: {
      default: props.isSelected ? props.backgroundColor : null,
      ":hover": props.hoveredBackgroundColor,
    },
    color: props.isSelected ? props.color : null,
    cursor: "default",
  }),

  selectable: {
    cursor: "pointer",
  },
});

const Node = ({ value, children, level, onExpand, ...props }: TreeNodeProps) => {
  const { checkedKeys, onCheck, expandedKeys, onSelect, selectedKeys, selectable, classNames } =
    useContext(Context);
  const isChecked = checkedKeys.has(value);
  const isExpanded = expandedKeys.has(value);
  const isSelected = selectedKeys.has(value);
  const theme = useTheme();

  const styled = {
    node: $props(styles.node({ level })),
    title: $props(
      styles.title({
        isSelected,
        backgroundColor: theme.colors["surface-container"],
        hoveredBackgroundColor: theme.colors["surface-container"],
        color: theme.colors.primary,
      }),
      selectable && styles.selectable,
    ),
    expander: $props(
      styles.expander({
        isExpanded,
      }),
    ),
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
    <li className={classNames.holder}>
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
