import type { Locale } from "musae/types/locale";
import type { ButtonProps } from "./button";
import { ComponentProps } from "musae/types/element";

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
