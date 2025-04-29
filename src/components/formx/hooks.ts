import { Subject } from "rxjs";
import { useFormContext } from "./context";
import { useMounted } from "@aiszlab/relax";
import { useCallback, useRef, useState } from "react";
import type { ChangingValue, UsedForm, UsingForm } from "../../types/formx";

/**
 * form hook
 */
export function useForm<T extends object, K extends keyof T>({
  onChange,
}: UsingForm<T>): UsedForm<T, K> {
  const fieldsValue = useRef<Partial<T>>({});
  const fieldsValue$ = useRef<Subject<ChangingValue<T>>>(null);

  // registed fields in form
  const fieldsRef = useRef<Set<K>>(new Set());

  const createFieldsValue$ = useCallback(() => {
    const _value$ = new Subject<ChangingValue<T>>();

    _value$.subscribe({
      next({ source, values }) {
        fieldsValue.current = {
          ...fieldsValue.current,
          ...values,
        };

        // callback change handler
        if (source !== "set") {
          onChange?.(values, fieldsValue.current);
        }
      },
    });

    return _value$;
  }, []);

  // set field value
  const setFieldValue = (name: K, value: T[K]) => {
    const _value$ = (fieldsValue$.current ??= createFieldsValue$());

    _value$.next({
      source: "set",
      values: {
        [name]: value,
      } as unknown as Partial<T>,
    });
  };

  // set fields values
  const setFieldsValue = (values: Partial<T>) => {
    const _value$ = (fieldsValue$.current ??= createFieldsValue$());

    _value$.next({
      source: "set",
      values,
    });
  };

  useMounted(() => {
    if (!fieldsValue$.current) {
      fieldsValue$.current = createFieldsValue$();
    }

    return () => {
      fieldsValue$.current?.complete();
      fieldsValue$.current = null;
    };
  });

  return {
    setFieldValue,
    setFieldsValue,
    fieldsRef,
    fieldsValue$,
  };
}

/**
 * form item hook
 */
export function useFormItem<T extends object = {}, K extends keyof T = keyof T>({
  name,
}: {
  name?: K;
}) {
  const { fieldsValue$, fieldsRef } = useFormContext<T>();
  const [value, setValue] = useState<T[K]>();

  // any value change handler
  const change = (value: T[K]) => {
    if (!name) return;

    setValue(value);

    fieldsValue$?.current?.next({
      source: "change",
      values: { [name]: value } as unknown as Partial<T>,
    });
  };

  useMounted(() => {
    if (!name) return;

    fieldsRef?.current?.add(name);

    return () => {
      fieldsRef?.current?.delete(name);
    };
  });

  // hook run, create a form item instance
  return {
    value,
    change,
  };
}

/**
 * watch form item value change
 */
// function useSubscribe<T>(name: string) {
//   const { value$Refs } = useFormContext();
//   const [value, setValue] = useState<T>();

//   useEffect(() => {
//     if (!name) return;

//     const _value$Ref = value$Refs?.current.get(name);

//     _value$Ref?.subscribe({
//       complete() {
//         setValue(void 0);
//       },
//       next(_value) {
//         setValue(_value as T);
//       },
//     });
//   }, [name]);

//   return value;
// }
