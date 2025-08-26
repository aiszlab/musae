import { toArray } from "@aiszlab/relax";
import type { Partialable } from "@aiszlab/relax/types";
import { type ReactNode } from "react";
import { BehaviorSubject, filter } from "rxjs";

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
  Initialize = "initialize",
  Clear = "clear",
  Reset = "reset",
}

export interface Rule<T extends FieldsValue, FieldKey extends keyof T> {
  validate: (value: Partialable<T[FieldKey]>) => ReactNode | Promise<ReactNode>;
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
  value: Partial<T> | null;
  error: Partial<Record<keyof T, ReactNode>>;
}

interface ChangingState<T extends FieldsValue> {
  source: ChangingSource;
  names: (keyof T)[];
  value: Partial<T>;
  error: Partial<Record<keyof T, ReactNode>>;
}

export type ChangeHandler<T extends FieldsValue> = (names: (keyof T)[], value: Partial<T>) => void;

/**
 * form instance
 */
export class Form<T extends FieldsValue> {
  private defaultValue: Partial<T>;
  private fields: Map<keyof T, Pick<RegisteredField<T, keyof T>, "rules">>;
  private state: FormState<T>;
  private state$: BehaviorSubject<ChangingState<T>>;
  private onChange: ChangeHandler<T> | null;

  constructor() {
    this.defaultValue = {};
    this.fields = new Map();
    this.state = {
      value: {},
      error: {},
    };
    this.onChange = null;

    this.state$ = new BehaviorSubject<ChangingState<T>>({
      source: ChangingSource.Initialize,
      names: [],
      value: this.state.value ?? {},
      error: this.state.error,
    });

    this.state$.subscribe(({ source, names, value }) => {
      if (names.length === 0) return;
      if (source !== ChangingSource.Change) return;
      if (!value) return;

      // value change, handle `onChange` callback
      this.onChange?.(names, { ...value });
    });
  }

  /**
   * `Form` use value
   * @description
   * in `Component.Form`, will provider `value` or `defaultValue`
   */
  useValues({ value, defaultValue }: { value?: Partial<T>; defaultValue?: Partial<T> }) {
    this.defaultValue = defaultValue ?? this.defaultValue;
    this.state.value = value ?? this.defaultValue;

    this.state$.next({
      source: ChangingSource.Initialize,
      names: [],
      value: this.state.value,
      error: this.state.error,
    });
  }

  /**
   * set change handler
   */
  useOnChange(onChange: ChangeHandler<T>) {
    this.onChange = onChange;
  }

  /**
   * register field
   */
  register<FieldKey extends keyof T = keyof T>(
    name: FieldKey,
    { onChange, rules, onValidate }: RegisteredField<T, FieldKey>,
  ) {
    this.fields.set(name, { rules });

    const _subscription = this.state$
      .pipe(
        // only listen `name` related to `register` field
        filter(({ names }) => names.length === 0 || new Set(names).has(name)),
      )
      .subscribe(({ source, value, error }) => {
        // callback field state
        onChange({
          value: value[name],
          error: error[name],
        });

        // validate
        if (source === ChangingSource.Validate) {
          onValidate(error[name]);
        }
      });

    return () => {
      this.fields.delete(name);
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
    const _subscription = this.state$
      .pipe(
        // only listen `name` related to `register` field
        filter(({ names }) => names.length === 0 || new Set(names).has(name)),
        // ignore `Validate` `ChangingSource`
        filter(({ source }) => source !== ChangingSource.Validate),
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
    return this.state.value?.[name];
  }

  /**
   * get fields value
   */
  getFieldsValue(): Partial<T> {
    return this.fields.keys().reduce<Partial<T>>((value, name) => {
      value[name] = this.state.value?.[name];
      return value;
    }, {});
  }

  /**
   * validate all registered fields
   * @description
   * if provided `names`, only validate `names`
   */
  async validate(names: (keyof T)[] = toArray(this.fields.keys())) {
    const validated = await Promise.all<ReactNode[]>(
      names.map(async (name) => {
        const rules = this.fields.get(name)?.rules?.() ?? [];

        // no valid rule
        if (rules.length === 0) {
          return null;
        }

        // validate result
        const error = await Promise.race(
          rules.map(async ({ validate, message }) => {
            return await Promise.try(() => validate(this.state.value?.[name]))
              .catch((_error: ReactNode) => false)
              // `validate` resolved value is `true`, means valid, set `error` to `null`
              .then((_v) => {
                if (_v === true) return null;
                if (_v === false) return message;
                return _v;
              });
          }),
        );

        this.state.error[name] = error;
        return error;
      }),
    );

    // notify state change
    // only notify `error`
    this.state$.next({
      source: ChangingSource.Validate,
      names,
      value: this.state.value ?? {},
      error: this.state.error,
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
    this.state.value ??= {};
    this.state.value[name] = value;
    this.state.error[name] = null;

    this.state$.next({
      source: ChangingSource.Set,
      names: [name],
      value: this.state.value,
      error: this.state.error,
    });
  }

  /**
   * set field value
   */
  setFieldsValue(value: Partial<T>) {
    const names = Object.keys(value);

    this.state.value = {
      ...this.state.value,
      ...value,
    };

    this.state.error = {
      ...this.state.error,
      ...Object.fromEntries(names.map((name) => [name, null])),
    };

    this.state$.next({
      source: ChangingSource.Set,
      names,
      value: this.state.value,
      error: this.state.error,
    });
  }

  /**
   * reset
   */
  reset() {
    this.state.value = this.defaultValue;
    this.state.error = {};

    this.state$.next({
      source: ChangingSource.Reset,
      names: [],
      value: this.state.value,
      error: this.state.error,
    });
  }

  /**
   * clear
   */
  clear() {
    this.state.value = {};
    this.state.error = {};

    this.state$.next({
      source: ChangingSource.Clear,
      names: [],
      value: this.state.value,
      error: this.state.error,
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
    this.state.value ??= {};
    this.state.value[name] = value;
    this.state.error[name] = null;

    this.state$.next({
      source: ChangingSource.Change,
      names: [name],
      value: this.state.value,
      error: this.state.error,
    });

    // trigger validate
    this.validate([name]);
  }
}
