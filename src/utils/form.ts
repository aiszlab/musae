import { get, pick, set, toArray } from "@aiszlab/relax";
import type { Partialable } from "@aiszlab/relax/types";
import { type ReactNode } from "react";
import { Subject } from "rxjs";

/**
 * unique symbols
 */
export const FORM_TOKEN = Symbol("FORM");
export const ERROR_TOKEN = Symbol("ERROR");

export interface FieldsValue {
  [propertyKey: PropertyKey]: unknown;
}

export interface FieldsError {
  [propertyKey: PropertyKey]: ({ [ERROR_TOKEN]: ReactNode } & FieldsError) | null;
}

interface FieldState<FieldValue> {
  value: FieldValue;
  error: ReactNode;
}

/**
 * form item props
 */
export interface FormItemProps<FieldValue> {
  /**
   * name
   */
  name: PropertyKey;

  /**
   * rules
   */
  rules?: {
    validate: (value: Partialable<FieldValue>) => ReactNode | Promise<ReactNode>;
    message?: ReactNode;
  }[];
}

/**
 * registered field
 */
interface RegisteredField<FieldValue> extends Pick<FormItemProps<FieldValue>, "rules"> {
  onChange: (_state: FieldState<FieldValue>) => void;
}

type ChangingSource = "set" | "change" | "blur" | "unfocus";

interface FormState<T extends FieldsValue> {
  value: Partial<T>;
  error: FieldsError;
}

interface ChangingState<T extends FieldsValue> {
  source: ChangingSource;
  state: FormState<T>;
}

/**
 * form instance
 */
export class Form<T extends FieldsValue> {
  #defaultValue: Partial<T>;
  #fields: Map<PropertyKey, Pick<RegisteredField<any>, "rules">>;
  #state: FormState<T>;
  #state$: Subject<ChangingState<T>>;

  constructor() {
    this.#defaultValue = {};
    this.#fields = new Map();
    this.#state = {
      value: {},
      error: {},
    };
    this.#state$ = new Subject<ChangingState<T>>();
  }

  setDefaultValue(value?: Partial<T>) {
    this.#defaultValue = value ?? {};
    this.#state.value = this.#defaultValue;
  }

  /**
   * register field
   */
  register<FieldValue>(name: PropertyKey, { onChange, rules }: RegisteredField<FieldValue>) {
    this.#fields.set(name, { rules });

    const _subscription = this.#state$.subscribe(({ source, state: _state }) => {
      onChange({
        value: get(_state.value, name) as FieldValue,
        error: get(_state.error, [name, ERROR_TOKEN]),
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
    return pick(this.#state.value, toArray(this.#fields.keys()));
  }

  /**
   * validate all registered fields
   */
  async validate() {
    const validated = await Promise.all<[PropertyKey, ReactNode][]>(
      toArray(this.#fields).map(({ 0: name, 1: { rules = [] } }) => {
        return [
          name,
          Promise.race(
            rules.map(async ({ validate }) => {
              const _validated = await Promise.try(() => validate(get(this.#state.value, name)))
                .catch((error) => error)
                .then((_v) => (_v === true ? null : _v));

              return _validated;
            }),
          ),
        ];
      }),
    );

    // notify field validated result
    return validated.reduce((isValid, { 0: name, 1: error }) => {
      set(this.#state.error, [name, ERROR_TOKEN], error);
      return isValid && !error;
    }, true);
  }

  /**
   * set field value
   */
  setFieldValue<FieldValue>(name: PropertyKey, value: FieldValue) {
    set(this.#state.value, name, value);
    set(this.#state.error, name, null);

    this.#state$.next({
      source: "set",
      state: this.#state,
    });
  }

  /**
   * set field value
   */
  setFieldsValue(value: Partial<T>) {
    this.#state.value = value;
    this.#state.error = {};

    this.#state$.next({
      source: "set",
      state: this.#state,
    });
  }

  /**
   * reset
   */
  reset() {
    this.#state.value = this.#defaultValue;
    this.#state.error = {};

    this.#state$.next({
      source: "set",
      state: this.#state,
    });
  }

  /**
   * clear
   */
  clear() {
    this.#state.value = {};
    this.#state.error = {};

    this.#state$.next({
      source: "set",
      state: this.#state,
    });
  }
}

/**
 * form props
 */
export interface FormProps<T extends FieldsValue> {
  form: Form<T>;
  children: ReactNode;
}
