import { type Locale } from "./types";
import { createContext } from "react";
import locale from "./locales/en_US";

export const LocaleContext = createContext<Locale>(locale);
