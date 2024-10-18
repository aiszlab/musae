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
export enum PickerClassToken {
  Picker,
  Focused,
  Invalid,
  Dropdown,
}
export enum InputClassToken {
  Input,
  Inputor,
  Focused,
  Invalid,
}
export enum SelectClassToken {
  Select,
}
export enum PopperClassToken {
  Dropdown,
  Arrow,
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
  Empty,
  Description,
}
export enum ButtonClassToken {
  Button,
  Prefix,
}
export enum DrawerClassToken {
  Drawer,
  Overlay,
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
  Overlay,
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
  MenuHorizontal,
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
export enum TourClassToken {
  Tour,
  Overlay,
  Spotlight,
  Title,
  Description,
  Footer,
}
export enum StepsClassToken {
  Steps,
  Item,
  Leading,
  Sign,
  Title,
  Description,
  Done,
  Doing,
  Todo,
}
export enum TimelineClassToken {
  Timeline,
  Item,
  Leading,
  Sign,
  Dot,
  Label,
  Description,
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
export enum LoadingClassToken {
  Loading,
  Spin,
  Spinning,
  Content,
}
export enum CollapseClassToken {
  Collapse,
  Item,
  ItemActive,
  Header,
  Panel,
  PanelActive,
  Content,
  Collapser,
}
export enum WaterfallClassToken {
  Waterfall,
  Sequential,
}
export enum TransferClassToken {
  Transfer,
  List,
  Header,
  Title,
  Body,
  Item,
  Operation,
}
export enum BadgeClassToken {
  Badge,
  Tail,
}
export enum SkeletonClassToken {
  Skeleton,
  Circular,
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
export enum ImageClassToken {
  Image,
}
export enum TableClassToken {
  Table,
  Header,
  Body,
}
export enum UploadClassToken {
  Upload,
  UploadedList,
  UploadedItem,
  UploadedPictureItem,
}
export enum FabClassToken {
  Fab,
}
export enum TextareaClassToken {
  Textarea,
  Input,
}
export enum GuidelineClassToken {
  Guideline,
  Figure,
  Caption,
  CaptionLabel,
}

/**
 * @description
 * class name collection
 * in musae, we use bem css name rule!!!
 * if u want change class name, must follow bem css
 * rule like: block__element--modifier
 */
export const CLASS_NAMES = {
  picker: {
    [PickerClassToken.Picker]: "picker",
    [PickerClassToken.Focused]: "picker--focused",
    [PickerClassToken.Invalid]: "picker--invalid",
    [PickerClassToken.Dropdown]: "picker__dropdown",
  },
  input: {
    [InputClassToken.Input]: "input",
    [InputClassToken.Inputor]: "input__inputor",
    [InputClassToken.Focused]: "input__inputor--focused",
    [InputClassToken.Invalid]: "input__inputor--invalid",
  },
  select: {
    [SelectClassToken.Select]: "select",
  },
  popper: {
    [PopperClassToken.Dropdown]: "dropdown",
    [PopperClassToken.Arrow]: "arrow",
  },
  form: {
    [FormClassToken.Item]: "form__item",
    [FormClassToken.Field]: "form__item-field",
    [FormClassToken.FieldSupporting]: "form__item-supporting",
    [FormClassToken.FieldError]: "form__item-field-error",
  },
  grid: {
    [GridClassToken.Row]: "grid__row",
    [GridClassToken.Col]: "grid__col",
  },
  radio: {
    [RadioClassToken.Radio]: "radio",
  },
  empty: {
    [EmptyClassToken.Empty]: "empty",
    [EmptyClassToken.Description]: "empty__description",
  },
  button: {
    [ButtonClassToken.Button]: "button",
    [ButtonClassToken.Prefix]: "button__prefix",
  },
  drawer: {
    [DrawerClassToken.Drawer]: "drawer",
    [DrawerClassToken.Overlay]: "drawer__overlay",
    [DrawerClassToken.Panel]: "drawer__panel",
    [DrawerClassToken.Header]: "drawer__header",
    [DrawerClassToken.Body]: "drawer__body",
  },
  divider: {
    [DividerClassToken.Divider]: "divider",
    [DividerClassToken.Label]: "divider__label",
  },
  tag: {
    [TagClassToken.Tag]: "tag",
  },
  cascader: {
    [CascaderClassToken.Cascader]: "cascader",
    [CascaderClassToken.Options]: "cascader__options",
  },
  dialog: {
    [DialogClassToken.Dialog]: "dialog",
    [DialogClassToken.Overlay]: "dialog__overlay",
    [DialogClassToken.Panel]: "dialog__panel",
    [DialogClassToken.Header]: "dialog__header",
    [DialogClassToken.Body]: "dialog__body",
    [DialogClassToken.Footer]: "dialog__footer",
  },
  calendar: {
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
  icon: {
    [IconClassToken.Icon]: "icon",
  },
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
  checkbox: {
    [CheckboxClassToken.Checkbox]: "checkbox",
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
  tour: {
    [TourClassToken.Tour]: "tour",
    [TourClassToken.Overlay]: "rate__overlay",
    [TourClassToken.Spotlight]: "rate__spotlight",
    [TourClassToken.Title]: "rate__title",
    [TourClassToken.Description]: "rate__description",
    [TourClassToken.Footer]: "rate__footer",
  },
  steps: {
    [StepsClassToken.Steps]: "steps",
    [StepsClassToken.Item]: "steps__item",
    [StepsClassToken.Done]: "steps__item--done",
    [StepsClassToken.Doing]: "steps__item--doing",
    [StepsClassToken.Todo]: "steps__item--todo",
    [StepsClassToken.Leading]: "steps__item-leading",
    [StepsClassToken.Sign]: "steps__item-leading-sign",
    [StepsClassToken.Title]: "steps__item-title",
    [StepsClassToken.Description]: "steps__item-description",
  },
  timeline: {
    [TimelineClassToken.Timeline]: "timeline",
    [TimelineClassToken.Item]: "timeline__item",
    [TimelineClassToken.Leading]: "timeline__item-leading",
    [TimelineClassToken.Sign]: "timeline__item-leading-sign",
    [TimelineClassToken.Dot]: "timeline__item-leading-dot",
    [TimelineClassToken.Label]: "timeline__item-label",
    [TimelineClassToken.Description]: "timeline__item-description",
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
  loading: {
    [LoadingClassToken.Loading]: "loading",
    [LoadingClassToken.Spin]: "loading__spin",
    [LoadingClassToken.Spinning]: "loading__spin-spinning",
    [LoadingClassToken.Content]: "loading__content",
  },
  collapse: {
    [CollapseClassToken.Collapse]: "collapse",
    [CollapseClassToken.Item]: "collapse__item",
    [CollapseClassToken.ItemActive]: "collapse__item--active",
    [CollapseClassToken.Header]: "collapse__item-header",
    [CollapseClassToken.Collapser]: "collapse__header-collapser",
    [CollapseClassToken.Panel]: "collapse__item-panel",
    [CollapseClassToken.PanelActive]: "collapse__item-panel--active",
    [CollapseClassToken.Content]: "collapse__item-content",
  },
  waterfall: {
    [WaterfallClassToken.Waterfall]: "waterfall",
    [WaterfallClassToken.Sequential]: "waterfall--sequential",
  },
  transfer: {
    [TransferClassToken.Transfer]: "transfer",
    [TransferClassToken.Operation]: "transfer__operation",
    [TransferClassToken.List]: "transfer__list",
    [TransferClassToken.Title]: "transfer__list-title",
    [TransferClassToken.Item]: "transfer__list-item",
    [TransferClassToken.Header]: "transfer__list-header",
    [TransferClassToken.Body]: "transfer__list-body",
  },
  badge: {
    [BadgeClassToken.Badge]: "badge",
    [BadgeClassToken.Tail]: "badge__tail",
  },
  skeleton: {
    [SkeletonClassToken.Skeleton]: "skeleton",
    [SkeletonClassToken.Circular]: "skeleton--circular",
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
  "rich-text-editor": {
    [RichTextEditorClassToken.RichTextEditor]: "rich-text-editor",
    [RichTextEditorClassToken.Loading]: "rich-text-editor--loading",
    [RichTextEditorClassToken.Editable]: "rich-text-editor__editable",
  },
  upload: {
    [UploadClassToken.Upload]: "upload",
    [UploadClassToken.UploadedList]: "upload__uploaded-list",
    [UploadClassToken.UploadedItem]: "upload__uploaded-item",
    [UploadClassToken.UploadedPictureItem]: "upload__uploaded-item--picture",
  },
  image: {
    [ImageClassToken.Image]: "image",
  },
  table: {
    [TableClassToken.Table]: "table",
    [TableClassToken.Header]: "table__header",
    [TableClassToken.Body]: "table__body",
  },
  fab: {
    [FabClassToken.Fab]: "fab",
  },
  textarea: {
    [TextareaClassToken.Textarea]: "textarea",
    [TextareaClassToken.Input]: "textarea__input",
  },
  guideline: {
    [GuidelineClassToken.Guideline]: "guideline",
    [GuidelineClassToken.Figure]: "guideline__figure",
    [GuidelineClassToken.CaptionLabel]: "guideline__caption-label",
    [GuidelineClassToken.Caption]: "guideline__caption",
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
