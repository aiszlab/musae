import Context from "./context";
import type { ConfigProps } from "./types";
import { useMessage } from "../message/hooks";
import React from "react";

const _Provider = Context.Provider;

const ConfigProvider = (props: ConfigProps) => {
  const [, messageHolder] = useMessage();

  return (
    <_Provider
      value={{
        messageHolder,
      }}
    >
      {props.children}
      {messageHolder}
    </_Provider>
  );
};

export default ConfigProvider;
