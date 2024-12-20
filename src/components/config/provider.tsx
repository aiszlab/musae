import React, { useMemo, useRef } from "react";
import Context from "./context";
import { Holder, type HolderRef } from "../notification";
import type { ConfigProps } from "musae/types/config";
import { LocaleContext, DEFAULT_LOCALE } from "../../locale";
import { merge } from "@aiszlab/relax";

const ConfigProvider = ({ children, prefix = "musae", locale: _locale }: ConfigProps) => {
  const notifierRef = useRef<HolderRef>(null);

  const locale = useMemo(() => {
    return merge(DEFAULT_LOCALE, _locale ?? {});
  }, [_locale]);

  return (
    <Context.Provider
      value={{
        notifier: notifierRef,
        prefix,
      }}
    >
      <LocaleContext.Provider value={locale}>
        {children}
        <Holder ref={notifierRef} />
      </LocaleContext.Provider>
    </Context.Provider>
  );
};

export default ConfigProvider;
