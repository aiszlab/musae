import { StyledMenuGroup } from "./styled";
import type { GroupRef, MenuGroupRenderProps } from "./types";
import React, {
  useCallback,
  useContext,
  useMemo,
  forwardRef,
  type MouseEvent,
  useImperativeHandle,
  useRef,
} from "react";
import type { MenuItemRenderProps } from "./types";
import { StyledCollapser, StyledMenuItemPrefix, StyledMenuItem } from "./styled";
import { useBoolean, useRefs, useScrollable } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import Context from "./context";
import { KeyboardArrowUp } from "../icon";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import clsx from "clsx";

/**
 * @author murukal
 *
 * @description
 * menu item
 */
const Item = forwardRef<HTMLLIElement, MenuItemRenderProps>(({ level = 0, label, children, prefix, id }, ref) => {
  const groupRef = useRef<GroupRef>(null);
  /// has children
  const hasChildren = useMemo(() => !!children?.length, [children]);
  const classNames = useClassNames(ComponentToken.Menu);
  const context = useContext(Context);

  /// if is selected
  const isSelected = useMemo(() => !!context?.selectedKeys.includes(id), [context?.selectedKeys, id]);
  /// if is collapsed
  const { isOn: isCollapsed, toggle } = useBoolean(false);

  /// if there are children, render trailing arrow
  const collapser = useMemo(() => {
    if (!hasChildren) return null;

    return (
      <StyledCollapser isCollapsed={isCollapsed} className={classNames[MenuClassToken.Collapser]}>
        <KeyboardArrowUp size={16} />
      </StyledCollapser>
    );
  }, [hasChildren, isCollapsed, classNames]);

  const onToggle = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      // if this item do not has children, mean this is a menu item
      // when click it, handler the change event, pass key
      if (!hasChildren) {
        return context?.onClick?.(id);
      }

      groupRef.current?.toggle(isCollapsed);
      toggle();
    },
    [hasChildren, isCollapsed, toggle, context, id]
  );

  return (
    <li className={classNames[MenuClassToken.GroupItem]} ref={ref}>
      <StyledMenuItem
        level={level}
        isSelected={isSelected}
        onClick={onToggle}
        className={classNames[MenuClassToken.Item]}
      >
        {/* prefix */}
        {!!prefix && (
          <StyledMenuItemPrefix className={classNames[MenuClassToken.ItemPrefix]}>{prefix}</StyledMenuItemPrefix>
        )}

        {/* content */}
        {label}

        {/* collapser */}
        {collapser}
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
  const { groupRef: _groupRef, itemRefs, scrollTo, to } = useScrollable();
  const groupRef = useRefs(scope, _groupRef);

  /// 菜单条目渲染结果
  const children = useMemo(() => {
    return items.map(({ key, ...itemProps }) => {
      return (
        <Item
          key={key}
          level={level}
          id={key}
          ref={(item) => {
            itemRefs.current.set(key, item);
          }}
          {...itemProps}
        />
      );
    });
  }, [items, level, itemRefs]);

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
