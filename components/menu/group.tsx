import { StyledMenuGroup } from "./styled";
import type { GroupRef, MenuGroupProps } from "./types";
import React, { useMemo, forwardRef, useImperativeHandle, createRef } from "react";
import { useRefs, useScrollable } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import clsx from "clsx";
import Item from "./item";

/**
 * @author murukal
 *
 * @description
 * menu group
 */
const Group = forwardRef<GroupRef, MenuGroupProps>(({ items, level, className, style }, ref) => {
  const classNames = useClassNames(ComponentToken.Menu);
  const [scope, animate] = useAnimate<HTMLUListElement>();
  const { targetRef, scrollTo, to, setTrigger } = useScrollable({ direction: "vertical" });
  const groupRef = useRefs(scope, targetRef);

  /// 菜单条目渲染结果
  const children = useMemo(() => {
    return items.map(({ key, children: _children = [], ...itemProps }) => {
      const hasChildren = _children.length > 0;
      const itemGroupRef = createRef<GroupRef>();
      const triggerSetter = (item: HTMLLIElement) => {
        setTrigger(key, item);
      };

      return (
        <Item {...itemProps} key={key} level={level} id={key} ref={triggerSetter} groupRef={itemGroupRef}>
          {/* if there are children menu items, display them */}
          {hasChildren && <Group ref={itemGroupRef} items={_children} level={level + 1} />}
        </Item>
      );
    });
  }, [items, level, setTrigger]);

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
