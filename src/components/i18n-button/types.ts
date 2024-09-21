import type { Locale } from "musae/types/locale";
import type { ButtonProps } from "../button/types";

/**
 * @description
 * i18n button props
 */
export type I18nButtonProps = {
  /**
   * @description
   * change handler
   */
  onChange?: (locale?: Locale) => void;

  /**
   * @link {ButtonProps.variant}
   */
  variant?: ButtonProps["variant"];
};
