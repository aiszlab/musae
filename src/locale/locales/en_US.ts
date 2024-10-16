import { type Locale } from "musae/types/locale";

const en_US: Locale = {
  locale: "en_US",

  dialog: {
    confirm: "Confirm",
    cancel: "Cancel",
  },

  empty: {
    placeholder: "No Data",
  },

  pagination: {
    size: (size) => `${size} items/page`,
  },

  popconfirm: {
    confirm: "Confirm",
    cancel: "Cancel",
  },

  "time-picker": {
    confirm: "Confirm",
    now: "Now",
  },

  tour: {
    finish: "Finish",
    prev: "Prev",
    next: "Next",
  },

  transfer: {
    unit: "items",
  },

  "i18n-button": {
    zh_CN: "Chinese",
    en_US: "English",
  },

  drawer: {
    confirm: "Confirm",
  },

  upload: {
    upload: "Upload",
  },

  form: {
    required: (name) => `${name} is required`,
  },

  guideline: {
    recommend: "Do",
    oppose: "Don’t",
  },
};

export default en_US;
