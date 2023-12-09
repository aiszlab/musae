import { StyledMenuGroup } from "./styled";
import type { GroupRef, MenuGroupRenderProps } from "./types";
import React, { useCallback, useMemo, forwardRef, type MouseEvent, useImperativeHandle, useRef } from "react";
import type { MenuItemRenderProps } from "./types";
import { StyledMenuItem } from "./styled";
import { useBoolean, useRefs, useScrollable } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { useChildren, useMenu, useMenuConfig } from "./hooks";

/**
 * @author murukal
 *
 * @description
 * menu item
 */
const Item = forwardRef<HTMLLIElement, MenuItemRenderProps>(({ level = 0, label, children, prefix, id }, ref) => {
  /// context
  const { selectedKeys, onClick } = useMenu();
  const config = useMenuConfig();

  const groupRef = useRef<GroupRef>(null);
  /// has children
  const hasChildren = useMemo(() => !!children?.length, [children]);
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
    [hasChildren, isCollapsed, toggle, onClick, id]
  );

  const _children = useChildren({
    hasChildren,
    isCollapsed,
    collapserClassName: classNames[MenuClassToken.Collapser],
    label,
    prefix,
    prefixClassName: classNames[MenuClassToken.ItemPrefix],
    contentClassName: classNames[MenuClassToken.ItemContent],
    orders: config.orders,
  });

  return (
    <li className={classNames[MenuClassToken.GroupItem]} ref={ref}>
      <StyledMenuItem
        level={level}
        isSelected={isSelected}
        onClick={onToggle}
        className={classNames[MenuClassToken.Item]}
      >
        {_children}
      </StyledMenuItem>

      {/* if there are children menu items, display them */}
      {hasChildren && <Group ref={groupRef} items={children!} level={level + 1} />}
    </li>
  );
});

/**
 * @author murukal
 *
 * @description
 * menu group
 */
const Group = forwardRef<GroupRef, MenuGroupRenderProps>(({ items, level = 0, className, style }, ref) => {
  const classNames = useClassNames(ComponentToken.Menu);
  const [scope, animate] = useAnimate<HTMLUListElement>();
  const { targetRef, triggerRefs, scrollTo, to } = useScrollable({ direction: "vertical" });
  const groupRef = useRefs(scope, targetRef);

  /// 菜单条目渲染结果
  const children = useMemo(() => {
    return items.map(({ key, ...itemProps }) => {
      return (
        <Item
          key={key}
          level={level}
          id={key}
          ref={(item) => {
            triggerRefs.current.set(key, item);
          }}
          {...itemProps}
        />
      );
    });
  }, [items, level, triggerRefs]);

  useImperativeHandle(
    ref,
    () => ({
      scrollTo: (key, duration) => {
        // handler group scroll
        scrollTo(to(key), duration);
      },
      toggle: (isCollapsed) => {
        // is current is collapsed, then expand
        // else collapse
        animate(scope.current, {
          height: isCollapsed ? "auto" : 0,
        });
      },
    }),
    [animate, scope, scrollTo, to]
  );

  return (
    <StyledMenuGroup style={style} className={clsx(classNames[MenuClassToken.Group], className)} ref={groupRef}>
      {children}
    </StyledMenuGroup>
  );
});

export default Group;
