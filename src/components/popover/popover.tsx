import { useRefs, useHover, chain, toArray, useBoolean, useEvent, useFocus } from "@aiszlab/relax";
import React, { type MouseEvent, cloneElement, useMemo, useRef } from "react";
import type { ChildProps, PopoverProps } from "./types";
import { Popper } from "../popper";

const Popover = <P extends ChildProps<T>, T extends HTMLElement>({ ...props }: PopoverProps<P, T>) => {
  const _ref = useRef<Element>(null);
  const [_isOpen, { toggle, turnOn }] = useBoolean(false);
  const triggerBy = useMemo(() => new Set(toArray(props.triggerBy)), [props.triggerBy]);

  // @ts-ignore
  // FIXME
  const childRef = useRefs(_ref, props.children.props.ref);

  const click = useEvent((e: MouseEvent<T>) => {
    toggle();
    e.stopPropagation();
  });
  const contextMenu = useEvent(() => {
    turnOn();
  });

  const [isHovered, hoverProps] = useHover<T>({
    onEnter: () =>
      chain(props.children.props.onMouseOver, props.children.props.onMouseEnter, props.children.props.onPointerEnter),
    onLeave: () => chain(props.children.props.onMouseLeave, props.children.props.onPointerLeave),
  });
  const [isFocused, focusProps] = useFocus({
    onFocus: props.children.props.onFocus,
    onBlur: props.children.props.onBlur,
  });

  const isOpen = useMemo(() => {
    // allow hover
    if (triggerBy.has("hover")) return isHovered || _isOpen;
    // allow focus
    if (triggerBy.has("focus")) return isFocused || _isOpen;
    // click, contextMenu
    return _isOpen;
  }, [triggerBy, isHovered, _isOpen, isFocused]);

  // @ts-ignore
  const children = cloneElement<P>(props.children, {
    ref: childRef,
    ...hoverProps,
    ...focusProps,
    onClick: triggerBy.has("click") ? click : void 0,
    onContextMenu: triggerBy.has("contextMenu") ? contextMenu : void 0,
  });

  return (
    <>
      {children}
      <Popper trigger={_ref.current} open={isOpen}>
        <div>{props.title}</div>
      </Popper>
    </>
  );
};

export default Popover;
