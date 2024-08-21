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

  const turnOff = useCallback(() => {
    const { promise, resolve } = Promise.withResolvers<void>();
    _turnOff();
    popperRef.current?.disappear().then(() => {
      console.log("312321321321");

      resolve();
    });
    return promise.then(() => {
      console.log("bbbbbbbbbbbbb");
    });
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) {
      turnOff();
      return;
    }
    turnOn();
  }, [isOpen]);

  const disappear = useCallback(async () => {
    await Promise.all([_disappear(), popperRef.current?.disappear()]).catch(() => null);
  }, []);

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
