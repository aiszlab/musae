import React, { useMemo } from "react";
import type { MenuItemRenderProps } from "./types";
import { StyledMenuItemCollapser, StyledMenuItemPrefix, StyledMenuItemWrapper } from "./styled";
import { useBoolean } from "@aiszlab/relax";
import Group from "./group";

const Item = ({ level, label, children, prefix }: MenuItemRenderProps) => {
  /// has children
  const hasChildren = useMemo(() => !!children?.length, [children]);

  /// if is collapsed
  const { isOn: isCollapsed, toggle: switchIsCollapsed } = useBoolean(false);

  /// if there are children, render trailing arrow
  const collapser = useMemo(() => {
    if (!hasChildren) return null;
    return <StyledMenuItemCollapser>{isCollapsed ? "展开" : "收起"}</StyledMenuItemCollapser>;
  }, [hasChildren, isCollapsed]);

  return (
    <li>
      <StyledMenuItemWrapper level={level} onClick={switchIsCollapsed}>
        {/* prefix */}
        {!!prefix && <StyledMenuItemPrefix>{prefix}</StyledMenuItemPrefix>}

        {/* content */}
        {label}

        {/* collapser */}
        {collapser}
      </StyledMenuItemWrapper>

      {/* if there are children menu items, display them */}
      {hasChildren && <Group items={children!} level={level + 1} isCollapsed={isCollapsed} />}
    </li>
  );
};

export default Item;
