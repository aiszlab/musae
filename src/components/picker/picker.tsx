import styles from "./styles";
import React, {
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  type FocusEventHandler,
  type MouseEvent,
  type MouseEventHandler,
  useContext,
} from "react";
import { Popper } from "../popper";
import { useBoolean, useEvent } from "@aiszlab/relax";
import type {
  PickerProps,
  PickerRef,
  PickerTriggerAction,
  PickerTriggerRenderProps,
} from "../../types/picker";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { CLASS_NAMES, Context } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { DialogContext } from "../dialog/context";
import { useStackLevelContextContext } from "../../contexts/stack-level.context";

const Picker = forwardRef<PickerRef, PickerProps>(
  (
    {
      pickable,
      className,
      popupWidth = "match",
      style,
      children,
      onClick,
      pickableClassName,
      pickableStyle,
      onPopperEnter,
      onPopperEntered,
      onPopperExited,
      onPopperExite,
      onBlur: _onBlur,
      invalid = false,
      disabled = false,
    },
    ref,
  ) => {
    const trigger = useRef<HTMLDivElement>(null);
    const [isOpen, { turnOff: closeState, toggle: toggleState, turnOn: openState }] = useBoolean();
    const classNames = useClassNames(CLASS_NAMES);
    const pickableRef = useRef<HTMLDivElement>(null);

    const { container } = useContext(DialogContext);
    const { className: stackLevelClassName, style: stackLevelStyle } =
      useStackLevelContextContext();

    const getDropdownWidth = useCallback(() => {
      if (!popupWidth) return void 0;
      if (!trigger.current) return void 0;
      return Math.max(
        trigger.current.getBoundingClientRect().width,
        popupWidth === "match" ? 0 : popupWidth,
      );
    }, [popupWidth]);

    const open = useEvent<PickerTriggerAction>((event) => {
      event?.stopPropagation();
      if (disabled) return;
      openState();
    });

    const close = useEvent<PickerTriggerAction>((event) => {
      event?.stopPropagation();
      closeState();
    });

    const toggle = useEvent<PickerTriggerAction>((event) => {
      event?.stopPropagation();
      if (disabled) return;
      toggleState();
    });

    useImperativeHandle(ref, () => ({
      close,
    }));

    const click = useEvent<MouseEventHandler<HTMLElement>>((event) => {
      if (disabled) return;
      event.stopPropagation();
      onClick?.(event);
      toggleState();
    });

    const blur = useEvent<FocusEventHandler<HTMLElement>>((event) => {
      event.stopPropagation();
      _onBlur?.(event);
      closeState();
    });

    const onDropdownClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
    }, []);

    const styled = {
      pickable: $props(styles.pickable),
    };

    const triggerRenderProps: PickerTriggerRenderProps = {
      open,
      close,
      toggle,
      inputProps: {
        onClick: click,
        onBlur: blur,
        disabled,
        invalid,
      },
    };

    const triggerContent = children(triggerRenderProps);

    return (
      <Context.Provider value={{ open, toggle, isOpen }}>
        <div
          ref={trigger}
          className={stringify(classNames.picker, className)}
          style={style}
          onClick={click}
          onBlur={blur}
        >
          {triggerContent}
        </div>

        <Popper
          trigger={() => trigger.current}
          open={isOpen}
          className={classNames.dropdown}
          style={stackLevelStyle}
          onEnter={onPopperEnter}
          onEntered={onPopperEntered}
          onExit={onPopperExite}
          onExited={onPopperExited}
          // click on popper, keep select focused
          onMouseDown={onDropdownClick}
          container={container}
          // 定制`protal`的样式
          portalClassName={stackLevelClassName}
          portalStyle={stackLevelStyle}
        >
          <div
            ref={pickableRef}
            className={stringify(pickableClassName, styled.pickable.className)}
            style={{
              ...styled.pickable.style,
              ...pickableStyle,
              "--min-width": `${getDropdownWidth() ?? 0}px`,
            }}
          >
            {pickable}
          </div>
        </Popper>
      </Context.Provider>
    );
  },
);

export default Picker;
