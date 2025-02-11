import { useCounter } from "@aiszlab/relax";
import type { TourStep } from "../../types/tour";
import { useEffect } from "react";

/**
 * @description
 * use step
 */
export const useStep = ({ steps, open }: { steps: TourStep[]; open: boolean }) => {
  const [stepAt, { add, subtract, reset }] = useCounter(0, { min: 0, max: steps.length - 1 });
  const step = steps[stepAt];
  const hasNext = stepAt < steps.length - 1;
  const hasPrev = stepAt > 0;

  const next = () => {
    add();
  };

  const prev = () => {
    subtract();
  };

  useEffect(() => {
    if (open) {
      reset();
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return {
    step,
    hasNext,
    hasPrev,
    next,
    prev,
  };
};
