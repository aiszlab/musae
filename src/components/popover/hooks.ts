import { useBoolean, useTimer } from "@aiszlab/relax";
import { useCallback } from "react";

/**
 * @description
 * use is open
 */
export const useIsOpen = () => {
  const [isOpen, { turnOn, turnOff, toggle }] = useBoolean();
  const { timeout } = useTimer();

  const open = useCallback(() => {
    timeout(() => {
      turnOn();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = useCallback(() => {
    timeout(() => {
      turnOff();
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};
