import React, { useMemo } from "react";
import Context from "./context";
import { useMessage } from "../message/hooks";
import type { ConfigProps } from "./types";
import { CLASS_NAMES, DEFAULT_CLASS_NAMES, addPrefix } from "../../utils/class-name";

const ConfigProvider = (props: ConfigProps) => {
  const [, messageHolder] = useMessage();

  const classNames = useMemo(() => {
    if (!props.prefix) return DEFAULT_CLASS_NAMES;
    return addPrefix(CLASS_NAMES, props.prefix);
  }, [props.prefix]);

  return (
    <Context.Provider
      value={{
        messageHolder,
        classNames,
      }}
    >
      {props.children}
      {messageHolder}
    </Context.Provider>
  );
};

export default ConfigProvider;
