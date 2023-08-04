import React, { useMemo } from "react";
import { Props } from "./index";
import MenuItem from "../menu-item/MenuItem";

/**
 * @author murukal
 */
const Menu = (props: Props) => {
  /// 菜单条目渲染结果
  const items = useMemo(() => {
    return props.items.map((item) => {
      return <MenuItem {...item} />;
    });
  }, [props.items]);

  return <ul className="list-none m-0 p-0">{items}</ul>;
};

export default Menu;
