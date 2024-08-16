import type { Locale } from "./types";
import { LocaleContext } from "./context";
import { useContext, useMemo } from "react";

export type LocaleComponentToken = Exclude<keyof Locale, "locale">;

type UsedLocale<C extends LocaleComponentToken> = readonly [Locale[C], string];

export const useLocale = <C extends LocaleComponentToken = LocaleComponentToken>(
  componentName: LocaleComponentToken,
): UsedLocale<C> => {
  const localeContextValue = useContext(LocaleContext);

  const locale = useMemo<Locale[C]>(() => {
    return localeContextValue[componentName];
  }, [componentName, localeContextValue]);

  return [locale, localeContextValue.locale];
};
