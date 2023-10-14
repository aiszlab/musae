import Context from "./context";
import type { ConfigProps } from "./types";
import { useMessage } from "../message/hooks";
import React from "react";
import { PREFIX_MUSAE } from "../../utils/class-name";

const _Provider = Context.Provider;

const ConfigProvider = (props: ConfigProps) => {
  const [, messageHolder] = useMessage();

  return (
    <_Provider
      value={{
        messageHolder,
        prefix: props.prefix || PREFIX_MUSAE,
      }}
    >
      {props.children}
      {messageHolder}
    </_Provider>
  );
};

export default ConfigProvider;
