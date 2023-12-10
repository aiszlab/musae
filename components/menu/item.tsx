import React, { MouseEvent, forwardRef, useCallback, useMemo } from "react";
import { MenuItemProps } from "./types";
import { useChildren, useMenu } from "./hooks";
import { useBoolean } from "@aiszlab/relax";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import { StyledMenuItem } from "./styled";

/**
 * @author murukal
 *
 * @description
 * menu item
 */
const Item = forwardRef<HTMLLIElement, MenuItemProps>(({ level, label, children, prefix, id, groupRef }, ref) => {
  /// context
  const { selectedKeys, onClick } = useMenu();
  /// has children
  const hasChildren = useMemo(() => !!children, [children]);
  const classNames = useClassNames(ComponentToken.Menu);
  /// if is selected
  const isSelected = useMemo(() => !!selectedKeys?.get(id), [selectedKeys, id]);
  /// if is collapsed
  const { isOn: isCollapsed, toggle } = useBoolean(false);

  const onToggle = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      // if this item do not has children, mean this is a menu item
      // when click it, handler the change event, pass key
      if (!hasChildren) {
        return onClick?.(id);
      }

      groupRef.current?.toggle(isCollapsed);
      toggle();
    },
    [hasChildren, groupRef, isCollapsed, toggle, onClick, id]
  );

  const _children = useChildren({
    id,
    hasChildren,
    isCollapsed,
    collapserClassName: classNames[MenuClassToken.Collapser],
    label,
    prefix,
    prefixClassName: classNames[MenuClassToken.ItemPrefix],
    contentClassName: classNames[MenuClassToken.ItemContent],
  });

  return (
    <li className={classNames[MenuClassToken.GroupItem]} ref={ref}>
      <StyledMenuItem
        level={level}
        isSelected={isSelected}
        onClick={onToggle}
        className={classNames[MenuClassToken.Item]}
      >
        {_children.prefix}
        {_children.child}
        {_children.collapser}
      </StyledMenuItem>

      {children}
    </li>
  );
});

export default Item;
