import { get, pick, toArray } from "@aiszlab/relax";
import type { Nullable, Partialable } from "@aiszlab/relax/types";
import { type CSSProperties, type ReactNode } from "react";
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

/**
 * form item props
 */
export interface FormItemProps<T extends FieldsValue, FieldKey extends keyof T> {
  /**
   * name
   */
  name?: FieldKey;

  /**
   * rules
   */
  rules?: {
    validate: (value: Partialable<T[FieldKey]>) => ReactNode | Promise<ReactNode>;
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
interface RegisteredField<T extends FieldsValue, FieldKey extends keyof T>
  extends Pick<FormItemProps<T, FieldKey>, "rules"> {
  onChange: (_state: FieldState<T[FieldKey]>) => void;
}

interface FormState<T extends FieldsValue> {
  value: Partial<T>;
  error: Partial<Record<keyof T, ReactNode>>;
}

interface ChangingState<T extends FieldsValue> extends Partial<FormState<T>> {
  source: "change" | "set";
  names: (keyof T)[];
}

interface FormProps {
  onChange: <FieldValue>(name: PropertyKey, value: FieldValue) => void;
}

/**
 * form instance
 */
export class Form<T extends FieldsValue> {
  #defaultValue: Partial<T>;
  #fields: Map<keyof T, Pick<RegisteredField<T, keyof T>, "rules">>;
  #state: FormState<T>;
  #state$: Subject<ChangingState<T>>;
  #onChange: FormProps["onChange"];

  constructor({ onChange }: FormProps) {
    this.#defaultValue = {};
    this.#fields = new Map();
    this.#state = {
      value: {},
      error: {},
    };
    this.#onChange = onChange;
    this.#state$ = new Subject<ChangingState<T>>();

    this.#state$.subscribe(({ source }) => {
      // value change, handle `onChange` callback
      if (source === "change") {
        this.#onChange("", this.#state.value);
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
    return pick(this.#state.value, toArray(this.#fields.keys()));
  }

  /**
   * validate all registered fields
   */
  async validate() {
    const validated = await Promise.all<[keyof T, ReactNode][]>(
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
      this.#state.error[name] = error;
      return isValid && !error;
    }, true);
  }

  /**
   * set field value
   */
  setFieldValue<FieldValue extends T[FieldKey], FieldKey extends keyof T = keyof T>(
    name: FieldKey,
    value: FieldValue,
  ) {
    this.#state.value[name] = value;

    this.#state$.next({
      source: "set",
      names: [name],
      value: this.#state.value,
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
      source: "set",
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
      source: "set",
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
      source: "set",
      names: [],
      ...this.#state,
    });
  }

  /**
   * change field value
   */
  change<FieldValue extends T[FieldKey], FieldKey extends keyof T = keyof T>(
    name: FieldKey,
    value: FieldValue,
  ) {
    this.#state.value[name] = value;
    this.#state.error[name] = null;

    this.#state$.next({
      source: "change",
      names: [name],
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
