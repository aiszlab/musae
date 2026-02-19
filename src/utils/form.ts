import { toArray } from "@aiszlab/relax";
import type { Partialable, ValueOf } from "@aiszlab/relax/types";
import { type ReactNode } from "react";
import { BehaviorSubject, filter } from "rxjs";

/**
 * unique symbols
 */
export const FORM_TOKEN = Symbol("FORM");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FieldsValue = Record<string, any>;

interface FieldState<FieldValue> {
  value: Partialable<FieldValue>;
  error: ReactNode;
}

const FORM_EVENT = {
  change: "change",
  set_value: "set_value",
  set_fields_value: "set_fields_value",
  set_field_value: "set_field_value",
  validate: "validate",
  initialize: "initialize",
  clear: "clear",
  reset: "reset",
} as const;

type FormEvent = ValueOf<typeof FORM_EVENT>;

export interface Rule<T extends FieldsValue, FieldKey extends keyof T> {
  validate: (value: Partialable<T[FieldKey]>) => void | ReactNode | Promise<ReactNode>;
  message?: ReactNode;
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
   * validate callback
   */
  onValidate: (_error: ReactNode) => void;

  /**
   * rules
   */
  rules: () => Partialable<Rule<T, FieldKey>[]>;
}

interface FormState<T extends FieldsValue> {
  value?: Partial<T>;
  error: Partial<Record<keyof T, ReactNode>>;
}

interface ChangingState<T extends FieldsValue> {
  event: FormEvent;
  names?: Set<keyof T>;
  value: Partial<T>;
  error: Partial<Record<keyof T, ReactNode>>;
}

export type ChangeHandler<T extends FieldsValue> = (
  fieldsValue: Partial<T>,
  names: (keyof T)[],
) => void;

/**
 * form instance
 */
export class Form<T extends FieldsValue> {
  #defaultValue?: Partial<T>;
  #fields: Map<keyof T, Pick<RegisteredField<T, keyof T>, "rules">>;
  #state: FormState<T>;
  #state$: BehaviorSubject<ChangingState<T>>;
  #onChange: ChangeHandler<T> | null;

  constructor() {
    this.#fields = new Map();
    this.#state = { error: {} };
    this.#onChange = null;

    this.#state$ = new BehaviorSubject<ChangingState<T>>({
      event: FORM_EVENT.initialize,
      value: this.#state.value ?? {},
      error: this.#state.error,
    });

    this.#state$.subscribe(({ event, names, value }) => {
      if ((names?.size ?? 0) === 0) return;
      if (event !== FORM_EVENT.change) return;

      // value change, handle `onChange` callback
      this.#onChange?.({ ...value }, Array.from(names ?? []));
    });
  }

  /**
   * defaultValue setter
   */
  set defaultValue(defaultValue: Partialable<Partial<T>>) {
    this.#defaultValue = defaultValue ?? this.#defaultValue;
  }

  /**
   * value setter
   */
  set value(value: Partialable<Partial<T>>) {
    this.#state.value = value ?? this.#state.value ?? this.#defaultValue;

    this.#state$.next({
      event: FORM_EVENT.set_value,
      value: this.#state.value ?? {},
      error: this.#state.error,
    });
  }

  /**
   * change handler setter
   */
  set onChange(onChange: ChangeHandler<T>) {
    this.#onChange = onChange;
  }

  /**
   * register field
   */
  register<FieldKey extends keyof T = keyof T>(
    name: FieldKey,
    { onChange, rules, onValidate }: RegisteredField<T, FieldKey>,
  ) {
    this.#fields.set(name, {
      rules,
    });

    const _subscription = this.#state$
      .pipe(
        // only listen `name` related to `register` field
        filter(({ names }) => {
          return !names || names.size === 0 || names.has(name);
        }),
      )
      .subscribe(({ event, value, error }) => {
        // callback field state
        onChange({
          value: value[name],
          error: error[name],
        });

        // validate
        if (event === FORM_EVENT.validate) {
          onValidate(error[name]);
        }
      });

    return () => {
      this.#fields.delete(name);
      _subscription.unsubscribe();
    };
  }

  /**
   * watch field value
   * @description when `Form` fields value changed, notify listener
   */
  watch<FieldKey extends keyof T = keyof T>(
    name: FieldKey,
    onChange: (value: Partialable<T[FieldKey]>) => void,
  ) {
    const _subscription = this.#state$
      .pipe(
        filter(({ names }) => !names || names.size === 0 || names.has(name)),
        filter(({ event }) => event !== FORM_EVENT.validate),
      )
      .subscribe(({ value }) => {
        onChange(value[name]);
      });

    return () => {
      _subscription.unsubscribe();
    };
  }

  /**
   * get field value
   */
  getFieldValue(name: keyof T) {
    return this.#state.value?.[name];
  }

  /**
   * get fields value
   */
  getFieldsValue(): Partial<T> {
    return this.#fields.keys().reduce<Partial<T>>((value, name) => {
      value[name] = this.#state.value?.[name];
      return value;
    }, {});
  }

  /**
   * validate all registered fields
   * @description
   * if provided `names`, only validate `names`
   */
  async validate(names: (keyof T)[] = this.#fields.keys().toArray()) {
    const validated = await Promise.all<ReactNode[]>(
      names.map(async (name) => {
        const rules = this.#fields.get(name)?.rules?.() ?? [];

        // no valid rule
        if (rules.length === 0) {
          return null;
        }

        // validate result
        const error = await Promise.race(
          rules.map(async ({ validate, message }) => {
            return await Promise.try(() => validate(this.#state.value?.[name]) ?? null)
              .catch((error: ReactNode) => {
                console.error(error);
                return false;
              })
              // `validate` resolved value is `true`, means valid, set `error` to `null`
              .then((_v) => {
                if (_v === true) return null;
                if (_v === false) return message;
                return _v;
              });
          }),
        );

        this.#state.error[name] = error;
        return error;
      }),
    );

    // notify state change
    // only notify `error`
    this.#state$.next({
      event: FORM_EVENT.validate,
      names: new Set(names),
      value: this.#state.value ?? {},
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
    this.#state.value ??= {};
    this.#state.value[name] = value;
    this.#state.error[name] = null;

    this.#state$.next({
      event: FORM_EVENT.set_field_value,
      names: new Set([name]),
      value: this.#state.value,
      error: this.#state.error,
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
      event: FORM_EVENT.set_fields_value,
      names: new Set(names),
      value: this.#state.value,
      error: this.#state.error,
    });
  }

  /**
   * reset
   */
  reset() {
    this.#state.value = this.#defaultValue;
    this.#state.error = {};

    this.#state$.next({
      event: FORM_EVENT.reset,
      value: this.#state.value ?? {},
      error: this.#state.error,
    });
  }

  /**
   * clear
   */
  clear() {
    this.#state.value = void 0;
    this.#state.error = {};

    this.#state$.next({
      event: FORM_EVENT.clear,
      value: this.#state.value ?? {},
      error: this.#state.error,
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
    this.#state.value ??= {};
    this.#state.value[name] = value;
    this.#state.error[name] = null;

    this.#state$.next({
      event: FORM_EVENT.change,
      names: new Set([name]),
      value: this.#state.value,
      error: this.#state.error,
    });

    // trigger validate
    this.validate([name]);
  }
}
