import { useBoolean, useTimer } from "@aiszlab/relax";
import { useCallback } from "react";

type UsedLazyBoolean = [
  boolean,
  {
    turnOn: () => void;
    turnOff: () => void;
    toggle: () => void;
    appear: () => void;
    disappear: () => void;
  },
];

export const useLazyBoolean = (): UsedLazyBoolean => {
  const [isTrue, { turnOn: _turnOn, turnOff: _turnOff, toggle: _toggle }] = useBoolean();
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
    timeout(() => {
      turnOn();
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disappear = useCallback(() => {
    timeout(() => {
      turnOff();
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = useCallback(() => {
    timeout(() => {
      _toggle();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [
    isTrue,
    {
      turnOn,
      turnOff,
      toggle,
      appear,
      disappear,
    },
  ];
};
