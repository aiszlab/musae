import { get, pick, toArray, set } from "@aiszlab/relax";
import type { Nullable, Partialable } from "@aiszlab/relax/types";
import { type CSSProperties, type ReactNode } from "react";
import { type Observable, Subject, tap } from "rxjs";

/**
 * unique symbols
 */
export const FORM_TOKEN = Symbol("FORM");
export const ERROR_TOKEN = Symbol("ERROR");

export type FieldsValue = Record<PropertyKey, any>;

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
  name?: PropertyKey;

  /**
   * rules
   */
  rules?: {
    validate: (value: Partialable<FieldValue>) => ReactNode | Promise<ReactNode>;
    message?: ReactNode;
  }[];

  /**
   * required field
   */
  required?: boolean;

  /**
   * class name
   */
  className?: string;

  /**
   * style
   */
  style?: CSSProperties;

  /**
   * supporting
   */
  supporting?: ReactNode;

  /**
   * label
   */
  label?: ReactNode;

  /**
   * labelCol
   */
  labelCol?: number;

  /**
   * wrapperCol
   */
  wrapperCol?: number;

  /**
   * children
   */
  children?: ReactNode;
}

/**
 * registered field
 */
interface RegisteredField<FieldValue> extends Pick<FormItemProps<FieldValue>, "rules"> {
  onChange: (_state: FieldState<FieldValue>) => void;
}

interface FormState<T extends FieldsValue> {
  value: Partial<T>;
  error: FieldsError;
}

type ChangingState<T extends FieldsValue> =
  | {
      source: "change";
      name: PropertyKey;
      changedValue?: Partial<T>;
    }
  | {
      source: "reset";
    }
  | {
      source: "set";
      name?: PropertyKey;
      changedValue: Partial<T>;
    };

interface FormProps<T extends FieldsValue> {
  onChange: <FieldValue>(name: PropertyKey, value: FieldValue) => void;
}

/**
 * form instance
 */
export class Form<T extends FieldsValue> {
  #defaultValue: Partial<T>;
  #fields: Map<PropertyKey, Pick<RegisteredField<any>, "rules">>;
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

    this.#state$.subscribe(({ source, changedValue, name }) => {
      // if `name` is valid, then only use name
      // else all fields
      if (name) {
        set(this.#state.value, name, get(changedValue, name));
      }

      if (source === "change") {
        this.#onChange(changedValue, this.#state.value);
      }
    });
  }

  /**
   * set default value
   */
  setDefaultValue(value?: Partial<T>) {
    this.#defaultValue = value ?? {};
    this.#state.value = this.#defaultValue;
  }

  /**
   * register field
   */
  register<FieldValue>(name: PropertyKey, { onChange, rules }: RegisteredField<FieldValue>) {
    this.#fields.set(name, { rules });

    const _subscription = this.#state$.subscribe(({ source, changedValue }) => {
      onChange({
        value: get(changedValue, name) as FieldValue,
        error: get(this.#state.error, [name, ERROR_TOKEN]),
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
    const changedValue = {};
    set(changedValue, name, value);

    this.#state$.next({
      source: "set",
      name,
      changedValue,
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
      changedValue: value,
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

  /**
   * change field value
   */
  change<FieldValue>(name: PropertyKey, value: FieldValue) {
    set(this.#state.value, name, value);
    set(this.#state.error, name, null);

    this.#state$.next({
      source: "change",
      name,
      state: this.#state,
    });
  }
}

/**
 * Context value type
 */
export interface ContextValue<T extends FieldsValue = {}> {
  /**
   * form instance
   */
  form: Nullable<Form<T>>;

  /**
   * labelCol
   */
  labelCol: number;

  /**
   * wrapperCol
   */
  wrapperCol: number;
}
