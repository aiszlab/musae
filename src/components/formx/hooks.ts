import { filter, Subject } from "rxjs";
import { useFormContext } from "./context";
import { useDefault } from "@aiszlab/relax";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { UsedForm } from "../../types/formx";

/**
 * form hook
 */
export function useForm<T extends object, K extends keyof T>(): UsedForm<T, K> {
  const fieldsValue = useRef<Partial<T>>({});
  const fieldsValue$ = useRef<Subject<Partial<T>>>(null);

  const createFieldsValue$ = useCallback(() => {
    const _value$ = new Subject<Partial<T>>();

    _value$.subscribe({
      next(value) {
        fieldsValue.current = {
          ...fieldsValue.current,
          ...value,
        };
      },
    });

    return _value$;
  }, []);

  // set field value
  const setFieldValue = (name: K, value: T[K]) => {
    const _value$ = (fieldsValue$.current ??= createFieldsValue$());

    _value$.next({
      ...fieldsValue.current,
      [name]: value,
    });
  };

  // set fields values
  const setFieldsValue = (values: Partial<T>) => {
    const _value$ = (fieldsValue$.current ??= createFieldsValue$());

    _value$.next(values);
  };

  return {
    setFieldValue,
    setFieldsValue,
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
  const { form } = useFormContext<T, K>();
  const [value, setValue] = useState<T[K]>();

  // any value change handler
  const change = (value: T[K]) => {
    if (!name) return;

    setValue(value);
    form?.setFieldValue(name, value);
  };

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
