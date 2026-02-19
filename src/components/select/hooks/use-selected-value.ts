import { toArray, useControlledState, useEvent } from "@aiszlab/relax";
import type { Mode, ReadableOptions, ValueOrValues } from "../../../types/select";
import { toKey } from "../utils";
import { Option } from "../../../types/option";
import { type Key, type ReactNode, useMemo } from "react";
import type { Partialable } from "@aiszlab/relax/types";

interface UsingSelectedValue<T extends ValueOrValues = ValueOrValues> {
  value: ValueOrValues | undefined;
  readableOptions: ReadableOptions;
  mode: Mode | undefined;
  complex: boolean;
  close: () => void;
  clearKeyword: () => void;
  onChange?: (value: T | undefined) => void;
  onClear?: () => void;
}

/**
 * useSelectedValue
 * @description 处理已选中值
 */
export const useSelectedValue = <T extends ValueOrValues = ValueOrValues>({
  mode,
  close,
  complex,
  readableOptions,
  onChange,
  onClear,
  clearKeyword,
  ...props
}: UsingSelectedValue<T>) => {
  const [value, setValue] = useControlledState(props.value);

  // convert prop value into a map
  // in this component, only use map for controlled state
  // only effect by value change
  const readableValues = useMemo(
    () =>
      toArray(value).reduce((prev, _value) => {
        const key = toKey(_value);
        return prev.set(
          key,
          (_value as Pick<Option, "label">).label ?? readableOptions.get(key) ?? _value.toString(),
        );
      }, new Map<Key, ReactNode>()),
    [value, readableOptions],
  );

  const change = useEvent((key: Key) => {
    // convert to complex value
    const _value = {
      value: key,
      label: readableOptions.get(key) ?? key.toString(),
    };

    // 单选模式下，点击选项直接关闭下拉菜单
    // 如果点击的选项已经被选中，则不执行任何操作
    if (!mode) {
      close();

      if (readableValues.has(_value.value)) {
        return;
      }

      setValue(_value);
      onChange?.((complex ? _value : key) as T);
      return;
    }

    // 多选模式下
    // 点击选项不关闭下拉菜单
    // 点击选项，如果选项已经被选中，则取消选中；如果选项未被选中，则添加到已选中列表中
    const prev = new Map(readableValues);
    const isRemoved = prev.has(key) && prev.delete(key);
    const next = isRemoved ? prev : prev.set(key, _value.label);

    const _changedValues = (
      complex
        ? Array.from(next.entries()).map(([value, label]) => ({
            value,
            label,
          }))
        : Array.from(next.keys())
    ) as T;

    clearKeyword();
    setValue(_changedValues);
    onChange?.(_changedValues);
  });

  // clear handler
  const clear = useEvent(() => {
    const _emptyValue = (complex ? [] : void 0) as Partialable<T>;
    setValue(_emptyValue);
    onClear?.();
  });

  const selectedKeys = useMemo(() => Array.from(readableValues.keys()), [readableValues]);

  return {
    value,
    readableValues,
    change,
    clear,
    selectedKeys,
  };
};
