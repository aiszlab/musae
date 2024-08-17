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
};

export default en_US;
