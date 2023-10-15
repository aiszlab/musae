import { StyledMenuGroup } from "./styled";
import { type MenuGroupRenderProps } from "./types";
import React, { useCallback, useContext, useMemo, forwardRef, type MouseEvent } from "react";
import type { MenuItemRenderProps } from "./types";
import { StyledMenuItemCollapser, StyledMenuItemPrefix, StyledMenuItemWrapper } from "./styled";
import { useBoolean } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import MenuContext from "./context";
import NavigateBefore from "../icons/navigate-before";

/**
 * @author murukal
 *
 * @description
 * menu item
 */
const Item = ({ level = 0, label, children, prefix, id }: MenuItemRenderProps) => {
  /// has children
  const hasChildren = useMemo(() => !!children?.length, [children]);

  const context = useContext(MenuContext);
  const [scope, animate] = useAnimate<HTMLUListElement>();

  /// if is selected
  const isSelected = useMemo(() => !!context?.selectedKeys.includes(id), [context?.selectedKeys]);
  /// if is collapsed
  const { isOn: isCollapsed, toggle } = useBoolean(false);

  /// if there are children, render trailing arrow
  const collapser = useMemo(() => {
    if (!hasChildren) return null;

    return (
      <StyledMenuItemCollapser isCollapsed={isCollapsed}>
        <NavigateBefore size={16} />
      </StyledMenuItemCollapser>
    );
  }, [hasChildren, isCollapsed]);

  const onToggle = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      // if this item do not has children, mean this is a menu item
      // when click it, handler the change event, pass key
      if (!hasChildren) {
        return context?.onClick?.(id);
      }

      // when item has children, mean this is menu group
      // when click it, handler collapser
      // if (!scope.current) return;
      animate(scope.current, {
        height: isCollapsed ? "auto" : 0,
      });

      toggle();
    },
    [toggle, isCollapsed, animate, id, context?.onClick, hasChildren]
  );

  return (
    <li>
      <StyledMenuItemWrapper level={level} isSelected={isSelected} onClick={onToggle}>
        {/* prefix */}
        {!!prefix && <StyledMenuItemPrefix>{prefix}</StyledMenuItemPrefix>}

        {/* content */}
        {label}

        {/* collapser */}
        {collapser}
      </StyledMenuItemWrapper>

      {/* if there are children menu items, display them */}
      {hasChildren && <Group ref={scope} items={children!} level={level + 1} />}
    </li>
  );
};

/**
 * @author murukal
 *
 * @description
 * menu group
 */
const Group = forwardRef<HTMLUListElement, MenuGroupRenderProps>(({ items, level = 0 }, ref) => {
  /// 菜单条目渲染结果
  const children = useMemo(() => {
    return items.map(({ key, ...itemProps }) => {
      return <Item key={key} level={level} {...itemProps} id={key} />;
    });
  }, [items, level]);

  return <StyledMenuGroup ref={ref}>{children}</StyledMenuGroup>;
});

export default Group;
