import React, { useMemo } from "react";
import Item from "./item";
import type { MenuRenderProps } from "./types";

/**
 * @author murukal
 *
 * @description
 * menu component
 */
const Menu = (props: MenuRenderProps) => {
  /// 菜单条目渲染结果
  const items = useMemo(() => {
    return props.items.map((item) => {
      return <Item {...item} />;
    });
  }, [props.items]);

  return <ul>{items}</ul>;
};

export default Menu;
