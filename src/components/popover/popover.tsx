import { useRefs, useHover, chain, toArray, useBoolean, useEvent, useFocus } from "@aiszlab/relax";
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
  ...props
}: PopoverProps<P, T>) => {
  const _ref = useRef<Element>(null);
  const [_isOpen, { toggle, turnOn }] = useBoolean(false);
  const triggerBy = useMemo(() => new Set(toArray(_triggerBy)), [_triggerBy]);
  const classNames = useClassNames(ComponentToken.Popover);

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

  const enterPopper = useEvent((e: PointerEvent<HTMLDivElement>) => {
    hoverProps.onPointerEnter(e as unknown as PointerEvent<T>);
  });
  const leavePopper = useEvent((e: PointerEvent<HTMLDivElement>) => {
    hoverProps.onPointerLeave(e as unknown as PointerEvent<T>);
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
      >
        <div
          className={clsx(classNames[PopoverClassToken.Popover], styled.popover.className)}
          style={styled.popover.style}
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
