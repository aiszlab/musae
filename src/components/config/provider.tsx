import React, { useMemo, useRef } from "react";
import Context from "./context";
import { Holder, type HolderRef } from "../notification";
import type { ConfigProps } from "./types";
import { CLASS_NAMES, DEFAULT_CLASS_NAMES, addPrefix } from "../../utils/class-name";
import { LocaleContext, DEFAULT_LOCALE } from "../../locale";
import deepmerge from "deepmerge";

const ConfigProvider = ({ children, prefix, locale = DEFAULT_LOCALE }: ConfigProps) => {
  const notifierRef = useRef<HolderRef>(null);

  const classNames = useMemo(() => {
    if (!prefix) return DEFAULT_CLASS_NAMES;
    return addPrefix(CLASS_NAMES, prefix);
  }, [prefix]);

  return (
    <Context.Provider
      value={{
        notifier: notifierRef,
        classNames,
      }}
    >
      <LocaleContext.Provider value={deepmerge(DEFAULT_LOCALE, locale)}>
        {children}
        <Holder ref={notifierRef} />
      </LocaleContext.Provider>
    </Context.Provider>
  );
};

export default ConfigProvider;
