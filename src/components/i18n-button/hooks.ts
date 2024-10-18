import { useMemo, useState } from "react";
import { useMounted } from "@aiszlab/relax";
import { useLocale } from "../../locale";
import type { MenuItem } from "musae/types/menu";
import type { Locale, LocaleCode } from "musae/types/locale";

/**
 * @description
 * lazy load locales
 */
export const useLocales = () => {
  const [locale, localeCode] = useLocale("i18n-button");
  const [locales, setLocales] = useState<Map<LocaleCode, Locale>>(new Map());

  useMounted(async () => {
    setLocales(
      Object.values((await import("../../locale/locales").catch(() => null)) ?? {}).reduce(
        (prev, locale) => {
          return prev.set(locale.locale, locale);
        },
        new Map(),
      ),
    );
  });

  const selections = useMemo(() => {
    return Array.from(locales.keys()).map<MenuItem>((key) => {
      return {
        label: locale[key],
        key,
      };
    });
  }, [locale, locales]);

  return {
    locales,
    localeCode,
    selections,
  };
};
