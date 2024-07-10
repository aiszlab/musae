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

  const [transfered, untransfered] = useMemo(() => {
    return (value ?? []).reduce<[Map<Key, TransferOption>, Map<Key, TransferOption>]>(
      ([transfered, untransfered], key) => {
        if (untransfered.has(key)) {
          transfered.set(key, untransfered.get(key)!);
          untransfered.delete(key);
        }

        return [transfered, untransfered];
      },
      [new Map(), new Map(options)]
    );
  }, [options, value]);

  return {
    transfered,
    untransfered,
    setValue,
  };
};
