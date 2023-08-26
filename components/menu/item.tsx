import React, { useCallback, useContext, useMemo } from "react";
import type { MenuItemRenderProps } from "./types";
import { StyledMenuItemCollapser, StyledMenuItemPrefix, StyledMenuItemWrapper } from "./styled";
import { useBoolean } from "@aiszlab/relax";
import Group from "./group";
import { useAnimate } from "framer-motion";
import MenuContext from "./context";

const Item = ({ level = 0, label, children, prefix, id }: MenuItemRenderProps) => {
  /// has children
  const hasChildren = useMemo(() => !!children?.length, [children]);

  const [scope, animate] = useAnimate<HTMLUListElement>();

  /// if is collapsed
  const { isOn: isCollapsed, toggle } = useBoolean(false);

  /// if there are children, render trailing arrow
  const collapser = useMemo(() => {
    if (!hasChildren) return null;
    return <StyledMenuItemCollapser>{isCollapsed ? "展开" : "收起"}</StyledMenuItemCollapser>;
  }, [hasChildren, isCollapsed]);

  const context = useContext(MenuContext);

  const onCollapserToggle = useCallback(() => {
    // if this item do not has children, mean this is a menu item
    // when click it, handler the change event, pass key
    if (!hasChildren) {
      return context?.onClick?.(id);
    }

    // when item has children, mean this is menu group
    // when click it, handler collapser
    if (!scope.current) return;

    animate(scope.current, {
      height: isCollapsed ? "auto" : 0,
    });

    toggle();
  }, [toggle, isCollapsed, animate, id, context?.onClick, hasChildren]);

  return (
    <li>
      <StyledMenuItemWrapper level={level} onClick={onCollapserToggle}>
        {/* prefix */}
        {!!prefix && <StyledMenuItemPrefix>{prefix}</StyledMenuItemPrefix>}

        {/* content */}
        {label}

        {/* collapser */}
        {collapser}
      </StyledMenuItemWrapper>

      {/* if there are children menu items, display them */}
      {hasChildren && <Group ref={scope} items={children!} level={level + 1} isCollapsed={isCollapsed} />}
    </li>
  );
};

export default Item;
