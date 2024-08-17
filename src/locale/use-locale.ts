import type { Locale } from "./types";
import { LocaleContext } from "./context";
import { useContext, useMemo } from "react";

export type LocaleComponentToken = keyof Locale;

type UsedLocale<C extends LocaleComponentToken> = Locale[C];

export const useLocale = <C extends LocaleComponentToken = LocaleComponentToken>(
  componentName: C,
): UsedLocale<C> => {
  const localeContextValue = useContext(LocaleContext);

  const locale = useMemo<Locale[C]>(() => {
    return localeContextValue[componentName];
  }, [componentName, localeContextValue]);

  return locale;
};
