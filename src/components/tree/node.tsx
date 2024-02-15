import React, { type CSSProperties, useContext } from "react";
import type { TreeNodeProps } from "./types";
import { useClassNames } from "../config";
import { ComponentToken, TreeClassToken } from "../../utils/class-name";
import Context from "./context";
import { Checkbox } from "../checkbox";
import { KeyboardArrowRight } from "../icon";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import clsx from "clsx";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  node: (props: { level: number }) => ({
    display: "flex",
    alignItems: "center",
    gap: spacing.xxsmall,

    paddingBlock: spacing.small,
    paddingLeft: 12 + props.level * 24,
  }),

  expander: (props: { isExpanded: boolean }) => ({
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 300ms",
    transform: props.isExpanded ? "rotate(90deg)" : null,
  }),

  title: (props: {
    isSelected: boolean;
    backgroundColor: CSSProperties["backgroundColor"];
    hoveredBackgroundColor: CSSProperties["backgroundColor"];
    color: CSSProperties["color"];
  }) => ({
    paddingInline: spacing.xxsmall,
    borderRadius: 4,
    backgroundColor: {
      default: props.isSelected ? props.backgroundColor : null,
      ":hover": props.hoveredBackgroundColor,
    },
    color: props.isSelected ? props.color : null,
  }),
});

const Node = ({ value, children, level, onToggle, ...props }: TreeNodeProps) => {
  const classNames = useClassNames(ComponentToken.Tree);
  const { checkedKeys, check: _check, expandedKeys } = useContext(Context);
  const isChecked = checkedKeys.has(value);
  const isExpanded = expandedKeys.has(value);
  const theme = useTheme();

  const check = () => {
    _check?.(value);
  };

  const styled = {
    node: stylex.props(styles.node({ level })),
    title: stylex.props(
      styles.title({
        isSelected: false,
        backgroundColor: theme.colors[ColorToken.SurfaceContainer],
        hoveredBackgroundColor: theme.colors[ColorToken.SurfaceContainer],
        color: theme.colors[ColorToken.Primary],
      })
    ),
    expander: stylex.props(
      styles.expander({
        isExpanded,
      })
    ),
  };

  const toggle = () => {
    onToggle?.(value);
  };

  return (
    <li className={classNames[TreeClassToken.Holder]}>
      <div className={clsx(classNames[TreeClassToken.Node], styled.node.className)} style={styled.node.style}>
        <span
          className={clsx(classNames[TreeClassToken.Expander], styled.expander.className)}
          style={styled.expander.style}
          onClick={toggle}
        >
          {!!children && <KeyboardArrowRight />}
        </span>

        <Checkbox className={clsx(classNames[TreeClassToken.Checkbox])} checked={isChecked} value="" />

        <span
          className={clsx(classNames[TreeClassToken.Title], styled.title.className)}
          style={styled.title.style}
          onClick={check}
        >
          {props.title}
        </span>
      </div>

      {children}
    </li>
  );
};

export default Node;
