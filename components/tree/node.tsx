import React, { useCallback, useContext, useMemo } from "react";
import { TreeNodeProps } from "./types";
import { StyledTreeNode } from "./styled";
import { useClassNames } from "../config";
import { ComponentToken, TreeClassToken } from "../../utils/class-name";
import Context from "./context";
import { Checkbox } from "../checkbox";
import { KeyboardArrowRight } from "../icon";
import { useDefault } from "@aiszlab/relax";

const Node = ({ id, children, listRef, ...props }: TreeNodeProps) => {
  const classNames = useClassNames(ComponentToken.Tree);
  const { checkedKeys, check: _check, expandedKeys, expand: _expand } = useContext(Context);
  const isChecked = useMemo(() => checkedKeys.has(id), [id, checkedKeys]);
  const isExpanded = useMemo(() => expandedKeys.has(id), [id, expandedKeys]);

  const _default = useDefault({
    isExpanded,
  });

  const check = useCallback(() => {
    _check?.(id);
  }, [id, _check]);

  const expand = useCallback(() => {
    listRef.current?.expand(!isExpanded);
    _expand?.(id);
  }, [_expand, id, isExpanded, listRef]);

  const expander = useMemo(() => {
    return (
      <span className={classNames[TreeClassToken.Expander]} onClick={expand}>
        {!!children && <KeyboardArrowRight />}
      </span>
    );
  }, [children, classNames, expand]);

  return (
    <li className={classNames[TreeClassToken.Holder]}>
      <StyledTreeNode
        className={classNames[TreeClassToken.Node]}
        level={props.level}
        isSelected={false}
        isExpanded={isExpanded}
        isDefaultExpanded={_default.isExpanded}
      >
        {expander}

        <Checkbox className={classNames[TreeClassToken.Checkbox]} checked={isChecked} />

        <span className={classNames[TreeClassToken.Title]} onClick={check}>
          {props.title}
        </span>
      </StyledTreeNode>

      {children}
    </li>
  );
};

export default Node;
