import { StyledMenuGroup } from "./styled";
import React, { forwardRef, useMemo } from "react";
import { type MenuGroupRenderProps } from "./types";
import Item from "./item";

/**
 * @author murukal
 *
 * @description
 * menu group
 */
const Group = forwardRef<HTMLUListElement, MenuGroupRenderProps>(({ items, level, isCollapsed }, ref) => {
  /// 菜单条目渲染结果
  const children = useMemo(() => {
    return items.map(({ key, ...itemProps }) => {
      return <Item key={key} level={level} {...itemProps} />;
    });
  }, [items, level]);

  return (
    <StyledMenuGroup ref={ref} isCollapsed={isCollapsed}>
      {children}
    </StyledMenuGroup>
  );
});

export default Group;
