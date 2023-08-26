import React, { useCallback, useMemo } from "react";
import type { MenuItemRenderProps } from "./types";
import { StyledMenuItemCollapser, StyledMenuItemPrefix, StyledMenuItemWrapper } from "./styled";
import { useBoolean } from "@aiszlab/relax";
import Group from "./group";
import { useAnimate } from "framer-motion";

const Item = ({ level, label, children, prefix }: MenuItemRenderProps) => {
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

  const onCollapserToggle = useCallback(() => {
    animate(scope.current, {
      height: isCollapsed ? "auto" : 0,
    });

    toggle();
  }, [toggle, isCollapsed, animate]);

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
