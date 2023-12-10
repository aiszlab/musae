import React, { useCallback, useContext, useMemo } from "react";
import { TreeNodeProps } from "./types";
import { StyledTreeNode } from "./styled";
import { useClassNames } from "../config";
import { ComponentToken, TreeClassToken } from "../../utils/class-name";
import Context from "./context";

const Node = ({ id, ...props }: TreeNodeProps) => {
  const classNames = useClassNames(ComponentToken.Tree);
  const { selectedKeys, select: _select } = useContext(Context);
  const isSelected = useMemo(() => !!selectedKeys.get(id), [id, selectedKeys]);

  const select = useCallback(() => {
    _select?.(id);
  }, [id, _select]);

  return (
    <li className={classNames[TreeClassToken.Holder]}>
      <StyledTreeNode className={classNames[TreeClassToken.Node]} level={props.level} isSelected={isSelected}>
        <span className={classNames[TreeClassToken.Title]} onClick={select}>
          {props.title}
        </span>
      </StyledTreeNode>
    </li>
  );
};

export default Node;
