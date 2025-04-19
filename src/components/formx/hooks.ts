import { filter, Subject } from "rxjs";
import { useFormContext } from "./context";
import { useDefault } from "@aiszlab/relax";
import { useEffect, useMemo, useState } from "react";

interface Form {
  /**
   * validate
   */
  validate(): Promise<boolean>;
}

/**
 * form hook
 */
export function useForm() {
  /**
   * form created, create a subject
   */
  const _values$ = useDefault(() => {
    return new Subject();
  });

  // hook run, create a global form instance

  // set field value
  const setFieldValue = (name: string, value: unknown) => {
    if (!name) return;
    _values$.next({
      name,
      value,
    });
  };

  return {};
}

/**
 * form item hook
 */
export function useFormItem<T>({ name }: { name?: string }) {
  const { value$Refs } = useFormContext();
  const [value, setValue] = useState<T>();

  // any value change handler
  const change = (value: T) => {
    if (!name) return;

    setValue(value);
    value$Refs?.current.get(name)?.next(value);
  };

  useEffect(() => {
    if (!name) return;

    value$Refs?.current.set(
      name,
      // @ts-expect-error unknown type at this moment
      new Subject<T>(),
    );

    // When unmount, remove subscription
    return () => {
      const _value$Ref = value$Refs?.current.get(name);
      value$Refs?.current.delete(name);

      _value$Ref?.complete();
      _value$Ref?.unsubscribe();
    };
  }, [name]);

  // hook run, create a form item instance
  return {
    value,
    change,
  };
}

/**
 * watch form item value change
 */
function useSubscribe<T>(name: string) {
  const { value$Refs } = useFormContext();
  const [value, setValue] = useState<T>();

  useEffect(() => {
    if (!name) return;

    const _value$Ref = value$Refs?.current.get(name);

    _value$Ref?.subscribe({
      complete() {
        setValue(void 0);
      },
      next(_value) {
        setValue(_value as T);
      },
    });
  }, [name]);

  return value;
}
