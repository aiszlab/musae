import { ComponentToken } from "../../utils/component-token";
import { LocaleCode, type Locale } from "../types";

const en_US: Locale = {
  locale: LocaleCode.en_US,

  [ComponentToken.Dialog]: {
    confirm: "Confirm",
    cancel: "Cancel",
  },

  [ComponentToken.Empty]: {
    placeholder: "No Data",
  },

  [ComponentToken.Pagination]: {
    size: (size) => `${size} items/page`,
  },

  [ComponentToken.Popconfirm]: {
    confirm: "Confirm",
    cancel: "Cancel",
  },

  [ComponentToken.TimePicker]: {
    confirm: "Confirm",
    now: "Now",
  },

  [ComponentToken.Tour]: {
    finish: "Finish",
    prev: "Prev",
    next: "Next",
  },

  [ComponentToken.Transfer]: {
    unit: "items",
  },

  [ComponentToken.I18nButton]: {
    zh_CN: "Chinese",
    en_US: "English",
  },
};

export default en_US;
