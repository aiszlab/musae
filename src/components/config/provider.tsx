import React, { useMemo, useRef } from "react";
import Context from "./context";
import { Holder, MessageRef } from "../message";
import type { ConfigProps } from "./types";
import { CLASS_NAMES, DEFAULT_CLASS_NAMES, addPrefix } from "../../utils/class-name";

const ConfigProvider = (props: ConfigProps) => {
  const messageRef = useRef<MessageRef>(null);

  const classNames = useMemo(() => {
    if (!props.prefix) return DEFAULT_CLASS_NAMES;
    return addPrefix(CLASS_NAMES, props.prefix);
  }, [props.prefix]);

  return (
    <Context.Provider
      value={{
        messager: messageRef,
        classNames,
      }}
    >
      {props.children}
      <Holder ref={messageRef} />
    </Context.Provider>
  );
};

export default ConfigProvider;
