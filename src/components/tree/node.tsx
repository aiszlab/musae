import React, { type CSSProperties, useContext } from "react";
import type { TreeNodeProps } from "musae/types/tree";
import { useClassNames } from "../../hooks/use-class-names";
import { TreeClassToken } from "../../utils/class-name";
import Context from "./context";
import { Checkbox } from "../checkbox";
import { KeyboardArrowRight } from "musae/icons";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useEvent } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";

const styles = stylex.create({
  node: (props: { level: number }) => ({
    display: "flex",
    alignItems: "center",
    gap: spacing.xxxsmall,

    paddingBlock: spacing.xsmall,
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
    paddingInline: spacing.xxxsmall,
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
  const classNames = useClassNames("tree");
  const { checkedKeys, onCheck, expandedKeys, onSelect, selectedKeys, selectable } =
    useContext(Context);
  const isChecked = checkedKeys.has(value);
  const isExpanded = expandedKeys.has(value);
  const isSelected = selectedKeys.has(value);
  const theme = useTheme();

  const styled = {
    node: stylex.props(styles.node({ level })),
    title: stylex.props(
      styles.title({
        isSelected,
        backgroundColor: theme.colors["surface-container"],
        hoveredBackgroundColor: theme.colors["surface-container"],
        color: theme.colors.primary,
      }),
      selectable && styles.selectable,
    ),
    expander: stylex.props(
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
    <li className={classNames[TreeClassToken.Holder]}>
      <div
        className={stringify(classNames[TreeClassToken.Node], styled.node.className)}
        style={styled.node.style}
      >
        <span
          className={stringify(classNames[TreeClassToken.Expander], styled.expander.className)}
          style={styled.expander.style}
          onClick={expand}
        >
          {!!children && <KeyboardArrowRight />}
        </span>

        <Checkbox
          className={stringify(classNames[TreeClassToken.Checkbox])}
          checked={isChecked}
          onChange={check}
        />

        <span
          className={stringify(classNames[TreeClassToken.Title], styled.title.className)}
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
