import {
  useRefs,
  useHover,
  chain,
  toArray,
  useEvent,
  useFocus,
  useClickAway,
  clsx,
} from "@aiszlab/relax";
import React, {
  cloneElement,
  useMemo,
  useRef,
  useCallback,
  type MouseEvent,
  forwardRef,
  useImperativeHandle,
  type ForwardedRef,
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
import { useIsOpen } from "./hooks";

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
    const _ref = useRef<HTMLElement>(null);
    const popperRef = useRef<PopperRef>(null);
    const [isOpen, { turnOn, turnOff, toggle, disappear }] = useIsOpen(popperRef);
    const triggerBy = useMemo(() => new Set(toArray(_triggerBy)), [_triggerBy]);
    const classNames = useClassNames(ComponentToken.Popover);
    const childRef = useRefs(_ref, _children.props.ref);

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
      onBlur: (event) => chain(_children.props.onBlur, disappear)(event),
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
    }, [turnOn]);

    const leavePopper = useCallback(() => {
      disappear();
    }, [disappear]);

    useClickAway(() => {
      turnOff();
    }, [popperRef, triggerBy.has("click") && _ref]);

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
          {...(triggerBy.has("hover") && {
            onPointerEnter: enterPopper,
            onPointerLeave: leavePopper,
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
