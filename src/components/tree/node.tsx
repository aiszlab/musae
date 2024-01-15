import React, { CSSProperties, useCallback, useContext } from "react";
import { TreeNodeProps } from "./types";
import { useClassNames } from "../config";
import { ComponentToken, TreeClassToken } from "../../utils/class-name";
import Context from "./context";
import { Checkbox } from "../checkbox";
import { KeyboardArrowRight } from "../icon";
import { stylex } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import clsx from "clsx";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  node: (level: number) => ({
    display: "flex",
    alignItems: "center",
    paddingBlock: spacing.small,
    paddingLeft: 12 + level * 24,
  }),

  expander: (isExpanded: boolean) => ({
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 300ms",
    transform: isExpanded ? "rotate(90deg)" : null,
  }),

  title: (
    isSelected: boolean,
    backgroundColor: Required<CSSProperties>["backgroundColor"],
    hoveredBackgroundColor: Required<CSSProperties>["backgroundColor"],
    color: Required<CSSProperties>["color"]
  ) => ({
    paddingInline: spacing.xxsmall,
    borderRadius: 4,
    backgroundColor: {
      default: isSelected ? backgroundColor : null,
      ":hover": hoveredBackgroundColor,
    },
    color: isSelected ? color : null,
  }),

  checkbox: {
    marginRight: spacing.xxsmall,
  },
});

const Node = ({ _key, children, listRef, ...props }: TreeNodeProps) => {
  const classNames = useClassNames(ComponentToken.Tree);
  const { checkedKeys, check: _check, expandedKeys, expand: _expand } = useContext(Context);
  const isChecked = checkedKeys.has(_key);
  const isExpanded = expandedKeys.has(_key);
  const theme = useTheme();

  const check = () => {
    _check?.(_key);
  };

  const expand = useCallback(() => {
    listRef.current?.expand(!isExpanded);
    _expand?.(_key);
  }, [_expand, _key, isExpanded, listRef]);

  const styled = {
    node: stylex.props(styles.node(props.level)),
    title: stylex.props(
      styles.title(
        false,
        theme.colors[ColorToken.SurfaceContainer],
        theme.colors[ColorToken.SurfaceContainer],
        theme.colors[ColorToken.Primary]
      )
    ),
    checkbox: stylex.props(styles.checkbox),
    expander: stylex.props(styles.expander(isExpanded)),
  };

  return (
    <li className={classNames[TreeClassToken.Holder]}>
      <div className={clsx(classNames[TreeClassToken.Node], styled.node.className)} style={styled.node.style}>
        <span
          className={clsx(classNames[TreeClassToken.Expander], styled.expander.className)}
          style={styled.expander.style}
          onClick={expand}
        >
          {!!children && <KeyboardArrowRight />}
        </span>

        <Checkbox
          className={clsx(classNames[TreeClassToken.Checkbox], styled.checkbox.className)}
          style={styled.checkbox.style}
          checked={isChecked}
          value=""
        />

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
