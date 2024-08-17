import type { ComponentToken } from "../utils/component-token";

export interface Locale {
  [ComponentToken.Dialog]: {
    confirm: string;
    cancel: string;
  };

  [ComponentToken.Empty]: {
    placeholder: string;
  };
}
