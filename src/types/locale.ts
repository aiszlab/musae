export type LocaleCode = "zh_CN" | "en_US";

export interface Locale {
  locale: LocaleCode;

  dialog: {
    confirm: string;
    cancel: string;
  };

  empty: {
    placeholder: string;
  };

  pagination: {
    size: string | ((size: number) => string);
  };

  popconfirm: {
    confirm: string;
    cancel: string;
  };

  "time-picker": {
    now: string;
    confirm: string;
  };

  tour: {
    prev: string;
    next: string;
    finish: string;
  };

  transfer: {
    unit: string;
  };

  "i18n-button": Record<LocaleCode, string>;

  drawer: {
    confirm: string;
  };

  upload: {
    upload: string;
  };

  form: {
    required: ((name: string) => string) | string;
  };

  guideline: {
    recommend: string;
    oppose: string;
  };
}
