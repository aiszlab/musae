import type { ClassNames } from "musae/types/config";

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
export const withPrefix = (className: string, prefix: string) =>
  [prefix, className].join(Token.Separator);

/**
 * @description
 * class role
 */

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
  MenuHorizontal,
  Group,
  GroupHidden,
  Collapser,
  Item,
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
  TabsNavigation,
  TabsNavigator,
  TabList,
  Tab,
  Indicator,
  Panels,
  Panel,
}
export enum PaginationClassToken {
  Pagination,
  SizeSelector,
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
  Half,
  Full,
}

export enum BreadcrumbClassToken {
  Breadcrumb,
  Item,
  Separator,
}
export enum AvatarClassToken {
  Avatar,
  Group,
}
export enum NotificationClassToken {
  Notification,
  Title,
  Description,
  Closer,
}
export enum ProgressClassToken {
  Progress,
  Segment,
  Track,
  Stop,
}
export enum TooltipClassToken {
  Tooltip,
}
export enum PopoverClassToken {
  Popover,
  Title,
  Content,
}

export enum WaterfallClassToken {
  Waterfall,
  Sequential,
}

export enum BadgeClassToken {
  Badge,
  Tail,
}

export enum VisuallyHiddenClassToken {
  VisuallyHidden,
}
export enum PopconfirmClassToken {
  Popconfirm,
  Title,
  Description,
  Footer,
}
export enum HighlightClassToken {
  Highlight,
  Capture,
}
export enum QuoteClassToken {
  Quote,
}
export enum RichTextEditorClassToken {
  RichTextEditor,
  Loading,
  Editable,
}
export enum I18nButtonClassToken {
  I18nButton,
}
export enum TextareaClassToken {
  Textarea,
  Input,
}

/**
 * @description
 * class name collection
 * in musae, we use bem css name rule!!!
 * if u want change class name, must follow bem css
 * rule like: block__element--modifier
 */
export const CLASS_NAMES = {
  "date-picker": {
    [DatePickerClassToken.Picker]: "date-picker",
    [DatePickerClassToken.Input]: "date-picker__input",
  },
  "time-picker": {
    [TimePickerClassToken.Picker]: "time-picker",
    [TimePickerClassToken.Input]: "time-picker__input",
    [TimePickerClassToken.Panel]: "time-picker__panel",
    [TimePickerClassToken.PanelFooter]: "time-picker__panel-footer",
  },
  "date-range-picker": {
    [DateRangePickerClassToken.Picker]: "date-range-picker",
    [DateRangePickerClassToken.Input]: "date-range-picker__input",
    [DateRangePickerClassToken.Separator]: "date-range-picker__separator",
  },
  clock: {
    [ClockClassToken.Clock]: "clock",
    [ClockClassToken.Column]: "clock__column",
  },
  menu: {
    [MenuClassToken.Menu]: "menu",
    [MenuClassToken.MenuHorizontal]: "menu--horizontal",
    [MenuClassToken.Group]: "menu__group",
    [MenuClassToken.GroupHidden]: "menu__group--hidden",
    [MenuClassToken.Collapser]: "menu__collapser",
    [MenuClassToken.Item]: "menu__item",
  },
  tree: {
    [TreeClassToken.Tree]: "tree",
    [TreeClassToken.List]: "tree__list",
    [TreeClassToken.ListHidden]: "tree__list--hidden",
    [TreeClassToken.Holder]: "tree__holder",
    [TreeClassToken.Node]: "tree__node",
    [TreeClassToken.Title]: "tree__node-title",
    [TreeClassToken.Expander]: "tree__node-expander",
    [TreeClassToken.Checkbox]: "tree__node-checkbox",
  },
  tabs: {
    [TabsClassToken.Tabs]: "tabs",
    [TabsClassToken.TabsNavigation]: "tabs__navigation",
    [TabsClassToken.TabsNavigator]: "tabs__navigator",
    [TabsClassToken.TabList]: "tabs__tab-list",
    [TabsClassToken.Tab]: "tabs__item",
    [TabsClassToken.Indicator]: "tabs__indicator",
    [TabsClassToken.Panels]: "tabs__panels",
    [TabsClassToken.Panel]: "tabs__panel",
  },
  pagination: {
    [PaginationClassToken.Pagination]: "pagination",
    [PaginationClassToken.SizeSelector]: "pagination__size-selector",
  },
  switch: {
    [SwitchClassToken.Switch]: "switch",
    [SwitchClassToken.Slider]: "switch__slider",
    [SwitchClassToken.Supporting]: "switch__supporting",
    [SwitchClassToken.Leading]: "switch__supporting-leading",
    [SwitchClassToken.Trailing]: "switch__supporting-trailing",
  },
  rate: {
    [RateClassToken.Rate]: "rate",
    [RateClassToken.Star]: "rate__star",
    [RateClassToken.Half]: "rate__star-half",
    [RateClassToken.Full]: "rate__star-full",
  },

  breadcrumb: {
    [BreadcrumbClassToken.Breadcrumb]: "breadcrumb",
    [BreadcrumbClassToken.Item]: "breadcrumb__item",
    [BreadcrumbClassToken.Separator]: "breadcrumb__separator",
  },
  avatar: {
    [AvatarClassToken.Avatar]: "avatar",
    [AvatarClassToken.Group]: "avatar__group",
  },
  notification: {
    [NotificationClassToken.Notification]: "notification",
    [NotificationClassToken.Title]: "notification__title",
    [NotificationClassToken.Description]: "notification__description",
    [NotificationClassToken.Closer]: "notification__closer",
  },
  progress: {
    [ProgressClassToken.Progress]: "progress",
    [ProgressClassToken.Segment]: "progress__segment",
  },
  tooltip: {
    [TooltipClassToken.Tooltip]: "tooltip",
  },
  popover: {
    [PopoverClassToken.Popover]: "popover",
    [PopoverClassToken.Title]: "popover__title",
    [PopoverClassToken.Content]: "popover__content",
  },

  waterfall: {
    [WaterfallClassToken.Waterfall]: "waterfall",
    [WaterfallClassToken.Sequential]: "waterfall--sequential",
  },

  badge: {
    [BadgeClassToken.Badge]: "badge",
    [BadgeClassToken.Tail]: "badge__tail",
  },
  "visually-hidden": {
    [VisuallyHiddenClassToken.VisuallyHidden]: "visually-hidden",
  },
  popconfirm: {
    [PopconfirmClassToken.Popconfirm]: "popconfirm",
    [PopconfirmClassToken.Title]: "popconfirm__title",
    [PopconfirmClassToken.Description]: "popconfirm__description",
    [PopconfirmClassToken.Footer]: "popconfirm__footer",
  },
  highlight: {
    [HighlightClassToken.Highlight]: "highlight",
    [HighlightClassToken.Capture]: "highlight__capture",
  },
  "i18n-button": {
    [I18nButtonClassToken.I18nButton]: "i18n-button",
  },
  quote: {
    [QuoteClassToken.Quote]: "quote",
  },

  textarea: {
    [TextareaClassToken.Textarea]: "textarea",
    [TextareaClassToken.Input]: "textarea__input",
  },
};

/**
 * @description
 * add prefix
 */
export const addPrefix = (classNames: ClassNames, prefix: string) => {
  return Object.fromEntries(
    Object.entries(classNames).map(([token, _classNames]) => {
      return [
        token,
        Object.fromEntries(
          Object.entries(_classNames).map(([key, className]) => [
            key,
            withPrefix(className, prefix),
          ]),
        ),
      ];
    }),
  ) as ClassNames;
};

/**
 * @description
 * default class names
 */
export const DEFAULT_CLASS_NAMES = addPrefix(CLASS_NAMES, Token.Prefix);
