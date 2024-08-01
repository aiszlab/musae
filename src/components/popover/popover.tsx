import { useRefs, useHover, chain, toArray, useEvent, useFocus, useClickAway } from "@aiszlab/relax";
import React, {
  cloneElement,
  useMemo,
  useRef,
  forwardRef,
  useImperativeHandle,
  type MouseEvent,
  type ForwardedRef,
  useCallback,
} from "react";
import type { ChildProps, PopoverProps, PopoverRef } from "./types";
import { Popper } from "../popper";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, PopoverClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { useIsOpen } from "./hooks";

const styles = stylex.create({
  popover: {
    padding: spacing.medium,
    display: "flex",
    flexDirection: "column",
    gap: spacing.small,
    width: "max-content",
    maxWidth: "100vw",
  },

  title: {},
});

const Popover = <P extends ChildProps<T>, T extends HTMLElement>(
  {
    triggerBy: _triggerBy = "hover",
    title,
    description,
    placement = "bottom",
    className,
    style,
    children: _children,
  }: PopoverProps<P, T>,
  ref: ForwardedRef<PopoverRef>,
) => {
  const _ref = useRef<HTMLElement>(null);
  const { isOpen, open, close, toggle, disappear } = useIsOpen();
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
    open();
  });

  const [, hoverProps] = useHover<T>({
    onEnter: (event) => chain(_children.props.onMouseEnter, _children.props.onPointerEnter, open)(event),
    onLeave: (event) => chain(_children.props.onMouseLeave, _children.props.onPointerLeave, disappear)(event),
  });
  const [, focusProps] = useFocus<T>({
    onFocus: (event) => chain(_children.props.onFocus, open)(event),
    onBlur: (event) => chain(_children.props.onBlur, close)(event),
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
    open();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const leavePopper = useCallback(() => {
    disappear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useClickAway(() => {
    close();
  }, [popperRef, ...(triggerBy.has("click") ? [_ref] : [])]);

  useImperativeHandle(ref, () => {
    return {
      close,
    };
  });

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

export default forwardRef(Popover);
