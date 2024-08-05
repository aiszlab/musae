import { type Key, useCallback, useMemo, useState } from "react";
import type { TransferOption } from "./types";
import { useControlledState } from "@aiszlab/relax";

/**
 * @description
 * options
 */
export const useTransfer = (props: { options: TransferOption[]; value?: Key[] }) => {
  const [value, setValue] = useControlledState(props.value);
  const [transferKeys, setTransferKeys] = useState<Key[]>([]);
  const [untransferKeys, setUntransferKeys] = useState<Key[]>([]);

  const options = useMemo(() => {
    return props.options.reduce(
      (prev, item) => prev.set(item.value, item),
      new Map<Key, TransferOption>(),
    );
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
      [new Map(), new Map(options)],
    );
  }, [options, value]);

  const transfer = useCallback(() => {
    setValue((prev = []) => [...prev, ...transferKeys]);
    setTransferKeys([]);
  }, [transferKeys, setValue]);

  const untransfer = useCallback(() => {
    setValue((prev = []) => {
      return Array.from(
        untransferKeys.reduce((checkedKeys, unchecked) => {
          checkedKeys.delete(unchecked);
          return checkedKeys;
        }, new Set(prev)),
      );
    });
    setUntransferKeys([]);
  }, [untransferKeys, setValue]);

  return {
    transferred,
    untransferred,
    transfer,
    untransfer,
    transferKeys,
    untransferKeys,
    setTransferKeys,
    setUntransferKeys,
  };
};
