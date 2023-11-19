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
  Select,
  Popper,
  Form,
  Grid,
  Radio,
  Empty,
  Button,
  Drawer,
  Divider,
  Chip,
  Cascader,
  Dialog,
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
export enum SelectClassToken {
  Select,
}
export enum PopperClassToken {
  Dropdown,
}
export enum FormClassToken {
  Item,
  ItemExplainError,
}
export enum GridClassToken {
  Row,
}
export enum RadioClassToken {
  Wrapper,
}
export enum EmptyClassToken {
  Description,
}
export enum ButtonClassToken {
  Button,
}
export enum DrawerClassToken {
  Drawer,
  Mask,
  Panel,
  Header,
  Body,
}
export enum DividerClassToken {
  Divider,
  Content,
}
export enum ChipClassToken {
  Chip,
}
export enum CascaderClassToken {
  Cascader,
}
export enum DialogClassToken {
  Dialog,
  Mask,
  Panel,
  Header,
  Body,
  Footer,
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
  [ComponentToken.Select]: {
    [SelectClassToken.Select]: "select",
  },
  [ComponentToken.Popper]: {
    [PopperClassToken.Dropdown]: "dropdown",
  },
  [ComponentToken.Form]: {
    [FormClassToken.Item]: "form-item",
    [FormClassToken.ItemExplainError]: "form-item-explain-error",
  },
  [ComponentToken.Grid]: {
    [GridClassToken.Row]: "grid-row",
  },
  [ComponentToken.Radio]: {
    [RadioClassToken.Wrapper]: "radio-wrapper",
  },
  [ComponentToken.Empty]: {
    [EmptyClassToken.Description]: "empty-description",
  },
  [ComponentToken.Button]: {
    [ButtonClassToken.Button]: "button",
  },
  [ComponentToken.Drawer]: {
    [DrawerClassToken.Drawer]: "drawer",
    [DrawerClassToken.Mask]: "drawer-mask",
    [DrawerClassToken.Panel]: "drawer-panel",
    [DrawerClassToken.Header]: "drawer-header",
    [DrawerClassToken.Body]: "drawer-body",
  },
  [ComponentToken.Divider]: {
    [DividerClassToken.Divider]: "divider",
    [DividerClassToken.Content]: "divider-content",
  },
  [ComponentToken.Chip]: {
    [ChipClassToken.Chip]: "chip",
  },
  [ComponentToken.Cascader]: {
    [CascaderClassToken.Cascader]: "cascader",
  },
  [ComponentToken.Dialog]: {
    [DialogClassToken.Dialog]: "dialog",
    [DialogClassToken.Mask]: "dialog-mask",
    [DialogClassToken.Panel]: "dialog-panel",
    [DialogClassToken.Header]: "dialog-header",
    [DialogClassToken.Body]: "dialog-body",
    [DialogClassToken.Footer]: "dialog-footer",
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
