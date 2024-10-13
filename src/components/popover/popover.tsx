import { useHover, useEvent, useFocus, useClickAway, clsx } from "@aiszlab/relax";
import React, {
  cloneElement,
  useMemo,
  useRef,
  useCallback,
  forwardRef,
  useImperativeHandle,
  isValidElement,
  type MouseEvent,
  type ForwardedRef,
  type HTMLAttributes,
  type PointerEvent,
  type FocusEvent,
} from "react";
import type { ChildProps, PopoverProps, PopoverRef } from "musae/types/popover";
import { Popper } from "../popper";
import type { PopperRef } from "musae/types/popper";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { useClassNames } from "../../hooks/use-class-names";
import { PopoverClassToken } from "../../utils/class-name";
import { ComponentToken } from "../../utils/component-token";
import { useIsOpen, useTriggerBy } from "./hooks";

const styles = {
  popover: stylex.create({
    default: {
      maxWidth: "100vw",

      // layout
      display: "flex",
      flexDirection: "column",
      gap: spacing.small,
    },

    padding: (padding: number | true) => ({
      padding: padding === true ? spacing.medium : padding,
    }),
  }),
};

const Popover = forwardRef(
  <P extends ChildProps<T>, T extends HTMLElement>(
    {
      triggerBy: _triggerBy = "hover",
      title,
      content,
      placement = "bottom",
      className,
      style,
      children: _children,
      padding = true,
      arrow = true,
    }: PopoverProps<P, T>,
    ref: ForwardedRef<PopoverRef>,
  ) => {
    const _ref = useRef<T>(null);
    const popperRef = useRef<PopperRef>(null);
    const [isOpen, { turnOn, turnOff, toggle, disappear }] = useIsOpen(popperRef);
    const classNames = useClassNames(ComponentToken.Popover);
    const { isClickable, isContextMenuable, isFocusable, isHoverable } = useTriggerBy(_triggerBy);

    const onClick = useEvent((event: MouseEvent<T>) => {
      event.stopPropagation();
      toggle();
    });
    const onContextMenu = useEvent((event: MouseEvent<T>) => {
      event.preventDefault();
      toggle();
    });

    // hover enter callback
    const onHoverEnter = useCallback(
      (event: PointerEvent<T>) => {
        turnOn();
        if (!isValidElement<P>(_children)) return;
        _children.props.onMouseEnter?.(event);
        _children.props.onPointerEnter?.(event);
      },
      [_children, turnOn],
    );

    // hover leave callback
    const onHoverLeave = useCallback(
      (event: PointerEvent<T>) => {
        disappear();
        if (!isValidElement<P>(_children)) return;
        _children.props.onMouseLeave?.(event);
        _children.props.onPointerLeave?.(event);
      },
      [_children, disappear],
    );

    const [, hoverProps] = useHover<T>({
      onEnter: onHoverEnter,
      onLeave: onHoverLeave,
    });

    const onFocus = useCallback(
      (event: FocusEvent<T>) => {
        turnOn();
        if (!isValidElement<P>(_children)) return;
        _children.props.onFocus?.(event);
      },
      [_children, turnOn],
    );

    const onBlur = useCallback(
      (event: FocusEvent<T>) => {
        turnOff();
        if (!isValidElement<P>(_children)) return;
        _children.props.onBlur?.(event);
      },
      [_children, turnOff],
    );

    const [, focusProps] = useFocus<T>({
      onFocus,
      onBlur,
    });

    // valid elment, inject handlers
    // else add `div` wrapper
    const children = useMemo(() => {
      const props: ChildProps<T> = {
        ref: _ref,
        ...(isHoverable && hoverProps),
        ...(isFocusable && focusProps),
        ...(isClickable && {
          onClick,
        }),
        ...(isContextMenuable && {
          onContextMenu,
        }),
      };

      if (isValidElement(_children)) {
        return cloneElement<ChildProps<T>>(_children, props);
      }

      return <div {...(props as HTMLAttributes<HTMLDivElement>)}>{_children}</div>;
    }, [
      _children,
      focusProps,
      hoverProps,
      isClickable,
      isContextMenuable,
      isFocusable,
      isHoverable,
      onClick,
      onContextMenu,
    ]);

    const onPopperHoverEnter = useCallback(() => {
      turnOn();
    }, [turnOn]);

    const onPopperHoverLeave = useCallback(() => {
      disappear();
    }, [disappear]);

    useClickAway(() => {
      turnOff();
    }, [popperRef, isClickable && _ref]);

    useImperativeHandle(ref, () => ({
      close: turnOff,
    }));

    const styled = {
      popover: stylex.props(
        styles.popover.default,
        !!padding && styles.popover.padding(padding),
        typography.body.medium,
      ),
      title: stylex.props(typography.title.medium),
      content: stylex.props(typography.body.medium),
    };

    return (
      <>
        {children}

        <Popper
          trigger={_ref.current}
          open={isOpen}
          arrow={arrow}
          {...(isHoverable && {
            onPointerEnter: onPopperHoverEnter,
            onPointerLeave: onPopperHoverLeave,
          })}
          placement={placement}
          ref={popperRef}
          disappearable={false}
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
              className={clsx(classNames[PopoverClassToken.Content], styled.content.className)}
              style={styled.content.style}
            >
              {content}
            </div>
          </div>
        </Popper>
      </>
    );
  },
);

export default Popover;
