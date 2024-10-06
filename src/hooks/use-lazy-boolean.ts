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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const turnOff = useCallback(() => {
    timeout(() => {
      _turnOff();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const appear = useCallback(() => {
    const { resolve, promise } = Promise.withResolvers<void>();
    timeout(() => {
      turnOn();
      resolve();
    }, 100);
    return promise;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disappear = useCallback(() => {
    const { resolve, promise } = Promise.withResolvers<void>();
    timeout(() => {
      turnOff();
      resolve();
    }, 100);
    return promise;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = useCallback(() => {
    timeout(() => {
      _toggle();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
