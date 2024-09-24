import { type Locale } from "musae/types/locale";
import { createContext } from "react";
import locale from "./locales/en_US";

export const LocaleContext = createContext<Locale>(locale);
