import { ComponentToken } from "../../utils/component-token";
import type { Locale } from "../types";

const en_US: Locale = {
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
};

export default en_US;
