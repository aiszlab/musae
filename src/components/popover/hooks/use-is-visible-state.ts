import { useEvent } from "@aiszlab/relax";
import { useLazyBoolean } from "../../../hooks/use-lazy-boolean";
import type { PopperRef } from "../../../types/popper";
import { useCallback } from "react";
import type { Nullable } from "@aiszlab/relax/types";

type UsedIsVisibleState = [
  boolean,
  {
    turnOn: () => void;
    turnOff: () => Promise<void>;
    toggle: () => void;
    disappear: () => Promise<void>;
  },
];

interface UsingIsVisibleState {
  isVisible: boolean | undefined;
  onIsVisibleChange?: (isVisible: boolean) => void;
  onDisappear?: () => Promise<void>;
}

/**
 * `isVisible` state
 */
export const useIsVisibleState = ({
  isVisible,
  onIsVisibleChange,
  onDisappear,
}: UsingIsVisibleState): UsedIsVisibleState => {
  const [_isVisible, { turnOn, turnOff: _turnOff, disappear: _disappear }] = useLazyBoolean({
    isTruthy: isVisible,
    onIsTruthyChange: onIsVisibleChange,
  });

  const turnOff = useEvent(async () => {
    _turnOff();
    await onDisappear?.();
  });

  const toggle = useCallback(() => {
    if (_isVisible) {
      turnOff();
      return;
    }

    turnOn();
  }, [_isVisible, turnOff, turnOn]);

  const disappear = useEvent(async () => {
    await _disappear();
    await onDisappear?.();
  });

  return [
    _isVisible,
    {
      turnOn,
      turnOff,
      toggle,
      disappear,
    },
  ];
};
