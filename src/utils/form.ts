import type { Partialable } from "@aiszlab/relax/types";
import { type ReactNode } from "react";
import { filter, Subject } from "rxjs";

/**
 * unique symbols
 */
export const FORM_TOKEN = Symbol("FORM");

export type FieldsValue = Record<string, any>;

interface FieldState<FieldValue> {
  value: Partialable<FieldValue>;
  error: ReactNode;
}

enum ChangingSource {
  Change = "change",
  Set = "set",
  Validate = "validate",
}

/**
 * registered field
 * @description
 * in `Form`, field which was registered will be managed by `Form`
 */
export interface RegisteredField<T extends FieldsValue, FieldKey extends keyof T> {
  /**
   * state change callback
   */
  onChange: (_state: FieldState<T[FieldKey]>) => void;

  /**
   * rules
   */
  rules?: {
    validate: (value: Partialable<T[FieldKey]>) => ReactNode | Promise<ReactNode>;
    message?: ReactNode;
  }[];
}

interface FormState<T extends FieldsValue> {
  value: Partial<T>;
  error: Partial<Record<keyof T, ReactNode>>;
}

interface ChangingState<T extends FieldsValue> extends Partial<FormState<T>> {
  source: ChangingSource;
  names: (keyof T)[];
}

interface FormProps<T extends FieldsValue> {
  onChange: (names: (keyof T)[], value: Partial<T>) => void;
}

/**
 * form instance
 */
export class Form<T extends FieldsValue> {
  #defaultValue: Partial<T>;
  #fields: Map<keyof T, Pick<RegisteredField<T, keyof T>, "rules">>;
  #state: FormState<T>;
  #state$: Subject<ChangingState<T>>;
  #onChange: FormProps<T>["onChange"];

  constructor({ onChange }: FormProps<T>) {
    this.#defaultValue = {};
    this.#fields = new Map();
    this.#state = {
      value: {},
      error: {},
    };
    this.#onChange = onChange;
    this.#state$ = new Subject<ChangingState<T>>();

    this.#state$.subscribe(({ source, names }) => {
      // value change, handle `onChange` callback
      if (source === "change") {
        this.#onChange(names, this.#state.value);
      }
    });
  }

  /**
   * set default value
   * @description
   * once `defaultValue` changed, `Form` will reset to `defaultValue
   */
  useDefaultValue(value?: Partial<T>) {
    this.#defaultValue = value ?? {};
    this.#state.value = this.#defaultValue;
    this.reset();
  }

  /**
   * register field
   */
  register<FieldKey extends keyof T = keyof T>(
    name: FieldKey,
    { onChange, rules }: RegisteredField<T, FieldKey>,
  ) {
    this.#fields.set(name, { rules });

    const _subscription = this.#state$
      .pipe(
        // only listen `name` related to `register` field
        filter(({ names }) => names.length === 0 || new Set(names).has(name)),
      )
      .subscribe(() => {
        // callback field state
        onChange({
          value: this.#state.value[name],
          error: this.#state.error[name],
        });
      });

    return () => {
      this.#fields.delete(name);
      _subscription.unsubscribe();
    };
  }

  /**
   * get fields value
   */
  getFieldsValue() {
    if (this.#fields.size === 0) return this.#state.value;

    return this.#fields.keys().reduce<Partial<T>>((value, name) => {
      value[name] = this.#state.value[name];
      return value;
    }, {});
  }

  /**
   * validate all registered fields
   * @description
   * if provided `names`, only validate `names`
   */
  async validate(names: (keyof T)[] = Object.keys(this.#fields)) {
    const validated = await Promise.all<ReactNode[]>(
      names.map(async (name) => {
        // validate result
        const error = await Promise.race(
          (this.#fields.get(name)?.rules ?? []).map(async ({ validate, message }) => {
            const _validated = await Promise.try(() => validate(this.#state.value[name]))
              .catch((_error: ReactNode) => _error || message)
              // `validate` resolved value is `true`, means valid, set `error` to `null`
              .then((_v) => (_v === true ? null : _v));

            return _validated;
          }),
        );

        this.#state.error[name] = error;
        return error;
      }),
    );

    // notify state change
    // only notify `error`
    this.#state$.next({
      source: ChangingSource.Validate,
      names,
      error: this.#state.error,
    });

    return validated.every((error) => !error);
  }

  /**
   * set field value
   */
  setFieldValue<FieldValue extends T[FieldKey], FieldKey extends keyof T = keyof T>(
    name: FieldKey,
    value: FieldValue,
  ) {
    this.#state.value[name] = value;
    this.#state.error[name] = null;

    this.#state$.next({
      source: ChangingSource.Set,
      names: [name],
      ...this.#state,
    });
  }

  /**
   * set field value
   */
  setFieldsValue(value: Partial<T>) {
    const names = Object.keys(value);

    this.#state.value = {
      ...this.#state.value,
      ...value,
    };

    this.#state.error = {
      ...this.#state.error,
      ...Object.fromEntries(names.map((name) => [name, null])),
    };

    this.#state$.next({
      source: ChangingSource.Set,
      names,
      ...this.#state,
    });
  }

  /**
   * reset
   */
  reset() {
    this.#state.value = this.#defaultValue;
    this.#state.error = {};

    this.#state$.next({
      source: ChangingSource.Set,
      names: [],
      ...this.#state,
    });
  }

  /**
   * clear
   */
  clear() {
    this.#state.value = {};
    this.#state.error = {};

    this.#state$.next({
      source: ChangingSource.Set,
      names: [],
      ...this.#state,
    });
  }

  /**
   * change field value
   * @description
   * in `change` mode, `value` changed, trigger `validate`
   */
  async change<FieldValue extends T[FieldKey], FieldKey extends keyof T = keyof T>(
    name: FieldKey,
    value: FieldValue,
  ) {
    this.#state.value[name] = value;
    this.#state.error[name] = null;

    this.#state$.next({
      source: ChangingSource.Change,
      names: [name],
      ...this.#state,
    });

    // trigger validate
    this.validate([name]);
  }
}
