import { useBoolean, useTimer } from "@aiszlab/relax";
import { useCallback } from "react";

type UsedLazyBoolean = [
  boolean,
  {
    turnOn: () => void;
    turnOff: () => void;
    toggle: () => void;
    appear: () => Promise<void>;
    disappear: () => Promise<void>;
  },
];

export const useLazyBoolean = (): UsedLazyBoolean => {
  const [isTruthy, { turnOn: _turnOn, turnOff: _turnOff, toggle: _toggle }] = useBoolean();
  const { timeout } = useTimer();

  const turnOn = useCallback(() => {
    timeout(() => {
      _turnOn();
    });
  }, [_turnOn, timeout]);

  const turnOff = useCallback(() => {
    timeout(() => {
      _turnOff();
    });
  }, [_turnOff, timeout]);

  const appear = useCallback(() => {
    const { resolve, promise } = Promise.withResolvers<void>();
    timeout(() => {
      turnOn();
      resolve();
    }, 100);
    return promise;
  }, [timeout, turnOn]);

  const disappear = useCallback(() => {
    const { resolve, promise } = Promise.withResolvers<void>();
    timeout(() => {
      turnOff();
      resolve();
    }, 100);
    return promise;
  }, [timeout, turnOff]);

  const toggle = useCallback(() => {
    timeout(() => {
      _toggle();
    });
  }, [_toggle, timeout]);

  return [
    isTruthy,
    {
      turnOn,
      turnOff,
      toggle,
      appear,
      disappear,
    },
  ];
};
