/**
 * @description
 * token
 */
enum Token {
  Prefix = "musae",
  Separator = "-",
  Dot = ".",
}

/**
 * @description
 * add prefix
 */
export const withPrefix = (className: string, prefix: string) => [prefix, className].join(Token.Separator);

/**
 * @description
 * with dot
 */
export const withDot = (className: string) => `${Token.Dot}${className}`;

/**
 * @description
 * class role
 */
export enum ComponentToken {
  Picker,
  Input,
}

/**
 * @description
 * class role
 */
export enum PickerClassToken {
  Picker,
  Focused,
  Invalid,
  Dropdown,
}
export enum InputClassToken {
  Input,
  Wrapper,
  Focused,
  Invalid,
}

/**
 * @description
 * class name collection
 */
export const CLASS_NAMES = {
  [ComponentToken.Picker]: {
    [PickerClassToken.Picker]: "picker",
    [PickerClassToken.Focused]: "picker-focused",
    [PickerClassToken.Invalid]: "picker-invalid",
    [PickerClassToken.Dropdown]: "picker-dropdown",
  },
  [ComponentToken.Input]: {
    [InputClassToken.Input]: "input",
    [InputClassToken.Wrapper]: "input-wrapper",
    [InputClassToken.Focused]: "input-wrapper-focused",
    [InputClassToken.Invalid]: "input-wrapper-invalid",
  },
};

/**
 * @description
 * add prefix
 */
export const addPrefix = (classNames: typeof CLASS_NAMES, prefix: string) => {
  return {
    ...Object.values(classNames).map((_classNames) => ({
      ...Object.values(_classNames).map((className) => withPrefix(className, prefix)),
    })),
  } as unknown as typeof CLASS_NAMES;
};

/**
 * @description
 * default class names
 */
export const DEFAULT_CLASS_NAMES = addPrefix(CLASS_NAMES, Token.Prefix);
