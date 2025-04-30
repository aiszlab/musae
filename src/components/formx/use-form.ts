import { Subject } from "rxjs";
import { pick, toArray, useDefault, get } from "@aiszlab/relax";
import type { FieldsValue, FormItemProps } from "./types";
import { ReactNode } from "react";

type ChangingSource = "set" | "reset" | "change" | "blur" | "unfocus";

interface ChangingValue<T extends FieldsValue> {
  source: ChangingSource;
  value: Partial<T>;
}

/** form symbol */
export const FORM_TOKEN = Symbol.for("MUSAE_FORM_TOKEN");

export class Form<T extends FieldsValue> {
  #defaultValue: Partial<T>;
  #value: Partial<T>;

  #fields: Map<PropertyKey, FormItemProps<unknown>>;
  #fieldStates: Map<PropertyKey, { error: ReactNode }>;

  #value$: Subject<ChangingValue<T>>;

  constructor() {
    this.#defaultValue = {};
    this.#value = {};
    this.#fields = new Map();
    this.#fieldStates = new Map();

    this.#value$ = new Subject<ChangingValue<T>>();

    this.#value$.subscribe(({ source, value }) => {
      this.#value = value;

      if (new Set<ChangingSource>(["reset"]).has(source)) {
        this.#fieldStates.clear();
      }
    });
  }

  get defaultValue() {
    return this.#defaultValue;
  }

  setDefaultValue(value?: Partial<T>) {
    this.#defaultValue = value ?? {};
    this.#value = this.#defaultValue;
  }

  /**
   * register field
   */
  registerField<FieldValue>(name: PropertyKey, props: FormItemProps<FieldValue>) {
    this.#fields.set(name, props as FormItemProps<unknown>);

    return () => {
      this.#fields.delete(name);
    };
  }

  /**
   * get fields value
   */
  getFieldsValue() {
    if (this.#fields.size === 0) return this.#value;
    return pick(this.#value, toArray(this.#fields.keys()));
  }

  /**
   * validate all registered fields
   */
  async validate() {
    const validated = await Promise.all<[PropertyKey, ReactNode][]>(
      toArray(this.#fields).map(({ 0: field, 1: { rules = [] } }) => {
        return [
          field,
          Promise.race(
            rules.map(async ({ validate }) => {
              const _validated = await Promise.try(() => validate(get(this.#value, field)))
                .catch((error) => error)
                .then((_v) => (_v === true ? null : _v));

              return _validated;
            }),
          ),
        ];
      }),
    );

    // notify field validated result
    return validated.reduce((isValid, { 0: field, 1: error }) => {
      this.#fieldStates.set(field, { error });
      return isValid && !error;
    }, true);
  }

  /**
   * next
   */
  next(changing: ChangingValue<T>) {
    this.#value$.next(changing);
  }
}

/**
 * form hook
 * @description used for user external `Form` Component
 */
function useForm<T extends object>({ defaultValue }: { defaultValue?: Partial<T> } = {}) {
  const form = useDefault(() => {
    const _form = useDefault(() => new Form());

    // set default value
    _form.setDefaultValue(defaultValue);

    return {
      /**
       * set field value
       */
      setFieldValue(name: PropertyKey, value: unknown) {
        _form.next({
          source: "set",
          value: {
            [name]: value,
          } as unknown as Partial<T>,
        });
      },

      /**
       * reset
       */
      reset() {
        _form.next({
          source: "reset",
          value: _form.defaultValue,
        });
      },

      /**
       * clear value
       */
      clear() {
        _form.next({
          source: "set",
          value: {},
        });
      },

      [FORM_TOKEN]: _form,
    };
  });

  return form;
}

export { useForm };
