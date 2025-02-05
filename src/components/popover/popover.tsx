import { useHover, useEvent, useFocus, useClickAway, isRefable } from "@aiszlab/relax";
import { mountRef } from "@aiszlab/relax/react";
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
  type PointerEvent,
  type FocusEvent,
} from "react";
import type { ChildProps, PopoverProps, PopoverRef } from "../../types/popover";
import { Popper } from "../popper";
import type { PopperRef } from "../../types/popper";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { useClassNames } from "../../hooks/use-class-names.component";
import { useIsOpen, useTriggerBy } from "./hooks";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";

const styles = {
  popover: stylex.create({
    default: {
      maxWidth: "100vw",

      // layout
      display: "flex",
      flexDirection: "column",
      gap: spacing.xxsmall,
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
      offset,
    }: PopoverProps<P, T>,
    ref: ForwardedRef<PopoverRef>,
  ) => {
    const _ref = useRef<T>(null);
    const popperRef = useRef<PopperRef>(null);
    const [isOpen, { turnOn, turnOff, toggle, disappear }] = useIsOpen(popperRef);
    const classNames = useClassNames(CLASS_NAMES);
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
    // else add `div` wrapper, inject handlers to `div` wrapper
    const children = useMemo(() => {
      const _child = isValidElement(_children) ? _children : <div>{_children}</div>;

      const props: ChildProps<T> = {
        ...(isHoverable && hoverProps),
        ...(isFocusable && focusProps),
        ...(isClickable && {
          onClick,
        }),
        ...(isContextMenuable && {
          onContextMenu,
        }),
        ...(isRefable(_child) && {
          ref: (_reference) => {
            mountRef(_ref, _reference);
            //@ts-expect-error
            mountRef(_child.ref, _reference);
          },
        }),
      };

      return cloneElement<ChildProps<T>>(_child, props);
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
          offset={offset}
        >
          <div
            className={stringify(classNames.popover, className, styled.popover.className)}
            style={{
              ...styled.popover.style,
              ...style,
            }}
          >
            {!!title && (
              <div
                className={stringify(classNames.title, styled.title.className)}
                style={styled.title.style}
              >
                {title}
              </div>
            )}

            <div
              className={stringify(classNames.content, styled.content.className)}
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
