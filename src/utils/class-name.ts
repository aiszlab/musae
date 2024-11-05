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

export enum AvatarClassToken {
  Avatar,
  Group,
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

/**
 * @description
 * class name collection
 * in musae, we use bem css name rule!!!
 * if u want change class name, must follow bem css
 * rule like: block__element--modifier
 */
export const CLASS_NAMES = {
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

  avatar: {
    [AvatarClassToken.Avatar]: "avatar",
    [AvatarClassToken.Group]: "avatar__group",
  },

  progress: {
    [ProgressClassToken.Progress]: "progress",
    [ProgressClassToken.Segment]: "progress__segment",
  },
  tooltip: {
    [TooltipClassToken.Tooltip]: "tooltip",
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

  quote: {
    [QuoteClassToken.Quote]: "quote",
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
