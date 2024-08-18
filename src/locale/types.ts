import type { ComponentToken } from "../utils/component-token";

export enum LocaleCode {
  zh_CN = "zh_CN",
  en_US = "en_US",
}

export interface Locale {
  locale: LocaleCode;

  [ComponentToken.Dialog]: {
    confirm: string;
    cancel: string;
  };

  [ComponentToken.Empty]: {
    placeholder: string;
  };

  [ComponentToken.Pagination]: {
    size: string | ((size: number) => string);
  };

  [ComponentToken.Popconfirm]: {
    confirm: string;
    cancel: string;
  };

  [ComponentToken.TimePicker]: {
    now: string;
    confirm: string;
  };

  [ComponentToken.Tour]: {
    prev: string;
    next: string;
    finish: string;
  };

  [ComponentToken.Transfer]: {
    unit: string;
  };

  [ComponentToken.I18nButton]: Record<LocaleCode, string>;
}
