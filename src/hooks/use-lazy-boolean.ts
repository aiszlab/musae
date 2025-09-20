import { useControlledState, useEvent, useTimer } from "@aiszlab/relax";

interface UsingLazyBoolean {
  isTruthy?: boolean;
  onIsTruthyChange?: (_isTruthy: boolean) => void;
}

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

export const useLazyBoolean = ({
  isTruthy: _isTruthy,
  onIsTruthyChange,
}: UsingLazyBoolean = {}): UsedLazyBoolean => {
  const { "0": isTruthy, "1": setIsTruthy } = useControlledState(_isTruthy, {
    defaultState: false,
  });

  const { timeout } = useTimer();

  const turnOn = useEvent(() => {
    timeout(() => {
      setIsTruthy(true);
      onIsTruthyChange?.(true);
    });
  });

  const turnOff = useEvent(() => {
    timeout(() => {
      setIsTruthy(false);
      onIsTruthyChange?.(false);
    });
  });

  const appear = useEvent(() => {
    const { resolve, promise } = Promise.withResolvers<void>();

    timeout(() => {
      turnOn();
      resolve();
    }, 100);

    return promise;
  });

  const disappear = useEvent(() => {
    const { resolve, promise } = Promise.withResolvers<void>();

    timeout(() => {
      turnOff();
      resolve();
    }, 100);

    return promise;
  });

  const toggle = useEvent(() => {
    timeout(() => {
      if (isTruthy) {
        turnOff();
        return;
      }

      turnOn();
    });
  });

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
