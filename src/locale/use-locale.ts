import type { Locale, LocaleCode } from "../types/locale";
import { LocaleContext } from "./context";
import { useContext, useMemo } from "react";

export type LocaleComponentToken = Exclude<keyof Locale, "locale">;

type UsedLocale<C extends LocaleComponentToken> = [Locale[C], LocaleCode];

export const useLocale = <C extends LocaleComponentToken = LocaleComponentToken>(
  componentName: C,
): UsedLocale<C> => {
  const localeContextValue = useContext(LocaleContext);

  const locale = useMemo<Locale[C]>(() => {
    return localeContextValue[componentName];
  }, [componentName, localeContextValue]);

  return [locale, localeContextValue.locale];
};
