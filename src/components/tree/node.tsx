import styles from "./styles";
import React, { useContext } from "react";
import type { TreeNodeProps } from "../../types/tree";
import Context from "./context";
import { Checkbox } from "../checkbox";
import { IconKeyboardArrowRight } from "../icon/icons";
import { props as $props } from "@stylexjs/stylex";
import { useEvent } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

const Node = ({ value, children, level, onExpand, ...props }: TreeNodeProps) => {
  const { checkedKeys, onCheck, expandedKeys, onSelect, selectedKeys, selectable, classNames } =
    useContext(Context);
  const isChecked = checkedKeys.has(value);
  const isExpanded = expandedKeys.has(value);
  const isSelected = selectedKeys.has(value);
  const _themeColorVars = useThemeColorVars(["surface-container", "primary"]);

  const styled = {
    node: $props(styles.node.base),
    title: $props(
      styles.title.base,
      isSelected && styles.title.selected,
      selectable && styles.title.selectable,
    ),
    expander: $props(styles.expander.base, isExpanded && styles.expander.expanded),
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
          {!!children && <IconKeyboardArrowRight />}
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
