import { ClassNames } from "../components/config/types";

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
 * with self
 */
export const withSelf = (className: string) => `&${withDot(className)}`;

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
  Calendar,
  Icon,
  DatePicker,
  TimePicker,
  DateRangePicker,
  Clock,
  Menu,
  Checkbox,
  Tree,
  Gallery,
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
  Collapser,
  GroupItem,
  Item,
  ItemPrefix,
  ItemContent,
}
export enum CheckboxClassToken {
  Checkbox,
}
export enum TreeClassToken {
  List,
  Holder,
  Node,
  Title,
  Expander,
  Checkbox,
}
export enum GalleryClassToken {
  Gallery,
  GalleryCode,
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
    [CascaderClassToken.Options]: "cascader-options",
  },
  [ComponentToken.Dialog]: {
    [DialogClassToken.Dialog]: "dialog",
    [DialogClassToken.Mask]: "dialog-mask",
    [DialogClassToken.Panel]: "dialog-panel",
    [DialogClassToken.Header]: "dialog-header",
    [DialogClassToken.Body]: "dialog-body",
    [DialogClassToken.Footer]: "dialog-footer",
  },
  [ComponentToken.Calendar]: {
    [CalendarClassToken.Header]: "calendar-header",
    [CalendarClassToken.Heading]: "calendar-heading",
    [CalendarClassToken.HeadCell]: "calendar-head-cell",
    [CalendarClassToken.DateCell]: "calendar-date-cell",
    [CalendarClassToken.DateCellSelected]: "calendar-date-cell-selected",
    [CalendarClassToken.DateCellInRange]: "calendar-date-in-range",
    [CalendarClassToken.DateCellRangeFrom]: "calendar-date-range-from",
    [CalendarClassToken.DateCellRangeTo]: "calendar-date-range-to",
    [CalendarClassToken.Date]: "calendar-date",
  },
  [ComponentToken.Icon]: {
    [IconClassToken.Icon]: "icon",
  },
  [ComponentToken.DatePicker]: {
    [DatePickerClassToken.Picker]: "date-picker",
    [DatePickerClassToken.Input]: "date-picker-input",
  },
  [ComponentToken.TimePicker]: {
    [TimePickerClassToken.Picker]: "time-picker",
    [TimePickerClassToken.Input]: "time-picker-input",
    [TimePickerClassToken.Panel]: "time-picker-panel",
    [TimePickerClassToken.PanelFooter]: "time-picker-panel-footer",
  },
  [ComponentToken.DateRangePicker]: {
    [DateRangePickerClassToken.Picker]: "date-range-picker",
    [DateRangePickerClassToken.Input]: "date-range-picker-input",
    [DateRangePickerClassToken.Separator]: "date-range-picker-separator",
  },
  [ComponentToken.Clock]: {
    [ClockClassToken.Clock]: "clock",
    [ClockClassToken.Column]: "clock-column",
  },
  [ComponentToken.Menu]: {
    [MenuClassToken.Menu]: "menu",
    [MenuClassToken.Group]: "menu-group",
    [MenuClassToken.Collapser]: "menu-collapser",
    [MenuClassToken.GroupItem]: "menu-group-item",
    [MenuClassToken.Item]: "menu-item",
    [MenuClassToken.ItemPrefix]: "menu-item-prefix",
    [MenuClassToken.ItemContent]: "menu-item-content",
  },
  [ComponentToken.Checkbox]: {
    [CheckboxClassToken.Checkbox]: "checkbox",
  },
  [ComponentToken.Tree]: {
    [TreeClassToken.List]: "tree-list",
    [TreeClassToken.Holder]: "tree-holder",
    [TreeClassToken.Node]: "tree-node",
    [TreeClassToken.Title]: "tree-node-title",
    [TreeClassToken.Expander]: "tree-node-expander",
    [TreeClassToken.Checkbox]: "tree-node-checkbox",
  },
  [ComponentToken.Gallery]: {},
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
