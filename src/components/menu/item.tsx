import React, { forwardRef } from "react";
import { MenuItemProps } from "./types";
import { useItemChildren, useMenuContext } from "./hooks";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import { StyledMenuItem } from "./styled";

/**
 * @author murukal
 *
 * @description
 * menu item
 */
const Item = forwardRef<HTMLLIElement, MenuItemProps>(({ level, label, prefix, suffix, _key, ...props }, ref) => {
  const { selectedKeys } = useMenuContext();
  const classNames = useClassNames(ComponentToken.Menu);
  const isSelected = selectedKeys.has(_key);

  const click = () => {
    props.onClick(_key);
  };

  const _children = useItemChildren({
    label,
    prefix,
    suffix,
  });

  return (
    <li role="menuitem" ref={ref}>
      <StyledMenuItem level={level} isSelected={isSelected} onClick={click} className={classNames[MenuClassToken.Item]}>
        {_children.prefix}
        {_children.label}
        {_children.suffix}
      </StyledMenuItem>

      {props.children}
    </li>
  );
});

export default Item;
