import { isUndefined, useControlledState, useEvent } from "@aiszlab/relax";

/**
 * @description
 * number input value hook
 */
export const useValue = ({ value: _value }: { value?: number }) => {
  const [value, setValue] = useControlledState(_value?.toString());

  const change = useEvent((___value: string) => {
    // ignore invalid character
    if (!/^-?(?:\d+)?(\.)?\d*$/.test(___value) && ___value !== "") {
      return;
    }

    // uncontrolled, change state only
    if (isUndefined(_value)) {
      setValue(___value);
      return;
    }
  });

  return {
    value,
    change,
  };
};
