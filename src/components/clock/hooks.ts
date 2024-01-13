import { useMemo } from "react";
import { TimeUnit } from "./types";

export const useTimeUnit = (unit: TimeUnit) => {
  const units = useMemo(() => {
    return {
      [TimeUnit.Hour]: 24,
      [TimeUnit.Minute]: 60,
      [TimeUnit.Second]: 60,
    };
  }, []);

  return units[unit];
};
