import React, { useMemo } from "react";
import type { TreeListProps } from "./types";
import { StyledTreeList } from "./styled";
import Node from "./node";

const List = ({ level, nodes }: TreeListProps) => {
  /// children
  const children = useMemo(() => {
    return nodes.map(({ key, children: _children = [], ...nodeProps }) => {
      const hasChildren = _children.length > 0;

      return (
        <Node {...nodeProps} key={key} id={key} level={level}>
          {hasChildren && <List level={level + 1} nodes={_children} />}
        </Node>
      );
    });
  }, [level, nodes]);

  return <StyledTreeList>{children}</StyledTreeList>;
};

export default List;
