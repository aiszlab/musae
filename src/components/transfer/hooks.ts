import { Key, useMemo } from "react";
import { TransferOption } from "./types";
import { useControlledState } from "@aiszlab/relax";

/**
 * @description
 * options
 */
export const useTransfer = (props: { options: TransferOption[]; value?: Key[] }) => {
  const [value, setValue] = useControlledState(props.value);

  const options = useMemo(() => {
    return props.options.reduce((prev, item) => prev.set(item.value, item), new Map<Key, TransferOption>());
  }, [props.options]);

  const [transferred, untransferred] = useMemo(() => {
    return (value ?? []).reduce<[Map<Key, TransferOption>, Map<Key, TransferOption>]>(
      ([transferred, untransferred], key) => {
        if (untransferred.has(key)) {
          transferred.set(key, untransferred.get(key)!);
          untransferred.delete(key);
        }

        return [transferred, untransferred];
      },
      [new Map(), new Map(options)]
    );
  }, [options, value]);

  return {
    transferred,
    untransferred,
    setValue
  };
};
