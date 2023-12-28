import { StyledMenuGroup } from "./styled";
import type { GroupRef, MenuGroupProps } from "./types";
import React, { useMemo, forwardRef, useImperativeHandle, createRef, Key } from "react";
import { useRefs, useScrollable, isUndefined } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import clsx from "clsx";
import Item from "./item";
import { useMenu } from "./hooks";

/**
 * @author murukal
 *
 * @description
 * menu group
 */
const Group = forwardRef<GroupRef, MenuGroupProps>(({ items, level, className, style, belongTo }, ref) => {
  /// context
  const { expandedKeys, onExpand, onCollapse } = useMenu();
  const classNames = useClassNames(ComponentToken.Menu);
  const [scope, animate] = useAnimate<HTMLUListElement>();
  const { targetRef, scrollTo, to, setTrigger } = useScrollable({ direction: "vertical" });
  const groupRef = useRefs(scope, targetRef);

  const isExpanded = isUndefined(belongTo) || expandedKeys.has(belongTo);
  const _className = useMemo(
    () =>
      clsx(classNames[MenuClassToken.Group], className, {
        [classNames[MenuClassToken.GroupHidden]]: !isExpanded,
      }),
    [className, classNames, isExpanded]
  );

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
          {hasChildren && <Group ref={itemGroupRef} items={_children} level={level + 1} belongTo={key} />}
        </Item>
      );
    });
  }, [items, level, setTrigger]);

  useImperativeHandle(ref, () => ({
    scrollTo: (key, duration) => {
      // handler group scroll
      scrollTo(to(key), duration);
    },
    toggle: async (key: Key) => {
      if (isExpanded) {
        await animate(scope.current, {
          height: 0,
          // overflow: "hidden",
        });
        await animate(scope.current, {
          display: "none",
        });
        onCollapse?.(belongTo!);

        scope.current.attributeStyleMap.delete("height");

        return;
      }

      scope.current.style.setProperty("height", "0");
      scope.current.style.setProperty("overflow", "hidden");
      scope.current.classList.remove(classNames[MenuClassToken.GroupHidden]);

      await animate(
        scope.current,
        {
          height: "auto",
        },
        {
          onComplete() {
            console.log("11");
          },
        }
      );

      console.log("22");

      setInterval(() => {
        scope.current.style.removeProperty("overflow");
        scope.current.style.removeProperty("display");
        scope.current.style.removeProperty("height");
      });

      onExpand?.(belongTo);
    },
  }));

  return (
    <StyledMenuGroup style={style} className={_className} ref={groupRef}>
      {children}
    </StyledMenuGroup>
  );
});

export default Group;
