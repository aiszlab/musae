import { StyledMenuGroup } from "./styled";
import React, { useMemo } from "react";
import { type MenuGroupRenderProps } from "./types";
import Item from "./item";

/**
 * @author murukal
 *
 * @description
 * menu group
 */
const Group = ({ items, level }: MenuGroupRenderProps) => {
  /// 菜单条目渲染结果
  const children = useMemo(() => {
    return items.map(({ key, ...itemProps }) => {
      return <Item key={key} level={level} {...itemProps} />;
    });
  }, [items, level]);

  return <StyledMenuGroup>{children}</StyledMenuGroup>;
};

export default Group;
