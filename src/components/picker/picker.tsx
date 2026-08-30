import styles from "./styles";
import React, { useCallback, useRef, type MouseEvent, useContext } from "react";
import { Popper } from "../popper";
import { isFunction, useBoolean } from "@aiszlab/relax";
import type { PickerProps, PickerTriggerRenderProps } from "../../types/picker";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { CLASS_NAMES } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { DialogContext } from "../dialog/context";
import { useStackLevelContextContext } from "../../contexts/stack-level.context";
import type { PopperTrigger } from "../../types/popper";

const Picker = <T extends PopperTrigger = PopperTrigger>({
  pickable,
  popupWidth = "match",
  children,
  pickableClassName,
  pickableStyle,
  onPopperEnter,
  onPopperEntered,
  onPopperExited,
  onPopperExite,
}: PickerProps<T>) => {
  const triggerRef = useRef<T>(null);
  const [isOpen, { turnOff: close, toggle, turnOn: open }] = useBoolean();
  const classNames = useClassNames(CLASS_NAMES);
  const pickableRef = useRef<HTMLDivElement>(null);

  const { container } = useContext(DialogContext);
  const { className: stackLevelClassName, style: stackLevelStyle } = useStackLevelContextContext();

  const getDropdownWidth = useCallback(() => {
    if (!popupWidth) return void 0;
    if (!triggerRef.current) return void 0;
    return Math.max(
      triggerRef.current.getBoundingClientRect().width,
      popupWidth === "match" ? 0 : popupWidth,
    );
  }, [popupWidth]);

  const onDropdownClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const styled = {
    pickable: $props(styles.pickable),
  };

  const renderProps: PickerTriggerRenderProps<T> = {
    open,
    close,
    toggle,
    isOpen,
    triggerRef,
  };
  const trigger = children(renderProps);
  const pickableContent = isFunction(pickable) ? pickable(renderProps) : pickable;

  return (
    <>
      {trigger}

      <Popper
        trigger={() => triggerRef.current}
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
          {pickableContent}
        </div>
      </Popper>
    </>
  );
};

export default Picker;
