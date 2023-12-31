import React, { createRef, forwardRef, useImperativeHandle, useMemo } from "react";
import type { ListRef, TreeListProps } from "./types";
import { StyledTreeList } from "./styled";
import Node from "./node";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../config";
import { ComponentToken, TreeClassToken } from "../../utils/class-name";

const List = forwardRef<ListRef, TreeListProps>(({ level, nodes }, ref) => {
  const [scope, animate] = useAnimate<HTMLUListElement>();
  const classNames = useClassNames(ComponentToken.Tree);

  /// children
  const children = useMemo(() => {
    return nodes.map(({ key, children: _children = [], ...nodeProps }) => {
      const hasChildren = _children.length > 0;
      const nodeListRef = createRef<ListRef>();

      return (
        <Node {...nodeProps} key={key} _key={key} level={level} listRef={nodeListRef}>
          {hasChildren && <List level={level + 1} nodes={_children} ref={nodeListRef} />}
        </Node>
      );
    });
  }, [level, nodes]);

  useImperativeHandle(
    ref,
    () => ({
      expand: (isExpanded) => {
        // is current is collapsed, then expand
        // else collapse
        animate(scope.current, {
          height: isExpanded ? "auto" : 0,
        });
      },
    }),
    [animate, scope]
  );

  return (
    <StyledTreeList className={classNames[TreeClassToken.List]} ref={scope}>
      {children}
    </StyledTreeList>
  );
});

export default List;
