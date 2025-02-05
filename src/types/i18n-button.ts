import type { Locale } from "./locale";
import type { ButtonProps } from "./button";
import type { ComponentProps } from "./element";

/**
 * @description
 * i18n button props
 */
export type I18nButtonProps = ComponentProps &
  Pick<ButtonProps, "variant" | "size"> & {
    /**
     * @description
     * change handler
     */
    onChange?: (locale?: Locale) => void;
  };
