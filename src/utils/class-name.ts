import { ClassNames } from "../components/config/types";

/**
 * @description
 * token
 */
enum Token {
  Prefix = "musae",
  Separator = "-",
}

/**
 * @description
 * add prefix
 */
export const withPrefix = (className: string, prefix: string) => [prefix, className].join(Token.Separator);

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
  Tag,
  Cascader,
  Dialog,
  Calendar,
  Icon,
  DatePicker,
  TimePicker,
  DateRangePicker,
  Clock,
  Menu,
  Checkbox,
  Tree,
  Tabs,
  Pagination,
  Switch,
  Rate,
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
  Field,
  FieldSupporting,
  FieldError,
}
export enum GridClassToken {
  Row,
  Col,
}
export enum RadioClassToken {
  Radio,
}
export enum EmptyClassToken {
  Description,
}
export enum ButtonClassToken {
  Button,
  Prefix,
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
  Label,
}
export enum TagClassToken {
  Tag,
}
export enum CascaderClassToken {
  Cascader,
  Options,
}
export enum DialogClassToken {
  Dialog,
  Mask,
  Panel,
  Header,
  Body,
  Footer,
}
export enum CalendarClassToken {
  Header,
  Heading,
  HeadCell,
  DateCell,
  DateCellSelected,
  DateCellInRange,
  DateCellRangeFrom,
  DateCellRangeTo,
  Date,
}
export enum IconClassToken {
  Icon,
}
export enum DatePickerClassToken {
  Picker,
  Input,
}
export enum TimePickerClassToken {
  Picker,
  Input,
  Panel,
  PanelFooter,
}
export enum DateRangePickerClassToken {
  Picker,
  Input,
  Separator,
}
export enum ClockClassToken {
  Clock,
  Column,
}
export enum MenuClassToken {
  Menu,
  Group,
  GroupHidden,
  Collapser,
  Item,
}
export enum CheckboxClassToken {
  Checkbox,
}
export enum TreeClassToken {
  Tree,
  List,
  ListHidden,
  Holder,
  Node,
  Title,
  Expander,
  Checkbox,
}
export enum TabsClassToken {
  Tabs,
  Item,
  Indicator,
}
export enum PaginationClassToken {
  Pagination,
}
export enum SwitchClassToken {
  Switch,
  Slider,
  Supporting,
  Leading,
  Trailing,
}
export enum RateClassToken {
  Rate,
  Star,
  Leading,
  Trailing,
}

/**
 * @description
 * class name collection
 * in musae, we use bem css name rule!!!
 * if u want change class name, must follow bem css
 * rule like: block__element--modifier
 */
export const CLASS_NAMES = {
  [ComponentToken.Picker]: {
    [PickerClassToken.Picker]: "picker",
    [PickerClassToken.Focused]: "picker--focused",
    [PickerClassToken.Invalid]: "picker--invalid",
    [PickerClassToken.Dropdown]: "picker__dropdown",
  },
  [ComponentToken.Input]: {
    [InputClassToken.Input]: "input",
    [InputClassToken.Wrapper]: "input__wrapper",
    [InputClassToken.Focused]: "input__wrapper--focused",
    [InputClassToken.Invalid]: "input__wrapper--invalid",
  },
  [ComponentToken.Select]: {
    [SelectClassToken.Select]: "select",
  },
  [ComponentToken.Popper]: {
    [PopperClassToken.Dropdown]: "dropdown",
  },
  [ComponentToken.Form]: {
    [FormClassToken.Item]: "form__item",
    [FormClassToken.Field]: "form__item-field",
    [FormClassToken.FieldSupporting]: "form__item-supporting",
    [FormClassToken.FieldError]: "form__item-field-error",
  },
  [ComponentToken.Grid]: {
    [GridClassToken.Row]: "grid__row",
    [GridClassToken.Col]: "grid__col",
  },
  [ComponentToken.Radio]: {
    [RadioClassToken.Radio]: "radio",
  },
  [ComponentToken.Empty]: {
    [EmptyClassToken.Description]: "empty__description",
  },
  [ComponentToken.Button]: {
    [ButtonClassToken.Button]: "button",
    [ButtonClassToken.Prefix]: "button__prefix",
  },
  [ComponentToken.Drawer]: {
    [DrawerClassToken.Drawer]: "drawer",
    [DrawerClassToken.Mask]: "drawer__mask",
    [DrawerClassToken.Panel]: "drawer__panel",
    [DrawerClassToken.Header]: "drawer__header",
    [DrawerClassToken.Body]: "drawer__body",
  },
  [ComponentToken.Divider]: {
    [DividerClassToken.Divider]: "divider",
    [DividerClassToken.Label]: "divider__label",
  },
  [ComponentToken.Tag]: {
    [TagClassToken.Tag]: "tag",
  },
  [ComponentToken.Cascader]: {
    [CascaderClassToken.Cascader]: "cascader",
    [CascaderClassToken.Options]: "cascader__options",
  },
  [ComponentToken.Dialog]: {
    [DialogClassToken.Dialog]: "dialog",
    [DialogClassToken.Mask]: "dialog__mask",
    [DialogClassToken.Panel]: "dialog__panel",
    [DialogClassToken.Header]: "dialog__header",
    [DialogClassToken.Body]: "dialog__body",
    [DialogClassToken.Footer]: "dialog__footer",
  },
  [ComponentToken.Calendar]: {
    [CalendarClassToken.Header]: "calendar__header",
    [CalendarClassToken.Heading]: "calendar__heading",
    [CalendarClassToken.HeadCell]: "calendar__head-cell",
    [CalendarClassToken.DateCell]: "calendar__date-cell",
    [CalendarClassToken.DateCellSelected]: "calendar__date-cell--selected",
    [CalendarClassToken.DateCellInRange]: "calendar__date--in-range",
    [CalendarClassToken.DateCellRangeFrom]: "calendar__date--range-from",
    [CalendarClassToken.DateCellRangeTo]: "calendar__date--range-to",
    [CalendarClassToken.Date]: "calendar__date",
  },
  [ComponentToken.Icon]: {
    [IconClassToken.Icon]: "icon",
  },
  [ComponentToken.DatePicker]: {
    [DatePickerClassToken.Picker]: "date-picker",
    [DatePickerClassToken.Input]: "date-picker__input",
  },
  [ComponentToken.TimePicker]: {
    [TimePickerClassToken.Picker]: "time-picker",
    [TimePickerClassToken.Input]: "time-picker__input",
    [TimePickerClassToken.Panel]: "time-picker__panel",
    [TimePickerClassToken.PanelFooter]: "time-picker__panel-footer",
  },
  [ComponentToken.DateRangePicker]: {
    [DateRangePickerClassToken.Picker]: "date-range-picker",
    [DateRangePickerClassToken.Input]: "date-range-picker__input",
    [DateRangePickerClassToken.Separator]: "date-range-picker__separator",
  },
  [ComponentToken.Clock]: {
    [ClockClassToken.Clock]: "clock",
    [ClockClassToken.Column]: "clock__column",
  },
  [ComponentToken.Menu]: {
    [MenuClassToken.Menu]: "menu",
    [MenuClassToken.Group]: "menu__group",
    [MenuClassToken.GroupHidden]: "menu__group--hidden",
    [MenuClassToken.Collapser]: "menu__collapser",
    [MenuClassToken.Item]: "menu__item",
  },
  [ComponentToken.Checkbox]: {
    [CheckboxClassToken.Checkbox]: "checkbox",
  },
  [ComponentToken.Tree]: {
    [TreeClassToken.Tree]: "tree",
    [TreeClassToken.List]: "tree__list",
    [TreeClassToken.ListHidden]: "tree__list--hidden",
    [TreeClassToken.Holder]: "tree__holder",
    [TreeClassToken.Node]: "tree__node",
    [TreeClassToken.Title]: "tree__node-title",
    [TreeClassToken.Expander]: "tree__node-expander",
    [TreeClassToken.Checkbox]: "tree__node-checkbox",
  },
  [ComponentToken.Tabs]: {
    [TabsClassToken.Tabs]: "tabs",
    [TabsClassToken.Item]: "tabs__item",
    [TabsClassToken.Indicator]: "tabs__indicator",
  },
  [ComponentToken.Pagination]: {
    [PaginationClassToken.Pagination]: "pagination",
  },
  [ComponentToken.Switch]: {
    [SwitchClassToken.Switch]: "switch",
    [SwitchClassToken.Slider]: "switch__slider",
    [SwitchClassToken.Supporting]: "switch__supporting",
    [SwitchClassToken.Leading]: "switch__supporting-leading",
    [SwitchClassToken.Trailing]: "switch__supporting-trailing",
  },
  [ComponentToken.Rate]: {
    [RateClassToken.Rate]: "rate",
    [RateClassToken.Star]: "rate__star",
    [RateClassToken.Leading]: "rate__star-leading",
    [RateClassToken.Trailing]: "rate__star-trailing",
  },
};

/**
 * @description
 * add prefix
 */
export const addPrefix = (classNames: ClassNames, prefix: string) => {
  return {
    ...Object.values(classNames).map((_classNames) => ({
      ...Object.values(_classNames).map((className) => withPrefix(className, prefix)),
    })),
  } as unknown as ClassNames;
};

/**
 * @description
 * default class names
 */
export const DEFAULT_CLASS_NAMES = addPrefix(CLASS_NAMES, Token.Prefix);
