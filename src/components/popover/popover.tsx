import {
  useRefs,
  useHover,
  chain,
  toArray,
  useEvent,
  useFocus,
  useClickAway,
} from "@aiszlab/relax";
import React, { cloneElement, useMemo, useRef, useCallback, type MouseEvent } from "react";
import type { ChildProps, PopoverProps } from "./types";
import { Popper } from "../popper";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { useClassNames } from "../../hooks/use-class-names";
import { PopoverClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { useLazyBoolean } from "../../hooks/use-lazy-boolean";
import { ComponentToken } from "../../utils/component-token";

const styles = stylex.create({
  popover: {
    padding: spacing.medium,
    maxWidth: "100vw",

    // layout
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
  const _ref = useRef<HTMLElement>(null);
  const [isOpen, { turnOn, turnOff, toggle, disappear }] = useLazyBoolean();
  const triggerBy = useMemo(() => new Set(toArray(_triggerBy)), [_triggerBy]);
  const classNames = useClassNames(ComponentToken.Popover);
  const childRef = useRefs(_ref, _children.props.ref);
  const popperRef = useRef<HTMLDivElement>(null);

  const onClick = useEvent((event: MouseEvent<T>) => {
    event.stopPropagation();
    toggle();
  });
  const onContextMenu = useEvent((event: MouseEvent<T>) => {
    event.preventDefault();
    toggle();
  });

  const [, hoverProps] = useHover<T>({
    onEnter: (event) =>
      chain(_children.props.onMouseEnter, _children.props.onPointerEnter, turnOn)(event),
    onLeave: (event) =>
      chain(_children.props.onMouseLeave, _children.props.onPointerLeave, disappear)(event),
  });
  const [, focusProps] = useFocus<T>({
    onFocus: (event) => chain(_children.props.onFocus, turnOn)(event),
    onBlur: (event) => chain(_children.props.onBlur, turnOff)(event),
  });

  // @ts-ignore
  const children = cloneElement<P>(_children, {
    ref: childRef,
    ...(triggerBy.has("hover") && hoverProps),
    ...(triggerBy.has("focus") && focusProps),
    ...(triggerBy.has("click") && {
      onClick,
    }),
    ...(triggerBy.has("contextMenu") && {
      onContextMenu,
    }),
  });

  const enterPopper = useCallback(() => {
    turnOn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const leavePopper = useCallback(() => {
    disappear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useClickAway(() => {
    turnOff();
  }, [popperRef, ...(triggerBy.has("click") ? [_ref] : [])]);

  const styled = {
    popover: stylex.props(styles.popover, typography.body.medium),
    title: stylex.props(styles.title, typography.title.medium),
    description: stylex.props(typography.body.medium),
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
          className={clsx(
            classNames[PopoverClassToken.Popover],
            className,
            styled.popover.className,
          )}
          style={{
            ...styled.popover.style,
            ...style,
          }}
        >
          {!!title && (
            <div
              className={clsx(classNames[PopoverClassToken.Title], styled.title.className)}
              style={styled.title.style}
            >
              {title}
            </div>
          )}

          <div
            className={clsx(
              classNames[PopoverClassToken.Description],
              styled.description.className,
            )}
            style={styled.description.style}
          >
            {description}
          </div>
        </div>
      </Popper>
    </>
  );
};

export default Popover;
