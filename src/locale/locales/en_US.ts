import { ComponentToken } from "../../utils/component-token";
import { type Locale } from "musae/types/locale";

const en_US: Locale = {
  locale: "en_US",

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

  [ComponentToken.Drawer]: {
    confirm: "Confirm",
  },

  [ComponentToken.Upload]: {
    upload: "Upload",
  },

  [ComponentToken.Form]: {
    required: (name) => `${name} is required`,
  },

  [ComponentToken.Guideline]: {
    recommend: "Do",
    oppose: "Don’t",
  },
};

export default en_US;
