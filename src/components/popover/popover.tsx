import { useRefs, useHover, chain, toArray, useBoolean, useEvent, useFocus, useClickAway } from "@aiszlab/relax";
import React, { type MouseEvent, cloneElement, useMemo, useRef, type PointerEvent } from "react";
import type { ChildProps, PopoverProps } from "./types";
import { Popper } from "../popper";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, PopoverClassToken } from "../../utils/class-name";
import clsx from "clsx";

const styles = stylex.create({
  popover: {
    padding: spacing.medium,
    display: "flex",
    flexDirection: "column",
    gap: spacing.small,
  },

  title: {},
});

const Popover = <P extends ChildProps<T>, T extends HTMLElement>({
  triggerBy: _triggerBy = "hover",
  title,
  description,
  placement = "bottom",
  className,
  style,
  children: _children,
}: PopoverProps<P, T>) => {
  const _ref = useRef<Element>(null);
  const [_isOpen, { toggle, turnOn, turnOff }] = useBoolean(false);
  const triggerBy = useMemo(() => new Set(toArray(_triggerBy)), [_triggerBy]);
  const classNames = useClassNames(ComponentToken.Popover);
  const childRef = useRefs(_ref, _children.props.ref);
  const popperRef = useRef<HTMLDivElement>(null);

  const onClick = useEvent((e: MouseEvent<T>) => {
    e.stopPropagation();
    toggle();
  });
  const onContextMenu = useEvent((e: MouseEvent<T>) => {
    e.preventDefault();
    turnOn();
  });

  const [isHovered, hoverProps] = useHover<T>({
    onEnter: (event) =>
      chain(_children.props.onMouseOver, _children.props.onMouseEnter, _children.props.onPointerEnter)(event),
    onLeave: (event) => chain(_children.props.onMouseLeave, _children.props.onPointerLeave)(event),
  });
  const [isFocused, focusProps] = useFocus({
    onFocus: _children.props.onFocus,
    onBlur: _children.props.onBlur,
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
  const children = cloneElement<P>(_children, {
    ref: childRef,
    ...hoverProps,
    ...focusProps,
    ...(triggerBy.has("click") && {
      onClick,
    }),
    ...(triggerBy.has("contextMenu") && {
      onContextMenu,
    }),
  });

  const enterPopper = useEvent((e: PointerEvent<HTMLDivElement>) => {
    hoverProps.onPointerEnter(e as unknown as PointerEvent<T>);
  });
  const leavePopper = useEvent((e: PointerEvent<HTMLDivElement>) => {
    hoverProps.onPointerLeave(e as unknown as PointerEvent<T>);
  });

  useClickAway(() => {
    turnOff();
  }, popperRef);

  const styled = {
    popover: stylex.props(styles.popover, typography.body.medium),
    title: stylex.props(styles.title, typography.title.medium),
  };

  return (
    <>
      {children}

      <Popper
        trigger={_ref.current}
        open={isOpen}
        arrow
        {...(triggerBy.has("hover") && {
          onPointerEnter: enterPopper,
          onPointerLeave: leavePopper,
        })}
        placement={placement}
        ref={popperRef}
      >
        <div
          className={clsx(classNames[PopoverClassToken.Popover], className, styled.popover.className)}
          style={{
            ...styled.popover.style,
            ...style,
          }}
        >
          {!!title && (
            <>
              <div
                className={clsx(classNames[PopoverClassToken.Title], styled.title.className)}
                style={styled.title.style}
              >
                {title}
              </div>
              <div className={clsx(classNames[PopoverClassToken.Description])}>{description}</div>
            </>
          )}

          {!title && description}
        </div>
      </Popper>
    </>
  );
};

export default Popover;
