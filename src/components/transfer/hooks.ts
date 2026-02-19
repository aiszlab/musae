import { type Key, useMemo, useState } from "react";
import type { TransferOption } from "../../types/transfer";
import { useControlledState, useEvent } from "@aiszlab/relax";
import type { Partialable } from "@aiszlab/relax/types";

interface Props {
  options: TransferOption[];
  value?: Key[];
  onChange?: (keys: Key[] | undefined) => void;
}

/**
 * @description
 * options
 */
export const useTransfer = (props: Props) => {
  const [value, setValue] = useControlledState<Partialable<Key[]>>(props.value, {
    onChange: props.onChange,
  });

  const [selectedTransferKeys, setSelectedTransferKeys] = useState<Key[]>([]);
  const [selectedUntransferKeys, setSelectedUntransferKeys] = useState<Key[]>([]);

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

  const transfer = useEvent(() => {
    setValue((prev = []) => [...prev, ...selectedTransferKeys]);
    setSelectedTransferKeys([]);
  });

  const untransfer = useEvent(() => {
    setValue((prev = []) => {
      return Array.from(
        selectedUntransferKeys.reduce((checkedKeys, unchecked) => {
          checkedKeys.delete(unchecked);
          return checkedKeys;
        }, new Set(prev)),
      );
    });
    setSelectedUntransferKeys([]);
  });

  return {
    transferred,
    untransferred,
    transfer,
    untransfer,
    selectedTransferKeys,
    selectedUntransferKeys,
    setSelectedTransferKeys,
    setSelectedUntransferKeys,
  };
};
