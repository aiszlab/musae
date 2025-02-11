import { toArray, useEvent } from "@aiszlab/relax";
import { useLazyBoolean } from "../../hooks/use-lazy-boolean";
import type { PopperRef } from "../../types/popper";
import { useCallback, useMemo } from "react";
import { TriggerBy } from "../../types/popover";

type UsedIsOpen = [
  boolean,
  {
    turnOn: () => void;
    turnOff: () => Promise<void>;
    toggle: () => void;
    disappear: () => Promise<void>;
  },
];

/**
 * @description
 * open state
 */
export const useIsOpen = (popperRef: React.RefObject<PopperRef>): UsedIsOpen => {
  const [isOpen, { turnOn, turnOff: _turnOff, disappear: _disappear }] = useLazyBoolean();

  const turnOff = useEvent(async () => {
    _turnOff();
    await popperRef.current?.disappear();
  });

  const toggle = useCallback(() => {
    if (isOpen) {
      turnOff();
      return;
    }
    turnOn();
  }, [isOpen, turnOff, turnOn]);

  const disappear = useCallback(async () => {
    await _disappear();
    await popperRef.current?.disappear();
  }, [_disappear, popperRef]);

  return [
    isOpen,
    {
      turnOn,
      turnOff,
      toggle,
      disappear,
    },
  ];
};

/**
 * @description
 * used triggers
 */
export const useTriggerBy = (triggerBy: TriggerBy | TriggerBy[]) => {
  const _triggerBy = useMemo(() => new Set(toArray(triggerBy)), [triggerBy]);

  const isHoverable = useMemo(() => _triggerBy.has("hover"), [_triggerBy]);

  const isFocusable = useMemo(() => _triggerBy.has("focus"), [_triggerBy]);

  const isClickable = useMemo(() => _triggerBy.has("click"), [_triggerBy]);

  const isContextMenuable = useMemo(() => _triggerBy.has("contextMenu"), [_triggerBy]);

  return {
    isHoverable,
    isFocusable,
    isClickable,
    isContextMenuable,
  };
};
