import { useEvent } from "@aiszlab/relax";
import { useLazyBoolean } from "../../hooks/use-lazy-boolean";
import { type PopperRef } from "../popper";
import { useCallback } from "react";

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
    await Promise.all([_disappear(), popperRef.current?.disappear()]).catch(() => null);
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
