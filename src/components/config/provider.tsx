import React, { useMemo, useRef } from "react";
import Context from "./context";
import { Holder, type HolderRef } from "../notification";
import type { ConfigProps } from "./types";
import { CLASS_NAMES, DEFAULT_CLASS_NAMES, addPrefix } from "../../utils/class-name";

const ConfigProvider = (props: ConfigProps) => {
  const notifierRef = useRef<HolderRef>(null);

  const classNames = useMemo(() => {
    if (!props.prefix) return DEFAULT_CLASS_NAMES;
    return addPrefix(CLASS_NAMES, props.prefix);
  }, [props.prefix]);

  return (
    <Context.Provider
      value={{
        notifier: notifierRef,
        classNames,
      }}
    >
      {props.children}
      <Holder ref={notifierRef} />
    </Context.Provider>
  );
};

export default ConfigProvider;
