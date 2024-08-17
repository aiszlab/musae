import type { ComponentToken } from "../utils/component-token";

export interface Locale {
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
}
