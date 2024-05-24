import { useEvent } from "@aiszlab/relax";
import { useMemo, useState } from "react";

/**
 * @description
 * use value
 */
export const useValue = (props: { length: number }) => {
  const [value, setValue] = useState(Array.from({ length: props.length }, () => ""));

  const change = useEvent((index: number, value: string) => {
    setValue((prev) => {
      const next = Array.from(prev);
      next[index] = value;
      return next;
    });
  });

  return {
    value,
    change,
  };
};
